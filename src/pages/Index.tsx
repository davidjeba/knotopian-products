
import { Button } from "@/components/ui/button";
import { Card, from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target, BookOpen, Zap, Shield, Globe } from "lucide-react";

const Index = () => {
  const stats = [
    { value: "30-40%", label: "Cost Reduction", icon: TrendingUp },
    { value: "80%", label: "Completion Rate", icon: Target },
    { value: "60%", label: "Faster Onboarding", icon: Clock },
    { value: "7 Days", label: "Launch Time", icon: Zap }
  ];

  const knowallyFeatures = [
    "Structured Learning Paths",
    "Modular Content Creation", 
    "Custom Branding & White-labeling",
    "No Development Dependency",
    "Custom Integrations (SSO, HRMS)"
  ];

  const industryCoursesFeatures = [
    "Scenario-Based Content",
    "Guided Compliance Modules",
    "Role-Specific Simulations", 
    "Modular Format Integration",
    "Instant Enterprise Deployment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
            Knotopian Products
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Elevate Content. Empower Learning. <span className="text-blue-600">At Scale.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            We're <strong>learning architects and domain specialists</strong> who have partnered with enterprises globally to design, deliver, and scale performance-driven learning systems. After solving content challenges across industries, we identified two fundamental gaps—<strong>structured delivery</strong> and <strong>readiness at scale</strong>.
          </p>
          <div className="bg-slate-900 text-white p-6 rounded-xl italic text-lg">
            "Knotopian is not a software company. We are your extended L&D brain, building tools that multiply your training impact."
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Knowally Product Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Ready-to-Deploy LMS</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Knowally: <span className="text-green-600">Smart, Structured, and Streamlined</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                <strong>Knowally</strong> is not just another LMS—it's the <strong>learning ecosystem you wish you built</strong>. Designed for organizations struggling with ad-hoc training delivery, chaotic content management, and limited tech bandwidth.
              </p>
              
              <div className="space-y-3 mb-8">
                {knowallyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Perfect For:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• SMBs lacking a dedicated L&D platform</li>
                  <li>• Enterprises with fragmented content delivery systems</li>
                  <li>• Training providers scaling new revenue models</li>
                </ul>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Get Live Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Knowally LMS Platform"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">< 7 Days</div>
                    <div className="text-sm text-slate-600">Launch Time</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">80%</div>
                    <div className="text-sm text-slate-600">Completion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Ready Courses Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                  alt="Industry Ready Courses"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-xs text-slate-600">Compliance Ready</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <Globe className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-xs text-slate-600">Multi-Industry</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-xs text-slate-600">Expert Curated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Expert-Curated Content</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Industry Ready Courses: <span className="text-blue-600">Built by SMEs. Ready for Action.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                From healthcare to IT, retail to manufacturing—<strong>Knotopian's Industry Ready Courses</strong> are pre-built, customizable content libraries curated by <strong>real subject matter experts</strong>. These are not generic templates; they're contextual, field-tested, and compliance-aligned.
              </p>

              <div className="space-y-3 mb-8">
                {industryCoursesFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Fast-growing teams needing scalable onboarding</li>
                  <li>• Regulated industries requiring compliance frameworks</li>
                  <li>• Companies entering new markets or product lines</li>
                </ul>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Explore Course Library <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Knotopian Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Why Knotopian's Products Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our products are <strong>not standalone tools</strong>—they're <strong>learning systems</strong> designed for outcome-driven training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Target className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Subject Matter Precision</h4>
              <p className="text-slate-600 text-sm">We've worked inside L&D rooms across industries. We know what works.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-10 h-10 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Platform + Content Synergy</h4>
              <p className="text-slate-600 text-sm">Integrated learning systems designed for maximum training impact.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 mx-auto mb-4 text-purple-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Customizable at Core</h4>
              <p className="text-slate-600 text-sm">Need multilingual? AR/VR-ready? Compliance integration? We've done it.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-4 text-orange-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Built for All Sizes</h4>
              <p className="text-slate-600 text-sm">From 50-member startups to global enterprises—our solutions flex to fit.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Talk</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Whether you're digitizing your L&D from scratch, wanting to skip years of trial-and-error content production, or just ready to scale with speed and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Request a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
              Download Product Deck
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-300 text-lg mb-4">📞 Connect with Knotopian. Let's build your training future.</p>
            <Separator className="max-w-md mx-auto bg-slate-700" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
