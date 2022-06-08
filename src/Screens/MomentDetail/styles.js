import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.terciaryColor,
	},
	textContainer: {
		paddingHorizontal: 10,
		paddingTop: 7,
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		marginTop: -50,
		elevation: 5,
	},
	nameContainer: {
		paddingVertical: 10,
		marginHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: COLORS.secondaryColor,
		borderBottomWidth: 1,
	},
	name: {
		fontSize: 22,
		fontFamily: 'openBold',
		color: COLORS.primaryColor,
	},
	dateContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: 5,
	},
	dataContainer: {
		padding: 10,
		borderBottomColor: COLORS.secondaryColor,
		borderBottomWidth: 1,
	},
	date: {
		fontSize: 14,
		color: COLORS.secondaryColor,
		marginLeft: 5,
		fontFamily: 'openRegular',
	},
	entryContainer: {
		margin: 10,
	},
	entry: {
		fontSize: 16,
		color: COLORS.secondaryColor,
		textAlign: 'center',
		fontFamily: 'openRegular',
	},

	imageButton: {
		height: '60%',
		paddingTop: 30,
		overflow: 'hidden',
		backgroundColor: COLORS.terciaryColor,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	buttonBack: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 50,
		backgroundColor: 'red',
	},
	textButtonBack: {
		color: 'white',
		fontWeight: 'bold',
	},
	topBarTouchable: {
		height: '10%',
		marginTop: 30,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 10,
		opacity: 0.8,
		elevation: 5,
	},
	touchableLayout: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.5,
	},
	imageBackground: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	},
	buttonIconsContainer: {
		backgroundColor: COLORS.terciaryColor,
		borderRadius: 100,
		width: 40,
		height: 40,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 10,
	},
});
