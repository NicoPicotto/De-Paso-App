import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MomentDetail from '../Screens/MomentDetail';
import MomentList from '../Screens/MomentList';
import NewMoment from '../Screens/NewMoment';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='MomentList' component={MomentList} />
				<Stack.Screen name='NewMoment' component={NewMoment} />
				<Stack.Screen name='MomentDetail' component={MomentDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
