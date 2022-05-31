import { View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from '../../Components/CustomHeader';
import { momentActions } from '../../store/action';
import MomentItem from '../../Components/MomentItem';

const MomentList = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(momentActions.loadMoment());
	}, []);

	const goToNewScreen = () => {
		navigation.navigate('NewMoment');
	};

	const moments = useSelector((state) => state.moments.moments);

	const onSelectDetail = (item) => {
		navigation.navigate('MomentDetail', {
			name: item.name,
			entry: item.entry,
			date: item.date,
			image: item.image,
			address: item.address,
		});
	};

	const renderItem = ({ item }) => (
		<MomentItem
			name={item.name}
			address='Calle falsa 123'
			entry={item.entry}
			date={item.date}
			image={item.image}
			onSelect={() => onSelectDetail(item)}
		/>
	);

	return (
		<View style={styles.container}>
			<CustomHeader
				title='Tus momentos'
				buttonTitle='+ Nuevo'
				onPressProp={goToNewScreen}
			/>
			<FlatList
				data={moments}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				horizontal={true}
				style={styles.flatList}
			/>
		</View>
	);
};

export default MomentList;
