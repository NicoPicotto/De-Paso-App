import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	ScrollView,
	ImageBackground
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { momentActions } from '../../store/action';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../Constants';

const NewMoment = ({ navigation }) => {
	const dispatch = useDispatch();

	const [image, setImage] = useState(null);
	const [name, setName] = useState('');

	const handleNameChange = (text) => {
		setName(text);
	};

	const handleSaveMoment = () => {
		dispatch(momentActions.addMoment(name));
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

	const goToList = () => {
		navigation.navigate('MomentList');
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={pickImage} style={styles.imageButton}
			>
				{image ? <ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.imageBackground}/> : null}
				<View style={styles.topBarTouchable}>
					<TouchableOpacity onPress={goToList}>
						<Ionicons
							name='arrow-back'
							size={28}
							color="white"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<FontAwesome
							name='camera'
							size={24}
							color="white"
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.touchableLayout}>
					{image ? (
						null
					) : (
						<FontAwesome
							name='picture-o'
							size={35}
							color={COLORS.secondaryColor}
						/>
					)}
				</View>
			</TouchableOpacity>

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
