import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import AuthApi from '../api/AuthApi';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return { sessionId: action.payload };
        default:
            return state;
    }
}

const loginCheck = (dispatch) => {
    return (
        async() => {
            session_id = await AsyncStorage.getItem('session_id').then((v) => {return v})
            console.log('check asnc storaGE')
            console.log(session_id)
            if (session_id){
                dispatch({type: 'signin', payload: session_id})         
                return true   
            }
            else{
                return false
            }
        }
    ) 

}

const signinAction = (dispatch) => {
    return ( 
        async (email, password, callback) => {
            console.log(email, password)
            try{
                const response = await AuthApi.post('/login/', { username: email, password }); 
                console.log(response.data.result)
                if (response.data.result)
                {
                    await AsyncStorage.setItem('session_id', response.data.session_id)
                    dispatch({type: 'login', payload: response.data.session_id})
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

export const { Context, Provider } = createDataContext(authReducer, {signinAction, loginCheck}, [])
