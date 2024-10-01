const btnContact = document.getElementById('btnContact');
const confirmationDiv = document.querySelector("body > div.body > div.content > div.confirmation");
const confirmationMessageDiv = document.querySelector("body > div.body > div.content > div.confirmation > div.message");

function processContact() {
	console.log('processContact called');
	
	var confirmationMessage = '';
	
	//const name = document.getElementById('name').value;
	//const name = document.getElementsByName("name")[0].value;
	const name = document.querySelector("[name='name']").value;
	console.log(name);
	
	const email = document.querySelector("[name='email']").value;
	console.log(email);
	
	const message = document.querySelector("[name='message']").value;
	console.log(message);
	
	confirmationMessage = `
	<p>Thank you for you feedback.</p>
	<p>Name: ${name}</p>
	<p>Email: ${email}</p>
	<p>Message:</p>
	<p>${message}</p>
	`;
	
	confirmationMessageDiv.innerHTML = confirmationMessage;
	confirmationDiv.style.visibility= "visible";
	
}

btnContact.addEventListener('click', processContact);