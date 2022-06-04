import Moment from '../../Models';
import { MOMENTS } from '../types';

const { ADD_MOMENT, LOAD_MOMENT, DELETE_MOMENT } = MOMENTS;

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
			);
			return {
				...state,
				moments: state.moments.concat(newMoment),
			};
		case LOAD_MOMENT:
			return {
				...state,
				moments: action.moment.map(
					(item) =>
						new Moment(
							item.id,
							item.name,
							item.image,
							item.entry,
							item.date,
							item.address,
						)
				),
			};
		case DELETE_MOMENT:
			const deleteMoment = [...state.moments].filter(
				(item) => item.name !== action.name
			);
			return {
				...state,
				moments: deleteMoment,
			};
		default:
			return state;
	}
};
