// carga de la API

const cargarPelicula = async() =>{
	try{
		const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=191528030c357419329af1198edbcb24");
		console.log(respuesta);

		if(respuesta.status === 200){
			const datos = await respuesta.json();

			let peliculas ="";
			datos.results.forEach( peliculas => {
				peliculas += `<div class="pelicula">
							  <img class="poster" scr=""

							  </div>
				
				`;
				
			});
		}

	} catch(error){
		console.log(error.messsage);
	}
}

cargarPelicula();