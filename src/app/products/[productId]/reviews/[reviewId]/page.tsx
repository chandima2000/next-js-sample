import { notFound } from "next/navigation"

export default function ReviewId( 
    {params} : {params : { 
        productId:string
        reviewId:string
    }}
 ) {

  if (parseInt(params.reviewId)>1000){
    return notFound()
  }
  return (
    <div>
      <h1>Review {params.reviewId} for Product {params.productId}</h1>
    </div>
  )
}
