'use strict';

const form = document.querySelector("form");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fname = document.querySelector("input:first-of-type");
    const lname = document.querySelector("input:nth-of-type(2)");
    document.getElementById("result").innerHTML = "Twoje imię to: <b>" + fname.value + "</b><br>" + "Twoje nazwisko to: <b>" + lname.value + "</b>";
    fname.value = '';
    lname.value = '';
})