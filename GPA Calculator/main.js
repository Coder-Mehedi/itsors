var infoForms = document.forms['students-info'];
var studentsName = infoForms.querySelector('#studentsName');
var studentsRoll = infoForms.querySelector('#studentsRoll');
let totalMark = 0;
let gpa = 0;

// Grabbing Form Data
var formBangla = infoForms.querySelector('#bangla');
var formEnglish = infoForms.querySelector('#english');
var formMath = infoForms.querySelector('#mathematics');
var formScience = infoForms.querySelector('#science');
var formGlobalStudies = infoForms.querySelector('#bangladesh-and-global-studies');
var formIslam = infoForms.querySelector('#islam-and-moral-education');
var formIct = infoForms.querySelector('#ict');

// Grabbing Table Data
var fullTable = document.getElementById("detailsTable");
var tBangla = fullTable.querySelector("#tBangla");
var tEnglish = fullTable.querySelector("#tEnglish");
var tMath = fullTable.querySelector("#tMath");
var tScience = fullTable.querySelector("#tScience");
var tGlobalStudies = fullTable.querySelector("#tGlobalStudies");
var tIslam = fullTable.querySelector("#tIslam");
var tIct = fullTable.querySelector("#tIct");

// set Student Name and Roll
const setStudentNameAndRoll = () => {
	document.getElementById('student-name').innerText = studentsName.value
	document.getElementById('student-roll').innerText = studentsRoll.value
	console.log('Student Name And Roll Updated')
}

const updateMark = () => {
	tBangla.childNodes[5].innerText = formBangla.value
	tEnglish.childNodes[5].innerText = formEnglish.value
	tMath.childNodes[5].innerText = formMath.value
	tScience.childNodes[5].innerText = formScience.value
	tGlobalStudies.childNodes[5].innerText = formGlobalStudies.value
	tIslam.childNodes[5].innerText = formIslam.value
	tIct.childNodes[5].innerText = formIct.value
	console.log('updated Mark')
}

const updateGPA = () => {
	tBangla.childNodes[7].innerText = calculateGPA(formBangla.value)
	tEnglish.childNodes[7].innerText = calculateGPA(formEnglish.value)
	tMath.childNodes[7].innerText = calculateGPA(formMath.value)
	tScience.childNodes[7].innerText = calculateGPA(formScience.value)
	tGlobalStudies.childNodes[7].innerText = calculateGPA(formGlobalStudies.value)
	tIslam.childNodes[7].innerText = calculateGPA(formIslam.value)
	tIct.childNodes[7].innerText = calculateGPA(formIct.value)
	console.log('updated GPA')
}

const changeTotalMark = () => {
	totalMark = parseInt(formBangla.value) + parseInt(formEnglish.value) + 
							parseInt(formMath.value) + parseInt(formScience.value) +
							parseInt(formGlobalStudies.value) + parseInt(formIslam.value) +
							parseInt(formIct.value)
	console.log(totalMark)
	document.getElementById('total-mark').innerText = totalMark
}

const gpaPoint = () => {
	gpa = parseInt(totalMark / 7)
	document.getElementById('gpa-point').innerText = calculateGPA(gpa)
}

let gpaGrade = ''
const calculateGPA = (number) => {
	if (number >= 80) {
		return gpaGrade = 'A+'
	}else if (number >= 70 && number <= 79) {
		return gpaGrade = 'A'
	}else if (number >= 60 && number <= 69) {
		return gpaGrade = 'A-'
	}else if (number >= 50 && number <= 59) {
		return gpaGrade = 'B'
	}else if (number >= 40 && number <= 49) {
		return gpaGrade = 'C'
	}else if (number >= 33 && number <= 39) {
		return gpaGrade = 'D'
	}else if (number <= 32) {
		return gpaGrade = 'FAIL'
	}
	console.log(gpaGrade)
}



infoForms.addEventListener('submit', (e) => {
	e.preventDefault();
	setStudentNameAndRoll();
	updateMark();
	changeTotalMark();
	gpaPoint();
	updateGPA()
});
