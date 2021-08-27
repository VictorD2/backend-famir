const router = require("express").Router();
const ctrlProfesores = require("../controllers/profesores.controllers");
const { isAdminApi } = require("../lib/auth");

router.get("/", [isAdminApi], ctrlProfesores.getProfesores);
router.get("/count", ctrlProfesores.getCount);
router.get("/:id", ctrlProfesores.getProfesorById);
router.post("/", [isAdminApi], ctrlProfesores.createProfesor);
router.put("/:id", [isAdminApi], ctrlProfesores.updateProfesor);
router.delete("/:id", [isAdminApi], ctrlProfesores.deleteProfesor);

module.exports = router;
