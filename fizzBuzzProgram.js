const btn = document.getElementById('btn');
// console.log(result);
// console.log(input);
// console.log(clickHere);
// Berikut adalah aturannya. Jika input angka adalah:
// kelipatan 3: Keluaran Fizz
// kelipatan 5: Keluaran Buzz
// keduanya kelipatan 3 dan kelipatan 5: Keluaran FizzBuzz
// Kasus lain: Keluarkan nomor apa adanya

btn.addEventListener('click', function(){
    const input = document.getElementById('input').value;
    const result = document.getElementById('result');
    
    if(parseFloat(input) <= 0 || parseFloat(input) == NaN){
        let newP = document.createElement(`p`);
        let pContent = document.createTextNode('invalid input');
        newP.appendChild(pContent);
        result.appendChild(newP);
    }
    
    else if(parseFloat(input) % 3 == 0 && parseFloat(input) % 5 == 0){
        let newP = document.createElement(`p`);
        let pContent = document.createTextNode('FizzBuzz');
        newP.appendChild(pContent);
        result.appendChild(newP);
    }
    else if(parseFloat(input) % 3 == 0){
        let newP = document.createElement(`p`);
        let pContent = document.createTextNode('Fizz!');
        newP.appendChild(pContent);
        result.appendChild(newP);
    }
    else if(parseFloat(input) % 5 == 0){
        let newP = document.createElement(`p`);
        let pContent = document.createTextNode('Buzz');
        newP.appendChild(pContent);
        result.appendChild(newP);
    }
    
    else {
        let newP = document.createElement(`p`);
        let pContent = document.createTextNode(input);
        newP.appendChild(pContent);
        result.appendChild(newP);
    }
})