const Battle = require("../models/battle")

exports.listAllBattles =
    (req, res) => {
        Battle.find().exec((err, battles) => {
            if(err){
                return res.json({message: "Error"})
            }

            res.json(battles)
        })
    }


exports.createBattle = (req, res)=> {
    const battle = new Battle(req.body)
    battle.save((err, battle) => {
        if(err){
            return res.status(400).json({
                err: "Battle not saved"
            })
        }
        res.json(battle)
    })
}


exports.searchBattle = (req, res) => {
    
    Battle.find({"battle_name": req.body.search}).exec((err, battles) => {
        if(err){
            return res.json({message: "Error"})
        }
        res.json(battles)
    })

}