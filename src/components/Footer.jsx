import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="https://img.freepik.com/free-vector/gradient-programming-company-logo-template_23-2148807613.jpg?semt=ais_hybrid"
          width={200}
          className="my-20"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center gap-8 ">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <p className="mt-8 text-center tracking-wide text-gray-400 ">
        &copy;Personal Portfolio All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
