import React, { useState, useEffect } from "react";
import img from "../../src/assets/Images/about.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import hero from "../assets/Images/heroImage.jpeg";
import add2 from "../assets/Images/address.jpeg";
import axios from "axios";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API_URL;

const Contact = () => {
  const location = useLocation();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    business: "",
    message: "",
    notRobot: false,
  });
  const [started, setStarted] = useState(false);

  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName || formData.firstName.length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
    }

    if (!formData.lastName || formData.lastName.length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const obj = {
      email: formData.email,
      name: formData.firstName + " " + formData.lastName,
      message: formData.message,
      mobile: formData.mobile
    };
    // console.log("Form :", obj);

    try {
      const res = await axios.post(`https://bbe-backend-k7wd.onrender.com/send-mail`, obj);

      console.log("res", res);
      toast.success("Mail sent successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        business: "",
        message: "",
        notRobot: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {isContactPage && (
        <section
        className="relative w-full h-[70vh] mx-auto flex items-center overflow-hidden "
        id="contact"
      >
        <div
          className="absolute w-full h-full will-change-transform bg-white"
          style={{
            transform: started ? "scale(1)" : "scale(0.88)",
            borderRadius: started ? "0px" : "20px",
            overflow: "hidden",
            transition: started
              ? "transform 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
          }}
        >
          <img
            src={add2}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 bg-black/50"
          style={{
            borderRadius: started ? "0px" : "20px",
            overflow: "hidden",
            transition: started
              ? "border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
          }}
        />

        <div
          className="flex z-50 text-white flex-col w-full"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 900ms ease-out 400ms, transform 900ms ease-out 400ms",
          }}
        >
          <div className="md:w-9/12 relative py-24 mx-auto w-full px-6 md:px-0">
            <div className="flex items-center mb-4">
              <span className="text-sm tracking-widest font-semibold uppercase" />
            </div>

            <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">
              <div className="lg:w-5/12 text-left">
                <h2 className="text-base font-bold leading-tight text-[#EB9A38]">
                  Contact Us
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm tracking-widest text-gray-300 font-medium" />
              </div>
            </div>

            <div className="text-left text-3xl sm:text-4xl md:text-5xl text-[#EB9A38] flex z-10 w-full md:w-8/12 mt-4">
              <p className="leading-snug">
                Innovative. Sustainable. Future Ready.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}
     

      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Let’s Build Something <br />
              <span className="text-orange-500">Great Together</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Have questions or need assistance? Our team is ready to help you
              with engineering solutions, manufacturing support, and product
              inquiries.
            </p>

            <div className="space-y-4">
              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center gap-4 border">
                <div className="w-10 h-10 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full">
                  📞
                </div>
                <div>
                  <p className="text-sm font-semibold">Call Us</p>
                  <p className="text-gray-500 text-xs">+91 9876543210</p>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center gap-4 border">
                <div className="w-10 h-10 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-gray-500 text-xs">
                    info@bbengineers.co.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {[
                  { name: "firstName", label: "First Name" },
                  { name: "lastName", label: "Last Name" },
                  { name: "email", label: "Email" },
                  { name: "mobile", label: "Mobile" },
                ].map((field, i) => (
                  <div key={i} className="relative">
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="peer w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-orange-500 text-sm"
                      // placeholder="text"
                      minLength={
                        field.name === "firstName" || field.name === "lastName"
                          ? 3
                          : undefined
                      }
                      maxLength={field.name === "mobile" ? 10 : undefined}
                      pattern={
                        field.name === "mobile" ? "[0-9]{10}" : undefined
                      }
                      // required
                    />

                    <label
                      className="absolute left-0 -top-3 text-gray-400 text-sm transition-all 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 
                    peer-focus:text-xs peer-focus:text-orange-500"
                    >
                      {field.label}
                    </label>

                    {errors[field.name] && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-orange-500 text-sm resize-none"
                    // required
                  />
                  <label className="absolute left-0 -top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-500">
                    Message
                  </label>
                </div>

                <button
                  // onClick={}
                  className="w-full py-3 bg-orange-500 text-white rounded-full font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="bg-white px-4 py-8 flex justify-center">
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden px-4 sm:px-6 md:px-8 py-8 md:py-10"
            style={{
              background: "linear-gradient(135deg, #0a1f44 60%, #0e3a5c 100%)",
            }}
          >
            <img
              src="https://picsum.photos/seed/wave/900/200"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
              <div className="flex flex-col text-center md:text-left max-w-xs group  ">
                <span className="text-white  text-sm leading-relaxed group-hover:text-[#FF8208]">
                  PL-1 PAG/G-63/5 MIDC Kurli, Chakan Industrial Area Ph-3,
                </span>
                <span className="text-white text-sm leading-relaxed mb-2 group-hover:text-[#FF8208]">
                  Taluka Khed, Pune - 410501,
                </span>
              </div>

              <div className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold text-center">
                <IoLocationOutline className="text-lg sm:text-xl text-[#FF8208]" />
                <span className="whitespace-nowrap text-[#FF8208]">
                  BB Engineers Center
                </span>
              </div>

              <div className="flex flex-col text-center md:text-right max-w-xs group">
                <span className="text-white text-sm leading-relaxed group-hover:text-[#FF8208]">
                  PL-2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road,
                </span>
                <span className="text-white text-sm leading-relaxed mb-2 group-hover:text-[#FF8208]">
                  At Moi, PO Kurli Tal. Khed Dist Pune-410501,
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
