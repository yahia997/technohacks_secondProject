import styles from "../styles/all.module.css";
import Image from "next/image";

// Box component
function Box({p, name, url, role}) {
  return (
    <div className={styles.box}>
      <p>{p}</p>
      <div>
        <div>
          <Image
            src={`/${url}`}
            width={40}
            height={40}
            alt={name}
          />
        </div>
        <div>
          <strong>{name}</strong>
          <p>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Boxes() {
  return (
    <section className={`container`}>
      <div className={`row ${styles.boxes}`}>
        <Box
          p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
          role="Founder & CEO, Huddle"
          name="Satish Patel"
          url="profile-1.jpg"
        />
        <Box
          p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
          role="Founder & CEO, Huddle"
          name="Bruce McKenzie"
          url="profile-2.jpg"
        />
        <Box
          p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
          role="Founder & CEO, Huddle"
          name="Iva Boyd"
          url="profile-3.jpg"
        />
      </div>
    </section>
  )
}