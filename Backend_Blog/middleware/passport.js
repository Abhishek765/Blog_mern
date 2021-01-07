const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const SECRET = process.env.SECRET_KEY;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET;

module.exports = passport => {
    // Our opts object contains the jwt token and secretkey
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
        //    Authorize the user using id
            User.findOne({ _id: jwt_payload.id })
                .then(user => { 
                    if (user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err =>
                    console.log({ error: "Error authenticating the user" })
                );
        })
    );
};