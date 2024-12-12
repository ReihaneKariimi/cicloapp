import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeView from './screens/WelcomeView';
import SignUpScreen from './screens/SignUpScreen';
import VerificationCode from './screens/VerificationCode';
import Username from './screens/Username';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={Username}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
