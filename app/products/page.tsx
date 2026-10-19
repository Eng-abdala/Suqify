import Link from "next/link";

 interface product { id: number; title: string; 
  image:string;
  price:number
  description: string
  
}

async function Products() {

    const url ="https://fakestoreapi.com/products/";

    const response = await fetch(url)
    const products:product[] = await response.json()


  return (
    <div className="w-full grid grid-cols-3 gap-5">
        {
          products.map((product)=>(
            <div key={product.id} className="card bg-base-100 w-80 h-90  p-6 shadow-sm text-center items-center">
  <figure>
    <img className="w-40"
      src={product.image} 
      alt="Shoes" />
  </figure>
    <div className="card-body ">
    <h2 className="card-title text-[15px]">{product.title}</h2>
    <p className="font-bold text-red-500">{product.price}</p>
    
    <div className="card-actions justify-center">
      <Link href={`/products/${product.id}`} className="text-gray-400">Veiw More...</Link>
    </div>
  </div>
</div>

          ))
        }


    </div>
  )
}

export default Products
