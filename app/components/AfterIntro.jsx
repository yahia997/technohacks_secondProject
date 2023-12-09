import styles from "../styles/all.module.css";
import Image from "next/image";

// Advantages component
function Advantage({url, head, p}) {
  return (
    <div className={styles.SContent}>
      <Image
        src={`/${url}`}
        width={70}
        height={70}
        alt={head}
        style={{height: 'auto'}}
      />
      <h3 className="text-center">{head}</h3>
      <p className="text-secondary text-center">{p}</p>
    </div>
  )
}

export default function AfterIntro() {
  return (
    <section className={`container`}>
      <div className={`row ${styles.afterIntro}`}>
        <Advantage
          url="icon-access-anywhere.svg"
          head="Access your files, anywhere"
          p="The ability to use a smartphone, tablet, or computer to access your account means your 
          files follow you everywhere."
        />
        <Advantage
          url="icon-security.svg"
          head="Security you can trust"
          p="2-factor authentication and user-controlled encryption are just a couple of the security 
          features we allow to help secure your files."
        />
        <Advantage
          url="icon-collaboration.svg"
          head="Real-time collaboration"
          p="Securely share files and folders with friends, family and colleagues for live collaboration. 
          No email attachments required."
        />
        <Advantage
          url="icon-any-file.svg"
          head="Store any type of file"
          p="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
          file types to be securely stored and shared."
        />
      </div>
    </section>
  )
}