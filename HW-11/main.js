// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// 	#whXxOBlYS0H
// 	- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const carts = async () => {
	 return await  fetch('https://dummyjson.com/carts')
		.then(res => res.json())
		.then(data => data)
		.catch(err => console.log(err));
}


carts().then(({carts}) => {

	carts.map(({products}) => {
		for (let product of products) {

			let div = document.createElement('div');
			let title = document.createElement('h2');
			let text = document.createElement('p');
			let img = document.createElement('img');

			title.innerText = product.title;
			text.innerText = product.price;
			img.setAttribute('src', product.thumbnail);

			document.body.appendChild(div);
			div.append(title,img,text);
		}
	})
})