import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const MomentItem = ({ name, image, address, onSelect }) => {
	return (
		<TouchableOpacity onPress={() => onSelect()} style={styles.container}>
			<ImageBackground
				source={{ uri: image }}
				style={styles.image}
				resizeMode='cover'
			>
				<View style={styles.details}>
					<Text style={styles.name}>{name}</Text>
                    <Text style={styles.name}>{address}</Text>
					{/* <Text style={styles.date}><Icon name="event" size={12} color="white" /> {date}</Text>
            <Text style={styles.date}><Icon name="place" size={12} color="white" /> {address}</Text> */}
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default MomentItem;
