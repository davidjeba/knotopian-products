
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Users, Heart, Award, Star, Newspaper, Gift, Building } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Building className="h-12 w-12" />
            About Knotopian 🌟
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover our journey, meet our amazing team, and learn about our mission to transform education worldwide! 🚀
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8 bg-white/80 backdrop-blur-sm shadow-lg overflow-x-auto">
            <TabsTrigger value="about" className="flex items-center gap-1 text-xs">
              <Building className="h-3 w-3" />
              About 🏢
            </TabsTrigger>
            <TabsTrigger value="leadership" className="flex items-center gap-1 text-xs">
              <Users className="h-3 w-3" />
              Leadership 👥
            </TabsTrigger>
            <TabsTrigger value="life" className="flex items-center gap-1 text-xs">
              <Heart className="h-3 w-3" />
              Life 💼
            </TabsTrigger>
            <TabsTrigger value="awards" className="flex items-center gap-1 text-xs">
              <Award className="h-3 w-3" />
              Awards 🏆
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-1 text-xs">
              <Star className="h-3 w-3" />
              Reviews ⭐
            </TabsTrigger>
            <TabsTrigger value="philanthropy" className="flex items-center gap-1 text-xs">
              <Gift className="h-3 w-3" />
              Giving 💝
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-1 text-xs">
              <Newspaper className="h-3 w-3" />
              News 📰
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">🎯 Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 leading-relaxed">
                    At Knotopian, we believe in the power of technology to transform education. Our mission is to democratize learning by creating innovative, scalable solutions that empower educators and learners worldwide. 🌍✨
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-pink-50">
                <CardHeader>
                  <CardTitle className="text-pink-900">🔮 Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-pink-700 leading-relaxed">
                    We envision a world where quality education is accessible to everyone, regardless of geographical boundaries or economic constraints. Through our cutting-edge platforms, we're building bridges to knowledge. 🌉📚
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-xl border-0 bg-gradient-to-r from-orange-100 to-yellow-100">
              <CardHeader>
                <CardTitle className="text-orange-900">📈 Our Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">2018</div>
                    <p className="text-orange-800">🚀 Founded with a dream</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">500K+</div>
                    <p className="text-orange-800">👨‍🎓 Students served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <p className="text-orange-800">🌍 Countries reached</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leadership Tab */}
          <TabsContent value="leadership" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                👑 Meet Our Leadership Team
              </h2>
              <p className="text-gray-600">
                Visionary leaders driving innovation in education technology! 🚀
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sarah Chen", role: "CEO & Founder", emoji: "👩‍💼", color: "from-blue-500 to-blue-600" },
                { name: "Michael Rodriguez", role: "CTO", emoji: "👨‍💻", color: "from-green-500 to-green-600" },
                { name: "Dr. Emily Watson", role: "Head of Education", emoji: "👩‍🏫", color: "from-purple-500 to-purple-600" },
                { name: "David Kim", role: "VP of Product", emoji: "👨‍🎨", color: "from-orange-500 to-orange-600" },
                { name: "Lisa Thompson", role: "Head of Marketing", emoji: "👩‍🚀", color: "from-pink-500 to-pink-600" },
                { name: "James Wilson", role: "VP of Sales", emoji: "👨‍💼", color: "from-indigo-500 to-indigo-600" }
              ].map((leader, index) => (
                <Card key={index} className={`text-center shadow-xl border-0 bg-gradient-to-br ${leader.color} text-white transform hover:scale-105 transition-transform`}>
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4">{leader.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="opacity-90">{leader.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Life at Knotopian Tab */}
          <TabsContent value="life" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                💼 Life at Knotopian
              </h2>
              <p className="text-gray-600">
                Experience our vibrant culture and amazing work environment! 🌈
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "🏢 Modern Workspace", desc: "State-of-the-art facilities designed for creativity and collaboration", color: "from-blue-100 to-blue-200" },
                { title: "🎯 Work-Life Balance", desc: "Flexible hours and remote work opportunities for all team members", color: "from-green-100 to-green-200" },
                { title: "🎓 Learning & Development", desc: "Continuous learning opportunities and professional growth programs", color: "from-purple-100 to-purple-200" },
                { title: "🎉 Team Events", desc: "Regular team building activities, celebrations, and company retreats", color: "from-pink-100 to-pink-200" }
              ].map((item, index) => (
                <Card key={index} className={`shadow-xl border-0 bg-gradient-to-br ${item.color}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Awards Tab */}
          <TabsContent value="awards" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                🏆 Awards & Recognition
              </h2>
              <p className="text-gray-600">
                Celebrating our achievements and industry recognition! ✨
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { award: "EdTech Innovation Award 2023", org: "Tech Excellence Council", emoji: "🥇" },
                { award: "Best Learning Platform", org: "Education Awards 2023", emoji: "🏆" },
                { award: "Startup of the Year", org: "Silicon Valley Awards", emoji: "⭐" },
                { award: "Customer Choice Award", org: "SaaS Review Platform", emoji: "💝" },
                { award: "Top 10 EdTech Companies", org: "Industry Magazine", emoji: "🎯" },
                { award: "Innovation Excellence", org: "Global Tech Summit", emoji: "🚀" }
              ].map((item, index) => (
                <Card key={index} className="text-center shadow-xl border-0 bg-gradient-to-br from-yellow-100 to-orange-100 transform hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <h3 className="font-bold text-orange-900 mb-2">{item.award}</h3>
                    <p className="text-orange-700 text-sm">{item.org}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                ⭐ What People Say
              </h2>
              <p className="text-gray-600">
                Hear from our amazing customers and partners! 💬
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { quote: "Knotopian transformed how we deliver education. The platform is intuitive and powerful!", author: "Dr. Amanda Smith", title: "University Dean", stars: 5 },
                { quote: "Outstanding support and innovative features. Our students love the interactive learning experience.", author: "Mark Johnson", title: "Training Manager", stars: 5 },
                { quote: "The best investment we made for our corporate training program. Highly recommended!", author: "Sarah Davis", title: "HR Director", stars: 5 },
                { quote: "Seamless integration and excellent user experience. Knotopian exceeded our expectations.", author: "Prof. Robert Lee", title: "Education Consultant", stars: 5 }
              ].map((testimonial, index) => (
                <Card key={index} className="shadow-xl border-0 bg-gradient-to-br from-white to-pink-50">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-pink-900">{testimonial.author}</p>
                      <p className="text-pink-700 text-sm">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Philanthropy Tab */}
          <TabsContent value="philanthropy" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                💝 Giving Back
              </h2>
              <p className="text-gray-600">
                Our commitment to social impact and community support! 🌍
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-100 to-teal-100">
                <CardHeader>
                  <CardTitle className="text-green-900">🎓 Education for All Initiative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800 mb-4">
                    Providing free access to our learning platform for underserved communities worldwide.
                  </p>
                  <div className="text-2xl font-bold text-green-600">10,000+ Students Served</div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-100 to-indigo-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">🌱 Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4">
                    Carbon-neutral operations and supporting reforestation projects globally.
                  </p>
                  <div className="text-2xl font-bold text-blue-600">5,000 Trees Planted</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* News & Events Tab */}
          <TabsContent value="news" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                📰 News & Events
              </h2>
              <p className="text-gray-600">
                Stay updated with our latest announcements and upcoming events! 📅
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "🚀 Knotopian 3.0 Launch Event", date: "March 15, 2024", type: "Product Launch", color: "from-blue-500 to-blue-600" },
                { title: "🎤 EdTech Conference Keynote", date: "February 20, 2024", type: "Speaking Event", color: "from-purple-500 to-purple-600" },
                { title: "🏆 Series B Funding Announcement", date: "January 10, 2024", type: "Company News", color: "from-green-500 to-green-600" },
                { title: "🌟 Partnership with Global University", date: "December 5, 2023", type: "Partnership", color: "from-orange-500 to-orange-600" }
              ].map((news, index) => (
                <Card key={index} className={`shadow-xl border-0 bg-gradient-to-r ${news.color} text-white`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                        <p className="opacity-90">{news.date}</p>
                      </div>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{news.type}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🌟 Knotopian</h3>
              <p className="text-gray-300">
                Elevate Content. Empower Learning. At Scale. 🚀
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">📚 Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">📖 Knowally LMS</a></li>
                <li><a href="#" className="hover:text-white">🎓 Industry Ready Courses</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">🏢 Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">ℹ️ About Us</a></li>
                <li><a href="#" className="hover:text-white">💼 Careers</a></li>
                <li><a href="#" className="hover:text-white">📝 Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">📞 Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✉️ hello@knotopian.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Knotopian. All rights reserved. Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
