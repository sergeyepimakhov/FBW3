var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

function showObjectProperties(obj) {
    for (prop in obj) {
        document.write(prop + ':' + obj[prop] + '<br>');
    }
}

showObjectProperties(person);