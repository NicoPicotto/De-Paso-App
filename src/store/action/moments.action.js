import { MOMENTS } from '../types';
import * as FileSystem from 'expo-file-system';
import { insertMoments } from '../../db';

const { ADD_MOMENT } = MOMENTS;

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
};
