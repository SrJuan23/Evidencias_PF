const express = require('express');
const passport = require('passport');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const usersRoutes = require('./routes/userRoutes');
const port = process.env.PORT || 3000;

app.use(logger('dev'));  // Middleware para registrar las peticiones HTTP
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las peticiones urlencoded
app.use(cors()); // Middleware para permitir solicitudes CORS
app.use(passport.initialize()); // Inicializa Passport
app.use(passport.session()); // Utiliza sesión con Passport
require('./config/passport')(passport); // Carga la configuración de Passport

app.disable('x-powered-by'); // Desactiva el encabezado 'x-powered-by' por razones de seguridad
app.set('port', port); // Establece el puerto para el servidor

// Rutas de usuarios
usersRoutes(app);

// Inicia el servidor en el puerto y dirección configurados
server.listen(3000, '10.1.195.87' || 'localhost', function() {
    console.log('App node.js ' + process.pid + ' ejecutando en ' + server.address().address + ':' + server.address().port);
});

// Rutas adicionales para pruebas
app.get('/', (req, res) => {
    res.send('Ruta raíz del Backend');
});

app.get('/test', (req, res) => {
    res.send('Ruta TEST');
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});
