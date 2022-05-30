import React from 'react';
import MainStack from './src/Navigation/MainStack';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

init()
	.then(() => {
		console.log('DB Inicializada rey, groso de la vida');
	})
	.catch((err) => {
		console.log('Andá, te merecés lo que te hace aquella sabés', err);
	});

const App = () => {
	return (
		<Provider store={store}>
			<MainStack />
		</Provider>
	);
};

export default App;
