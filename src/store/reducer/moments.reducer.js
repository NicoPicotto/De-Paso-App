import Moment from '../../Models';
import { MOMENTS } from '../types';

const { ADD_MOMENT } = MOMENTS;

const initialState = {
	moments: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOMENT:
			const newMoment = new Moment(
				action.moment.id,
				action.moment.name,
				action.moment.image,
				action.moment.entry,
				action.moment.date,
				action.moment.address,
				action.moment.latitude,
				action.moment.longitude
			);
			return {
				...state,
				moments: state.moments.concat(newMoment),
			};
		default:
			return state;
	}
};
