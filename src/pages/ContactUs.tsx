
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help you elevate your content and empower learning at scale. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="office" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="office">Office</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Office Tab */}
          <TabsContent value="office" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Office Image */}
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Knotopian Office"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p className="text-muted-foreground">
                        123 Innovation Drive<br />
                        Tech Park, Suite 500<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">hello@knotopian.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Interactive Google Maps would be embedded here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Tab */}
          <TabsContent value="social" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground">
                Follow us on social media for the latest updates, insights, and learning resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Facebook */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <Facebook className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                  <p className="text-muted-foreground mb-4">12.5K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Like Page
                    </Button>
                    <Button variant="outline" className="w-full">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <Linkedin className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground mb-4">8.3K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Like Page
                    </Button>
                    <Button variant="outline" className="w-full">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-4">5.7K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Like Page
                    </Button>
                    <Button variant="outline" className="w-full">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* YouTube */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">YouTube</h3>
                  <p className="text-muted-foreground mb-4">15.2K subscribers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Like Channel
                    </Button>
                    <Button variant="outline" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Twitter */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <Twitter className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                  <p className="text-muted-foreground mb-4">9.1K followers</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Like
                    </Button>
                    <Button variant="outline" className="w-full">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Customer Support</h2>
              <p className="text-muted-foreground">
                Log in to create support tickets and get help with your Knotopian products.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Customer Login</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                    />
                  </div>
                  
                  <Button className="w-full">
                    Login to Support Portal
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Don't have an account? <a href="#" className="text-blue-600 hover:underline">Contact us</a></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Knotopian</h3>
              <p className="text-gray-400">
                Elevate Content. Empower Learning. At Scale.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Knowally LMS</a></li>
                <li><a href="#" className="hover:text-white">Industry Ready Courses</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@knotopian.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Knotopian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
