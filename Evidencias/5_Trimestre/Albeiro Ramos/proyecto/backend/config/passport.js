const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Keys = require('./keys');
const User = require('../models/user');

module.exports = (passport) => {
  let opts = {};
  
  // Configuración para extraer el JWT desde el header 'Authorization'
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  
  // La clave secreta para verificar el JWT
  opts.secretOrKey = Keys.secretOrKey;

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id, (err, user) => {
      if (err) {
        return done(err, false); // Si hay error en la consulta, devuelve error
      }
      if (user) {
        return done(null, user); // Si el usuario es encontrado, pasa el usuario
      } else {
        return done(null, false); // Si no se encuentra el usuario, devuelve 'false'
      }
    });
  }));
};
