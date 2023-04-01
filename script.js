//your JS code here. If required.
let age=document.getElementById('age').value;
let name=document.getElementById('name').value;
let btn=document.getElementById('btn');
let form=document.getElementById('form')

function mainfunc((event)=>{
	event.preventDefault();

	if (!(age && name)) {
     alert("Please enter valid details");
			return;
		   }
	var myPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		
		if(age>18){
			resolve();
		}
		else
		reject();
	},4000);
})
myPromise.then(()=>{
	alert(`Welcome, ${name}. You can vote.`);
}).catch(()=>{
	alert(`Oh sorry ${name}. You aren't old enough.`);
})
}

form.addEventListener('submit',mainfunc);
// myPromise(age.value,name.value);