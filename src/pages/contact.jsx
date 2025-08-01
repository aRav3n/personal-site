import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Coins, Mail, MessageSquareX, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import "../style/contact.css";

function BasicContact({
  formToDisplay,
  email,
  setEmail,
  message,
  setMessage,
  name,
  setName,
}) {
  if (formToDisplay !== "basic") {
    return null;
  }

  return (
    <form>
      <label htmlFor="name">
        Name <span>Required</span>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="email">
        Email <span>Required</span>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="message">
        Message <span>Required</span>
        <textarea
          name="message"
          id="message"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </label>
    </form>
  );
}

function QuoteRequest({
  formToDisplay,
  company,
  setCompany,
  email,
  setEmail,
  deadline,
  setDeadline,
  designConcept,
  setDesignConcept,
  inspiration,
  setInspiration,
  location,
  setLocation,
  message,
  setMessage,
  name,
  setName,
}) {
  if (formToDisplay !== "quote") {
    return null;
  }

  return (
    <form>
      <label htmlFor="name">
        Name <span>Required</span>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="email">
        Email <span>Required</span>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="company">
        Company Name
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
      </label>
      <label htmlFor="location">
        Location
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </label>
      <label htmlFor="message">
        Summary of your project <span>Required</span>
        <textarea
          name="message"
          id="message"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </label>
      <label htmlFor="deadline">
        Project deadline <span>If applicable</span>
        <input
          type="date"
          name="deadline"
          id="deadline"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
        />
      </label>
      <label htmlFor="design-concept">
        Design concept <span>If you have one</span>
        <textarea
          name="design-concept"
          id="design-concept"
          value={designConcept}
          onChange={(e) => {
            setDesignConcept(e.target.value);
          }}
        ></textarea>
      </label>
      <label htmlFor="inspiration">
        Other sites to use for inspiration
        <textarea
          name="inspiration"
          id="inspiration"
          value={inspiration}
          onChange={(e) => {
            setInspiration(e.target.value);
          }}
        ></textarea>
      </label>
    </form>
  );
}

export default function ContactPage() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [deadline, setDeadline] = useState("");
  const [designConcept, setDesignConcept] = useState("");
  const [formToDisplay, setFormToDisplay] = useState(null);
  const [inspiration, setInspiration] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const templateId = "contact_form";
  const emailServiceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  function clearStates() {
    setCompany("");
    setEmail("");
    setDeadline("");
    setDesignConcept("");
    setInspiration("");
    setLocation("");
    setMessage("");
    setName("");
    setErrorMessage("");
  }

  function sendEmail(title, name, message, email) {
    const time = new Date();

    const body = {
      time,
      title,
      name,
      message,
      email,
    };

    emailjs
      .send(emailServiceId, templateId, body, {
        publicKey: publicKey,
      })
      .then((error) => {
        if (error.status !== 200) {
          setErrorMessage(error.text);
        }
      });
  }

  function handleClick() {
    setErrorMessage("");
    if (email.length === 0 || name.length === 0 || message.length === 0) {
      let newMessage;
      if (email.length === 0) {
        newMessage = "An email is required. ";
      }
      if (name.length === 0) {
        newMessage = newMessage + "A name is required. ";
      }
      if (message.length === 0) {
        newMessage = newMessage + "A message is required. ";
      }
      setErrorMessage(newMessage);
      return;
    }

    const title =
      formToDisplay === "basic"
        ? `General - ${name}`
        : `Quote Request - ${name} - ${company}`;

    const messageToSend =
      formToDisplay === "basic"
        ? message
        : `
    ${name} with ${company} would like a quote.
    ${location ? `Location : ${location}` : ""}
    ${deadline ? `Deadline : ${deadline}` : ""}
    ${designConcept ? `Design concept : ${designConcept}` : ""}
    ${inspiration ? `Deadline : ${inspiration}` : ""}
    
    ${message}
    `;

    sendEmail(title, name, messageToSend, email);

    clearStates();
  }

  return (
    <main>
      <h1>Contact Me</h1>
      <p className="contact-about">
        Hey there! If you think we'd be a good fit and would like to work
        together, or just have questions and comments, send me a message!
      </p>
      <div className="contact">
        <div>
          <Link to="https://github.com/aRav3n">
            <ion-icon name="logo-github"></ion-icon> GitHub
          </Link>
          <Link to="https://www.linkedin.com/in/andrew-ryan-/">
            <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
          </Link>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              if (formToDisplay !== "basic") {
                setFormToDisplay("basic");
              } else {
                setFormToDisplay(null);
              }
            }}
          >
            <Mail />
            General Message
          </button>
          <button
            type="button"
            onClick={() => {
              if (formToDisplay !== "quote") {
                setFormToDisplay("quote");
              } else {
                setFormToDisplay(null);
              }
            }}
          >
            <Coins /> Request a Quote
          </button>
        </div>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
        <div>
          <BasicContact
            formToDisplay={formToDisplay}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            name={name}
            setName={setName}
          />
          <QuoteRequest
            formToDisplay={formToDisplay}
            company={company}
            setCompany={setCompany}
            email={email}
            setEmail={setEmail}
            deadline={deadline}
            setDeadline={setDeadline}
            designConcept={designConcept}
            setDesignConcept={setDesignConcept}
            inspiration={inspiration}
            setInspiration={setInspiration}
            location={location}
            setLocation={setLocation}
            message={message}
            setMessage={setMessage}
            name={name}
            setName={setName}
          />
          {formToDisplay ? (
            <div className="bottom-buttons">
              <button type="button" onClick={handleClick}>
                <Send />{" "}
                {formToDisplay === "basic"
                  ? "Send your message"
                  : "Send quote request"}
              </button>
              <button type="button" onClick={clearStates}>
                <MessageSquareX /> Start over
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
