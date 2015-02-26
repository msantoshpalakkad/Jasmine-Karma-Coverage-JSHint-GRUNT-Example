var Person = function () {};

Person.prototype.tellASecret = function (secret) {
    if (secret == "fake") {
        return this.tellSecretToDon() + " " + secret;
    } else {
        return "top " + secret;
    }
};

Person.prototype.tellSecretToDon = function () {
    return "fake";
};