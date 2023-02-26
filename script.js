
let inputText=document.getElementById("inputtext");
let inputvalue;

let submitb=document.getElementById("submitb");
submitb.addEventListener('click',()=>{
getData(inputText.value);    
});

function getData(input)
{
console.log(input);
let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
let promiseobj=fetch(url);
promiseobj.then(function(res){return res.json();}).then(function(data){
    var meaning=(data[0].meanings[0].definitions[0]);
    console.log(meaning.definition);
    let p1=document.createElement('p');
    p1.innerText=meaning.definition;
    document.body.append(p1);
}).catch(function(err){console.log(err);});
}

