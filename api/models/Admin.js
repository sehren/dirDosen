/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {

  tableName : 'admin',
  attributes: {
      namaAdmin : {type:'string'},
      password : {type : 'string'},
  },
  beforeCreate: function(value,cb) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(value.password, salt, function(err, hash) {
          value.password = hash
          cb();
      });
    });
  }

};

