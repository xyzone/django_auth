import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator, 
} from 'react-navigation';
import LoginCheckScreen from './src/screens/LoginCheckScreen';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator(
  {
    LoginCheck: LoginCheckScreen,
    Signin: SigninScreen,
    Account: AccountScreen
  }
)
const App = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return(
  <AuthProvider>
    <App />
    </AuthProvider>  
  
  )
}
