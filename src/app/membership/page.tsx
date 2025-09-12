import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function MembershipPage() {
  const membershipBenefits = [
    {
      title: "Competitive Interest Rates",
      description: "Enjoy better rates on savings accounts and fixed deposits compared to traditional banks",
      icon: "bg-blue-600"
    },
    {
      title: "Easy Loan Access",
      description: "Quick and hassle-free loan approvals with member-friendly terms and conditions",
      icon: "bg-green-600"
    },
    {
      title: "Democratic Governance",
      description: "Have a say in the bank's operations through voting rights and participation in meetings",
      icon: "bg-purple-600"
    },
    {
      title: "Financial Literacy",
      description: "Access to free financial education and workshops to improve your financial knowledge",
      icon: "bg-orange-600"
    },
    {
      title: "Community Support",
      description: "Be part of a supportive network of women focused on mutual growth and empowerment",
      icon: "bg-teal-600"
    },
    {
      title: "Special Schemes",
      description: "Exclusive access to women-centric financial products and government-backed schemes",
      icon: "bg-indigo-600"
    }
  ];

  const membershipTypes = [
    {
      type: "Regular Membership",
      shareValue: "₹1,000",
      description: "Standard membership with full access to all banking services and member benefits",
      features: [
        "All banking services",
        "Voting rights in meetings",
        "Dividend sharing",
        "Priority loan processing",
        "Financial advisory services",
        "Member welfare schemes"
      ]
    },
    {
      type: "Premium Membership", 
      shareValue: "₹5,000",
      description: "Enhanced membership with additional benefits and priority services",
      features: [
        "All regular membership benefits",
        "Higher loan eligibility",
        "Premium customer service",
        "Exclusive investment opportunities",
        "Free financial planning sessions",
        "Special event invitations"
      ]
    }
  ];

  const eligibilityCriteria = [
    "Resident of Shahapur or surrounding areas",
    "Age between 18-70 years",
    "Valid identity and address proof",
    "Commitment to cooperative principles",
    "Ability to purchase minimum share capital"
  ];

  const requiredDocuments = [
    "Completed membership application form",
    "Identity proof (Aadhaar/PAN/Passport)",
    "Address proof (Utility bills/Aadhaar)",
    "Recent passport-size photographs (2 copies)",
    "Income proof or occupation certificate",
    "Share capital amount (cash/cheque)"
  ];

  const membershipProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out the membership application form with required documents"
    },
    {
      step: 2, 
      title: "Verification Process",
      description: "Our team verifies your documents and eligibility criteria"
    },
    {
      step: 3,
      title: "Board Approval",
      description: "Application reviewed and approved by the board of directors"
    },
    {
      step: 4,
      title: "Welcome as Member",
      description: "Receive membership certificate and start enjoying member benefits"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Become a Member
              </h1>
              <p className="text-xl text-gray-600">
                Join our cooperative family and be part of a movement that empowers women 
                through financial inclusion and community support. Experience banking 
                that's truly by women, for women.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#application">Apply for Membership</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#benefits">View Benefits</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1200+</div>
                  <div className="text-sm text-gray-600">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">16+</div>
                  <div className="text-sm text-gray-600">Years of Trust</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8%</div>
                  <div className="text-sm text-gray-600">Annual Dividend</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1b9f9ed-e6d0-48ea-b835-66db4f77aca0.png"
                alt="Diverse group of empowered Indian women members celebrating financial independence together"
                className="rounded-2xl shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Member Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Enjoy exclusive benefits and services designed specifically for our valued members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className={`w-16 h-16 ${benefit.icon === 'bg-blue-600' ? 'bg-blue-100' : 
                    benefit.icon === 'bg-green-600' ? 'bg-green-100' :
                    benefit.icon === 'bg-purple-600' ? 'bg-purple-100' :
                    benefit.icon === 'bg-orange-600' ? 'bg-orange-100' :
                    benefit.icon === 'bg-teal-600' ? 'bg-teal-100' : 'bg-indigo-100'
                    } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`w-8 h-8 ${benefit.icon} rounded-full`}></div>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Membership Types
            </h2>
            <p className="text-lg text-gray-600">
              Choose the membership type that best suits your financial needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTypes.map((membership, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 relative">
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{membership.type}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 my-4">
                    {membership.shareValue}
                    <span className="text-sm text-gray-500 font-normal"> share capital</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {membership.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {membership.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="#application">Choose This Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Eligibility Criteria</CardTitle>
                <CardDescription>
                  Basic requirements to become a member of our cooperative
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                      {criteria}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Required Documents</CardTitle>
                <CardDescription>
                  Documents needed to complete your membership application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((document, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                      {document}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Membership Process
            </h2>
            <p className="text-lg text-gray-600">
              Become a member in just four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {membershipProcess.map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  {index < membershipProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -ml-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Apply for Membership
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Why Join Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Be part of women's empowerment movement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Access to better financial services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Democratic participation in decision making</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">Annual dividends from profits</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our membership team is here to assist you with any questions about joining our cooperative.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📞 Phone: +91 XXXXX XXXXX</p>
                    <p>✉️ Email: membership@spmnsps.com</p>
                    <p>🕒 Office Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Join Our Growing Family Today
            </h2>
            <p className="text-xl text-blue-100">
              Take the first step towards financial empowerment and become part of our cooperative movement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="#application">Apply for Membership</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Visit Our Branch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}