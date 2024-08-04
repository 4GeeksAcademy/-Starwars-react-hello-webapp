const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {  
			//variables generasles
			personajes: [], // Esto es flux
			planetas: [],
			vehiculos: [],



			//variables especificas
			personajes: [], // Esto es flux
			planetas: [],
			vehiculos: [],
		},
		actions: {
			getPersonajes: () => {
				try {
					const response = await axios.get('https://www.swapi.tech/api/people/1/')
						if (response.data){
							console.log(response.data)
							console.log(response.data.results)
							setStore({personajes: response.data.results})
						}
				}
				catch(error){
					console.log("Ha habido un error con los personajes" + error)
				}


				
			}




			getVehiculos: () => {
				try {
					const response = await axios.get('https://www.swapi.tech/api/vehicles/4')
						if (response.data){
							console.log(response.data)
							console.log(response.data.results)
							setStore({personajes: response.data.results})
						}
				}
				
				catch(error){
					console.log("Ha habido un error con los personajes" + error)
				}
			}





				getPlanetas: () => {
					try {
						const response = await axios.get(´https://www.swapi.tech/api/planets/1`)
							if (response.data){
								console.log(response.data)
								console.log(response.data.results)
								setStore({personajes: response.data.results})
							}
					}
					catch(error){
						console.log("Ha habido un error con los personajes" + error)
					}
				}

					//funciones especificas.

					getPersonajes: () => {
						try {
							const response = await axios.get(´https://www.swapi.tech/api/people/1/`)
								if (response.data){
									console.log(response.data)
									console.log(response.data.results)
									setStore({personajes: response.data.results})
								}
						}
						catch(error){
							console.log("Ha habido un error con los personajes" + error)
						}
					}
	

						getVehiculos: () => {
							try {
								const response = await axios.get('https://www.swapi.tech/api/vehicles/4')
									if (response.data){
										console.log(response.data)
										console.log(response.data.results)
										setStore({personajes: response.data.results})
									}
							}
							catch(error){
								console.log("Ha habido un error con los personajes" + error)
							}
						}
			
			
			
			
			
							getPlanetas: () => {
								try {
									const response = await axios.get('https://www.swapi.tech/api/planets/1')
										if (response.data){
											console.log(response.data)
											console.log(response.data.results)
											setStore({personajes: response.data.results})
										}
								}
								catch(error){
									console.log("Ha habido un error con los personajes" + error)
								}
							}
			

















			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
