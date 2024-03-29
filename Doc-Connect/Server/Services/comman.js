const passport = require('passport');

exports.isAuthDoctor = (req,res,done) =>{
    return passport.authenticate('doctor-jwt');
}

exports.isAuthPatient = (req,res,done) =>{
    return passport.authenticate('patient-jwt');
}

exports.sanitizeUser = (user) => {
    return { id: user.id };
};

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    return token;
  };