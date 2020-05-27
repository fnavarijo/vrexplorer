import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'counter',
  stateFactory: true,
  namespaced: true,
})
export default class Counter extends VuexModule {
  wheels = 10;

  @Mutation
  incrWheels(extra: number): void {
    this.wheels += extra;
  }

  get axles(): number {
    return this.wheels / 2;
  }
}
