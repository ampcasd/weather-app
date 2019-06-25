import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateApi, DecreaseLimit } from '../actions/api.action';

export class ApiStateModel {
  key: string;
  callLimit: number;
}

@State<ApiStateModel>({
  name: 'api',
  defaults: {
    key: '288ee2063fbbbd2d569ad4cfb4f7cf38',
    callLimit: 20
  }
})
export class ApiState {

  @Selector()
  static getApiKey(state: ApiStateModel) {
    return state.key;
  }

  @Action(UpdateApi)
  add({ getState, patchState }: StateContext<ApiStateModel>, key: string) {

    const state = getState();

    patchState({
      key,
      callLimit: state.callLimit
    });
  }

  @Action(DecreaseLimit)
  update({ getState, patchState }: StateContext<ApiStateModel>, tap: {}) {

    const state = getState();

    patchState({
      key: state.key,
      callLimit: state.callLimit - 1
    });
  }
}
