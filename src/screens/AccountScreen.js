import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const AccountScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
             <Text>Account Screen</Text>   
             <Button title="Go to Login" onPress={() => {return (navigation.navigate('Signin'))}} />   
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