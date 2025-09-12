import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/StatsCard";
import Link from "next/link";

export default function AboutPage() {
  const achievements = [
    {
      year: "2008",
      title: "Foundation",
      description: "Established with a vision to empower women through financial inclusion"
    },
    {
      year: "2012", 
      title: "500 Members",
      description: "Reached our first major milestone of 500 active women members"
    },
    {
      year: "2016",
      title: "₹1 Crore Disbursed",
      description: "Successfully disbursed over ₹1 crore in loans to women entrepreneurs"
    },
    {
      year: "2020",
      title: "Digital Banking",
      description: "Launched online banking and mobile app services for better accessibility"
    },
    {
      year: "2024",
      title: "1000+ Members",
      description: "Proud to serve over 1000+ women members with comprehensive financial services"
    }
  ];

  const leadership = [
    {
      name: "Mrs. Priya Sharma",
      position: "Chairperson",
      description: "20+ years of experience in cooperative banking and women's empowerment initiatives"
    },
    {
      name: "Mrs. Sunita Patil",
      position: "Managing Director", 
      description: "Expert in financial management with a focus on rural and women-centric banking"
    },
    {
      name: "Mrs. Kavita Desai",
      position: "General Manager",
      description: "Specialized in loan operations and business development for women entrepreneurs"
    },
    {
      name: "Mrs. Meera Joshi",
      position: "Branch Manager",
      description: "Dedicated to customer service excellence and financial advisory services"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              सावित्रीबाई फुले महिला नागरी सहकारी पतसंस्था बद्दल
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              २००८ पासून सहकारी बँकिंगद्वारे महिलांचे सशक्तिकरण करत आहोत. शहापूरमध्ये मजबूत समुदाय निर्माण करण्यासाठी 
              प्रवेशयोग्य, परवडणारी आणि महिला-केंद्रित आर्थिक सेवा प्रदान करण्यासाठी आम्ही वचनबद्ध आहोत.
            </p>
            <Button asChild size="lg">
              <Link href="/membership">आमच्या मिशनमध्ये सामील व्हा</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9660a77a-1c8d-4d04-aa66-ef2a03555b50.png"
                alt="Inspiring Indian women working together in cooperative banking environment showing unity and empowerment"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">आमचे उद्दिष्ट</h2>
                <p className="text-gray-600 text-lg">
                  प्रवेशयोग्य आर्थिक सेवांद्वारे महिलांचे सशक्तिकरण करणे, आर्थिक साक्षरतेला प्रोत्साहन देणे 
                  आणि सहकारी बँकिंग तत्त्वांद्वारे मजबूत, अधिक लवचिक समुदाय निर्माण करताना आर्थिक स्वातंत्र्यास चालना देणे.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">आमची दृष्टी</h2>
                <p className="text-gray-600 text-lg">
                  महाराष्ट्रातील आघाडीची महिला सहकारी बँक बनणे, महिला सशक्तिकरण, आर्थिक समावेशन आणि 
                  नाविन्यपूर्ण व टिकाऊ बँकिंग समाधानांद्वारे समुदाय विकासासाठी आमच्या वचनबद्धतेसाठी ओळख मिळवणे.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Measuring our success through the lives we've touched and communities we've empowered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Active Members"
              value="1,200+"
              description="Women empowered through our services"
              color="blue"
            />
            <StatsCard
              title="Loans Disbursed"
              value="₹5.2 Cr"
              description="Total financial support provided"
              color="green"
            />
            <StatsCard
              title="Years of Service"
              value="16+"
              description="Serving the community since 2008"
              color="purple"
            />
            <StatsCard
              title="Savings Mobilized"
              value="₹8.5 Cr"
              description="Total savings from our members"
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to empower women through financial services
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 hidden md:block"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">{achievement.year}</span>
                          </div>
                          <div>
                            <CardTitle className="text-xl">{achievement.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {achievement.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced leaders dedicated to women's empowerment and financial inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our mission and daily operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Empowerment</h3>
              <p className="text-gray-600">
                Enabling women to achieve financial independence and make informed decisions about their future.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency, reliability, and ethical banking practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community</h3>
              <p className="text-gray-600">
                Fostering stronger communities through cooperative banking and mutual support systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100">
              Be part of our journey in empowering women and building stronger communities through cooperative banking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}