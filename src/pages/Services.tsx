import { Bot, Zap, Target, TrendingUp, Database, Workflow, Brain, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainServices = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'AI & LLM Integration',
      description: 'Deploy advanced language models and AI systems that understand context, automate responses, and enhance decision-making across your organization.',
      features: [
        'Custom chatbot development',
        'Document processing automation',
        'Intelligent data extraction',
        'Natural language interfaces',
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Process Automation',
      description: 'Transform manual, repetitive tasks into automated workflows that run 24/7, freeing your team to focus on strategic initiatives.',
      features: [
        'RPA implementation',
        'Workflow automation',
        'Email and notification automation',
        'Report generation',
      ],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Bottleneck Identification',
      description: 'Comprehensive analysis of your operations to pinpoint inefficiencies, delays, and areas where automation can make the biggest impact.',
      features: [
        'Process mapping',
        'Performance analytics',
        'Root cause analysis',
        'Optimization roadmap',
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Workflow Optimization',
      description: 'Redesign and streamline your business processes for maximum efficiency, reducing time-to-completion and operational costs.',
      features: [
        'Process reengineering',
        'Efficiency measurement',
        'Change management support',
        'Continuous improvement',
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Data Integration',
      description: 'Connect disparate systems and create unified data pipelines that provide real-time insights and enable intelligent automation.',
      features: [
        'API integration',
        'Data synchronization',
        'Legacy system modernization',
        'Real-time dashboards',
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Intelligent Decision Systems',
      description: 'Implement AI-powered systems that analyze data, predict outcomes, and recommend optimal actions for complex decisions.',
      features: [
        'Predictive analytics',
        'Decision support tools',
        'Risk assessment automation',
        'Pattern recognition',
      ],
    },
  ];

  const industries = [
    {
      name: 'NGOs & Non-Profits',
      description: 'Maximize impact with limited resources through intelligent automation',
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      name: 'Government Agencies',
      description: 'Improve citizen services and operational efficiency at scale',
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      name: 'Private Sector',
      description: 'Drive growth and competitiveness through digital transformation',
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#03045e] mb-6">Our Services</h1>
            <p className="text-xl text-[#023e8a] leading-relaxed">
              End-to-end AI and automation solutions designed to eliminate inefficiencies and unlock your organization's full potential
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#48cae4] hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] w-20 h-20 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#03045e] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#0077b6] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#03045e] to-[#023e8a] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tailored solutions for diverse sectors, each with unique challenges and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-[#48cae4] mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#03045e] mb-8 text-center">Our Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your current workflows, identify bottlenecks, and assess automation opportunities.',
                },
                {
                  step: '02',
                  title: 'Strategy Development',
                  description: 'Create a customized roadmap with clear priorities, timelines, and expected outcomes.',
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Deploy solutions with minimal disruption, ensuring seamless integration with existing systems.',
                },
                {
                  step: '04',
                  title: 'Training & Support',
                  description: 'Empower your team with training and ongoing support to maximize adoption and results.',
                },
                {
                  step: '05',
                  title: 'Optimization',
                  description: 'Continuously monitor performance and refine solutions for sustained improvement.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white w-16 h-16 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#03045e] mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#03045e] mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a solution that delivers real results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
