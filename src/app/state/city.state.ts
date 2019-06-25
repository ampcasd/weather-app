import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateCities } from '../actions/city.action';
import { City, CityChange } from '../components/city-selector/city.interface';

export class CityStateModel {
  update: CityChange;
  selectedCities: City[];
}

@State<CityStateModel>({
  name: 'cities',
  defaults: {
    update: null,
    selectedCities: []
  }
})
export class CityState {

  @Action(UpdateCities)
  add({ getState, patchState }: StateContext<CityStateModel>, { update }: UpdateCities) {
    let selectedCities = getState().selectedCities;

    update.change === 'add' ?
      selectedCities.push(update.city) :
      selectedCities = selectedCities.filter(city => city.id !== update.city.id);

    patchState({
      update,
      selectedCities
    });
  }
}
