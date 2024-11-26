/* 
-hae dom-elementit(email + comment)
-pyyhitän vanhat errorit
- if lauseet (muuttuja error)
- lisää error classit
- palautetaan true/false riippuen erroreista

*/
/* EXERCISE 1 CONTACT FORM */
function checkInput(event) {
    event.preventDefault();//preventDefault() estää lomakkeen lähettämisen

    let email = document.getElementById("email").value; //haetaan DOM-elementit
    let comment = document.getElementById("comment").value.trim(); //trimmataan kommentti

    document.getElementById("email-error").textContent = ""; //poistetaan errorit
    document.getElementById("comment-error").textContent = "";
    document.getElementById("email").classList.remove("error");
    document.getElementById("comment").classList.remove("error");

    let error = false; //alustetaan error negatiiviseksi

    if (email.length < 6 || email.length > 15 || !email.includes("@")) { //jos ehdot täyttyvät --> tulostetaan errorviesti
        document.getElementById("email-error").textContent = " Email must be between 6 and 15 characters long and must include @-symbol."
        document.getElementById("email").classList.add("error"); //lisätään errorkenttään class "error"
        error = true;
    }
    if (comment.length === 0) {
        document.getElementById("comment-error").textContent = " Comment cannot be empty.";
        document.getElementById("comment").classList.add("error");
        error = true;
    }
    else if (comment.length > 50) { //turha if lause!! Voisi vain laittaa suoraan splice() methodin commenttiin^
        comment = comment.slice(0, 50)
    }
    if (!error) {//jos ei erroreita, niin lähetetään alert, jossa varmistetaan tiedot
        alert("Tarkista tiedot: \nEmail: " + email + "\nComment: " + comment);

    }

    return false;
}

/* EXERCISE 2 Membership calculator */

//haetaan kenttien arvot
function membership() {
    let memType = document.getElementById("type").value;
    let years = document.getElementById("years").value;
    let cost = document.getElementById("cost")
    let discountmessage = document.getElementById("discountMessage");
    const hinnat = { //tallennetaan hinnat tauluun
        basic: 10,
        premium: 15,
        gold: 20,
        platinum: 25
    };
    let normaalihinta = hinnat[memType] * years; //Hakee taulusta memType hinnan ja kertoo sen vuosilla
    let loppuhinta = normaalihinta; //alustetaan alennettu hinta
    let aleviesti = ''; //alustetaan tyhjä aleviesti

    //lasketaan alennukset
    if (years >= 2) {
        loppuhinta *= 0.8;
        aleviesti = 'Sait 20 % alennusta ' + years + ' vuoden tilauksestasi!'
    }
    if (years >= 5) {
        loppuhinta -= 5;
        aleviesti += " Lisäksi sait 5 € lisäalennuksen yli viiden vuoden tilauksesta!"
    }
    cost.value = loppuhinta;

    if (aleviesti) { //näytetään aleviesti, jos näytettävää
        discountmessage.style.display = 'block';
        discountmessage.textContent = aleviesti;
    } else {
        discountmessage.style.display = 'none';
    }

}



/* EXERCISE 3 */




// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = Number(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
    var shipping = parseFloat(document.getElementById('shipping').value);

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100) {
        total = total - (2 * discount);
    } else {

        total = total - discount;
    }
    total = total + (1.0 * shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    /* if(theForm.addEventListener){
        theForm.addEventListener("submit", code ,false);
    } */

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;