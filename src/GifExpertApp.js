import React, { useState } from 'react';
import AgregarCategoria from './components/AgregarCategoria';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

	const [categorias, setCategorias] = useState(['Hunter x Hunter', 'Parasyte', 'One punch',]);

	// const agregarCategoria = categoria => {
	//     setCategorias([...categorias, categoria]);
	// }

	return (
		<div>
			<h2>Gift Expert</h2>
			<AgregarCategoria setCategorias={setCategorias}  ></AgregarCategoria>
			<hr></hr>
			<ol>
				{
					categorias.map(categoria => (<GifGrid key={categoria} categoria={categoria} />))
				}
			</ol>

		</div>
	)
}
