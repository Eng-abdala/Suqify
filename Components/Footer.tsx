import Link from "next/link"

function Footer() {
  return (
    <div>
      <footer className="  footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">T-Shirts</h6>
    <a className="link link-hover">Shoes</a>
    <a className="link link-hover">Electronics</a>
    <a className="link link-hover">Rings</a>
    <a className="link link-hover">Screens</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link className="link link-hover" href="/home">Home</Link>
    <Link className="link link-hover" href="/products">Products</Link>
    <Link className="link link-hover" href="/about">About us</Link>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer
