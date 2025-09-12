import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Main Branch",
      address: "Main Road, Shahapur",
      district: "Thane District, Maharashtra - 421601",
      phone: "+91 XXXXX XXXXX",
      email: "info@spmnsps.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM",
      icon: "bg-blue-600"
    },
    {
      title: "Customer Service",
      address: "Dedicated support for all inquiries",
      district: "Available during business hours",
      phone: "+91 XXXXX XXXXX",
      email: "support@spmnsps.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM",
      icon: "bg-green-600"
    },
    {
      title: "Loan Department",
      address: "Specialized loan consultation",
      district: "By appointment and walk-ins",
      phone: "+91 XXXXX XXXXX",
      email: "loans@spmnsps.com",
      hours: "Monday - Friday: 9:30 AM - 4:30 PM\nSaturday: 9:30 AM - 12:30 PM",
      icon: "bg-purple-600"
    }
  ];

  const quickActions = [
    {
      title: "Apply for Loan",
      description: "Submit your loan application and get quick approval",
      href: "/loans",
      icon: "bg-blue-500"
    },
    {
      title: "Become a Member",
      description: "Join our cooperative and enjoy member benefits",
      href: "/membership", 
      icon: "bg-green-500"
    },
    {
      title: "View Services",
      description: "Explore our complete range of financial services",
      href: "/services",
      icon: "bg-purple-500"
    },
    {
      title: "About Us",
      description: "Learn more about our mission and values",
      href: "/about",
      icon: "bg-orange-500"
    }
  ];

  const faqs = [
    {
      question: "What are your business hours?",
      answer: "Our main branch is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We're closed on Sundays and public holidays."
    },
    {
      question: "How can I become a member?",
      answer: "You can become a member by visiting our branch with required documents and minimum share capital. Our membership team will guide you through the process."
    },
    {
      question: "What documents do I need for a loan?",
      answer: "Required documents vary by loan type but generally include identity proof, address proof, income proof, and bank statements. Our loan officers can provide a complete list based on your specific needs."
    },
    {
      question: "Do you provide home loans?",
      answer: "Yes, we offer home loans up to ₹50 lakhs with competitive interest rates and flexible repayment options. Contact our loan department for detailed information."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our team for any inquiries about our services, membership, 
              or financial products. We're here to help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact-form">Send Message</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#location">Visit Our Branch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach us for all your banking and financial service needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className={`w-16 h-16 ${contact.icon === 'bg-blue-600' ? 'bg-blue-100' : 
                    contact.icon === 'bg-green-600' ? 'bg-green-100' : 'bg-purple-100'
                    } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`w-8 h-8 ${contact.icon} rounded-full`}></div>
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{contact.address}</p>
                    <p className="text-gray-600">{contact.district}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">📞 {contact.phone}</p>
                    <p className="text-gray-600">✉️ {contact.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 whitespace-pre-line">{contact.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Fast access to our most popular services and information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 ${action.icon} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {action.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={action.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section id="location" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Branch
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Shahapur for easy accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Branch Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address:</h3>
                    <p className="text-gray-600">
                      Savitribai Phule Mahila Nagari Sahakari Patsansha<br/>
                      Main Road, Shahapur<br/>
                      Thane District, Maharashtra - 421601
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Landmark:</h3>
                    <p className="text-gray-600">Near Municipal Office, Opposite Bus Stand</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Public Transport:</h3>
                    <p className="text-gray-600">
                      Easily accessible by local buses and auto-rickshaws.<br/>
                      Shahapur Railway Station is 2 km away.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Parking:</h3>
                    <p className="text-gray-600">Free parking available for customers</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Directions</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• From Mumbai: Take NH-160 towards Shahapur (2 hours drive)</li>
                  <li>• From Pune: Take NH-50 to Shahapur via Kalyan (2.5 hours drive)</li>
                  <li>• From Nashik: Take SH-14 towards Shahapur (1.5 hours drive)</li>
                  <li>• Local transport: Regular bus service from Kalyan and Kasara</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    Map integration will be available here showing our exact location 
                    with turn-by-turn directions
                  </p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or need assistance? Fill out the form below and we'll respond within 24 hours
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Expert Guidance</p>
                        <p className="text-sm text-gray-600">Get professional advice on financial products and services</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Quick Response</p>
                        <p className="text-sm text-gray-600">We respond to all inquiries within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Personalized Solutions</p>
                        <p className="text-sm text-gray-600">Customized financial solutions for your specific needs</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">No Obligation</p>
                        <p className="text-sm text-gray-600">Free consultation with no commitment required</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      For urgent banking matters or after-hours emergencies:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold">Emergency Helpline: +91 XXXXX XXXXX</p>
                      <p className="text-gray-600">Available 24/7 for existing members</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <Button asChild variant="outline">
              <Link href="#contact-form">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Visit our branch or contact us today to begin your journey with our cooperative bank
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}