import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { MyItems } from '../pages/MyItems';

import colors from '../styles/colors';
import { Products } from '../pages/Products';
import fonts from '../styles/fonts';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.blue_light,
        inactiveTintColor: colors.gray_dark,
        labelStyle: {
          fontSize: 18,
          fontFamily: fonts.jost_semi_bold
        },
        labelPosition: 'beside-icon',
        style: {
          paddingHorizontal: 5,
          height: 66
        },
      }}
    >
      <AppTab.Screen
        name="Meus itens"
        component={MyItems}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="list"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <AppTab.Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="shopping-cart"
              size={size}
              color={color}

            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes;