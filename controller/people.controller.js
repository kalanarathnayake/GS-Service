const People = require('../model/people.model');

const CreatePerson = async (req, res) => {
    const { nic, fullName, otherName, gender, address, phoneNum1, phoneNum2, job, dob, age, specialNote, talents, aswasuma, wakugadu, abaditha, vadihiti, pilika, adyapana, shishyadhara, mahajanadara, wenath } = req.body;
    const people = new People({
        nic,
        fullName,
        otherName,
        address,
        phoneNum1,
        phoneNum2,
        job,
        dob,
        age,


        gender,
        specialNote,
        talents,
        
        aswasuma,
        wakugadu,
        abaditha,
        vadihiti,
        pilika,
        adyapana,
        shishyadhara,
        mahajanadara,
        wenath
    });

    await people.save()
        .then(() => res.json('Person has been Created.'))
        .catch(err => res.status(400).json('Error : ' + err));
};


const deletePerson = async (req, res) => {
    People.findByIdAndDelete(req.params.id)
        .then(() => res.json('Person data has been Deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
}

const getPersonById = async (req, res) => {
    try {
        const person = await People.findById(req.params.id);
        if (person)
            res.json(person)
        else {
            res.json("No Personal record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//get all ticket records
const getAllPeople = async (req, res) => {
    try {
        const people = await People.find();
        res.json(people)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
}


const updatePersonalData = async (req, res) => {
    People.findByIdAndUpdate(req.params.id).
        then((exsistingPerson) => {
            exsistingPerson.nic = req.body.nic;
            exsistingPerson.fullName = req.body.fullName;
            exsistingPerson.otherName = req.body.otherName;
            exsistingPerson.gender = req.body.gender;
            exsistingPerson.address = req.body.address;
            exsistingPerson.phoneNum1 = req.body.phoneNum1;
            exsistingPerson.phoneNum2 = req.body.phoneNum2;
            exsistingPerson.job = req.body.job;
            exsistingPerson.age = req.body.age;
            exsistingPerson.dob = Date.parse(req.body.dob);
            exsistingPerson.specialNote = req.body.specialNote;
            exsistingPerson.talents = req.body.talents;
            exsistingPerson.aswasuma = req.body.aswasuma;
            exsistingPerson.wakugadu = req.body.wakugadu;
            exsistingPerson.abaditha = req.body.abaditha;
            exsistingPerson.vadihiti = req.body.vadihiti;
            exsistingPerson.pilika = req.body.pilika;
            exsistingPerson.adyapana = req.body.adyapana;
            exsistingPerson.shishyadhara = req.body.shishyadhara;
            exsistingPerson.mahajanadara = req.body.mahajanadara;
            exsistingPerson.wenath = req.body.wenath;
            exsistingPerson.save()
                .then((updatedPerson) => res.json(updatedPerson))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: 1" + error));
};


//export 
module.exports = {
    CreatePerson,
    deletePerson,
    getPersonById,
    getAllPeople,
    updatePersonalData
};