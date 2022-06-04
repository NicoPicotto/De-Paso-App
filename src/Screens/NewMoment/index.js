import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ImageBackground,
	Modal,
	Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { momentActions } from '../../store/action';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../Constants';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

const NewMoment = ({ navigation }) => {
	const dispatch = useDispatch();

	const [image, setImage] = useState(null);
	const [name, setName] = useState('');
	const [entry, setEntry] = useState('');
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [address, setAddress] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [city, setCity] = useState('');
	const [region, setRegion] = useState('');
	const [country, setCountry] = useState('');
	const [inputLocation, setInputLocation] = useState('');

	//Detectandio locación on mount
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			let locationNow = await Location.getCurrentPositionAsync({});
			let addressNow = await Location.reverseGeocodeAsync(locationNow.coords);
			let cityNow = addressNow.map((ct) => ct.city);
			setCity(cityNow);
			let regionNow = addressNow.map((rg) => rg.region);
			setRegion(regionNow);
			let countryNow = addressNow.map((cr) => cr.country);
			setCountry(countryNow);
		})();
	}, []);

	let text = 'Waiting..';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	//Obteniendo locación
	const pickLocation = () => {
		let direcCompleta = city + ', ' + region + ', ' + country;
		console.log('DirecCompleta: ', direcCompleta);
		setModalVisible(true);
		setAddress(direcCompleta);
	};

	const handleNameChange = (text) => {
		setName(text);
	};

	const handleEntryChange = (text) => {
		setEntry(text);
	};

	const handleLocationChange = (text) => {
		setInputLocation(text);
	};

	const handleNewLocation = () => {
		setAddress(inputLocation);
		setModalVisible(false);
	};

	const d = new Date();
	let date = d.toLocaleString();

	//Función para guardar
	const handleSaveMoment = () => {
		dispatch(
			momentActions.addMoment(name, image, entry, date, address, 10.5, 11.5)
		);
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
							<Feather
								name='arrow-left'
								size={22}
								color={COLORS.primaryColor}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							onPress={pickLocation}
							style={styles.buttonIconsContainer}
						>
							<MaterialIcons
								name='location-on'
								size={24}
								color={COLORS.primaryColor}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={pickImage}
							style={styles.buttonIconsContainer}
						>
							<MaterialCommunityIcons
								name='folder-image'
								size={24}
								color={COLORS.primaryColor}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={openCamera}
							style={styles.buttonIconsContainer}
						>
							<FontAwesome
								name='camera'
								size={20}
								color={COLORS.primaryColor}
							/>
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
						value={entry}
						onChangeText={handleEntryChange}
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
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text>
							{' '}
							<MaterialIcons
								name='location-on'
								size={15}
								color={COLORS.primaryColor}
							/>
							Ubicación obtenida:{' '}
						</Text>
						<TextInput
							placeholder={`${city}, ${region}, ${country}`}
							onChangeText={handleLocationChange}
							value={inputLocation}
						/>
						{inputLocation ? (
							<Text>
								<MaterialIcons
									name='location-on'
									size={15}
									color={COLORS.primaryColor}
								/>
								Nueva ubicación: {inputLocation}
							</Text>
						) : null}
						<View style={styles.pressableContainer}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Cerrar</Text>
							</Pressable>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={handleNewLocation}
							>
								<Text style={styles.textStyle}>Guardar nueva ubicación</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default NewMoment;
