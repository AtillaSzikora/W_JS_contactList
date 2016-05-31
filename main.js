$(document).ready(function() {

    var contact = {
        firstName: "Atilla",
        lastName: "Szikora",
        city: "Miskolc",
        address: "Katalin u. 7",
        email: "szikora.atilla@gmail.com",
        phone: "+36309728668",

        sum: function () {
            return "<div>" +
                        "<p>" + this.firstName + " " + this.lastName + "</p>" +
                        "<p>" + this.city + ", " + this.address + "</p>" +
                        "<p>" + this.email + "</p>" +
                        "<p>" + this.phone + "</p>" +
                    "</div>" } };

    function createCards() {
        for (var i = 0; i < 5; i++) {
            $('body').append(contact.sum()); } }

    function fillContactData() {

    }

    fillContactData();
    createCards();
});