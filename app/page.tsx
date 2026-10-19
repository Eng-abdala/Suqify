import Link from "next/link"

function page() {
  return (
    <div>
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6JccWKfTSZsNVqj76kIxlWnLHTjwliZpyIYN-tVpnqmYscewKZ1550Y&s=10)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        We are suqify the best online market in somalia <br />
        
      </p>
      <Link className="btn btn-primary" href="/products" >Get Started</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default page
