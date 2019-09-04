import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
    const {state, logoutAction, loginCheck} = useContext(AuthContext)

    useEffect(()=>{
        loginCheck().then((is_login)=> { 
            if (is_login){
                navigation.navigate('Account')
            }else{
                navigation.navigate('Signin')
            }
        })
        
    })


    return (
        <View style={styles.container}>  
             <Button title="Logout" 
                onPress={
                    () => {return (logoutAction())}
                
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