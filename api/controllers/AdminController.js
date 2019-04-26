/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcrypt = require('bcrypt');
module.exports = {
  view : async function(req,res){
    if(!req.session.authAdmin){
      res.view('pages/login.ejs');
    }
    else{
      dosen = await Dosen.find()
      fakultas = await Fakultas.find()
      progstudi = await Progstudi.find()
      res.view('pages/admin.ejs',{dosen : dosen, fakultas : fakultas, progstudi : progstudi})
    }
  },
  login : async function(req,res){
    if(!req.body.password){
      return res.badRequest({
        err : "password cannot be empty"
      })
    }
    admin = await Admin.find();
    bcrypt.compare(req.body.password,admin[0].password, function(err, result) {
      if(result) {
        req.session.authAdmin = true
        req.session.admin = admin[0]
        res.redirect('/admin')
        
      } else {
        return res.badRequest({err: 'Wrong password'});
      }
  });
  },
  fakultas : async function(req,res){
    if(!req.session.authAdmin){
      res.redirect('/admin')
    }
    else{
      fakultas = await Fakultas.find()
      progstudi = null
      dosen = null
      res.view('pages/edit.ejs',{fakultas : fakultas})
    }
  },
  progstudi : async function(req,res){
    if(!req.session.authAdmin){
      res.redirect('/admin')
    }
    else{
      progstudi = await Progstudi.find()
      Fakultas1 = await Fakultas.find()
      progstudi.forEach(i => {
        Fakultas1.forEach(j => {
          if(i.idFakultas == j.id){
            i.namaFakultas = j.namaFakultas
          }
        });
      });
      fakultas = null
      dosen = null
      res.view('pages/edit.ejs',{progstudi : progstudi,Fakultas : Fakultas1})
    }
  },
  dosen : async function(req,res){
    if(!req.session.authAdmin){
      res.redirect('/admin')
    }
    else{
      Progstudi1 = await Progstudi.find()
      Fakultas1 = await Fakultas.find()
      dosen = await Dosen.find()
      dosen.forEach(i => {
        Fakultas1.forEach(j => {
          if(i.idFakultas == j.id){
            i.namaFakultas = j.namaFakultas
          }
        });
        Progstudi1.forEach(j => {
          if(i.idProg == j.id){
            i.namaProg = j.namaProg
          }
        });
      });
      fakultas = null
      progstudi = null
      res.view('pages/edit.ejs',{dosen : dosen,Fakultas : Fakultas1,Progstudi : Progstudi1})
    }
  },
  addFakultas : async function(req,res){
    fakultas = await Fakultas.create({namaFakultas : req.body.namaFakultas})
    res.redirect('/admin/fakultas')
  },
  addProgStudi : async function(req,res){
    progstudi = await Progstudi.create({idFakultas : req.body.idFakultas,namaProg : req.body.namaProg})
    res.redirect('/admin/progstudi')
  },
  addDosen : async function(req,res){
    dos = req.body
    dosen = await Dosen.create(dos)
    res.redirect('/admin/dosen')
  },
  deleteFakultas : async function(req,res){
    fakultas = await Fakultas.destroy({id : req.params.id})
    progstudi = await Progstudi.destroy({idFakultas : req.params.id})
    dosen = await Dosen.destroy({idFakultas : req.params.id})
    res.redirect('/admin/fakultas')
  },
  deleteProg : async function(req,res){
    progstudi = await Progstudi.destroy({id : req.params.id})
    dosen = await Dosen.destroy({idProg : req.params.id})
    res.redirect('/admin/progstudi')
  },
  deleteDosen : async function(req,res){
    dosen = await Dosen.destroy({id : req.params.id})
    res.redirect('/admin/dosen')
  },
  editFakultas : async function(req,res){
    Fak = req.body
    fakultas = await Fakultas.update({id : req.params.id}).set(Fak)
    res.redirect('/admin/fakultas')
  },
  editProg : async function(req,res){
    Prog = req.body
    prog = await Progstudi.update({id : req.params.id}).set(Prog)
    res.redirect('/admin/progstudi')
  },
  editDosen : async function(req,res){
    Dos = req.body
    dosen = await Dosen.update({id : req.params.id}).set(Dos)
    res.redirect('/admin/dosen')
  },
  logout : async function(req,res){
    req.session.destroy();
    res.redirect('/admin')
  }

};

