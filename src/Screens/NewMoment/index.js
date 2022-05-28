import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import CustomHeader from '../../Components/CustomHeader';

const NewMoment = ({ navigation }) => {
	const goToList = () => {
		navigation.navigate('MomentList');
	};

	return (
		<View style={styles.container}>
			<CustomHeader
				title='Nueva entrada'
				buttonTitle='Volver'
				onPressProp={goToList}
			/>
			<Text>NewMoment</Text>
		</View>
	);
};

export default NewMoment;
