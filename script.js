//your JS code here. If required.
let age=document.getElementById('age');
let name=document.getElementById('name');
let btn=document.getElementById('btn');

function mainfunc((event)=>{
	event.preventDefault();
	
	var myPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if (!(age && name)) {
     alert("Please enter valid details");
			return;
		   }
		if(age.value>18){
			resolve();
		}
		else
		reject()
	},4000);
})
myPromise.then(()=>{
	alert(`Welcome, ${nameInput.value}. You can vote.`);
}).catch(()=>{
	alert("Oh sorry `${name.value}`. You aren't old enough.");
})
}

btn.addEventListener('submit',mainfunc);
// myPromise(age.value,name.value);