
//referencias html

const lbOnline = document.querySelector('#lbOnline')
const lbOffline = document.querySelector('#lbOffline')
const txtMensaje = document.querySelector("#txtMensaje")
const btnEnviar = document.querySelector("#btnEnviar")



const socket = io();




socket.on('connect', () => {

    lbOnline.style.display = '';
    lbOffline.style.display = 'None'

})


socket.on('disconnect', () => {

    lbOnline.style.display = 'None';
    lbOffline.style.display = ''

})

socket.on('enviar-mensaje', (payload) => {

    console.log(payload)

})

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id)
    })

})