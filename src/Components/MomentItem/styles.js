import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'hidden',
		marginHorizontal: 15,
		marginVertical: 30,
		borderRadius: 20,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		width: Dimensions.get('window').width / 100 * 85,
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
		fontFamily: "openBold",
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		lineHeight: 25,
		textShadowColor: '#2B2B2B',
		marginBottom: 5,
	},
	date: {
		color: 'white',
		fontSize: 14,
		lineHeight: 18,
		marginBottom: 5,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
		textShadowColor: '#2B2B2B',
		fontFamily: "openRegular",
	},
});
