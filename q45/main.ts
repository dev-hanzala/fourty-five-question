function carMaker(manufacturer: string, model: string, ...options: [string, any][]): object {
	let car = {manufacturer, model}
	options.forEach(([key, value]) => car[key] = value);
	return car;
};

console.log(carMaker("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(carMaker("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

