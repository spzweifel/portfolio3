import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { send } from "emailjs-com";
import { Button } from "react-bootstrap";
import "./Contact.css";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const isValid = validateEmail(formState.email);
    console.log(email)
    const templateParams = {
      from_name: formState.name,
     message: formState.message,
     reply_to: formState.email
}
console.log(templateParams)
console.log(isValid)

    if (isValid) {
      send(
        "service_98xy2dk",
        "template_m1xtsrq",
        templateParams,
        "Obw9fk-2mmeTJBvdg"
      ).then(
        (result) => {
          console.log(result.text);
          alert("Your message has been received. Thanks for reaching out!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }
  return (
    <div className="row">
      <h2 className="my-3 contact-form-text3">Contact me</h2>
      <section className="col-12 col-md-6 d-block">
        <br />

        <h2 className="contact-form-text">Click The Button Below to Email Sean Directly</h2>
        <br />

        <a href="mailto:spzweifel@gmail.com" className="email">
          <Button className="contact-form-text1">spzweifel@gmail.com</Button>
        </a>
      </section>
      <br />
      <section>
        <h2 className="contact-form-text">Alternatively, Fill Out The Form Below</h2>
      </section>
      <section className="text col-12 col-md-6">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="m-1 d-block contact-form-text" htmlFor="name">
              <div className="formLabel">Name:</div>
            </label>
            <input
              className="form-control1 contact-form-text"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="What is your name?"
              onBlur={handleChange}
            />
          </div>
          <div>
            <label className="m-1 d-block contact-form-text" htmlFor="email">
              <div className="formLabel">Email address:</div>
            </label>
            <input
              className="form-control1 contact-form-text"
              type="text"
              name="email"
              defaultValue={email}
              placeholder="What is your email?"
              onBlur={handleChange}
            />
          </div>
          <div>
            <label className="m-1 d-block contact-form-text" htmlFor="message">
              <div className="formLabel">Message:</div>
            </label>
            <textarea
              className="form-control contact-form-text"
              name="message"
              rows="4"
              defaultValue={message}
              placeholder="Leave your message here!"
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text contact-form-text">{errorMessage}</p>
            </div>
          )}
          <br />
          <Button type="submit" className="contact-form-text2">Submit</Button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;