const router = require('express').Router()
const {create, read, readById, update, destroy } = require("../controllers/task")


router.post("/", create)
router.get("/", read)
router.get("/:id",  readById)
router.put("/:id",  update)
router.delete("/:id", destroy)

module.exports = router;