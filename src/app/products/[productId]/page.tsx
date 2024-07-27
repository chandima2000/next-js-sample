import { Metadata } from "next";

type props = {
  params: {
    productId: string
  };
};


export const generateMetaData = async ({ params }: props): Promise<Metadata> => {

  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iphone ${params.productId}`), 100);
  });
  return {

    title: `Product ${title}`

  }

}

export default function ProductDetails({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  )
}
