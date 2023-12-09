import Link from "next/link";
import styles from "../styles/all.module.css";
import Image from "next/image";

export default function StayProductive() {
  return (
    <section className={`container`}>
      <div className={`row ${styles.stayProductive}`}>
        <div>
          <Image
            src="/illustration-stay-productive.png"
            width={400}
            height={400}
            style={{height: 'auto'}}
            alt="stay productive"
          />
        </div>
        <div>
          <h1>Stay productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
          <Link 
            href={"/work"}
            className={styles.specialLink}
          >See how Fylo works</Link>
        </div>
      </div>
    </section>
  )
}