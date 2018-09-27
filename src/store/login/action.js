const usuarios = require('../../data/usuarios');
export function onAutenticacao(event) {
    const usuarioRetorno = usuarios.find(function (usuario) { 
        if(usuario.email === event.email && usuario.senha === event.senha) {
            if(usuario.tipo.nome==='motorista') {
                localStorage.setItem('titulo', 'Meus Atendimentos');
            } else {
                localStorage.setItem('titulo', 'Atendimentos');
            }

            localStorage.setItem('usuario', usuario.nome);
            usuario.redirecionar = true;
            return usuario;
        }
    });

    return {
        type: 'ON_AUTENTICAR',
        payload: usuarioRetorno
    }
}

export function onAtendimento(event) {
    window.location.href = window.location.href.concat("atendimentos");
}

export function onUsuarioAutenticado(event) {
    const nomeUsuario = localStorage.getItem('usuario');
    return {
        type:'ON_USUARIO_AUTENTICADO',
        payload:nomeUsuario
    }
}
