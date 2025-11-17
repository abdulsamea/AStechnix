import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    sector: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        sector: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@astechnix.com',
      link: 'mailto:contact@astechnix.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: 'Schedule a call',
      link: 'mailto:contact@astechnix.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Serving organizations globally',
      link: null,
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#03045e] mb-6">Get in Touch</h1>
            <p className="text-xl text-[#023e8a] leading-relaxed">
              Ready to transform your operations? Let's start a conversation about your challenges and goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#03045e] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">{info.title}</div>
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
                <h2 className="text-2xl font-bold text-[#03045e] mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-gradient-to-br from-[#90e0ef] to-[#48cae4] text-white p-8 rounded-xl text-center">
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p>We've received your message and will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                          Organization *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all"
                          placeholder="Your Organization"
                        />
                      </div>

                      <div>
                        <label htmlFor="sector" className="block text-sm font-semibold text-gray-700 mb-2">
                          Sector *
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          required
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all"
                        >
                          <option value="">Select a sector</option>
                          <option value="ngo">NGO / Non-Profit</option>
                          <option value="government">Government</option>
                          <option value="private">Private Sector</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your challenges and what you're looking to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
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
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#03045e] mb-2">Initial Response</h3>
                <p className="text-gray-600 text-sm">
                  We'll reach out within 24 hours to schedule a conversation
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#00b4d8] to-[#48cae4] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#03045e] mb-2">Discovery Call</h3>
                <p className="text-gray-600 text-sm">
                  We'll discuss your challenges and explore potential solutions
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#48cae4] to-[#90e0ef] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#03045e] mb-2">Custom Proposal</h3>
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
