import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

type FormFields = {
  name: string;
  email: string;
  organization: string;
  sector: string;
  message: string;
  company?: string; // honeypot
};

type Errors = Partial<Record<keyof FormFields, string>>;

const initialValues: FormFields = {
  name: "",
  email: "",
  organization: "",
  sector: "",
  message: "",
  company: "",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [values, setValues] = useState<FormFields>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

      blockHeadless: true,
      limitRate: { id: "contact-form", throttle: 10000 },
    });
  }, []);

  //Basic client-side validation
  const validate = (d: FormFields): Errors => {
    const e: Errors = {};
    if (!d.name.trim()) e.name = "Full name is required.";
    if (!d.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))
      e.email = "Enter a valid email.";
    if (!d.organization.trim()) e.organization = "Organization is required.";
    if (!d.sector.trim()) e.sector = "Sector is required.";
    if (!d.message.trim() || d.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormFields];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: if bots fill this hidden field, just exit
    if (values.company && values.company.length > 0) return;

    const v = validate(values);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    if (!formRef.current) return;

    setStatus("loading");
    try {
      const resp = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setValues(initialValues);
      setErrors({});
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
      void resp;
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.error("EMAILJS FAILED", err.status, err.text);
      } else {
        console.error("Error", err);
      }
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contact@astechnix.com",
      link: "mailto:contact@astechnix.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "Schedule a call",
      link: "mailto:contact@astechnix.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Serving organizations globally",
      link: null as string | null,
    },
  ]; // Display-only contact metadata. [web:49]

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#03045e] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[#023e8a] leading-relaxed">
              Ready to transform your operations? Let's start a conversation
              about your challenges and goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Left column */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#03045e] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">
                          {info.title}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#0077b6] hover:text-[#00b4d8] transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-gray-700">{info.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#03045e] to-[#023e8a] text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Why Reach Out?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#48cae4] flex-shrink-0 mt-0.5" />
                    <span>Free consultation and needs assessment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#48cae4] flex-shrink-0 mt-0.5" />
                    <span>Custom solutions tailored to your goals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#48cae4] flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing and timelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#48cae4] flex-shrink-0 mt-0.5" />
                    <span>No obligation, no pressure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h2 className="text-2xl font-bold text-[#03045e] mb-6">
                  Send Us a Message
                </h2>

                {status === "success" ? (
                  <div className="bg-gradient-to-br from-[#90e0ef] to-[#48cae4] text-white p-8 rounded-xl text-center">
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p>
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    {/* Honeypot (hidden from users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={values.name}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                          className={`w-full px-4 py-3 rounded-lg border focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            role="alert"
                            className="mt-2 text-sm text-red-600"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          className={`w-full px-4 py-3 rounded-lg border focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            role="alert"
                            className="mt-2 text-sm text-red-600"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Organization + Sector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Organization *
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          required
                          value={values.organization}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.organization)}
                          aria-describedby={
                            errors.organization
                              ? "organization-error"
                              : undefined
                          }
                          className={`w-full px-4 py-3 rounded-lg border focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all ${
                            errors.organization
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Your Organization"
                        />
                        {errors.organization && (
                          <p
                            id="organization-error"
                            role="alert"
                            className="mt-2 text-sm text-red-600"
                          >
                            {errors.organization}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="sector"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Sector *
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          required
                          value={values.sector}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.sector)}
                          aria-describedby={
                            errors.sector ? "sector-error" : undefined
                          }
                          className={`w-full px-4 py-3 rounded-lg border focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all ${
                            errors.sector ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select a sector</option>
                          <option value="ngo">NGO / Non-Profit</option>
                          <option value="government">Government</option>
                          <option value="private">Private Sector</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.sector && (
                          <p
                            id="sector-error"
                            role="alert"
                            className="mt-2 text-sm text-red-600"
                          >
                            {errors.sector}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={`w-full px-4 py-3 rounded-lg border focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all resize-none ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Tell us about your challenges and what you're looking to achieve..."
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          role="alert"
                          className="mt-2 text-sm text-red-600"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <span>
                        {status === "loading" ? "Sending..." : "Send Message"}
                      </span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {status === "error" && (
                      <p role="alert" className="text-red-600 text-sm">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#03045e] mb-2">
                  Initial Response
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll reach out within 24 hours to schedule a conversation
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#00b4d8] to-[#48cae4] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#03045e] mb-2">
                  Discovery Call
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll discuss your challenges and explore potential solutions
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#48cae4] to-[#90e0ef] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#03045e] mb-2">
                  Custom Proposal
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive a detailed plan with timelines and pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
