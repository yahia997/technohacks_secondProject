import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <Image
          src="/logo.svg"
          alt="Fylo logo"
          width={88}
          height={26}
          priority
          className="footer-logo"
        />
        <div>
          <p>
            <Image
              src="/icon-location.svg"
              alt="location"
              width={13}
              height={19}
            /> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua
          </p>
        </div>
        <ul>
          <li>
            <p>
              <Image
                src="/icon-phone.svg"
                alt="phone"
                width={18}
                height={18}
              />
              +1-543-123-4567
            </p>
          </li>
          <li>
            <p>
              <Image
                src="/icon-email.svg"
                alt="email"
                width={20}
                height={16}
              />
              example@fylo.com
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/jobs">jobs</Link>
          </li>
          <li>
            <Link href="/press">Press</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/contat-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
        </ul>
        <div className="social-media">
          {/* Social media icons will be here (using fontawesome) */}
          <a href="/...">
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a href="/...">
            <i className="fa-brands fa-twitter fa-2xl"></i>
          </a>
          <a href="/...">
            <i className="fa-brands fa-square-instagram fa-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}