// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field

import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.Value;


    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
      if (!validateEmail(inputValue)) {
        setErrorMessage("Please, enter a valid email address.");
      } else {
        setErrorMessage("");
      }
    } else {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="main">
      <form className="contactForm">
        <h3>Contact Me</h3>
        <p>
          If you'd like to get into contact with me, please, leave your name and
          a message.
        </p>
        <input
          id="name"
          className="input"
          value={name}
          placeholder="Name"
          type="text"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></input>
        <input
          id="email"
          className="input"
          value={email}
          placeholder="Email"
          type="email"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></input>
        <p>
          {errorMessage && (
            <span className="error-text text-danger">{errorMessage}</span>
          )}
        </p>
        <textarea
          id="message"
          className="message"
          value={message}
          placeholder="Type your message here!"
          type="text"
          onChange={handleInputChange}
          onBlur={handleInputChange}
        ></textarea>
        <input
          id="submit"
          type="submit"
          className="submit"
          value="Submit"
          onClick={handleSubmit}
        ></input>
      </form>
    </div>
  );
};

export default Contact;



//learn how to actually access and see the messages left