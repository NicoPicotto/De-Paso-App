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
		marginTop: -20,
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
		height: '50%',
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
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
		color: "white",
		fontWeight: "bold",
	},
	buttonSave: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 50,
		backgroundColor: 'green',
	},
	textButtonSave: {
		color: "white",
		fontWeight: "bold",
	},
});
