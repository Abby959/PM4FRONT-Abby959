import { Products } from "@/app/interface";

export const getProductsService = async () => {
    try {
        const url = `${process.env.API_URL}/products`;
        const response = await fetch(url, { next: { revalidate: 0 } });
        return await response.json() as Products[];
    } catch (error) {
        console.log(error)
    }
}

export const getProductsByIdService = async (id: number) => {
    const url = `${process.env.API_URL}/products`;
    const response = await fetch(url, { next: { revalidate: 0 } });
    const products = await response.json() as Products[];
    return products.filter((p) => p.id === Number(id))[0]
}