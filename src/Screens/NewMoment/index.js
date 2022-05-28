import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';

const NewMoment = ({ navigation }) => {
	const [image, setImage] = useState(null);

	//Función para seleccionar imagen de la galería
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	const goToList = () => {
		navigation.navigate('MomentList');
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={pickImage} style={styles.imageButton}>
				{image ? (
					<Image source={{ uri: image }} style={styles.image} />
				) : (
					<Text>Seleccionar Imagen</Text>
				)}
			</TouchableOpacity>

			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Nombre de la entrada...'
					style={styles.inputName}
				/>
				<ScrollView>
					<TextInput
						style={styles.inputEntry}
						multiline={true}
						numberOfLines={10}
						placeholder='Texto de la entrada...'
					/>
				</ScrollView>
				<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.buttonBack} onPress={goToList}>
					<Text style={styles.textButtonBack}>VOLVER</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonSave}>
					<Text style={styles.textButtonSave}>GUARDAR</Text>
				</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default NewMoment;
