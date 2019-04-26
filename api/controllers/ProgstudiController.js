/**
 * ProgstudiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    ambilProg : async function(req,res){
        var progStudi = await Progstudi.find({idFakultas : req.body.id})
        res.json(progStudi)
    }
};

