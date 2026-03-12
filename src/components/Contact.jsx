import { ExternalLink, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const fade = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const Contact = () => {
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(true);
  const form = useRef();



const sendEmail = (e) => {
    e.preventDefault();
    if(e.target.user_name.value == null || e.target.user_name.value.trim() == ""){
      setErrors("Name is required")
      return
    }else if(e.target.user_email.value == null || e.target.user_email.value.trim() == ""){
      setErrors("Email is required")
      return
    }else if(e.target.message.value == null || e.target.message.value.trim() == ""){
      setErrors("message is required")
      return
    }else(
      setErrors(null)
    )
    setLoading(false);

    // Create modified data for auto-reply (if needed)
    const autoReplyData = {
      user_email: e.target.user_email.value, // Send to user's email
      user_name: e.target.user_name.value,
      // Add any other auto-reply specific data
    };

    Promise.all([
      // Contact us email (to you)
      emailjs.sendForm("default_service", "template_jvnon2l", form.current, {
        publicKey: "mWE79mxrIXH8ilM-0",
      }),
      // Auto-reply email (to user) - using send instead of sendForm for custom data
      emailjs.send("default_service", "template_jf1hd4v", autoReplyData, {
        publicKey: "mWE79mxrIXH8ilM-0",
      }),
    ]).then(
      (results) => {
        console.log("Success!");
        document.querySelector(".nameInput").value = "";
        document.querySelector(".emailInput").value = "";
        document.querySelector(".messageInput").value = "";
        setLoading(true);
      },
      (error) => {
        console.log("Error:", error.text);
        setLoading(true);
      }
    );
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 mx-auto py-20 max-w-6xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(39,203,203,0.08),transparent_40%)]" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fade} initial="hidden" whileInView="show">
          <h2 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-400">
            Let’s work together
          </h2>

          <p className="mt-6 text-gray-400 max-w-md text-lg">
            Have an opportunity or project in mind?
            Send a quick message - I usually respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <motion.a
              whileHover={{ x: 6 }}
              href="https://github.com/zelalem888"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <FaGithub className="text-2xl" />
              <div>
                <p className="font-medium text-gray-200">GitHub</p>
                <p className="text-sm text-gray-400">Explore my projects</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" />
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href="https://www.linkedin.com/in/zelalemlegesse/"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <div>
                <p className="font-medium text-gray-200">LinkedIn</p>
                <p className="text-sm text-gray-400">Let’s connect</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" />
            </motion.a>
          </div>
        </motion.div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-8 rounded-3xl border border-gray-800 bg-linear-to-b from-gray-900/60 to-gray-900/30 backdrop-blur-xl space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-200">
            Send a Message
          </h3>

          <div>
            <input
              placeholder="Your Name"
              type="text"
              name="user_name"
              disabled={`${loading ? "" : true}`}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500 nameInput"
            />
          
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              disabled={`${loading ? "" : true}`}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500 emailInput"
            />
          
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              disabled={`${loading ? "" : true}`}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500 messageInput"
            />
            {errors && (
              <p className="text-sm text-red-400 mt-1">{errors}</p>
            )}
          </div>

          {/* <button type="submit" className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-medium">
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "Send Message"}
          </button> */}
          <input
              className={`cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium hover:bg-emerald-600/50 ${
                loading ? "bg-emerald-700/50" : ` bg-red-400/50`
              }`}
              type="submit"
              value={`${loading ? "Send" : "Sending..."}`}
            />

        
        </form>
      </div>
    </section>
  );
}

export default Contact;