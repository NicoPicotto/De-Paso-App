import Moment from '../../Models';
import { MOMENTS } from '../types';

const { ADD_MOMENT } = MOMENTS;

const initialState = {
	moments: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOMENT:
			const newMoment = new Moment(Date.now(), action.moment.name, action.moment.image);
			return {
				...state,
				moments: state.moments.concat(newMoment),
			};
		default:
			return state;
	}
};
