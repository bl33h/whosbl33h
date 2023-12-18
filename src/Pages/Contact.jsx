/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Contact.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex justify-center"></div>
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-grayscale-950 flex justify-center pb-4 text-grayscale-50">
          <span>
            Made by <em>Sara Echeverría (bl33h)</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
