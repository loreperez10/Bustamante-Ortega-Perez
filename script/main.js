const app = Vue.createApp({
    data() {
        return {
            botonSeguirTexto: 'Seguir',
            botonMegustaTexto: 'Me gusta',
            cantidadLikes: 200,
            liked: false,
            usuario: '',
            comentario: '',
            mensajeUsuario: '',
            mensajeComentario: '',
            comentarios: [],
            puedeComentar: false
        };
    },
    methods: {
        cambiarTextoSeguir() {
            if (this.botonSeguirTexto === 'Seguir') {
                this.botonSeguirTexto = 'Dejar de seguir';
            } else {
                this.botonSeguirTexto = 'Seguir';
            }
        },
        sumarLikes() {
            if (!this.liked) {
                this.cantidadLikes++;
                this.liked = true;
                this.botonMegustaTexto = '¡Gracias por tu like!';
            }
        },
        ingresar() {
            if (this.usuario === '') {
                this.mensajeUsuario = 'No ha ingresado un usuario';
                this.puedeComentar = false;
            } else {
                this.mensajeUsuario = '';
                this.puedeComentar = true;
                localStorage.setItem('usuario', this.usuario);
            }
        },
        comentar() {
            if (!this.puedeComentar) {
                this.mensajeComentario = 'No ha ingresado un usuario';
                this.mensajeUsuario = '';
                return;
            }

            if (this.comentario === '') {
                this.mensajeComentario = 'No ha ingresado un comentario';
                this.mensajeUsuario = '';
                return;
            }

            this.mensajeComentario = '';
            this.mensajeUsuario = '';
            this.comentarios.push({ usuario: this.usuario, comentario: this.comentario, fixed: false });
            this.comentario = '';
        },
        eliminarComentario(index) {
            this.comentarios.splice(index, 1);
        }
    },
    mounted() {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.usuario = usuario;
            this.puedeComentar = true;
        }
    }
});

const appMontada = app.mount('#app');