import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Initialize EmailJS
emailjs.init({
  publicKey: "WrfjS34CsLNNMeySG",
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    to_name: "Rishav Kamboj",
    reply_to: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        to_name: formData.to_name,
        reply_to: formData.from_email,
        sender_email: formData.from_email, // Add sender's email to show in "from" field
      };

      const result = await emailjs.send(
        "service_pzar6tn",
        "template_bcy0rni",
        templateParams
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
          to_name: "Rishav Kamboj",
          reply_to: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldMapping: { [key: string]: string } = {
      name: "from_name",
      email: "from_email",
      message: "message",
    };

    setFormData({
      ...formData,
      [fieldMapping[name] || name]: value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="glass-panel p-12 rounded-2xl">
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-200 transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-200 transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-200 transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg 
              hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2
              disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
        <Toaster position="bottom-right" />
      </div>
    </section>
  );
};

export default Contact;
