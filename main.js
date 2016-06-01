$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();
    var url = "http://www.filltext.com/?rows=1&" +
        "firstName={firstName}&lastName={lastName}&" +
        "city={city}&address={streetAddress}&" +
        "email={email}&phone={phone|format}";

    function httpStateChange() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var response = xmlHttp.responseText;
            var json = JSON.parse(response);
            createContact(json); } }

    function createContact(json) {
        var contact = {
            firstName: json.firstName,
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
        return contact.sum(); }

    function createCards() {
        for (var i = 0; i < 6; i++) {
            $('body').append(createContact()); } }

    xmlHttp.addEventListener("readystatechange", httpStateChange);
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    createCards();
});