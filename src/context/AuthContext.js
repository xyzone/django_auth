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

const signinAction = (dispatch) => {
    return ( 
        async (email, password, callback) => {
            console.log(email, password)
            try{
                const response = await AuthApi.post('/login/', { username: email, password }); 
                if (response.data.result)
                {
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

export const { Context, Provider } = createDataContext(authReducer, {signinAction}, [])
