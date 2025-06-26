
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target, BookOpen, Zap, Shield, Globe, Layers, Settings, Award } from "lucide-react";

const Index = () => {
  const stats = [
    { value: "30-40%", label: "Cost Reduction", icon: TrendingUp },
    { value: "80%", label: "Completion Rate", icon: Target },
    { value: "60%", label: "Faster Onboarding", icon: Clock },
    { value: "7 Days", label: "Launch Time", icon: Zap }
  ];

  const knowallyFeatures = [
    "Structured Learning Paths: Open or sequential learning journeys—your call",
    "Modular Content Creation: Intuitive tools to design microlearning, assessments, videos, simulations", 
    "Custom Branding: White-labeled experience tailored to your org identity",
    "No Dev Dependency: Get started instantly. No coding. No waiting",
    "Custom Integrations: Need SSO? HRMS sync? Our team can tailor it for you"
  ];

  const industryCoursesFeatures = [
    "Scenario-Based Content: Role-specific simulations and decision-making frameworks",
    "Guided Modules: For onboarding, compliance, SOPs, leadership, DEI, safety, and more",
    "Modular Format: Use as-is, or plug into your own LMS", 
    "Instant Deployment: Launch enterprise-grade training in days, not months"
  ];

  const knowallyClients = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "HealthPlus", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&h=60&fit=crop" },
    { name: "EduSphere", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=60&fit=crop" },
    { name: "RetailMax", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&h=60&fit=crop" },
    { name: "FinanceFlow", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=60&fit=crop" },
    { name: "ManufactureCo", logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=120&h=60&fit=crop" }
  ];

  const industryClients = [
    { name: "MedTech Solutions", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Auto Dynamics", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&h=60&fit=crop" },
    { name: "Hospitality Group", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=60&fit=crop" },
    { name: "Energy Corp", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&h=60&fit=crop" },
    { name: "Construction Plus", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=60&fit=crop" },
    { name: "Banking Solutions", logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=120&h=60&fit=crop" }
  ];

  const knowallyFaqs = [
    {
      question: "What are the disadvantages of creating your own LMS?",
      answer: "Building your own LMS can cost $100K-500K+ and take 6-18 months to develop. You'll face ongoing maintenance costs, security vulnerabilities, compliance challenges, and the need for dedicated technical staff. Most organizations underestimate the complexity of user management, content delivery, reporting, and integrations—leading to budget overruns and delayed launches."
    },
    {
      question: "How is Knowally platform flexible to be used by different departments?",
      answer: "Knowally's modular architecture allows HR for onboarding, Sales for product training, Compliance for regulatory courses, and Operations for safety protocols—all within one platform. Each department gets customized dashboards, role-based permissions, and department-specific branding while maintaining centralized reporting and user management."
    },
    {
      question: "Why do most custom LMS projects fail or get abandoned?",
      answer: "Over 70% of custom LMS projects exceed budget and timeline due to scope creep, technical complexity, and changing requirements. Organizations often realize mid-development that they need features like SCORM compliance, mobile responsiveness, advanced analytics, and integration capabilities that weren't initially planned—leading to costly redesigns or complete project abandonment."
    },
    {
      question: "How quickly can we get started with Knowally?",
      answer: "With Knowally, you can launch your learning platform in under 7 days. Our ready-to-deploy system includes pre-built templates, content management tools, and seamless integrations. No technical setup required—just customize your branding and start uploading content immediately."
    }
  ];

  const industryFaqs = [
    {
      question: "What happens when your in-house content development team leaves the company?",
      answer: "This is a common nightmare scenario—custom content libraries become 'orphaned' when key team members leave, creating knowledge gaps, inconsistent quality, and development bottlenecks. With Industry Ready Courses, you get professionally curated content that's maintained and updated by our expert team, ensuring continuity regardless of internal changes."
    },
    {
      question: "How do Industry Ready Courses adapt to different company cultures?",
      answer: "Our courses are built with modular frameworks that can be customized with your company's terminology, processes, and examples. You can add company-specific case studies, modify scenarios to match your industry context, and integrate your brand guidelines while maintaining the core learning objectives and compliance requirements."
    },
    {
      question: "How much does it really cost to create industry-specific training content from scratch?",
      answer: "Creating comprehensive industry training typically costs $50K-200K per course when factoring in SME time, instructional design, multimedia production, and compliance validation. This doesn't include ongoing updates for regulatory changes. Industry Ready Courses provide the same quality at a fraction of the cost, with built-in maintenance and regular updates."
    },
    {
      question: "Can we integrate Industry Ready Courses with our existing systems?",
      answer: "Yes, our courses support SCORM, xAPI, and direct API integrations with 50+ popular LMS platforms including Workday, SAP SuccessFactors, and custom systems. We also provide migration assistance and can customize integration workflows to match your existing training processes and reporting requirements."
    }
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
            Knotopian isn't just a content agency. We're <strong>learning architects and domain specialists</strong> who have partnered with enterprises across the globe to design, deliver, and scale performance-driven learning systems. After years of solving content challenges across industries, we identified two fundamental gaps—<strong>structured delivery</strong> and <strong>readiness at scale</strong>. The result? Two powerful products designed to solve them.
          </p>
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
              <Badge className="mb-4 bg-green-100 text-green-800">Ready-to-Deploy LMS Built by Experts</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Knowally: <span className="text-green-600">Smart, Structured, and Streamlined</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                <strong>Knowally</strong> is not just another LMS—it's the <strong>learning ecosystem you wish you built</strong>. Designed for organizations struggling with ad-hoc training delivery, chaotic content management, and limited tech bandwidth, Knowally offers:
              </p>
              
              <div className="space-y-4 mb-8">
                {knowallyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Who Needs It?</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• SMBs lacking a dedicated L&D platform</li>
                  <li>• Enterprises with fragmented content delivery systems</li>
                  <li>• Training providers scaling new revenue models</li>
                </ul>
              </div>

              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why Choose Knowally?</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Launch in &lt; 7 Days</li>
                  <li>• Reduce content delivery cost by 30–40%</li>
                  <li>• Increase training completion rates by up to 80%</li>
                </ul>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                🔗 Get a live demo. Start training from Day 1 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6 bg-gradient-to-br from-green-100 to-blue-100">
                  <Layers className="w-8 h-8 mb-4 text-green-600" />
                  <h4 className="font-semibold mb-2 text-slate-900">Structured Learning Paths</h4>
                  <p className="text-sm text-slate-600">Create open or sequential learning journeys that adapt to your organization's needs</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-blue-100 to-purple-100">
                  <Settings className="w-8 h-8 mb-4 text-blue-600" />
                  <h4 className="font-semibold mb-2 text-slate-900">No Dev Dependency</h4>
                  <p className="text-sm text-slate-600">Get started instantly with no coding required—just customize and launch</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-purple-100 to-green-100">
                  <Zap className="w-8 h-8 mb-4 text-purple-600" />
                  <h4 className="font-semibold mb-2 text-slate-900">Launch in &lt; 7 Days</h4>
                  <p className="text-sm text-slate-600">From setup to training delivery—get your team learning faster than ever</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Knowally Clients Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">Clients using Knowally</h3>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {knowallyClients.map((client, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border hover:shadow-md transition-shadow">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Knowally FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">Frequently Asked Questions</h3>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {knowallyFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`knowally-item-${index}`} className="border border-slate-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-green-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Ready Courses Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-100 to-purple-100">
                  <Shield className="w-8 h-8 mb-4 text-blue-600" />
                  <h4 className="font-semibold mb-2 text-slate-900">Scenario-Based Content</h4>
                  <p className="text-sm text-slate-600">Role-specific simulations and decision-making frameworks that mirror real workplace challenges</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-purple-100 to-orange-100">
                  <BookOpen className="w-8 h-8 mb-4 text-purple-600" />
                  <h4 className="font-semibold mb-2 text-slate-900">Expert Curated</h4>
                  <p className="text-sm text-slate-600">Built by real subject matter experts, not generic templates—contextual and field-tested</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-orange-100 to-blue-100">
                  <Award className="w-8 h-8 mb-4 text-orange-600" />
                  <h4 className="font-semibold mb-2 text-slate-900">Instant Deployment</h4>
                  <p className="text-sm text-slate-600">Launch enterprise-grade training in days, not months—ready when you are</p>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-800">The Fast-Track to Skill Deployment</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Industry Ready Courses: <span className="text-blue-600">Built by SMEs. Ready for Action.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                From healthcare to IT, retail to manufacturing—<strong>Knotopian's Industry Ready Courses</strong> are pre-built, customizable content libraries curated by <strong>real subject matter experts</strong>. These are not generic templates; they're contextual, field-tested, and compliance-aligned.
              </p>

              <div className="space-y-4 mb-8">
                {industryCoursesFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Who Needs It?</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Fast-growing teams needing scalable onboarding</li>
                  <li>• Regulated industries requiring compliance frameworks</li>
                  <li>• Companies entering new markets or product lines</li>
                </ul>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why It Matters</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Saves 100s of content production hours</li>
                  <li>• Reduces onboarding time by up to 60%</li>
                  <li>• Improves knowledge retention and audit readiness</li>
                </ul>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                🧩 Build your learning foundation in hours—not quarters <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Industry Courses Clients Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">Clients using Industry Ready Courses</h3>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {industryClients.map((client, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="flex items-center justify-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Industry FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">Frequently Asked Questions</h3>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {industryFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`industry-item-${index}`} className="border border-slate-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Why Knotopian Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Why Knotopian's Products Work</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Target className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Subject Matter Precision</h4>
              <p className="text-slate-600 text-sm">We've worked inside L&D rooms across industries. We know what works.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-10 h-10 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Platform + Content Synergy</h4>
              <p className="text-slate-600 text-sm">Our products are <strong>not standalone tools</strong>—they're <strong>learning systems</strong> designed for outcome-driven training.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 mx-auto mb-4 text-purple-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Customizable at Core</h4>
              <p className="text-slate-600 text-sm">Need to plug our frameworks into your compliance process? Need multilingual? AR/VR-ready? We've already done it.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-4 text-orange-600" />
              <h4 className="font-semibold mb-3 text-slate-900">Built for All Sizes</h4>
              <p className="text-slate-600 text-sm">Whether you're a 50-member startup or a global enterprise, our solutions flex to fit.</p>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-slate-900 text-white p-6 rounded-xl italic text-lg max-w-4xl mx-auto">
              "Knotopian is not a software company. We are your extended L&D brain, building tools that multiply your training impact."
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Talk</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Whether you're:
          </p>
          
          <div className="mb-8 max-w-2xl mx-auto">
            <ul className="text-lg text-slate-300 space-y-3">
              <li>• Digitizing your L&D from scratch</li>
              <li>• Wanting to skip years of trial-and-error content production</li>
              <li>• Or just ready to scale with speed and precision</li>
            </ul>
          </div>

          <p className="text-xl text-blue-300 mb-8">
            📞 Connect with Knotopian. Let's build your training future.
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
            <Separator className="max-w-md mx-auto bg-slate-700" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
