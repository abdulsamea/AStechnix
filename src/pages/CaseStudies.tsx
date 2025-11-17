import { ArrowRight, Building2, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      category: 'NGO',
      icon: <Heart className="w-8 h-8" />,
      title: 'International Aid Organization',
      challenge: 'Manual processing of 5,000+ grant applications per year, taking 6 weeks per cycle',
      solution: 'Implemented AI-powered document processing and automated workflow routing system',
      results: [
        'Reduced processing time from 6 weeks to 5 days',
        'Saved 12,000 staff hours annually',
        'Increased grant accuracy by 35%',
        'Enabled real-time application tracking',
      ],
      impact: '92% reduction in processing time',
    },
    {
      category: 'Government',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Municipal Service Department',
      challenge: 'Citizens facing long wait times for permit approvals, with 40+ day average turnaround',
      solution: 'Deployed intelligent form validation, automated compliance checking, and digital approval workflows',
      results: [
        'Reduced approval time to 8 days average',
        'Decreased citizen complaints by 67%',
        'Eliminated 85% of manual data entry',
        'Improved staff satisfaction scores',
      ],
      impact: '80% faster service delivery',
    },
    {
      category: 'Private Sector',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Regional Manufacturing Company',
      challenge: 'High operational costs due to manual inventory tracking and order processing across 15 locations',
      solution: 'Integrated automated inventory management system with predictive ordering and cross-location coordination',
      results: [
        'Cut operational costs by 58%',
        'Reduced inventory waste by 42%',
        'Improved order accuracy to 99.2%',
        'Enabled real-time multi-location visibility',
      ],
      impact: '$2.3M annual savings',
    },
    {
      category: 'NGO',
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Education Foundation',
      challenge: 'Difficulty managing volunteer coordination and program enrollment across multiple regions',
      solution: 'Created AI-powered matching system and automated communication platform',
      results: [
        'Matched 3x more volunteers to programs',
        'Reduced coordination time by 75%',
        'Increased program participation by 45%',
        'Automated 90% of routine communications',
      ],
      impact: '3x volunteer engagement',
    },
    {
      category: 'Government',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Public Works Department',
      challenge: 'Reactive maintenance approach leading to infrastructure failures and high emergency repair costs',
      solution: 'Implemented predictive maintenance system using IoT sensors and AI analytics',
      results: [
        'Reduced emergency repairs by 68%',
        'Extended asset lifespan by 30%',
        'Decreased maintenance costs by 45%',
        'Improved public safety metrics',
      ],
      impact: '68% fewer emergency repairs',
    },
    {
      category: 'Private Sector',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Professional Services Firm',
      challenge: 'Time-consuming proposal creation and client onboarding processes limiting growth potential',
      solution: 'Developed AI-assisted proposal generation and automated client onboarding workflow',
      results: [
        'Reduced proposal creation time by 70%',
        'Cut onboarding time from 3 weeks to 3 days',
        'Increased proposal win rate by 28%',
        'Freed 1,200 hours for revenue-generating work',
      ],
      impact: '28% higher win rate',
    },
  ];

  const categoryColors = {
    NGO: 'from-[#0077b6] to-[#00b4d8]',
    Government: 'from-[#023e8a] to-[#0077b6]',
    'Private Sector': 'from-[#00b4d8] to-[#48cae4]',
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#03045e] mb-6">Case Studies</h1>
            <p className="text-xl text-[#023e8a] leading-relaxed">
              Real organizations, real challenges, real results. See how we've helped transform operations across sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <div className={`bg-gradient-to-br ${categoryColors[study.category as keyof typeof categoryColors]} text-white p-6 rounded-xl mb-4`}>
                      <div className="mb-3">{study.icon}</div>
                      <div className="text-sm font-semibold mb-2 opacity-90">{study.category}</div>
                      <h3 className="text-xl font-bold">{study.title}</h3>
                    </div>
                    <div className="bg-[#caf0f8] p-6 rounded-xl">
                      <div className="text-3xl font-bold text-[#03045e] mb-2">{study.impact}</div>
                      <div className="text-sm text-[#023e8a] font-semibold">Key Impact</div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#0077b6] uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#0077b6] uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#0077b6] uppercase tracking-wide mb-3">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <ArrowRight className="w-5 h-5 text-[#00b4d8] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#03045e] to-[#023e8a] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Your Success Story Starts Here</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Every organization we work with has unique challenges. Let's discuss how we can create a custom solution that delivers measurable results for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-[#0077b6] px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#03045e] mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "AStechnix transformed how we operate. What used to take weeks now takes days, and our team can focus on our mission instead of paperwork.",
                  author: "Director of Operations",
                  organization: "International NGO",
                },
                {
                  quote: "The ROI was clear within the first quarter. We've saved millions and improved service quality at the same time.",
                  author: "Chief Technology Officer",
                  organization: "Government Agency",
                },
                {
                  quote: "Their team didn't just implement technology—they understood our business and created solutions that actually work for us.",
                  author: "Operations Manager",
                  organization: "Manufacturing Company",
                },
                {
                  quote: "The automation platform they built has become essential to our operations. We can't imagine going back to the old way.",
                  author: "Executive Director",
                  organization: "Healthcare Foundation",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#caf0f8] to-[#ade8f4] p-8 rounded-xl"
                >
                  <p className="text-[#023e8a] leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-[#90e0ef] pt-4">
                    <div className="font-semibold text-[#03045e]">{testimonial.author}</div>
                    <div className="text-sm text-[#0077b6]">{testimonial.organization}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
