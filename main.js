$(document).ready(function() {
    var json;

    function getJSONFromUrl() {
        var xmlHttp = new XMLHttpRequest();
        var url = "http://www.filltext.com/?rows=1&" +
            "firstName={firstName}&lastName={lastName}&" +
            "city={city}&address={streetAddress}&" +
            "email={email}&phone={phone|format}";

        var stateChange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var response = xmlHttp.responseText;
                json = JSON.parse(response); } };
        xmlHttp.addEventListener("readystatechange", stateChange);
        xmlHttp.open("GET", url, true);
        xmlHttp.send(); }

    function createCards() {
        for (var i = 0; i < 5; i++) {
            $('body').append(contact.sum()); } }

    getJSONFromUrl();

    var contact = {
        firstName: json[0],
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

    createCards();
});