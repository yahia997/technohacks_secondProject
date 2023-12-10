"use client";
import { useState } from "react";
import styles from "../styles/all.module.css";

// Regex for email validation
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export default function Form() {
  const [email, setEmail] = useState("");
  const [valid , setValid] = useState(true); // just for first time

  function handleSubmit(e) {
    e.preventDefault();

    // Check email validation before submitting
    if(valid) {
      console.log("Submitted successfully");
    }
  }

  function handleChange(e) {
    setEmail(e.target.value);

    // Check email validation
    setValid(regex.test(e.target.value));
  }

  return (
    <form 
      className={`${styles.form} container`}
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className={styles.formInfo}>
          <h2 className="text-center">Get early access today</h2>
          <p className="text-center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.
          </p>
        </div>
        <div className={styles.field}>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={email}
              placeholder="example@example.com"
              name="email"
              onBlur={() => setValid(regex.test(email))}
            />
            <span className={`error ${!valid ? "show" : ""}`}>Please enter a valid email address</span>
          </div>
          <button 
            type="submit"
            className="btn-primary"
            disabled={!regex.test(email)}
          >Get Started For Free
          </button>
        </div>
      </div>
    </form>
  )
}