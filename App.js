import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import MainStack from './src/Navigation/MainStack';
import { styles } from './styles';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<MainStack />
		</SafeAreaView>
	);
};

export default App;
