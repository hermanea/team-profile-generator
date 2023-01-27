const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email)
        this.githubUsername=githubUsername;
    }

    // getRole() - overriddern to return 'Engineer'
    getRole() {
        return "Engineer"
    }

    getGithubUsername() {
        return this.githubUsername
    }
}

modudle.exports = Engineer
