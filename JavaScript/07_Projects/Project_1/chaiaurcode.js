const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('mouseover',function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        // else if(event.target.id === ){
        //     body.style.backgroundColor = 'white';
        // }
    })
})
