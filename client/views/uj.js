exports.loginSponsor = function (req, res, next) {
    passport.authenticate('local-sponsor', function(err, sponsor, info) {
        var error = err || info;
        if (error) return res.json(401, error);

        req.logIn(sponsor, function(err) {
            if (err) return res.send(err);
            res.json(req.sponsor.profile);
        });
    })(req, res, next);
};