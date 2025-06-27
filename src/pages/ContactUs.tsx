
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, Twitter, Building2, Users, Heart, Ticket } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Mail className="h-12 w-12" />
            Get in Touch 📞
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help you elevate your content and empower learning at scale. 
            Reach out to us through any of the channels below. 🚀
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="office" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger value="office" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Office 🏢
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Social 📱
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <Ticket className="h-4 w-4" />
              Support 🎧
            </TabsTrigger>
          </TabsList>

          {/* Office Tab */}
          <TabsContent value="office" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Office Image */}
              <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Knotopian Office"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      🏆 Our Beautiful Workspace
                    </h3>
                    <p className="text-blue-700">
                      A modern, inspiring environment where innovation meets creativity! ✨
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-900">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    Contact Information 📍
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-100/50">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-purple-900">🏢 Office Address</p>
                      <p className="text-purple-700">
                        123 Innovation Drive<br />
                        Tech Park, Suite 500<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-100/50">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-900">📞 Phone</p>
                      <p className="text-green-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-pink-100/50">
                    <Mail className="h-5 w-5 text-pink-600" />
                    <div>
                      <p className="font-semibold text-pink-900">✉️ Email</p>
                      <p className="text-pink-700">hello@knotopian.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-100/50">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-semibold text-orange-900">⏰ Business Hours</p>
                      <p className="text-orange-700">
                        Mon - Fri: 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">🗺️ Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center border-2 border-dashed border-green-300">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-green-800 font-semibold">🌍 Interactive Google Maps</p>
                    <p className="text-green-600">Would be embedded here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Tab */}
          <TabsContent value="social" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🌟 Connect With Us
              </h2>
              <p className="text-gray-600">
                Follow us on social media for the latest updates, insights, and learning resources! 🎉
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Facebook */}
              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Facebook className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Facebook 📘</h3>
                  <p className="mb-4 opacity-90">12.5K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      👍 Like Page
                    </Button>
                    <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      ➕ Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-blue-700 to-blue-800 text-white transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Linkedin className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">LinkedIn 💼</h3>
                  <p className="mb-4 opacity-90">8.3K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-white text-blue-700 hover:bg-blue-50">
                      👍 Like Page
                    </Button>
                    <Button variant="outline" className="w-full bg-white text-blue-700 hover:bg-blue-50">
                      ➕ Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-pink-500 to-purple-600 text-white transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Instagram className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Instagram 📸</h3>
                  <p className="mb-4 opacity-90">5.7K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-white text-pink-600 hover:bg-pink-50">
                      ❤️ Like Page
                    </Button>
                    <Button variant="outline" className="w-full bg-white text-pink-600 hover:bg-pink-50">
                      ➕ Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* YouTube */}
              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-red-500 to-red-600 text-white transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Youtube className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">YouTube 📺</h3>
                  <p className="mb-4 opacity-90">15.2K subscribers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-white text-red-600 hover:bg-red-50">
                      👍 Like Channel
                    </Button>
                    <Button variant="outline" className="w-full bg-white text-red-600 hover:bg-red-50">
                      🔔 Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Twitter */}
              <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-blue-400 to-blue-500 text-white transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Twitter className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Twitter 🐦</h3>
                  <p className="mb-4 opacity-90">9.1K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full bg-white text-blue-400 hover:bg-blue-50">
                      ❤️ Like
                    </Button>
                    <Button variant="outline" className="w-full bg-white text-blue-400 hover:bg-blue-50">
                      ➕ Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                🎧 Customer Support
              </h2>
              <p className="text-gray-600">
                Log in to create support tickets and get help with your Knotopian products! 🚀
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
                <CardHeader>
                  <CardTitle className="text-center text-green-900">
                    🔐 Customer Login
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-green-800">📧 Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-green-800">🔒 Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    🎫 Login to Support Portal
                  </Button>
                  
                  <div className="text-center text-sm text-gray-600">
                    <p>Don't have an account? <a href="#" className="text-blue-600 hover:underline">💬 Contact us</a></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12">
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

export default ContactUs;
