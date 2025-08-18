const {Router} = require("express")
const {getAnimais, getAnimal, getAnimaisNaoAdotados, getSolicitacoes, patchSolicitacaoAceitar, patchSolicitacaoRecusar} = require("../controladores/animal")

const router = Router()

router.get("/solicitacoes", getSolicitacoes)
router.patch("/solicitacoes/aceitar/:id", patchSolicitacaoAceitar)
router.patch("/solicitacoes/recusar/:id", patchSolicitacaoRecusar)

router.get("/", getAnimais)
router.get("/disponiveis", getAnimaisNaoAdotados)
router.get("/:nome", getAnimal)


module.exports = router