import {Request, RestBindings, get, ResponseObject, post} from '@loopback/rest';
import {inject} from '@loopback/context';
import _ from 'lodash';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          incomingRequest: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping', {
    responses: {
      '200': PING_RESPONSE,
    },
  })
  ping(): object {
    console.log(_.pick(this.req, ['query', 'headers', 'body']));
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      incomingRequest: _.pick(this.req, ['query', 'headers', 'body'])
    };
  }

  // Map to `GET /ping`
  @post('/echo', {
    responses: {
      '200': PING_RESPONSE,
    },
  })
  echo(): object {
    console.log(_.pick(this.req, ['query', 'headers', 'body']));
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      incomingRequest: _.pick(this.req, ['query', 'headers', 'body'])
    };
  }
}
