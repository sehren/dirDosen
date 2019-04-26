/**
 * FakultasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    home : async function(req, res) {
        var fakultas = await Fakultas.find();
        return res.view('pages/index',{fakultas :fakultas});
    },
    
}

