import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer independent={true}>{
      <Stack.Navigator 
          initialRouteName="Welcome"
          screenOptions={{ 
            headerStyle: { backgroundColor: 'white', fontWeight: 'bold', },
            headerTintColor: 'EDEFEE'
          }} >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ title: 'Welcome' }} />
        <Stack.Screen 
          name="Subscribe" 
          component={SubscribeScreen} 
          options={{ title: 'Home', headerTitle: 'Subscribe' }} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
};

export default RootNavigator;
