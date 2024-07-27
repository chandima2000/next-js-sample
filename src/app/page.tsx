import Link from "next/link"

export default function page() {
  return (
    <>
     <h1>
      Hello World!
    </h1>
    <Link href="/blog">Blog</Link>
    <Link href='/products'>Product</Link>
    </>
   
  )
}
