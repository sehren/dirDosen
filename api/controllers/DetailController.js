
const Cryptr = require('cryptr');
const cryptr = new Cryptr('secretKeyOfLength');
module.exports = {
    detail : async function(req,res){
        id = cryptr.decrypt(req.params.id);
        dosen = await Dosen.find({id : id})
        fakultas = await Fakultas.find({id : dosen[0].idFakultas})
        progstudi = await Progstudi.find({id : dosen[0].idProg})
        dosen[0].namaFakultas = fakultas[0].namaFakultas
        dosen[0].namaProg = progstudi[0].namaProg
        res.view('pages/detail',{dosen : dosen[0]})
    }
}