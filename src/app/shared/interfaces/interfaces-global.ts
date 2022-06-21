export interface Product {
	corniceLength: number;
	curtainWidth: number;
	curtainHeight: number;
	title: string;
	brand: string;
	color: string;
	imgUrl: string;
	country: string;
	material: string;
	productType: string;
	price: number;
	currency: string;
	id?: string;
}

export interface FirebaseCreateProduct {
	name: string;
}

export interface FirebaseGetAllProduct {
	[key: string]: Product
}
