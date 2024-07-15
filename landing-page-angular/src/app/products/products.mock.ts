export const productsList: Product[] = [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 litro'},
    {id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados'},
    {id: 3, name: 'Limpi Vidrios', price: 7, description: 'Tus vidrios transparentes'},
    {id: 4, name: 'Quita Grasa', price: 8},
    {id: 5, name: 'Perfumina', price: 2, description: 'El olor a campo más natural'},
]

export interface Product{
    id: number | string;
    name: string;
    price: number;
    description?: string;
}