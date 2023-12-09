import styles from "../styles/all.module.css";
import Image from "next/image";

export default function Starter() {
  return  (
    <section className={`${styles.starter} container`}>
      <div className="row">
        <Image
          src="/illustration-intro.png"
          width={720/1.5}
          height={543/1.5}
          alt="illustration intro"
          priority
        />
        <div>
          <h1 className="text-center">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-center">
            Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  )
}