import { Products } from "@/app/interface";

const url = `${process.env.API_URL}/products`;

export const getProductsService = async () => {
    const response = await fetch(url, { next: { revalidate: 0 } });
    return await response.json() as Products[];
}

export const getProductsByIdService = async (id: number) => {
    const response = await fetch(url, {next: {revalidate: 0}});
    const products = await response.json() as Products[];
    return products.filter( (p) => p.id === Number(id))[0]
}