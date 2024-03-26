import { environment } from '../../environments/environment'

export class CommonBehavior {
  env: typeof environment

  constructor() {
    this.env = environment
  }
}
