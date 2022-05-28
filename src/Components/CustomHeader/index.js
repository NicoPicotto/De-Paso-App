import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const CustomHeader = ({ title, buttonTitle, onPressProp }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => onPressProp()}
			>
				<Text style={styles.textButton}>{buttonTitle}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CustomHeader;
