import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Movie,
  MovieFavorites,
} from '../models';
import {MovieRepository} from '../repositories';

export class MovieMovieFavoritesController {
  constructor(
    @repository(MovieRepository) protected movieRepository: MovieRepository,
  ) { }

  @get('/movies/{id}/movie-favorites', {
    responses: {
      '200': {
        description: 'Array of Movie has many MovieFavorites',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MovieFavorites)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<MovieFavorites>,
  ): Promise<MovieFavorites[]> {
    return this.movieRepository.movieFavorites(id).find(filter);
  }

  @post('/movies/{id}/movie-favorites', {
    responses: {
      '200': {
        description: 'Movie model instance',
        content: {'application/json': {schema: getModelSchemaRef(MovieFavorites)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Movie.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MovieFavorites, {
            title: 'NewMovieFavoritesInMovie',
            exclude: ['id'],
            optional: ['movieId']
          }),
        },
      },
    }) movieFavorites: Omit<MovieFavorites, 'id'>,
  ): Promise<MovieFavorites> {
    return this.movieRepository.movieFavorites(id).create(movieFavorites);
  }

  @patch('/movies/{id}/movie-favorites', {
    responses: {
      '200': {
        description: 'Movie.MovieFavorites PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MovieFavorites, {partial: true}),
        },
      },
    })
    movieFavorites: Partial<MovieFavorites>,
    @param.query.object('where', getWhereSchemaFor(MovieFavorites)) where?: Where<MovieFavorites>,
  ): Promise<Count> {
    return this.movieRepository.movieFavorites(id).patch(movieFavorites, where);
  }

  @del('/movies/{id}/movie-favorites', {
    responses: {
      '200': {
        description: 'Movie.MovieFavorites DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MovieFavorites)) where?: Where<MovieFavorites>,
  ): Promise<Count> {
    return this.movieRepository.movieFavorites(id).delete(where);
  }
}
