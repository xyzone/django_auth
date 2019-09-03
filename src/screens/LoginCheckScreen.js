import React, {useContext} from 'react';
import {AsyncStorage} from 'react-native';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'

const LoginCheckScreen = ({navigation}) => {
    const {state, loginCheck} = useContext(AuthContext)
    const is_login = loginCheck()
    console.log('test')
    console.log(is_login)
     return (
        <Text>test</Text>
     )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
      }
})

export default LoginCheckScreen