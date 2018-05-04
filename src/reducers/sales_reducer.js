import _ from 'lodash';
import { FETCH_SALES, FETCH_SALE } from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_SALE:
    const sale = action.payload.data;
    return { ...state, [sale.id]: sale };

    case FETCH_SALES:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
