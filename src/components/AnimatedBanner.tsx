import { useEffect, useState } from 'react';
import RunningText from './RunningText';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnimatedBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const textItems = [
    'AI-Powered Automation',
    'Eliminate Bottlenecks',
    'Transform Operations',
    'Reduce Manual Work',
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6] min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-96 w-96 h-96 bg-[#0096c7] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-[#48cae4] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00b4d8] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="mb-8 md:mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight px-4">
                Transform Your Organization with
                <br />
                <span className="bg-gradient-to-r from-[#48cae4] via-[#90e0ef] to-[#ade8f4] text-transparent bg-clip-text">
                  AI & Automation
                </span>
              </h1>
              <p className="text-center text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 px-4 leading-relaxed">
                We help NGOs, Governments, and Private Sectors eliminate bottlenecks, identify gaps, and automate repetitive tasks using cutting-edge AI solutions.
              </p>
            </div>
          </div>

          <div className="my-12 md:my-16">
            <RunningText text={textItems} speed={60} direction="left" />
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center px-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#48cae4] to-[#90e0ef] text-[#03045e] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-105"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-16 md:mt-24">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 px-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { label: 'Projects Delivered', value: '150+' },
                { label: 'Hours Saved', value: '50K+' },
                { label: 'Happy Clients', value: '80+' },
                { label: 'Success Rate', value: '98%' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#48cae4] mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 md:mt-32 pb-20 text-center">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#48cae4] to-[#90e0ef] rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                  <span className="text-white/80 text-sm font-medium">Scroll to explore our solutions</span>
                  <div className="flex justify-center mt-2 space-x-1">
                    <div className="w-1 h-1 bg-[#48cae4] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1 h-1 bg-[#48cae4] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-[#48cae4] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
