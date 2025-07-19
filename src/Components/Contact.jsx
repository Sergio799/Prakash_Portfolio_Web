// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// // Initialize EmailJS
// emailjs.init({ publicKey: "sMlZfMjsu6yGN840i", debug: true });

// const Contact = () => {
//   const formRef = useRef();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const result = await emailjs.sendForm(
//         "service_04tipsn",
//         "template_xvhi343",
//         formRef.current,
//         "sMlZfMjsu6yGN840i"
//       );

//       console.log("SUCCESS!", result.text);
//       setError(false);
//       formRef.current.reset(); // Clear the form
//     } catch (error) {
//       console.log("FAILED...", error.text);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`max-w-md w-full mx-auto my-8 rounded-lg shadow-lg bg-[#0F162C] bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='10' fill='%23404050'/%3E%3C/svg%3E")] bg-repeat transition-all duration-200 ease-out pt-16`}
//       >
//         <h2 className="text-3xl text-center text-[#A3BFFA] font-bold mb-6">
//           Contact Me
//         </h2>
//         <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
//           <div className="transform transition duration-200 ease-out hover:translate-x-1">
//             <label
//               className="block text-[#A3BFFA] text-base font-semibold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               placeholder="ex:sai prakash"
//               className="w-full px-3 py-2 border rounded-full bg-gray-800/50 text-[#A3BFFA] border-gray-700 focus:border-[#A3BFFA] focus:ring-1 transition-colors duration-200 ease-out placeholder-[#A3BFFA]/70"
//               required
//               type="text"
//               name="user_name"
//               id="name"
//             />
//           </div>

//           <div className="transform transition duration-200 ease-out hover:translate-x-1">
//             <label
//               className="block text-[#A3BFFA] text-base font-semibold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               placeholder="ex:prakash@gmail.com"
//               className="w-full px-3 py-2 border rounded-full bg-gray-800/50 text-[#A3BFFA] border-gray-700 focus:border-[#A3BFFA] focus:ring-1 transition-colors duration-200 ease-out placeholder-[#A3BFFA]/70"
//               required
//               type="email"
//               name="user_email"
//               id="email"
//             />
//           </div>

//           <div className="transform transition duration-200 ease-out hover:translate-x-1">
//             <label
//               className="block text-[#A3BFFA] text-base font-semibold mb-2"
//               htmlFor="message"
//             >
//               Leave a Message
//             </label>
//             <textarea
//               placeholder="ex:I want to meet you!"
//               className="w-full px-3 py-2 border rounded-xl bg-gray-800/50 text-[#A3BFFA] border-gray-700 focus:border-[#A3BFFA] focus:ring-1 transition-colors duration-200 ease-out placeholder-[#A3BFFA]/70 min-h-[100px] resize-y"
//               required
//               name="message"
//               id="message"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-[#4A5D7A]/70 text-[#A3BFFA] py-3 px-4 rounded-full font-semibold text-base transition duration-200 ease-out hover:bg-[#4A5D7A]/80 hover:shadow-[0_4px_12px_rgba(163,191,250,0.3)] focus:ring-1 focus:ring-[#A3BFFA] active:scale-[0.98] ${
//               loading ? "opacity-70 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {error !== null && (
//             <div
//               className={`text-center mt-4 ${
//                 error ? "text-red-500" : "text-[#A3BFFA]"
//               }`}
//             >
//               {error ? "Failed to send message" : "Message sent successfully!"}
//             </div>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };
// export default Contact;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init({ publicKey: "sMlZfMjsu6yGN840i", debug: true });

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_04tipsn",
        "template_xvhi343",
        formRef.current,
        "sMlZfMjsu6yGN840i"
      );

      console.log("SUCCESS!", result.text);
      setError(false);
      formRef.current.reset(); // Clear the form
    } catch (error) {
      console.log("FAILED...", error.text);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`max-w-md w-full mx-auto my-8 rounded-lg shadow-lg bg-[#0F162C] bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='10' fill='%23404050'/%3E%3C/svg%3E")] bg-repeat transition-all duration-200 ease-out p-6`}
      >
        <h2 className="text-3xl text-center text-[#A3BFFA] font-bold mb-6">
          Contact Me
        </h2>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 text-center"
        >
          <div className="transform transition duration-200 ease-out hover:translate-x-1">
            <label
              className="block text-[#A3BFFA] text-base font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              placeholder="ex:sai prakash"
              className="w-full px-3 py-2 border rounded-full bg-gray-800/50 text-[#A3BFFA] border-gray-700 focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]/50 transition-colors duration-200 ease-out placeholder-[#A3BFFA]/70"
              required
              type="text"
              name="user_name"
              id="name"
            />
          </div>

          <div className="transform transition duration-200 ease-out hover:translate-x-1">
            <label
              className="block text-[#A3BFFA] text-base font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="ex:prakash@gmail.com"
              className="w-full px-3 py-2 border rounded-full bg-gray-800/50 text-[#A3BFFA] border-gray-700 focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]/50 transition-colors duration-200 ease-out placeholder-[#A3BFFA]/70"
              required
              type="email"
              name="user_email"
              id="email"
            />
          </div>

          <div className="transform transition duration-200 ease-out hover:translate-x-1">
            <label
              className="block text-[#A3BFFA] text-base font-semibold mb-2"
              htmlFor="message"
            >
              Leave a Message
            </label>
            <textarea
              placeholder="ex:I want to meet you!"
              className="w-full px-3 py-2 border rounded-xl bg-gray-800/50 text-[#A3BFFA] border-gray-700 focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]/50 transition-colors duration-200 ease-out placeholder-[#A3BFFA]/70 min-h-[100px] resize-y"
              required
              name="message"
              id="message"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#4A5D7A]/70 text-[#A3BFFA] py-3 px-4 rounded-full font-semibold text-base transition duration-200 ease-out hover:bg-[#4A5D7A]/80 hover:shadow-[0_6px_15px_rgba(163,191,250,0.4)] focus:ring-2 focus:ring-[#A3BFFA]/50 active:scale-[0.98] ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {error !== null && (
            <div
              className={`text-center mt-4 ${
                error ? "text-red-500" : "text-[#A3BFFA]"
              }`}
            >
              {error ? "Failed to send message" : "Message sent successfully!"}
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default Contact;
