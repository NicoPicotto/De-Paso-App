import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 60,
		paddingBottom: 20,
		backgroundColor: COLORS.terciaryColor,
	},
	flatList: {
		marginHorizontal: 10,
		elevation: 5,
	},
	inputSearch: {
		backgroundColor: 'white',
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 15,
		width: '70%',
		fontFamily: 'openRegular',
		fontSize: 15,
		elevation: 3,
		height: 40,
		color: COLORS.secondaryColor,
	},
	buttonContainer: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.primaryColor,
		borderRadius: 20,
		alignItems: 'center',
		width: '25%',
		elevation: 3,
		height: 40,
	},
	textButton: {
		fontSize: 15,
		color: 'white',
		fontFamily: 'openRegular',
	},
	searchBarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		marginTop: 20,
	},
});
