 interface product { id: number; title: string; 
  image:string;
  price:number;
  description: string,
 }

async function Details({ params }: { params: Promise<{ id: string }> }) {
     const { id } = await params
     
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product:product = await response.json()


  return (
    <div>
        

  <div key={product.id} className="hero  bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      alt="Tailwind CSS hero component "
      src={product.image}
      className="max-w-sm rounded-lg shadow-2xl w-60"
      />
    <div>
      <h1 className ="text-5xl font-bold">{product.title}</h1>
      <p className="py-6">
       {product.description}
      </p>
      <p className="py-1 text-blue-500">
        {product.price}

      </p>
      <button className="btn btn-primary">By Now</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Details
