import React, {useContext} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = ({navigation}) => {
    const {state, signinAction} = useContext(AuthContext)

    return (
        <View style={styles.container}>
             <Text>Sign Screen {state.sessionId}</Text>   
             <Button title="Go to Account" onPress={() => {return (navigation.navigate('Account'))}} />   
             <Button title="Login" 
                onPress={
                    () => {return (signinAction('richard', '12345', null))}
                
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

export default SigninScreen