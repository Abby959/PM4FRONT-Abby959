
import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductsByIdService } from "@/services/productsServices";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {

    

    const product = await getProductsByIdService(Number(params.id))

    if(!product) notFound()

    return (
        <main>
            {product.name}
            {product.image}
            {product.description}
            <BuyButton product={product}/>
        </main>
    )
}

export default page