var age ="";
function verifAge() {
   age = prompt("Entrez votre âge svp");
   if (isNaN(age) == true) {
     verifAge()
   }else{
     if (age < 18) {
       window.location.replace('https://www.imdb.com/')
     }else{
       alert('Bienvenue')
     }
   }
}

document.onload = verifAge();
