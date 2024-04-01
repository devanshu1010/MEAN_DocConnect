const passport = require('passport');

exports.isAuthDoctor = (req,res,done) =>{
    console.log("inAuthDoctor");
    return passport.authenticate('doctor-jwt');
}

exports.isAuthPatient = (req,res,done) =>{
    return passport.authenticate('patient-jwt');
}

exports.sanitizeUser = (user) => {
    return { _id: user._id };
};

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    return token;
  };