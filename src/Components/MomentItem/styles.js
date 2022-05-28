import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		overflow: 'hidden',
		marginHorizontal: 20,
		marginVertical: 10,
		height: 250,
		borderRadius: 20,
		alignItems: 'center',
		elevation: 8,
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
		fontSize: 22,
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
