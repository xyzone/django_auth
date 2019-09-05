import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
    const {state, logoutAction, loginCheck, testToken} = useContext(AuthContext)

    useEffect(()=>{
        loginCheck() 
    }, [])


    return (
        <View style={styles.container}>  
            <Text>{state.session_id}</Text>
             <Button title="Logout" 
                onPress={
                    () => {return (logoutAction())}
                
                } />   

            <Button title="Test Login" 
                onPress={
                    () => {return (testToken())}
                
                } />                   
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
      }
})

export default AccountScreen