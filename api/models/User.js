/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user',
  attributes: {

    name: { 
      type: 'string', 
      required: true,
    },
    email: { 
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      //maxLength: 50,
    },
    password: { 
      type: 'number',
      // type: 'string', 
      required: true, 
    },
    // role: {
    //   type: 'string', required: false,
    // },

  },
  // validationMessages: {
  //   name: {
  //     required: "Who adds a product without a name? SMH.",
  //     maxLength: "makker wtf",
  //   },
  //   email: {
  //     required: "Seriously? Wanna donate this product or what?",
  //   },
  //   password: {
  //     required: "Only black and yellow labels are allowed bro!",
  //   }
  // },

};

