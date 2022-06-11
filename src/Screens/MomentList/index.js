import {
	View,
	FlatList,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { momentActions } from '../../store/action';
import MomentItem from '../../Components/MomentItem';
import { useIsFocused } from '@react-navigation/native';
import { COLORS } from '../../Constants';

const MomentList = ({ navigation }) => {
	const isFocused = useIsFocused();
	const [filteredData, setFilteredData] = useState();
	const [search, setSearch] = useState('');

	const dispatch = useDispatch();

	const moments = useSelector((state) => state.moments.moments);

	//Función que trae todas las entradas y se ejecuta onMount y onFocus
	useEffect(() => {
		if (isFocused) {
			dispatch(momentActions.loadMoment());
		}
	}, [isFocused]);

	//Función que navega a la pantalla para crear una nueva entrada
	const goToNewScreen = () => {
		navigation.navigate('NewMoment');
	};

	//Función que entra al detalle y envía la info de ese item en particular
	const onSelectDetail = (item) => {
		navigation.navigate('MomentDetail', {
			name: item.name,
			entry: item.entry,
			date: item.date,
			image: item.image,
			address: item.address,
		});
	};

	//Función que renderiza la FlatList
	const renderItem = ({ item }) => (
		<MomentItem
			name={item.name}
			address={item.address}
			entry={item.entry}
			date={item.date}
			image={item.image}
			onSelect={() => onSelectDetail(item)}
		/>
	);

	//Función para buscar por nombre
	const searchFilter = (text) => {
		if (text) {
			const newData = moments.filter((item) => {
				const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredData(newData);
			setSearch(text);
		} else {
			setFilteredData(moments);
			setSearch(text);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.searchBarContainer}>
				<TextInput
					style={styles.inputSearch}
					placeholder='Buscar por nombre...'
					value={search}
					onChangeText={(text) => searchFilter(text)}
					selectionColor={COLORS.primaryColor}
				/>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={goToNewScreen}
				>
					<Text style={styles.textButton}>Nuevo +</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={filteredData ? filteredData : moments.reverse()}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				horizontal={true}
				style={styles.flatList}
			/>
			<View style={styles.footerContainer}/>
			<View style={styles.footerContainerBottom}/>
		</View>
	);
};

export default MomentList;
