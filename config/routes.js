/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'get /' : 'FakultasController.home',
  'post /ambilProg': 'ProgstudiController.ambilProg',
  'post /ambilDosen' : 'DosenController.ambilDosen',
  'get /detail/:id' : 'DetailController.detail',
  'get /admin' : 'AdminController.view',
  'post /adminLogin' : 'AdminController.login',
  'get /logout' : 'AdminController.logout',
  'get /admin/fakultas' : 'AdminController.fakultas',
  'get /admin/progstudi' : 'AdminController.progstudi',
  'get /admin/dosen' : 'AdminController.dosen',
  'post /admin/addFakultas' : 'AdminController.addFakultas',
  'post /admin/addProgStudi' : 'AdminController.addProgStudi',
  'post /admin/addDosen' : 'AdminController.addDosen',
  'post /admin/addProgStudi' : 'AdminController.AddProgStudi',
  'get /admin/deleteFakultas/:id' :'AdminController.deleteFakultas',
  'get /admin/deleteProg/:id' :'AdminController.deleteProg',
  'get /admin/deleteDosen/:id' : 'AdminController.deleteDosen',
  'post /admin/editFakultas/:id' : 'AdminController.editFakultas',
  'post /admin/editProg/:id' : 'AdminController.editProg',
  'post /admin/editDosen/:id' : 'AdminController.editDosen'
};
