// Contraseñas para ingresar a la BD
module.exports = {
    USER: process.env.USER || 'root',
    HOST: process.env.HOST || 'localhost',
    PASSWORD: process.env.PASSWORD || '',
    NAME: process.env.NAME || 'calculadora'
}