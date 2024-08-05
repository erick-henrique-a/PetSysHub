const {Router} = require("express")
const {getAnimais, getAnimal} = require("../controladores/animal")

const router = Router()

router.get("/", getAnimais)
router.get("/:nome", getAnimal)

module.exports = router