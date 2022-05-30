import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const MomentItem = ({
	name,
	image,
	address,
	date,
	entry,
	latitude,
	longitude,
	onSelect,
}) => {
	return (
		<TouchableOpacity onPress={() => onSelect()} style={styles.container}>
			<ImageBackground
				source={{ uri: image }}
				style={styles.image}
				resizeMode='cover'
			>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.name}>{date}</Text>
					<Text style={styles.name}>{date}</Text>
					<Text style={styles.name}>{entry}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default MomentItem;
