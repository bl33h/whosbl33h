/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ContactForm.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "whoisbl33h",
      "template1",
      e.target,
      "JjC_Nnt4rUsjIsRtz"
    )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert('Thank you I will get back to you as soon as possible ! (:');
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };  

  return (
    <div className="justify-center"
  style={{
    backgroundImage:
      "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
    width: "100%",
    height: "95%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
  }}
>
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-400 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["LETS'S GET IN TOUCH!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-primary-200"
        >
          <div className="w-full flex flex-col">
          <label htmlFor="firstname" style={{ fontWeight: 'bold', fontSize: '18px' }}>First Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Enter your First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="lastname" style={{ fontWeight: 'bold', fontSize: '18px' }}>Last Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Enter your Last Name"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="email" style={{ fontWeight: 'bold', fontSize: '18px' }}>E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Enter your E-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="message" style={{ fontWeight: 'bold', fontSize: '18px' }}>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950 bac bg-primary-200"
              placeholder="Enter your message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
          <input
            className="w-[100px] h-[50px] bg-primary-400 rounded-xl cursor-pointer hover:bg-primary-700 mb-5"
            type="submit"
            value={!isSent ? 'Send' : 'Done!'}
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;