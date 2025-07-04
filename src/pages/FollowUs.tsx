import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Headphones, Share2, ThumbsUp, MessageSquare, BookOpen, Rss, Podcast } from "lucide-react";

interface ContentItem {
  id: string;
  type: 'blog' | 'podcast' | 'social';
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  readTime?: string;
  duration?: string;
  date: string;
  image: string;
  bgColor: string;
  platform?: string;
  likes?: number;
  comments?: number;
}

const contentData: ContentItem[] = [
  {
    id: '1',
    type: 'blog',
    title: 'Skills Training: What It Is & How It Benefits Your Business',
    description: 'Explore the future of learning with insights, trends, and best practices in Learning Management Systems',
    author: 'Sudarshan Somanathan',
    authorAvatar: '👨‍💻',
    readTime: '17min read',
    date: '2024-01-15',
    image: '🏢',
    bgColor: 'from-blue-400 to-blue-600'
  },
  {
    id: '2',
    type: 'blog',
    title: '15 Top LMS Features Your Learning Software Should Have',
    description: 'Discover essential features that make learning management systems effective and engaging',
    author: 'Alex Johnson',
    authorAvatar: '👩‍🎓',
    readTime: '12min read',
    date: '2024-01-10',
    image: '💻',
    bgColor: 'from-yellow-400 to-yellow-600'
  },
  {
    id: '3',
    type: 'podcast',
    title: 'The Future of Digital Learning',
    description: 'Join us as we explore emerging trends in educational technology and digital transformation',
    author: 'Maria Gomez',
    authorAvatar: '🎙️',
    duration: '45min',
    date: '2024-01-12',
    image: '🎧',
    bgColor: 'from-purple-400 to-purple-600'
  },
  {
    id: '4',
    type: 'podcast',
    title: 'Building Effective Learning Communities',
    description: 'Discover strategies for creating engaging and collaborative learning environments',
    author: 'James Lee',
    authorAvatar: '👨‍🏫',
    duration: '38min',
    date: '2024-01-08',
    image: '🎙️',
    bgColor: 'from-green-400 to-green-600'
  },
  {
    id: '5',
    type: 'social',
    title: 'Latest Product Update on LinkedIn',
    description: 'Exciting new features announced! Check out our latest LMS capabilities and user feedback',
    author: 'Knotopian Team',
    authorAvatar: '🔗',
    date: '2024-01-14',
    image: '📱',
    bgColor: 'from-indigo-400 to-indigo-600',
    platform: 'LinkedIn',
    likes: 245,
    comments: 32
  },
  {
    id: '6',
    type: 'social',
    title: 'Behind the Scenes: Development Process',
    description: 'Take a peek into our development workflow and meet the amazing team behind Knotopian',
    author: 'Knotopian Team',
    authorAvatar: '📸',
    date: '2024-01-11',
    image: '🎬',
    bgColor: 'from-pink-400 to-pink-600',
    platform: 'Instagram',
    likes: 189,
    comments: 24
  },
  {
    id: '7',
    type: 'blog',
    title: 'Skills Management: Definition, Implementation & Tips',
    description: 'Learn how to effectively manage and develop skills within your organization',
    author: 'Maria Gomez',
    authorAvatar: '👩‍💼',
    readTime: '9min read',
    date: '2024-01-05',
    image: '📊',
    bgColor: 'from-orange-400 to-orange-600'
  },
  {
    id: '8',
    type: 'social',
    title: 'Quick Tips for Better Learning Outcomes',
    description: 'Swipe through our carousel of actionable tips to improve your training programs',
    author: 'Knotopian Team',
    authorAvatar: '💡',
    date: '2024-01-09',
    image: '💭',
    bgColor: 'from-teal-400 to-teal-600',
    platform: 'Twitter',
    likes: 156,
    comments: 18
  }
];

const FollowUs = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'podcast' | 'social'>('all');

  const filteredContent = contentData
    .filter(item => activeFilter === 'all' || item.type === activeFilter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Share2 className="h-12 w-12" />
            Follow Us 📱
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay connected with the latest insights, trends, and best practices in Learning Management Systems through our blog, podcast, and social media channels! 🚀
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveFilter('all')}
              className="flex items-center gap-2"
            >
              <Rss className="h-4 w-4" />
              All Content 📱
            </TabsTrigger>
            <TabsTrigger 
              value="blog" 
              onClick={() => setActiveFilter('blog')}
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Blog 📝
            </TabsTrigger>
            <TabsTrigger 
              value="podcast" 
              onClick={() => setActiveFilter('podcast')}
              className="flex items-center gap-2"
            >
              <Podcast className="h-4 w-4" />
              Podcast 🎧
            </TabsTrigger>
            <TabsTrigger 
              value="social" 
              onClick={() => setActiveFilter('social')}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Social 🌟
            </TabsTrigger>
          </TabsList>

          {/* All Content Tab */}
          <TabsContent value="all" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                📱 All Our Content
              </h2>
              <p className="text-gray-600">
                Discover all our latest content across blogs, podcasts, and social media! 🌟
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredContent.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 transform hover:scale-105 transition-all duration-300"
                >
                  {/* Content Image/Icon */}
                  <div className={`relative h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
                    <span className="text-6xl">{item.image}</span>
                    {item.type === 'social' && item.platform && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                        {item.platform}
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      {item.type === 'blog' && <span>📝</span>}
                      {item.type === 'podcast' && <span>🎧</span>}
                      {item.type === 'social' && <span>📱</span>}
                      <span className="capitalize text-gray-700">{item.type}</span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Social Media Stats */}
                    {item.type === 'social' && (
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    )}

                    {/* Author & Meta Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg">
                          {item.authorAvatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.author}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      {(item.readTime || item.duration) && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          {item.type === 'podcast' ? (
                            <Headphones className="w-3 h-3" />
                          ) : (
                            <Clock className="w-3 h-3" />
                          )}
                          <span>{item.readTime || item.duration}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                📝 Follow Our Blog
              </h2>
              <p className="text-gray-600">
                Explore the future of learning with insights, trends, and best practices in Learning Management Systems! 📚
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {contentData.filter(item => item.type === 'blog').map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
                    <span className="text-6xl">{item.image}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg">
                          {item.authorAvatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.author}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Podcast Tab */}
          <TabsContent value="podcast" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🎧 Follow Our Podcast
              </h2>
              <p className="text-gray-600">
                Listen to engaging conversations about education technology and learning innovation! 🎙️
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentData.filter(item => item.type === 'podcast').map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-purple-50 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
                    <span className="text-6xl">{item.image}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg">
                          {item.authorAvatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.author}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Headphones className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                🌟 Follow Our Social Media
              </h2>
              <p className="text-gray-600">
                Stay connected with our latest updates and behind-the-scenes content! 📱
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentData.filter(item => item.type === 'social').map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-pink-50 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
                    <span className="text-6xl">{item.image}</span>
                    {item.platform && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                        {item.platform}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-lg">
                          {item.authorAvatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.author}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
            Stay Connected! 🌟
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Never miss an update! Subscribe to our newsletter and follow us on social media for the latest insights and trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 transform hover:scale-105 transition-all">
              <span>📧</span>
              Subscribe Newsletter
            </Button>
            <Button variant="outline" className="px-8 py-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg font-medium flex items-center gap-2 transform hover:scale-105 transition-all">
              <Share2 className="w-4 h-4" />
              Follow on Social
            </Button>
          </div>
        </div>
      </section>

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

export default FollowUs;