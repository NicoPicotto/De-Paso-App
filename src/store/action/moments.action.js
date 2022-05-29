import { MOMENTS } from '../types';

const { ADD_MOMENT } = MOMENTS;

export default {
	addMoment: (name, image) => {
		return {
			type: ADD_MOMENT,
			moment: {
				name,
				image,
			},
		};
	},
};
