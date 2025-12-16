import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Target, Award, Zap, Heart, Globe, Instagram, Twitter, Facebook, Linkedin, ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

export default function ContactAbout() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [hoveredStat, setHoveredStat] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const stats = [
        { icon: Users, value: '50K+', label: 'Happy Athletes', color: 'from-blue-500 to-cyan-500' },
        { icon: Globe, value: '30+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
        { icon: Award, value: '200+', label: 'Products', color: 'from-orange-500 to-red-500' },
        { icon: TrendingUp, value: '98%', label: 'Satisfaction', color: 'from-green-500 to-emerald-500' }
    ];

    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We pursue perfection in every product, every service, every interaction.',
            color: 'from-blue-500 to-purple-500'
        },
        {
            icon: Heart,
            title: 'Passion',
            description: 'Driven by love for sports and commitment to athlete success worldwide.',
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: Shield,
            title: 'Quality',
            description: 'Premium materials and craftsmanship in every piece of equipment.',
            color: 'from-green-500 to-teal-500'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'Pushing boundaries with cutting-edge technology and design.',
            color: 'from-yellow-500 to-orange-500'
        }
    ];

    const team = [
        { name: 'Sarah Chen', role: 'Founder & CEO', image: 'from-purple-400 to-pink-500' },
        { name: 'Marcus Johnson', role: 'Head of Design', image: 'from-blue-400 to-cyan-500' },
        { name: 'Emily Rodriguez', role: 'Product Director', image: 'from-green-400 to-emerald-500' },
        { name: 'David Kim', role: 'Tech Lead', image: 'from-orange-400 to-red-500' }
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-700"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <div className="mb-6 inline-block">
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
                            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Empowering Athletes Since 2020
              </span>
                        </div>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              About
            </span>
                        <br />
                        <span className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-reverse">
              X-STOP
            </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        We're not just a sports store. We're a movement. A revolution in athletic excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                        >
                            <span>Get In Touch</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                            Our Story
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section with 3D Cards */}
            <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredStat(index)}
                                onMouseLeave={() => setHoveredStat(null)}
                                className="group relative"
                            >
                                <div className={`bg-gradient-to-br ${stat.color} p-1 rounded-3xl transition-all transform ${hoveredStat === index ? 'scale-110 rotate-3' : 'hover:scale-105'}`}>
                                    <div className="bg-gray-900 rounded-3xl p-8 text-center h-full">
                                        <stat.icon className={`w-12 h-12 mx-auto mb-4 transition-all ${hoveredStat === index ? 'animate-bounce' : ''}`} />
                                        <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-400 font-semibold">{stat.label}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative py-32 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block mb-4">
                                <span className="text-sm font-bold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full">OUR JOURNEY</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Built by Athletes, for Athletes
                            </h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                X-STOP was born from a simple frustration: finding quality sports gear that actually understood athletes' needs. In 2020, we set out to change that.
                            </p>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Today, we're a global community of passionate athletes, designers, and innovators united by one mission: to empower every athlete to reach their peak performance.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">2020</div>
                                    <div className="text-sm text-gray-400">Founded</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                                    <div className="text-3xl font-bold text-purple-400 mb-1">50K+</div>
                                    <div className="text-sm text-gray-400">Customers</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                                    <div className="text-3xl font-bold text-pink-400 mb-1">30+</div>
                                    <div className="text-sm text-gray-400">Countries</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
                                <div className="aspect-square flex items-center justify-center p-12">
                                    <div className="text-9xl font-black text-white/20">X</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-50"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-32 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-bold text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full">WHAT DRIVES US</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Our Core Values
                        </h2>
                        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                            The principles that guide every decision, every product, every interaction
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all transform hover:scale-105 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative py-32 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-bold text-pink-400 bg-pink-400/10 px-4 py-2 rounded-full">MEET THE TEAM</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
                            The People Behind X-STOP
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-3xl mb-4 aspect-square">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${member.image} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                        <Users className="w-20 h-20 text-white/30" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <div className="flex space-x-3">
                                            <button className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                                                <Twitter className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-32 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Column - Contact Info */}
                        <div>
                            <div className="inline-block mb-4">
                                <span className="text-sm font-bold text-green-400 bg-green-400/10 px-4 py-2 rounded-full">GET IN TOUCH</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                Let's Connect
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                Have questions? Ideas? Just want to say hi? We're all ears. Reach out and let's start a conversation.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-300 mb-1">Email Us</div>
                                        <div className="text-xl font-bold text-white">support@xstop.com</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-300 mb-1">Call Us</div>
                                        <div className="text-xl font-bold text-white">+91 98765 43210</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-300 mb-1">Visit Us</div>
                                        <div className="text-xl font-bold text-white">123 Sports Avenue, Mumbai</div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <div className="font-semibold text-gray-400 mb-4">Follow Our Journey</div>
                                <div className="flex space-x-4">
                                    {[
                                        { icon: Instagram, color: 'from-pink-500 to-purple-600' },
                                        { icon: Twitter, color: 'from-blue-400 to-cyan-500' },
                                        { icon: Facebook, color: 'from-blue-600 to-blue-800' },
                                        { icon: Linkedin, color: 'from-blue-700 to-blue-900' }
                                    ].map((social, index) => (
                                        <button
                                            key={index}
                                            className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"
                                            placeholder="Tell us what's on your mind..."
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                                    >
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Ready to Elevate Your Game?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Join thousands of athletes who trust X-STOP for their performance needs
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
                        Shop Now
                    </button>
                </div>
            </section>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 3s ease infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
        </div>
    );
}