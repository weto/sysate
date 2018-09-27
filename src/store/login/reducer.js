const INITIAL_STATE = {
    usuario: {
        email: '',
        senha: ''
    },
    redirecionar: false,
}

export default function autenticacao (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ON_AUTENTICAR': 
            return {
                ...state,
                usuario: action.payload
            }
        case 'ON_ATENDIMENTO': 
            return {
                ...state,
                redirecionar: action.payload
            }
        case 'ON_USUARIO_AUTENTICADO': 
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state
    }
}