let usuario = {
    nome: 'Roberto',
    excluir: function() {
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir();
