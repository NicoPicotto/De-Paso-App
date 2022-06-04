import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
	Alert,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { momentActions } from '../../store/action';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../Constants';
import { Feather } from '@expo/vector-icons';

const MomentDetail = ({ route, navigation }) => {
	const { name, image, entry, date, address } = route.params;
	const dispatch = useDispatch();

	//Función para borrar el momento y volver a la vista principal
	const handleDeleteMoment = (name) => {
		Alert.alert(
			'¿Estás seguro que deseas borrar la entrada?',
			'Esta acción no tiene vuelta atrás',
			[
				{
					text: 'Cancelar',
					onPress: () => console.log('Acción cancelada'),
					style: 'cancel',
				},
				{
					text: 'Eliminar',
					onPress: () => {
						navigation.navigate('MomentList');
						dispatch(momentActions.deleteMoment(name));
					},
				},
			]
		);
	};

	//Función para volver a la lista
	const goToList = () => {
		navigation.navigate('MomentList');
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageButton}>
				<ImageBackground
					source={{ uri: image }}
					resizeMode='cover'
					style={styles.imageBackground}
				/>
				<View style={styles.topBarTouchable}>
					<View>
						<TouchableOpacity
							onPress={goToList}
							style={styles.buttonBackContainer}
						>
							<Feather
								name='arrow-left'
								size={22}
								color={COLORS.terciartyColor}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={styles.buttonDeleteContainer}
							onPress={() => handleDeleteMoment(name)}
						>
							<FontAwesome name='trash' size={22} color='white' />
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonSave}>
							<Ionicons
								name='share-social'
								size={22}
								color={COLORS.terciartyColor}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.textContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{name}</Text>
				</View>
				<View style={styles.dataContainer}>
					<View style={styles.dateContainer}>
						<MaterialIcons
							name='date-range'
							size={20}
							color={COLORS.primaryColor}
						/>
						<Text style={styles.date}>{date}</Text>
					</View>
					<View style={styles.dateContainer}>
						<MaterialIcons
							name='location-on'
							size={20}
							color={COLORS.primaryColor}
						/>
						<Text style={styles.date}>{address}</Text>
					</View>
				</View>
				<ScrollView style={styles.entryContainer}>
					<Text style={styles.entry}>{entry}</Text>
				</ScrollView>
			</View>
		</View>
	);
};

export default MomentDetail;
