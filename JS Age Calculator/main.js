const forms = document.forms['age-calc form-group'];
const result = document.getElementById('result');
const currentDate = new Date().getFullYear();

forms.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = forms.querySelector('#name').value
	let dob = forms.querySelector('#age').value
	let FinalResult = '';
	let calc = currentDate - dob


	try {
		dob = parseInt(forms.querySelector('#age').value);
	}
	catch {}


	if (typeof(dob) == 'string'){
		FinalResult = 'Please Enter Your Real Birth Year';
	}else{
		FinalResult = `Your name is ${name} and you are ${calc}`;
	}

	if (name && dob) {
		result.innerHTML = FinalResult
	}
});
