let button = document.querySelector('button');

let interval; 

button.addEventListener('click', start);

function start(){
    interval = setInterval(decompte, 1000);
}

function stop() {
    
   
    clearInterval(interval);
    document.body.innerHTML += "STOP!";
}

let secondes = 10;

function decompte(){
    secondes--;
   if (secondes == 0) {
   stop();
   }
   
   else{ 
    document.body.innerHTML += secondes + '<br>';
   }
}



document.body.append(button);