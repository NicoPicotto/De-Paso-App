import MainStack from './src/Navigation/MainStack';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
	return (
		<Provider store={store}>
			<MainStack />
		</Provider>
	);
};

export default App;
