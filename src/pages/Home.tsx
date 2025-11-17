import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Target, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Hours Saved', value: '50K+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Success Rate', value: '98%' },
  ];

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Implement cutting-edge AI and LLM solutions tailored to your organization\'s needs.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Eliminate repetitive tasks and streamline operations with intelligent automation.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Gap Analysis',
      description: 'Identify bottlenecks and inefficiencies in your workflows with data-driven insights.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Workflow Optimization',
      description: 'Redesign and optimize processes for maximum efficiency and productivity.',
    },
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Free your team from mundane tasks',
    'Improve accuracy and consistency',
    'Scale operations without hiring',
    'Make data-driven decisions faster',
    'Enhance employee satisfaction',
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0077b6] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00b4d8] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#03045e] mb-6 leading-tight">
              Transform Your Organization with
              <span className="block bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-transparent bg-clip-text">
                AI & Automation
              </span>
            </h1>
            <p className="text-xl text-[#023e8a] mb-8 leading-relaxed">
              We help NGOs, Governments, and Private Sectors eliminate bottlenecks, identify gaps, and automate repetitive tasks using cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white text-[#0077b6] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 border-2 border-[#0077b6]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#0077b6] mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#03045e] mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive AI and automation solutions designed to revolutionize your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#48cae4] group"
              >
                <div className="bg-gradient-to-br from-[#90e0ef] to-[#48cae4] w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#03045e] to-[#023e8a] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose AStechnix?</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We don't just implement technology—we transform how your organization operates. Our solutions are designed to deliver measurable results and lasting impact.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#48cae4] flex-shrink-0 mt-1" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <Users className="w-16 h-16 text-[#48cae4] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Trusted by Leading Organizations</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  From government agencies to NGOs and private enterprises, organizations trust AStechnix to deliver innovative solutions that drive real change.
                </p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center space-x-2 text-[#48cae4] hover:text-[#90e0ef] transition-colors font-semibold"
                >
                  <span>View Success Stories</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#03045e] mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Let's discuss how AI and automation can help your organization achieve more with less effort.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
