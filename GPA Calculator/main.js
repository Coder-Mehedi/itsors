const infoForms = document.forms['students-info'];

infoForms.addEventListener('submit', (e) => {
	e.preventDefault();

	let studentsName = infoForms.querySelector('#studentsName');
	let studentsRoll = infoForms.querySelector('#studentsRoll');
	let totalMark = 0;
	let gpaGrade = '';
	let calcPoint = 0;

	// Grabbing Form Data
	const formBangla = infoForms.querySelector('#bangla');
	const formEnglish = infoForms.querySelector('#english');
	const formMath = infoForms.querySelector('#mathematics');
	const formScience = infoForms.querySelector('#science');
	const formGlobalStudies = infoForms.querySelector('#bangladesh-and-global-studies');
	const formIslam = infoForms.querySelector('#islam-and-moral-education');
	const formIct = infoForms.querySelector('#ict');

	// Grabbing Table Data
	const fullTable = document.getElementById("detailsTable");
	const tBangla = fullTable.querySelector("#tBangla");
	const tEnglish = fullTable.querySelector("#tEnglish");
	const tMath = fullTable.querySelector("#tMath");
	const tScience = fullTable.querySelector("#tScience");
	const tGlobalStudies = fullTable.querySelector("#tGlobalStudies");
	const tIslam = fullTable.querySelector("#tIslam");
	const tIct = fullTable.querySelector("#tIct");

	// set Student Name and Roll
	const setStudentNameAndRoll = () => {
		document.getElementById('student-name').innerText = studentsName.value
		document.getElementById('student-roll').innerText = studentsRoll.value
		// console.log('Student Name And Roll Updated')
	}

	const updateMark = () => {
		tBangla.childNodes[5].innerText = formBangla.value
		tEnglish.childNodes[5].innerText = formEnglish.value
		tMath.childNodes[5].innerText = formMath.value
		tScience.childNodes[5].innerText = formScience.value
		tGlobalStudies.childNodes[5].innerText = formGlobalStudies.value
		tIslam.childNodes[5].innerText = formIslam.value
		tIct.childNodes[5].innerText = formIct.value
		// console.log('updated Mark')
	}

	const updateGPA = () => {
		tBangla.childNodes[7].innerText = calculateGPA(formBangla.value)
		tEnglish.childNodes[7].innerText = calculateGPA(formEnglish.value)
		tMath.childNodes[7].innerText = calculateGPA(formMath.value)
		tScience.childNodes[7].innerText = calculateGPA(formScience.value)
		tGlobalStudies.childNodes[7].innerText = calculateGPA(formGlobalStudies.value)
		tIslam.childNodes[7].innerText = calculateGPA(formIslam.value)
		tIct.childNodes[7].innerText = calculateGPA(formIct.value)
		// console.log('updated GPA')
	}

	const changeTotalMark = () => {
		totalMark = parseInt(formBangla.value) + parseInt(formEnglish.value) + 
								parseInt(formMath.value) + parseInt(formScience.value) +
								parseInt(formGlobalStudies.value) + parseInt(formIslam.value) +
								parseInt(formIct.value)
		// console.log(totalMark)
		document.getElementById('total-mark').innerText = totalMark
	}

	const gpaPoint = () => {
		if ((parseInt(formBangla.value) < 33) || (parseInt(formEnglish.value) < 33)|| 
								(parseInt(formMath.value) < 33)|| (parseInt(formScience.value) < 33)||
								(parseInt(formGlobalStudies.value) < 33)|| (parseInt(formIslam.value) < 33)||
								(parseInt(formIct.value) < 33)) {
			return document.getElementById('gpa-point').innerText = 'FAIL'
		}else {
			// gpa = parseInt(totalMark / 7)
			// return document.getElementById('gpa-point').innerText = 'PASS'
		}
	}

	let point = 0;
	const calculateGPA = (number) => {

		if (number >= 80 && number <= 100) {
			// point += 5
			return gpaGrade = 'A+'
		}else if (number >= 70 && number <= 79) {
			// point += 4
			return gpaGrade = 'A'
		}else if (number >= 60 && number <= 69) {
			// point += 3.5
			return gpaGrade = 'A-'
		}else if (number >= 50 && number <= 59) {
			// point += 3
			return gpaGrade = 'B'
		}else if (number >= 40 && number <= 49) {
			// point += 2
			return gpaGrade = 'C'
		}else if (number >= 33 && number <= 39) {
			// point += 1
			return gpaGrade = 'D'
		}else if (number <= 32) {
			return gpaGrade = 'FAIL'
		}
	}
	let totalPoint = 0
	const pointCalculator = (val) => {
		if (val === 'A+'){
			return totalPoint += 5
		}else if (val === 'A') {
			return totalPoint += 4
		}else if (val === 'A-') {
			return totalPoint += 3.5
		}else if (val === 'B') {
			return totalPoint += 3
		}else if (val === 'C') {
			return totalPoint += 2
		}else if (val === 'D') {
			return totalPoint += 1
		}

	pointCalculator(tBangla.childNodes[7].innerText)
	pointCalculator(tEnglish.childNodes[7].innerText)
	pointCalculator(tMath.childNodes[7].innerText)
	pointCalculator(tScience.childNodes[7].innerText)
	pointCalculator(tGlobalStudies.childNodes[7].innerText) 
	pointCalculator(tIslam.childNodes[7].innerText)
	pointCalculator(tIct.childNodes[7].innerText)

	const avgPoint = totalPoint / 7
	console.log('totalpoint', totalPoint)
	console.log('avgPoint', avgPoint)
	return document.getElementById('gpa-point').innerText = avgPoint.toFixed(2);
}



	setStudentNameAndRoll();
	updateMark();
	changeTotalMark();
	updateGPA();
	gpaPoint();
	// pointCalculator();
	console.log(pointCalculator());
});
