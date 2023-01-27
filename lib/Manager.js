const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber=officeNumber;
    }

    // getRole() - overriddern to return 'Manager'
    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

modudle.exports = Manager
