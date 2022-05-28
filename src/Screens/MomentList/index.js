import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import CustomHeader from '../../Components/CustomHeader';

const MomentList = ({ navigation }) => {
	const goToNewScreen = () => {
		navigation.navigate('NewMoment');
	};

	return (
		<View style={styles.container}>
			<CustomHeader
				title='Tus momentos'
				buttonTitle='+ Nuevo'
				onPressProp={goToNewScreen}
			/>
			<Text>MomentList</Text>
		</View>
	);
};

export default MomentList;
