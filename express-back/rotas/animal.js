const {Router} = require("express")
const {getAnimais, getAnimal} = require("../controladores/animal")

const router = Router()

router.get("/", getAnimais)
router.get("/:id", getAnimal)

module.exports = router