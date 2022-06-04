import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.terciartyColor,
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
		paddingVertical: 5,
		marginHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: COLORS.secondaryColor,
		borderBottomWidth: 1,
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
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
		color: COLORS.primaryColor,
		marginLeft: 5,
	},
	entryContainer: {
		margin: 10,
	},
	entry: {
		fontSize: 16,
		color: COLORS.primaryColor,
		textAlign: 'center',
	},

	imageButton: {
		height: '60%',
		overflow: 'hidden',
		backgroundColor: COLORS.terciartyColor,
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
	buttonSave: {
		backgroundColor: COLORS.secondaryColor,
		borderRadius: 100,
		paddingHorizontal: 10,
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 10,
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
	buttonBackContainer: {
		backgroundColor: COLORS.secondaryColor,
		borderRadius: 100,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 10,
	},
	buttonDeleteContainer: {
		backgroundColor: 'darkred',
		borderRadius: 100,
		paddingHorizontal: 12,
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 10,
	},
});
