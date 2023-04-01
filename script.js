//your JS code here. If required.
let age=document.getElementById('age');
let name=document.getElementById('name');
let btn=document.getElementById('btn');

function myPromise(e)=new Promise((resolve,reject)=>{
	e.preventDefault();
	setTimeout(()=>{
		if(age.value>18){
			resolve(()=>alert("Welcome `${name.value}`. You can vote."))
		}
		else
		reject(()=>alert("Oh sorry `${name.value}`. You aren't old enough."))
	},4000);
})

btn.addEventListener('submit',myPromise);
// myPromise(age.value,name.value);