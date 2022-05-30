import { View, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import CustomHeader from '../../Components/CustomHeader';
import MomentItem from '../../Components/MomentItem';

const MomentList = ({ navigation }) => {
	const goToNewScreen = () => {
		navigation.navigate('NewMoment');
	};

	const moments = useSelector((state) => state.moments.moments);

	const onSelectDetail = () => {
		navigation.navigate('MomentDetail');
	};

	const renderItem = ({ item }) => (
		<MomentItem
			name={item.name}
			address='Calle falsa 123'
			entry={item.entry}
			date={item.date}
			image={item.image}
			onSelect={onSelectDetail}
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
