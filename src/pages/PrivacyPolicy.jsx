import pp from "../assets/bbimages/pp.jpeg";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Contact from "./Contact";

const PrivacyPolicy = () => {
    
  const location = useLocation();

  const [started, setStarted] = useState(false);
  const isPrivacyPage = location.pathname === "/privacy";

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);


  useEffect(() => {
    if (location.pathname === "/policy") {
      const el = document.getElementById("policy");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative  z-10 top-0 " id="policy">
      <section className="relative w-full h-[70vh] mx-auto flex items-center overflow-hidden">
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
          <img src={pp} alt="About Us" className="w-full h-full object-cover" />
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

            {/* <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">
              <div className="lg:w-5/12 text-left">
                <h2 className="text-base font-bold leading-tight text-[#EB9A38]">
                
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm tracking-widest text-gray-300 font-medium" />
              </div>
            </div> */}

            <div className="text-left text-3xl  sm:text-4xl md:text-5xl text-[#EB9A38] flex z-10 w-full md:w-8/12 mt-4">
              <p className="leading-snug">
              Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </section>

     

      <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Effective Date: 16-04-26
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            Welcome to <span className="font-semibold text-orange-500">BB Engineers</span> 
            (“we”, “our”, or “us”).
            We value your privacy and are committed to protecting your personal information
            in accordance with applicable laws in India.
          </p>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">1. Information We Collect</h2>
            <p className="mt-2">We may collect the following information:</p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>Personal Information:</b> Name, Email, Phone, Company details</li>
              <li>Information submitted via contact forms</li>
              <li><b>Technical Information:</b> IP address, browser, device, pages visited</li>
            </ul>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to inquiries</li>
              <li>Improve website experience</li>
              <li>Send updates or business communication</li>
              <li>Maintain internal records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">3. Sharing of Information</h2>
            <p className="mt-2">
              We do not sell or rent your personal data. We may share data only with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Trusted service providers</li>
              <li>Legal authorities if required</li>
              <li>To protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">4. Cookies</h2>
            <p className="mt-2">
              We use cookies to enhance user experience and analyze traffic.
              You can disable cookies in browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">5. Data Security</h2>
            <p className="mt-2">
              We take reasonable steps to protect your data, but no method is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">6. Data Retention</h2>
            <p className="mt-2">
              Data is retained only as long as necessary for business and legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">7. Your Rights</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">8. Third-Party Links</h2>
            <p className="mt-2">
              We are not responsible for external websites linked on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">9. Changes to Policy</h2>
            <p className="mt-2">
              We may update this policy. Changes will be posted with a new effective date.
            </p>
          </section>

          <section>
            <h2 className="text-orange-500 font-semibold text-lg">10. Contact Us</h2>
            <p className="mt-2">
              BB Engineers <br />
              Email: info@bbengineers.co.in <br />
              Phone: +91 9876543210 <br />
              Address:     PL-1 PAG/G-63/5 MIDC Kurli, Chakan Industrial Area Ph-3,
            Taluka Khed, Pune - 410501,
            </p>
          </section>

        </div>
      </div>
    </div>

    {!isPrivacyPage && (
        <Contact />
     )} 
      {/* <Contact /> */}
    </div>
  );
};

export default PrivacyPolicy;
