const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {
  // Función para iniciar sesión
  login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Buscar al usuario por su correo
    User.findByEmail(email, async (err, myUser) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: 'Error al consultar el usuario',
          error: err
        });
      }

      // Si no existe el usuario
      if (!myUser) {
        return res.status(401).json({
          success: false,
          message: 'El email no existe en la base de datos'
        });
      }

      // Comparar la contraseña proporcionada con la almacenada
      const isPasswordValid = await bcrypt.compare(password, myUser.password);
      if (isPasswordValid) {
        // Si la contraseña es válida, generar el JWT
        const token = jwt.sign({ id: myUser.id, email: myUser.email }, keys.secretOrKey, {});

        // Datos a devolver al cliente
        const data = {
          id: myUser.id,
          email: myUser.email,
          name: myUser.name,
          lastname: myUser.lastname,
          image: myUser.image,
          phone: myUser.phone,
          session_token: `JWT ${token}`
        };

        return res.status(201).json({
          success: true,
          message: 'Usuario autenticado',
          data: data
        });
      } else {
        // Si la contraseña no es válida
        return res.status(401).json({
          success: false,
          message: 'Contraseña o correo incorrecto'
        });
      }
    });
  },

  // Función para registrar un nuevo usuario
  register(req, res) {
    const user = req.body;

    // Crear un nuevo usuario en la base de datos
    User.create(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: 'Error al crear al usuario',
          error: err
        });
      } else {
        return res.status(201).json({
          success: true,
          message: 'Creado el Usuario',
          data: data
        });
      }
    });
  }
};
