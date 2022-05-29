import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		overflow: 'hidden',
		marginHorizontal: 10,
		marginTop: 20,
		height: '90%',
		borderRadius: 20,
		alignItems: 'center',
		elevation: 4,
		width: 350,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: null,
	},
	details: {
		flex: 1,
		padding: 15,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
	},
	name: {
		color: 'white',
		fontSize: 15,
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		lineHeight: 25,
		textShadowColor: '#2B2B2B',
	},
	date: {
		color: 'white',
		fontSize: 14,
		lineHeight: 18,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
		textShadowColor: '#2B2B2B',
	},
});
