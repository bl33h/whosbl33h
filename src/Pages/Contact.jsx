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
			className="  w-full overflow-hidden-web flex flex-col align-center"
		>
			<div className="w-full min-h-[800px] flex flex-col xl:w-[70%] mx-auto">
				<div className="w-full">
					<SectionTitle title="CONTACT" subtitle="Get in touch" />
				</div>
				<div className="  flex  justify-center items-center w-full">
					<LazyMotion features={domAnimation} strict>
						<m.div
							initial={{ x: 200 }}
							whileInView={{ x: 0 }}
							transition={{ duration: 0.6, type: "spring" }}
							className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
						>
							<div className="flex justify-center mx-auto w-full">
								{/* Added mx-auto */}
								<ContactForm />
							</div>
						</m.div>
					</LazyMotion>
				</div>
			</div>
			<div className="w-full flex flex-col">
				<SocialLinks />
			</div>
		</div>
	);
};

export default Contact;
