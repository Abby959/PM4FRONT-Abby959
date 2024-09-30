
import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductsByIdService } from "@/services/productsServices";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
    const product = await getProductsByIdService(Number(params.id))

    if (!product) notFound()

    const { description, price, image, name, stock } = product

    return (
        <main className="flex">
            <div className='w-full min-h-[500px] p-4 box-content flex gap-1 items-center'>
                <div className='w-[400px] h-[300px] flex-1'>
                    <Image
                        src={image}
                        alt={"Iphone"}
                        className="dark:invert object-contain w-full h-full"
                        width={300}
                        height={200}
                        priority
                    />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl">
                            {name}
                        </span>
                        <span>Price: {price}</span>
                    </div>
                    <div>
                        {description}
                    </div>
                    <BuyButton product={product} />
                </div>
            </div>
        </main>
    )
}

export default page