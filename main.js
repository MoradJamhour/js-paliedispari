//Il programma chiede all'utente di scegliere pari o dispari e un numero ad una cifra. Genera un numero casuale e lo mette a confronto con quello scelto dall'utente. Nel caso in cui l'utente indovini dovrà trovare una parola palindroma per poter completare e vincere il gioco.

// take input from the user
var choice = prompt("Choose, odd or even? Type 1 for odd or 2 for even");
var number = prompt("Enter a single digit number: ");
var pcnumber = Math.floor(Math.random() * 10 + 1);
var sum = parseInt(+number + +pcnumber); //ho utilizzato l'operatore unray perche la somma mi concatenava i numeri invece che sommarli effettivamente
var outcome = false; //variabile utile a proseguire nel gioco solo in caso di vittoria



//tutte le opzioni e risultati del gioco
if(choice == 2 && sum % 2 == 0) {
  document.getElementById('phase1').innerHTML += "<p>" + "You called out even and chose this number: " + number + "</p>" + "The number i chose is: " + pcnumber + "</p>" + sum + " is even" + "</p>" + "Beginner's luck. You win. You may moove to the next step." + "</p>";
  outcome = true;
  }
else if (choice == 2 && sum % 2 != 0) {
  document.getElementById('phase1').innerHTML += "<p>" + "You called out even and chose this number: " + number + "</p>" + "The number i chose is: " + pcnumber + "</p>" + sum + " is odd" + "</p>" + "Ha! You lost. Refresh the page to try again." + "</p>";
}

if(choice == 1 && sum % 2 == 0) {
  document.getElementById('phase1').innerHTML += "<p>" + "You called out odd and chose this number: " + number + "</p>" + "The number i chose is: " + pcnumber + "</p>" + sum + " is even" + "</p>" + "Ha! You lost. Refresh the page to try again." + "</p>";
  }
else if (choice == 1 && sum % 2 != 0) {
  document.getElementById('phase1').innerHTML += "<p>" + "You called out odd and chose this number: " + number + "</p>" + "The number i chose is: " + pcnumber + "</p>" + sum + " is odd" + "</p>" + "Beginner's luck. You win. You may moove to the next step." + "</p>";
  outcome = true;
}

//l'utente ha finito ora il gioco pari o dispari ma può premere il bottone per passare alla seconda fase del gioco solo se ha vinto la prima fase
function promptMe(){
  if (outcome==true) {
    var string = prompt("To win this phase you only have to write a palindrome word... if you're smart enough.");

    //funzione di controllo della parola
    function checkPalindrome(str) {
     //troviamo la lunghezza della stringa
      const len = string.length;
     //scorriamo lungo la prima metaà
      for (let i = 0; i < len / 2; i++) {
       //metto a confronto le due metà
        if (string[i] !== string[len - 1 - i]) {
          return 'Ha! You lost. The word you chose is not a palindrome. Refresh the page and start over';
        }
      }
      return 'Ok, fine, well played. The word you chose is a palindrome. You won the whole game.';
    }

    //chiamo la funzione
    const value = checkPalindrome(string);

    document.getElementById('phase2').innerHTML += "<h2>" + "Phase 2: find a palindrome" + "</h2>" + "The word you chose was: " + string + "</p>" + value;
  }
  else if (outcome==false) {
   alert("You can move on to phase 2 only if you win phase 1. Nice Try.");
  }
}
