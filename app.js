/**
 * @author Francisco Zapata
 */

const users = [
	{
		nombre: 'Daniel',
		correo: 'daniel.academlo@gmail.com',
		pais: 'México',
		social: [
			{ nombre: 'Facebook', url: 'facebook/daniel' },
			{ nombre: 'Youtube', url: 'youtube/daniel' },
		],
	},
	{
		nombre: 'Francisco',
		correo: 'francisco.academlo@gmail.com',
		pais: 'Venezuela',
		social: [
			{ nombre: 'Facebook', url: 'facebook/francisco' },
			{ nombre: 'Youtube', url: 'youtube/francisco' },
			{ nombre: 'Twitter', url: 'twitter/francisco' },
		],
	},
	{
		nombre: 'Raúl',
		correo: 'raul.academlo@gmail.com',
		pais: 'Colombia',
		social: [
			{ nombre: 'Facebook', url: 'facebook/raul' },
			{ nombre: 'Youtube', url: 'youtube/raul' },
		],
	},
	{
		nombre: 'Jorge',
		correo: 'jorge.academlo@gmail.com',
		pais: 'Chile',
		social: [
			{ nombre: 'Facebook', url: 'facebook/jorge' },
			{ nombre: 'Youtube', url: 'youtube/jorge' },
			{ nombre: 'Instagram', url: 'instagram/jorge' },
			{ nombre: 'GitHub', url: 'github/jorge' },
		],
	},
];

//Crear una tabla con cualquier técnica (flex, grid, tables, puros div) que muestre cada objeto del arreglo users

const main = document.querySelector('.main');

(function usersInfo() {
	for (let i = 0; i < users.length; i++) {
		let user = users[i];

		const redSocial = user.social.map(url => url.url);

		const usuarioInfo = document.createElement('div');
		usuarioInfo.classList.add('usuario-info', 'grid-container');
		const nombre = document.createElement('p');
		const correo = document.createElement('p');
		const pais = document.createElement('p');
		const social = document.createElement('p');

		let nombreUsuario = user.nombre;
		let correoUsuario = user.correo;
		let paisUsuario = user.pais;
		let red = redSocial.slice().join('\n');

		nombre.innerText = nombreUsuario;
		correo.innerText = correoUsuario;
		pais.innerText = paisUsuario;
		social.innerText = red;

		usuarioInfo.append(nombre);
		usuarioInfo.append(correo);
		usuarioInfo.append(pais);
		usuarioInfo.append(social);

		main.append(usuarioInfo);
	}
})();
