/**
 * Dosen.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName : 'datadosen',
  attributes: {
      idFakultas : {type : 'number'},
      idProg : {type : 'number'},
      namaDosen : {type:'string'},
      nip : {type :'number'},
      nidn : {type : 'number'},
      jabatan : {type : 'string'},
      email : {type : 'string'},
      s1tahun : {type : 'number'},
      s1jurusan : {type : 'string'},
      s1inst : {type : 'string'},
      s1lokasi : {type : 'string'},
      s2tahun : {type : 'number'},
      s2jurusan : {type : 'string'},
      s2inst : {type : 'string'},
      s2lokasi : {type : 'string'},
  },

};

