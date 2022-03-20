import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ADD_ORDER_SCREEN, ADD_ORDER_TITLE, LIST_ORDERS_SCREEN, LIST_ORDERS_TITLE } from '../constants/const';
import ListOrdersScreen from '../components/screens/ListOrders/listOrdersScreen.component';
import AddOrderScreen from '../components/screens/AddOrder/addOrderScreen.component';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:true}} initialRouteName={ADD_ORDER_SCREEN}>
        <Drawer.Screen name={ADD_ORDER_SCREEN} options={{title:ADD_ORDER_TITLE}} component={AddOrderScreen} />
        <Drawer.Screen name={LIST_ORDERS_SCREEN} options={{title:LIST_ORDERS_TITLE}} component={ListOrdersScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerStack