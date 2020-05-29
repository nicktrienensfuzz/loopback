import {bind} from '@loopback/core';
import {
  asModelApiBuilder,
  ModelApiBuilder,
  ModelApiConfig,
} from '@loopback/model-api-builder';
import {ApplicationWithRepositories} from '@loopback/repository';
import {Model} from '@loopback/rest';
//
// @bind(asModelApiBuilder)
// export class SampleApiBuilder implements ModelApiBuilder {
//   readonly pattern: string = 'Sample'; // put the name of your builder here
//
//   build(
//     application: ApplicationWithRepositories,
//     modelClass: typeof Model & {prototype: Model},
//     cfg: ModelApiConfig,
//   ): Promise<void> {
//     return
//     // here you can define how the repository and controller classes are built
//   }
// }
