const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const compare = document.querySelector('#compare');

    if(h === '' || h < 0 || isNaN(h)){
        results.innerHTML = `Please enter a valid Height ${h}`;
    }
    else if(w === '' || w < 0 || isNaN(w)){
        results.innerHTML = `Please enter a valid Weight ${w}`;
    }
    else{
        const bmi = (w / ((h*h)/10000)).toFixed(2);
        // showing the result
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            compare.innerHTML = `<span>Under-Weight</span>`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            compare.innerHTML = `<span>Normal-Weight</span>`;
        }
        else if(bmi < 18.6){
            compare.innerHTML = `<span>Over-Weight</span>`;
        }
        else{
            compare.innerHTML = `<span>Under-Weight</span>`;
        }
    }
});