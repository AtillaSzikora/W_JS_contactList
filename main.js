$(document).ready(function() {
    var json;
    var response;
    var xmlHttp = new XMLHttpRequest();
    var url = "http://www.filltext.com/?rows=1&" +
        "firstName={firstName}&lastName={lastName}&" +
        "city={city}&address={streetAddress}&" +
        "email={email}&phone={phone|format}";

    function stateChange() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            response = xmlHttp.responseText;
            json = JSON.parse(response);
            console.log("Elso"); } }

    xmlHttp.addEventListener("readystatechange", stateChange);
    xmlHttp.open("GET", url, true);
    xmlHttp.send();

    function createCards() {
        for (var i = 0; i < 5; i++) {
            $('body').append(contact.sum()); } }

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

    $.when(stateChange()).then(console.log("Masodik"));
    createCards();
});