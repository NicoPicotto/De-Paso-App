import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.terciaryColor,
	},
	flatList: {
		paddingRight: 20,
		elevation: 5,
		borderBottomLeftRadius : 40,
		borderBottomRightRadius : 40,
		backgroundColor: COLORS.terciaryColor,
		height: "80%",
		paddingBottom: 20,
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
		backgroundColor: COLORS.terciaryColor,
		borderRadius: 20,
		alignItems: 'center',
		width: '25%',
		elevation: 3,
		height: 40,
	},
	textButton: {
		fontSize: 15,
		color: COLORS.primaryColor,
		fontFamily: 'openRegular',
	},
	searchBarContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		backgroundColor: COLORS.primaryColor,
		height: '15%',
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		paddingBottom: 20,
		elevation: 3,
	},
	footerContainer: {
		height: '10%',
		backgroundColor: COLORS.primaryColor,
		elevation: 3,
		marginTop: "-15%",
		zIndex: -1,
	},
});
