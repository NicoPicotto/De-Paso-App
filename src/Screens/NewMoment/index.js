import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { momentActions } from '../../store/action';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../Constants';
import { Feather } from '@expo/vector-icons';

const NewMoment = ({ navigation }) => {
	const dispatch = useDispatch();

	const [image, setImage] = useState(null);
	const [name, setName] = useState('');

	const handleNameChange = (text) => {
		setName(text);
	};

	//Función para guardar
	const handleSaveMoment = () => {
		dispatch(momentActions.addMoment(name, image));
		navigation.navigate('MomentList');
	};

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

	//Función para usar la cámara
	const openCamera = async () => {
		const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

		if (permissionResult.granted === false) {
			alert('Sin acceso a la cámara!');
			return;
		}

		const result = await ImagePicker.launchCameraAsync();

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	//Función para volver a la lista
	const goToList = () => {
		navigation.navigate('MomentList');
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageButton}>
				{image ? (
					<ImageBackground
						source={{ uri: image }}
						resizeMode='cover'
						style={styles.imageBackground}
					/>
				) : null}
				<View style={styles.topBarTouchable}>
					<View>
						<TouchableOpacity
							onPress={goToList}
							style={styles.buttonIconsContainer}
						>
							<Feather name='arrow-left' size={22} color='white' />
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							onPress={pickImage}
							style={styles.buttonIconsContainer}
						>
							<MaterialCommunityIcons
								name='folder-image'
								size={24}
								color='white'
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={openCamera}
							style={styles.buttonIconsContainer}
						>
							<FontAwesome name='camera' size={20} color='white' />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.touchableLayout}>
					{image ? null : (
						<FontAwesome
							name='picture-o'
							size={35}
							color={COLORS.secondaryColor}
						/>
					)}
				</View>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Nombre de la entrada...'
					style={styles.inputName}
					onChangeText={handleNameChange}
					value={name}
				/>
				<ScrollView>
					<TextInput
						style={styles.inputEntry}
						multiline={true}
						numberOfLines={10}
						placeholder='Texto de la entrada...'
						returnKeyType='go'
					/>
				</ScrollView>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.buttonSave}
						onPress={handleSaveMoment}
					>
						<Text style={styles.textButtonSave}>GUARDAR</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default NewMoment;
