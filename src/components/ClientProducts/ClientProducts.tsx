import React from 'react'
import Card from '../card'
import { getProductsService } from '@/services/productsServices';

const products = [
  {
    id: 1,
    name: "iPhone 11",
    description: "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    price: 699,
    stock: 10,
    image: "https://images.pexels.com/photos/9555102/pexels-photo-9555102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categoryId: 1
  },
  {
    id: 2,
    name: "MacBook Air",
    description: "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    price: 999,
    stock: 10,
    image: "https://images.macrumors.com/t/cmiOFijobaEbGyHuqwKR2rEaaFI=/800x0/article-new/2020/10/macbook-pro-13-inch-banner.jpeg?lossy",
    categoryId: 2
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2021/04/apple_ipad-pro-spring21_hero_04202021-H-2021-1618941973.jpg?w=1296&h=730&crop=1&resize=681%2C383",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.apple.com/v/airpods-pro/l/images/overview/case_front__r6ng7f1x18a6_large.png",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/newsroom/images/product/homepod/standard/Apple-HomePod-hero-230118_big.jpg.large.jpg",
    categoryId: 6,
    stock: 10,
  },

]

const ClientProducts = async () => {
  // const products = await getProductsService()


  // const ClientProducts = () => {
  //     const [data, setData] = useState<Products[]>([]);
  //     const [isLoading, setIsLoading] = useState(true);
  //     const [hasError, setHasError] = useState(false);

  //     useEffect(() => {
  //         setIsLoading(true);
  //         setTimeout(()=> {
  //             setData(products);
  //             setIsLoading(false);
  //             setHasError(false);
  //         }, 2000);
  //     }, []);

  //     if (isLoading) return <h1>Loading...</h1>;
  //     if (hasError) return <h1>Ups!</h1>;
  return (
    <div className='flex flex-wrap gap-3 justify-center'>
      {products.map((p, i) => (
        <Card
          key={i}
          categoryId={p.categoryId}
          id={p.id}
          name={p.name}
          description={p.description}
          price={p.price}
          stock={p.stock}
          image={p.image} />
      ))}
    </div>
  );
};

export default ClientProducts
