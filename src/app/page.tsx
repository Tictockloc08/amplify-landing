'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Star, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import AmplifyLogo from '../components/AmplifyLogo';
import StarField from '../components/StarField';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Starry Night Sky Background */}
      <StarField />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <AmplifyLogo size="md" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#testimonials" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Results
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Reach Your Most Valuable Audience
                  <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    From 50 Views to 100K in 30 Days
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Real estate agents are posting but nobody sees it. We amplify your reach with proven strategies that bypass the suppression and get your listings in front of the right buyers. Auto-deploy test!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Amplify My Reach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Results
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2" />
                  No Contracts
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2" />
                  Month-to-Month
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2" />
                  Real Results
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-orange-500/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Before vs After</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Organic Reach</span>
                        <span className="text-sm text-red-400">-85%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">With AMPLIFY</span>
                        <span className="text-sm text-pink-400">+340%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-400">100K</div>
                      <div className="text-xs text-gray-400">Avg. Reach</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-pink-400">1M</div>
                      <div className="text-xs text-gray-400">Views/Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What We Do For
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Real Estate Agents
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We handle everything so you can focus on closing deals, not learning new skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Instagram className="h-8 w-8" />,
                title: "Social Media Management",
                description: "Daily posting, engagement, and community building across all platforms",
                features: ["Daily content creation", "Hashtag optimization", "Community engagement", "Story management"]
              },
              {
                icon: <Facebook className="h-8 w-8" />,
                title: "Paid Advertising",
                description: "Strategic ad campaigns that reach your ideal buyers and generate leads",
                features: ["Facebook & Instagram ads", "Lead generation campaigns", "Retargeting strategies", "Performance optimization"]
              },
              {
                icon: <Youtube className="h-8 w-8" />,
                title: "Content Creation",
                description: "Professional photos, videos, and graphics that showcase your listings",
                features: ["Property photography", "Video tours", "Graphic design", "Brand consistency"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="text-orange-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-pink-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Real Agents,
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we&apos;ve helped real estate agents amplify their reach and close more deals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-orange-500/20">
                <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <video 
                    className="w-full h-full object-cover rounded-lg"
                    controls
                    poster="/amplify-logo.png"
                  >
                    <source src="/Testimonial-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Real Agents, Real Results</h3>
                <p className="text-gray-300 mb-4 text-center">&ldquo;Hear how agents just like you are winning with AMPLIFY&rdquo;</p>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">Success Stories</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  name: "Mike Chen",
                  role: "Real Estate Agent",
                  quote: "Finally, someone who understands real estate marketing. My social media is now working for me, not against me.",
                  rating: 5
                },
                {
                  name: "Lisa Rodriguez",
                  role: "Broker",
                  quote: "The ROI is incredible. I'm spending less on marketing and getting better results than ever before.",
                  rating: 5
                },
                {
                  name: "David Thompson",
                  role: "Real Estate Agent",
                  quote: "AMPLIFY handles everything so I can focus on what I do best - selling houses and building relationships.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-orange-500/20">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-3">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple Pricing,
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Maximum Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Just results.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-orange-500/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-pink-500 text-white px-6 py-2 rounded-bl-lg text-sm font-semibold">
                Most Popular
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">AMPLIFY Package</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-pink-400 mr-3" />
                      <span>Social Media Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-pink-400 mr-3" />
                      <span>Paid Advertising Campaigns</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-pink-400 mr-3" />
                      <span>Content Creation & Photography</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-pink-400 mr-3" />
                      <span>Lead Generation & Nurturing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-pink-400 mr-3" />
                      <span>Monthly Performance Reports</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-pink-400 mr-3" />
                      <span>Dedicated Account Manager</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                      $395
                    </div>
                    <div className="text-gray-400">per month</div>
                    <div className="text-sm text-gray-500 mt-2">+ $195 one-time setup</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Daily Ad Spend</div>
                      <div className="text-lg font-semibold">You Control</div>
                      <div className="text-xs text-gray-500">Adjust anytime</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Contract</div>
                      <div className="text-lg font-semibold">Month-to-Month</div>
                      <div className="text-xs text-gray-500">Cancel anytime</div>
                    </div>
                  </div>

                  <a href="#pricing" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-block text-center">
                    Start Amplifying Today
                  </a>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    Lock in 6+ months for 15% discount
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Amplify Your
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Real Estate Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of real estate agents who are already getting better results with AMPLIFY.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </a>
              <a href="https://calendly.com/andrew-adtv/30min-1?back=1" target="_blank" rel="noopener noreferrer" className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400/10 transition-all duration-300">
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
                AMPLIFY
              </h3>
              <p className="text-gray-400">
                Amplifying real estate agents&apos; reach and results through proven digital marketing strategies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Social Media Management</li>
                <li>Paid Advertising</li>
                <li>Content Creation</li>
                <li>Lead Generation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@amplify.com</li>
                <li>(555) 123-4567</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AMPLIFY. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg p-4 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Client Testimonial</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover rounded-lg"
                controls
                autoPlay
                poster="/amplify-logo.png"
              >
                <source src="/Testimonial-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}