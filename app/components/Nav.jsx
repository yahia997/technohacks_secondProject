import Image from "next/image"
import styles from "../styles/all.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={`container`}>
      <div className={`row ${styles.nav} `}>
        <div>
          <Image
            src="/logo.svg"
            alt="Fylo logo"
            width={88}
            height={26}
            priority
          />
        </div>
        <div className={styles.navLinks}>
          <Link className="text-secondary" href="/features">Features</Link>
          <Link className="text-secondary" href="/team">Team</Link>
          <Link className="text-secondary" href="/sign-in">Sign in</Link>
        </div>
      </div>
    </nav>
  )
}