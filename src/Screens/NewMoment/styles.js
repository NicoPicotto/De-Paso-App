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
		fontSize: 20,
		paddingVertical: 10,
		marginHorizontal: 20,
		borderBottomColor: COLORS.terciartyColor,
		borderBottomWidth: 1,
		color: COLORS.primaryColor,
		marginBottom: 5,
		textAlign: 'center',
		fontFamily: "openRegular",
	},
	inputEntry: {
		fontSize: 16,
		marginTop: 5,
		marginHorizontal: 20,
		color: COLORS.primaryColor,
		textAlignVertical: 'top',
		fontFamily: "openRegular",
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
	buttonSave: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 50,
		backgroundColor: COLORS.primaryColor,
	},
	textButtonSave: {
		color: 'white',
		fontFamily: "openBold",
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
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		height: '35%',
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 25,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
		justifyContent: 'space-between',
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: COLORS.secondaryColor,
	},
	buttonNew: {
		backgroundColor: COLORS.primaryColor,
	},
	textModal: {
		textAlign: 'center',
		fontSize: 15,
		color: COLORS.primaryColor,
		fontFamily: "openRegular",
	},
	modalInput: {
		borderBottomColor: COLORS.secondaryColor,
		borderBottomWidth: 1,
		padding: 5,
		fontFamily: "openItalic",
		fontSize: 13,
		color: COLORS.secondaryColor,
	},
	textStyle: {
		color: 'white',
		fontFamily: "openBold",
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	pressableContainer: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
