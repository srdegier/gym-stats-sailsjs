/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: function (req, res) {  
        //console.log('hey ;)');
        return res.render('pages/login', { title: 'Login Page', message:req.flash('loginMessage') }); 
    },

    signup: function (req, res) {
        const data = {
            errors: {},
            old: {},
        };  
        
        return res.render('pages/signup', data ); 
    },

    create: async function (req, res) {
        //console.log('hey ;)');
        const data = {
            errors: {},
            old: {},
        };

        if (req.method === 'POST') {
            try {
                await User.create({
                    email: req.body.email.toLowerCase(),
                    name: req.body.name,
                    password: await sails.helpers.passwords.hashPassword(req.body.password),
                });
                return res.redirect(`/homepage`);
            } catch(err) {
                console.log(err);
                // if(err.invalidAttributes) {
                //     data.errors = err.Errors;
                //     data.old = req.body;
                // }
                //return res.view('pages/signup', data);
                return res.send(err);
            }
        }
        
    },

    logout: function (req, res) {  

    },



};

