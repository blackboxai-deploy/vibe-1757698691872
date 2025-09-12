import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Savings Account",
      description: "Secure savings with competitive interest rates and easy access to funds for all your financial needs.",
      features: [
        "High interest rates up to 6% per annum",
        "No minimum balance requirement",
        "Free online banking and mobile app",
        "Unlimited transactions",
        "ATM card with nationwide access",
        "Monthly statement and passbook facility"
      ],
      icon: "bg-blue-600",
      iconColor: "bg-blue-100",
      href: "/contact"
    },
    {
      title: "Personal Loans",
      description: "Quick and easy personal loans for your immediate financial needs with flexible repayment options.",
      features: [
        "Loan amount up to ₹5 lakhs",
        "Competitive interest rates (12-15% per annum)",
        "Quick approval within 48 hours",
        "Flexible repayment tenure (12-60 months)",
        "Minimal documentation required",
        "No hidden charges or processing fees"
      ],
      icon: "bg-green-600",
      iconColor: "bg-green-100",
      href: "/loans"
    },
    {
      title: "Business Loans",
      description: "Comprehensive business financing solutions to support women entrepreneurs in starting and growing their businesses.",
      features: [
        "Startup loans up to ₹10 lakhs",
        "Working capital financing",
        "Equipment and machinery loans",
        "Business expansion funding",
        "Competitive rates (10-14% per annum)",
        "Business mentorship and guidance"
      ],
      icon: "bg-purple-600",
      iconColor: "bg-purple-100",
      href: "/loans"
    },
    {
      title: "Fixed Deposits",
      description: "Secure investment options with guaranteed returns and flexible terms for your financial growth.",
      features: [
        "Interest rates up to 7.5% per annum",
        "Flexible deposit periods (6 months to 5 years)",
        "Premature withdrawal facility",
        "Automatic renewal option",
        "Loan against FD facility",
        "Tax-saving FD options available"
      ],
      icon: "bg-orange-600",
      iconColor: "bg-orange-100",
      href: "/contact"
    },
    {
      title: "Education Loans",
      description: "Supporting education and skill development for women and their families with student-friendly terms.",
      features: [
        "Funding for higher education and courses",
        "Competitive interest rates (9-12% per annum)",
        "Moratorium period during study",
        "Flexible repayment options",
        "Coverage for tuition and living expenses",
        "No collateral required for smaller amounts"
      ],
      icon: "bg-indigo-600",
      iconColor: "bg-indigo-100",
      href: "/loans"
    },
    {
      title: "Home Loans",
      description: "Fulfill your dream of owning a home with our affordable home loan solutions tailored for women.",
      features: [
        "Home purchase and construction loans",
        "Attractive interest rates (8-11% per annum)",
        "Loan amount up to ₹50 lakhs",
        "Tenure up to 20 years",
        "Additional benefits for women borrowers",
        "Property valuation and legal assistance"
      ],
      icon: "bg-teal-600",
      iconColor: "bg-teal-100",
      href: "/loans"
    },
    {
      title: "Insurance Services",
      description: "Comprehensive insurance coverage to protect you and your family from unforeseen circumstances.",
      features: [
        "Life insurance policies",
        "Health and medical insurance",
        "Property and asset insurance",
        "Group insurance schemes",
        "Affordable premium options",
        "Easy claim settlement process"
      ],
      icon: "bg-pink-600",
      iconColor: "bg-pink-100",
      href: "/contact"
    },
    {
      title: "Gold Loans",
      description: "Quick liquidity against your gold ornaments with transparent pricing and easy repayment options.",
      features: [
        "Instant loan approval",
        "Loan amount up to 75% of gold value",
        "Competitive interest rates",
        "Flexible repayment options",
        "Safe and secure gold storage",
        "Quick release upon repayment"
      ],
      icon: "bg-yellow-600",
      iconColor: "bg-yellow-100",
      href: "/loans"
    },
    {
      title: "Recurring Deposits",
      description: "Build a savings habit with our recurring deposit schemes that offer attractive returns on regular investments.",
      features: [
        "Monthly investment as low as ₹500",
        "Attractive interest rates",
        "Flexible tenure options (6 months to 10 years)",
        "Loan facility against RD",
        "Auto-debit facility available",
        "Premature closure option"
      ],
      icon: "bg-cyan-600",
      iconColor: "bg-cyan-100",
      href: "/contact"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Financial Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive banking and financial solutions designed specifically for women's empowerment 
              and financial independence in Shahapur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                iconColor={service.iconColor}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600">
                We provide specialized financial services with a focus on women's empowerment and community development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09dab8c0-528a-4423-b1b6-4f35efe18cc6.png"
                  alt="Professional women banking services team providing consultation in modern office environment"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Women-Focused Approach</h3>
                    <p className="text-gray-600">All our services are designed keeping women's specific financial needs and challenges in mind.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                    <p className="text-gray-600">We offer some of the best interest rates in the market for both savings and loans.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Processing</h3>
                    <p className="text-gray-600">Fast approval processes with minimal documentation and hassle-free procedures.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">Our team provides personalized attention and guidance for all your financial decisions.</p>
                  </div>
                </div>
              </div>
            </div>
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
              Contact us today to learn more about our services or to start your application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/loans">Apply for Loan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}