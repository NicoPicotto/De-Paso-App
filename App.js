import React from 'react';
import MainStack from './src/Navigation/MainStack';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	OpenSans_400Regular,
	OpenSans_700Bold,
	OpenSans_400Regular_Italic,
} from '@expo-google-fonts/open-sans';

init()
	.then(() => {
		console.log('DB Inicializada rey, groso de la vida');
	})
	.catch((err) => {
		console.log('Andá, te merecés lo que te hace aquella sabés', err);
	});

const App = () => {
	let [fontsLoaded] = useFonts({
		openRegular: OpenSans_400Regular,
		openBold: OpenSans_700Bold,
		openItalic: OpenSans_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<Provider store={store}>
			<MainStack />
		</Provider>
	);
};

export default App;
