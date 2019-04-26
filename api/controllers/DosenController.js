/**
 * DosenController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Cryptr = require('cryptr');
const cryptr = new Cryptr('secretKeyOfLength');
module.exports = {
    ambilDosen : async (req,res)=>{
        var dosen = await Dosen.find({idFakultas : req.body.idFakultas,idProg : req.body.idProg})
        fakultas = await Fakultas.find({id:req.body.idFakultas})
        progstudi = await Progstudi.find({id:req.body.idProg})
        dosen.forEach(i => {
            i.namaFakultas = fakultas[0].namaFakultas
            i.namaProg = progstudi[0].namaProg
            i.id = cryptr.encrypt(i.id)
        });
        res.json(dosen)
    }

};

