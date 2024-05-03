export const initialFormState = {
       user_name: '',
       user_email: '',
       user_phone: '',
       user_query: '',
       message: ''
}

export function formReducer(state, action){
       switch(action.type){
            case 'name':
                 return {...state, user_name: action.value}
            case 'email': 
                  return {...state, user_email: action.value}
            case 'phone': 
                  return {...state, user_phone: action.value}
            case 'query':
                  return {...state, user_query: action.value}
            case 'message':
                   return { ...state, message: action.value}
            default:
                  throw new Error()
       }
}