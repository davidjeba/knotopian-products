import { useState } from "react";
import { Calendar, Clock, Users, Headphones, Share2, ThumbsUp, MessageSquare } from "lucide-react";

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
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600'
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
    bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-600'
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
    bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600'
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
    bgColor: 'bg-gradient-to-br from-green-400 to-green-600'
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
    bgColor: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
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
    bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
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
    bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600'
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
    bgColor: 'bg-gradient-to-br from-teal-400 to-teal-600',
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

  const filters = [
    { key: 'all' as const, label: 'All Content', icon: '📱', count: contentData.length },
    { key: 'blog' as const, label: 'Blog', icon: '📝', count: contentData.filter(item => item.type === 'blog').length },
    { key: 'podcast' as const, label: 'Podcast', icon: '🎧', count: contentData.filter(item => item.type === 'podcast').length },
    { key: 'social' as const, label: 'Social Media', icon: '📱', count: contentData.filter(item => item.type === 'social').length }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Follow Knotopian
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Follow Us 📱
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with the latest insights, trends, and best practices in Learning Management Systems through our blog, podcast, and social media channels
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground border border-border'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.label}</span>
                <span className="bg-background/20 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Content Image/Icon */}
                <div className={`relative h-48 ${item.bgColor} flex items-center justify-center`}>
                  <span className="text-6xl">{item.image}</span>
                  {item.type === 'social' && item.platform && (
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      {item.platform}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {item.type === 'blog' && <span>📝</span>}
                    {item.type === 'podcast' && <span>🎧</span>}
                    {item.type === 'social' && <span>📱</span>}
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Social Media Stats */}
                  {item.type === 'social' && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
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
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg">
                        {item.authorAvatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.author}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {(item.readTime || item.duration) && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        {item.type === 'podcast' ? (
                          <Headphones className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        <span>{item.readTime || item.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold mb-2">No content found</h3>
              <p className="text-muted-foreground">
                No content available for the selected filter. Try selecting a different tab.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected! 🌟</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Never miss an update! Subscribe to our newsletter and follow us on social media for the latest insights and trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
              <span>📧</span>
              Subscribe Newsletter
            </button>
            <button className="px-8 py-3 bg-card text-card-foreground border border-border rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Follow on Social
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FollowUs;