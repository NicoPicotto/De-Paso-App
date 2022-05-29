import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

export const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: COLORS.primaryColor,
	},
	buttonContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: COLORS.primaryColor,
		borderRadius: 20,
	},
	textButton: {
		fontSize: 15,
		color: 'white',
	},
});
