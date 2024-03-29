const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    nic: { type: String, required: true },
    fullName: { type: String, required: false },
    otherName: { type: String, required: false },
    gender: { type: String, required: false },
    address: { type: String, required: false },
    phoneNum1: { type: String, required: false },
    phoneNum2: { type: String, required: false },
    job: { type: String, required: false },
    dob: { type: Date, required: false },
    age: { type: Number, required: false },
    specialNote: { type: String, required: false },
    talents: { type: String, required: false },
    aswasuma: { type: Boolean, required: false },
    wakugadu: { type: Boolean, required: false },
    abaditha: { type: Boolean, required: false },
    vadihiti: { type: Boolean, required: false },
    pilika: { type: Boolean, required: false },
    adyapana: { type: Boolean, required: false },
    shishyadhara: { type: Boolean, required: false },
    mahajanadara: { type: Boolean, required: false },
    wenath: { type: Boolean, required: false },
}, {
    timestamps: true,
});

peopleSchema.pre('save', function (next) {
    if (this.dob) {
        const dobDate = new Date(this.dob);
        const ageDiffMs = Date.now() - dobDate.getTime();
        const ageDate = new Date(ageDiffMs);
        this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    next();
});

module.exports = People = mongoose.model("People", peopleSchema);
