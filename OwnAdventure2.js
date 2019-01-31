var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// MY ADVENTURE 2


var user = prompt('Are you entertained?').toUpperCase();

    switch(user) {
     
     case 'YES':
         var movie = prompt('Do you know Gladiator? Yes or No?').toUpperCase();
         var geek = prompt('Do you consider yourself to be a geek? Yes or No?').toUpperCase();
         
         
         if(movie && geek === 'YES') {
             console.log('Yes, I can see you`re having fun!');  
    }   else {
         
         console.log('Then he chopped one more head...');
         
        }    break;
    
    case 'NO':
        var boredom = prompt('Do you consider yourself to be a dull person? Yes or No?').toUpperCase();
        var dull = prompt('Do you bore your friends? Yes or No?').toUpperCase();
      
      if(boredom || dull === 'YES') {
       
       console.log('be gone pestilence, thou art not worthy of fun!');
        
     } else    {
        
        console.log('Then he threw is sword to the dirt as he left the arena looking almighty...');
        
      }
        break;
        
        case 'MAYBE':
            console.log('what takes you to be entertained? He shout to the crowd');
            break;
            
            default:
            console.log('Unpleased with your answer, now you will be trown into the arena for the satisfaction of the mob!');
            
        
    }
    

