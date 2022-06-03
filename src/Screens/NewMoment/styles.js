import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.terciartyColor,
	},
	inputContainer: {
		padding: 10,
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		marginTop: -50,
		elevation: 5,
		paddingBottom: 25,
	},
	inputName: {
		fontSize: 22,
		paddingVertical: 10,
		marginHorizontal: 20,
		borderBottomColor: COLORS.terciartyColor,
		borderBottomWidth: 1,
		color: COLORS.primaryColor,
		marginBottom: 5,
	},
	inputEntry: {
		fontSize: 15,
		marginTop: 5,
		marginHorizontal: 20,
		color: COLORS.primaryColor,
		textAlignVertical: 'top',
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
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 50,
		backgroundColor: COLORS.primaryColor,
	},
	textButtonSave: {
		color: 'white',
		fontWeight: 'bold',
	},
	topBarTouchable: {
		marginTop: 60,
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
		backgroundColor: COLORS.terciartyColor,
		borderRadius: 100,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 10,
	},
});
