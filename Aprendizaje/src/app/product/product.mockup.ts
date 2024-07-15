export const productList: Product[] = [
    {id: 1, nombre: 'Escoba', detalles: 'Duradera y muy practica'},
    {id: 2, nombre: 'Trapeador', detalles: 'De facil uso'},
    {id: 3, nombre: 'Detergente', detalles: 'Biodegradable'},
]

export interface Product{
    id?: number | string;
    nombre?: string;
    detalles?: string;
}