
function checkNumber(){
    document.getElementById("resultat").innerHTML = "";
    let tall1 = document.getElementById("antall").value;
    let tall2 = Number(tall1);
    if(isNaN(tall2)){
    document.getElementById("resultat").innerHTML = "<b style='color: red'>Må skrive et tall større enn 0</b>";
    }
}
const bestillingArray = [];

//Found the way to validate e-mails on https://dev.to/iamcymentho/mastering-email-address-validation-in-javascript-4f0j
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/;
const namePattern = /[a-åA-Å]/;
function validateEmail(){
    document.getElementById("resultat4").innerHTML = "";
    let email = document.getElementById("mail").value;
    if(emailPattern.test(email)===false) {
    document.getElementById("resultat4").innerHTML = "<b style='color: red'>Ikke gyldig epost</b>";
    }
}
function validateName1(){
    document.getElementById("resultat1").innerHTML = "";
    let first = document.getElementById("fornavn").value;
    if(namePattern.test(first)===false) {
    document.getElementById("resultat1").innerHTML = "<b style='color: red'>Du kan kun ha bokstaver i navnet</b>";
    }
}

function validateName2(){
    document.getElementById("resultat2").innerHTML = "";
    let second = document.getElementById("etternavn").value;
    if(namePattern.test(second)===false) {
    document.getElementById("resultat2").innerHTML = "<b style='color: red'>Du kan kun ha bokstaver i navnet</b>";
    }
}

function validatePhone(){
    document.getElementById("resultat3").innerHTML = "";
    let teleS = document.getElementById("telefon").value;
    let tele = Number(teleS);
    if(isNaN(tele) || teleS.length!==8) {
    document.getElementById("resultat3").innerHTML = "<b style='color: red'>Ugyldig telefonnummer</b>";
    }
}

//The functions are found in the notes on Canvas
function visBestillinger(){
    let ut = "<table><tr>" +
    "<th><b>Film</b></th><th><b>Antall</b></th><th><b>Fornavn</b></th><th><b>Etternavn</b></th><th><b>Telefonnr</b></th><th><b>Epost</b></th>" +
    "</tr>";
    for (let p of bestillingArray){
    ut+="<tr>";
    ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
    ut+="</tr>";
    }
    document.getElementById("alleBestillinger").innerHTML=ut;
}
function registrerKjop(){
    document.getElementById("resultat5").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("resultat1").innerHTML = "";
    document.getElementById("resultat2").innerHTML = "";
    document.getElementById("resultat3").innerHTML = "";
    document.getElementById("resultat4").innerHTML = "";
    const film = document.getElementById("velgF").value;
    const antallS = document.getElementById("antall").value;
    const antall = Number(antallS);
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefon").value;
    const tele = Number(telefonnr);
    const email = document.getElementById("mail").value;

    if(film.length===0 && antall<=0 && fornavn.length===0 && etternavn.length===0 && telefonnr.length===0 && email.length===0){
        document.getElementById("resultat").innerHTML = "<b style='color: red'>Må skrive noe inn i antall</b>";
        document.getElementById("resultat1").innerHTML = "<b style='color: red'>Må skrive noe inn i fornavnet</b>";
        document.getElementById("resultat2").innerHTML = "<b style='color: red'>Må skrive noe inn i etternavnet</b>";
        document.getElementById("resultat3").innerHTML = "<b style='color: red'>Må skrive noe inn i telefonnr</b>";
        document.getElementById("resultat4").innerHTML = "<b style='color: red'>Må skrive noe inn i epost</b>";
    } else if (film.length===0) {
        document.getElementById("resultat5").innerHTML = "<b style='color: red'>Må velge en film</b>";
    } else if (isNaN(antall)) {
        document.getElementById("resultat").innerHTML = "<b style='color: red'>Må skrive inn et tall større enn null</b>";
    } else if (namePattern.test(fornavn)===false) {
        document.getElementById("resultat1").innerHTML = "<b style='color: red'>Må bruke bokstaver mellom a og å</b>";
    } else if (namePattern.test(etternavn)===false) {
        document.getElementById("resultat2").innerHTML = "<b style='color: red'>Må bruke bokstaver mellom a og å</b>";
    } else if (isNaN(tele) || telefonnr.length!==8) {
        document.getElementById("resultat3").innerHTML = "<b style='color: red'>Ikke gyldig telefonnummer</b>";
    } else if (emailPattern.test(email)===false) {
        document.getElementById("resultat4").innerHTML = "<b style='color: red'>Ikke gylddig epost</b>";
    } else {
        const kjop = {
        film : film,
        antall : antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr : telefonnr,
        epost: email
        };

        bestillingArray.push(kjop);
        //nullstill inputboksene
        document.getElementById("velgF").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefon").value="";
        document.getElementById("mail").value="";
        visBestillinger();
    }
}
function slett(){
    bestillingArray.length = 0;
    document.getElementById("alleBestillinger").innerHTML="";
}