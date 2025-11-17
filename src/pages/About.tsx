import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, leveraging the latest AI and automation technologies to deliver cutting-edge solutions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and measurable results.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Reliability',
      description: 'We prioritize data security and system reliability in every solution we implement.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards, delivering quality work that exceeds expectations.',
    },
  ];

  const expertise = [
    'Artificial Intelligence & Machine Learning',
    'Large Language Models (LLMs)',
    'Robotic Process Automation (RPA)',
    'Business Process Management',
    'Data Analytics & Visualization',
    'System Integration & APIs',
    'Cloud Solutions & Infrastructure',
    'Change Management & Training',
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#03045e] mb-6">About AStechnix</h1>
            <p className="text-xl text-[#023e8a] leading-relaxed">
              Pioneering the future of work through intelligent automation and AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#03045e] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  AStechnix was founded with a clear mission: to help organizations break free from the constraints of manual, repetitive processes and unlock their true potential through intelligent automation.
                </p>
                <p>
                  We've seen firsthand how organizations—especially in the NGO, government, and private sectors—struggle with inefficiencies that drain resources and stifle innovation. That's why we specialize in identifying bottlenecks, eliminating redundancies, and implementing AI-driven solutions that transform operations.
                </p>
                <p>
                  Today, we're proud to partner with leading organizations worldwide, helping them achieve more with less effort, reduce costs, and focus on what truly matters: their mission.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] p-8 rounded-2xl text-white">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-sm opacity-90">
                  Empower organizations to achieve operational excellence through AI and automation
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#48cae4] to-[#90e0ef] p-8 rounded-2xl text-white mt-8">
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-sm opacity-90">
                  A world where every organization operates at peak efficiency, free from tedious manual tasks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#03045e] mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#0077b6] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#03045e] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#03045e] to-[#023e8a] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex items-center space-x-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-[#48cae4] rounded-full"></div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-[#03045e] mb-4">Why Organizations Choose Us</h2>
              <p className="text-[#023e8a] text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                We don't just implement technology—we transform organizations. Our holistic approach combines technical expertise with deep industry knowledge to deliver solutions that work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-4xl font-bold text-[#0077b6] mb-2">100%</div>
                  <div className="text-[#023e8a] font-semibold">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0077b6] mb-2">60%</div>
                  <div className="text-[#023e8a] font-semibold">Average Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0077b6] mb-2">3x</div>
                  <div className="text-[#023e8a] font-semibold">Productivity Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#03045e] mb-6">Let's Work Together</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your organization? We'd love to hear about your challenges and explore how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
