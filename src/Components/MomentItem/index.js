import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../Constants';
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
					<Text style={styles.date}>
						<MaterialIcons name='location-on' size={15} color='white' />{' '}
						{address}
					</Text>
					<Text style={styles.date}>
						<MaterialIcons name='date-range' size={15} color='white' /> {date}
					</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default MomentItem;
