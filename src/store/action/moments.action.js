import { MOMENTS } from '../types';
import * as FileSystem from 'expo-file-system';
import { insertMoments, fetchMoments, deleteMoments } from '../../db';

const {ADD_MOMENT, LOAD_MOMENT, DELETE_MOMENT} = MOMENTS;

export default {
	addMoment: (name, image, entry, date, address, latitude, longitude) => {
		return async (dispatch) => {
			const fileName = image.split('/').pop();
			const Path = FileSystem.documentDirectory + fileName;

			try {
				FileSystem.moveAsync({
					from: image,
					to: Path,
				});
				const result = await insertMoments(
					name,
					Path,
					entry,
					date,
					address,
					latitude,
					longitude
				);
				dispatch({
					type: ADD_MOMENT,
					moment: {
						id: result.insertId,
						name,
						image: Path,
						entry,
						date,
						address,
						latitude,
						longitude,
					},
				});
			} catch (err) {
				console.log(err);
			}
		};
	},

	loadMoment: () => {
		return async (dispatch) => {
			try {
				const result = await fetchMoments();
				dispatch({
					type: LOAD_MOMENT,
					moment: result,
				});
			} catch (err) {
				console.log(err);
			}
		};
	},

	deleteMoment: (name) => {
		return async (dispatch) => {
			try {
				deleteMoments(name);
				dispatch({
					type: DELETE_MOMENT,
					name,
				});
			} catch (error) {
				console.log(err);
			}
		};
	},
};
