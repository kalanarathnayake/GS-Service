const express = require("express");
const router = express.Router();

const {
    CreatePerson,
    deletePerson,
    getPersonById,
    getAllPeople,
    updatePersonalData,
} = require("../controller/people.controller");

//@route  POST api/ticket
//@desc   add ticket record
router.post("/add", CreatePerson);

//@route  GET api/ticket
//@desc   get ticket by Id
router.get("/:id", getPersonById);

//@route  DELETE api/ticket
//@desc   delete ticket
router.delete("/:id", deletePerson);

//@route  GET api/ticket/all
//@desc   get all ticket
router.get("/", getAllPeople);

//@route  PUT api/ticket
//@desc   update ticket record
router.put("/:id", updatePersonalData);

module.exports = router;