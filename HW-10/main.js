//  Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з
// id="text".

let div = document.getElementById("text");
let button = document.getElementsByClassName("button")[0];


button.addEventListener("click", function (e) {
	div.classList.toggle("hidden");
})

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача

let input = document.getElementsByName("age")[0];
let submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", function (e) {
	e.preventDefault();

	let age = Number(input.value);
	console.log(age)
	if (age < 18) {
		console.log('You are not yet an adult')
	} else {
		console.log('You are adult')
	}
	input.value = "";
})

//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.getElementsByTagName('form')[0];
console.log(form);