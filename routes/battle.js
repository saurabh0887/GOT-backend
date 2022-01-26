var express = require('express')
var router = express.Router()
var {listAllBattles, createBattle, searchBattle} = require("../controllers/battle")

router.get("/battles", listAllBattles)
router.post("/createBattle", createBattle)
router.post("/searchBattle", searchBattle)

module.exports =  router;