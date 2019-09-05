import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import AuthApi from '../api/AuthApi';
import { navigateAction } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return { session_id: action.payload };
        case 'logout':
            return { session_id: '' };
        default:
            return state;
    }
}

const loginCheck = dispatch => async () => {  
    session_id = await AsyncStorage.getItem('session_id') 
    if (session_id){
        dispatch({type: 'signin', payload: session_id})         
        console.log('login')
        console.log(session_id)
        navigateAction('Account');
    }
    else{
        console.log('not login ') 
        navigateAction('Signin');
    }
}
     
const logoutAction = dispatch => async () => {  
    await AsyncStorage.removeItem('session_id') 
    dispatch({type: 'logout'});  
    navigateAction('LoginCheck');
}

const testToken = (dispatch) => {
    return (
        async () => {
            session_id = await AsyncStorage.getItem('session_id');
            console.log(session_id)
            try{
            const response = await AuthApi.post( 
                '/rf_test/',  
                {token: session_id},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${session_id}`,
                    },   
                } 
                );
                console.log(response.data.message)
            }catch(e){
                console.log(e.message)
            }  
        } 
    ) 
}


const signinAction = (dispatch) => {
    return ( 
        async (email, password, callback) => {
            console.log(email, password)
            try{
                const response = await AuthApi.post('/login/', 
                { username: email, password }); 
                console.log(response.data.token)
                if (response.data.token)
                {
                    await AsyncStorage.setItem('session_id', response.data.token)
                    dispatch({type: 'login', payload: response.data.token})
                    if (callback){
                        callback()
                    }       
                }
                else{
                    console.log('Failed to login, Error ' + response.data.message)
                }
            }catch(e){
                console.log(e.message)    
            }           
            
        }
    )
} 

export const { Context, Provider } = createDataContext(authReducer, 
    {signinAction, loginCheck, logoutAction, testToken}, [])
