import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoanCalculator } from "@/components/LoanCalculator";
import Link from "next/link";

export default function LoansPage() {
  const loanProducts = [
    {
      title: "Personal Loans",
      description: "Quick financial assistance for your personal needs and emergencies.",
      amount: "Up to ₹5 Lakhs",
      rate: "12-15% per annum",
      tenure: "12-60 months",
      features: [
        "Quick approval within 48 hours",
        "Minimal documentation required",
        "No collateral needed",
        "Flexible repayment options",
        "Competitive interest rates",
        "No hidden charges"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Minimum monthly income: ₹15,000",
        "Stable employment (6 months minimum)",
        "Good credit history preferred"
      ],
      documents: [
        "Identity proof (Aadhaar/PAN/Passport)",
        "Address proof (Utility bills/Aadhaar)",
        "Income proof (Salary slips/ITR)",
        "Bank statements (3 months)",
        "Employment certificate"
      ]
    },
    {
      title: "Business Loans",
      description: "Comprehensive financing solutions for women entrepreneurs to start or expand their business.",
      amount: "Up to ₹25 Lakhs",
      rate: "10-14% per annum",
      tenure: "12-84 months",
      features: [
        "Startup and expansion funding",
        "Working capital support",
        "Equipment financing available",
        "Business mentorship included",
        "Flexible repayment schedule",
        "Competitive processing fees"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Business experience: 1+ years",
        "Annual turnover: ₹2+ lakhs",
        "Valid business registration"
      ],
      documents: [
        "Business registration certificate",
        "GST registration (if applicable)",
        "Financial statements (2 years)",
        "Business plan and projections",
        "Identity and address proof"
      ]
    },
    {
      title: "Education Loans",
      description: "Support for higher education and skill development courses for you and your family.",
      amount: "Up to ₹15 Lakhs",
      rate: "9-12% per annum", 
      tenure: "5-15 years",
      features: [
        "Cover tuition fees and living expenses",
        "Moratorium period during studies",
        "Repayment starts after course completion",
        "Covers domestic and international education",
        "Flexible repayment options",
        "Tax benefits under Section 80E"
      ],
      eligibility: [
        "Student age: 16-35 years",
        "Admission to recognized institutions",
        "Co-applicant required (parent/guardian)",
        "Good academic record"
      ],
      documents: [
        "Admission letter from institution",
        "Fee structure from college/university",
        "Academic transcripts and certificates",
        "Identity proofs of student and co-applicant",
        "Income proof of co-applicant"
      ]
    },
    {
      title: "Home Loans",
      description: "Make your dream of owning a home come true with our affordable home loan solutions.",
      amount: "Up to ₹50 Lakhs",
      rate: "8-11% per annum",
      tenure: "Up to 20 years",
      features: [
        "Purchase and construction loans",
        "Balance transfer facility",
        "Top-up loans available",
        "Special rates for women borrowers",
        "Property insurance assistance",
        "Legal and technical support"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Stable income source",
        "Minimum monthly income: ₹25,000",
        "Property within approved locations"
      ],
      documents: [
        "Property documents and NOC",
        "Sale agreement/construction contract",
        "Approved building plan",
        "Income and employment proof",
        "Bank statements (6 months)"
      ]
    },
    {
      title: "Gold Loans",
      description: "Instant liquidity against your gold ornaments with transparent and fair valuation.",
      amount: "Up to 75% of gold value",
      rate: "12-16% per annum",
      tenure: "6-36 months",
      features: [
        "Instant loan approval",
        "Safe and secure gold storage",
        "Transparent gold valuation",
        "Flexible repayment options",
        "No income proof required",
        "Quick release after repayment"
      ],
      eligibility: [
        "Age: 18-75 years",
        "Gold purity: 18-24 carats",
        "Valid identity proof",
        "Ownership proof of gold"
      ],
      documents: [
        "Identity proof (Aadhaar/PAN)",
        "Address proof",
        "Gold purchase receipt (if available)",
        "Photos of gold items"
      ]
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
                Loan Products
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive loan solutions designed specifically for women's needs. 
                From personal emergencies to business expansion, we have the right 
                financial product for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Apply for Loan</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#calculator">Calculate EMI</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/197638e4-fd58-4bc0-b3ed-41a518f59890.png"
                alt="Happy Indian woman entrepreneur receiving loan approval with business documents in modern bank"
                className="rounded-2xl shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our range of loan products tailored for different financial needs
            </p>
          </div>

          <div className="space-y-16">
            {loanProducts.map((loan, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{loan.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {loan.description}
                        </CardDescription>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="font-semibold text-blue-600 text-sm">Loan Amount</div>
                        <div className="text-gray-900 font-bold">{loan.amount}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-600 text-sm">Interest Rate</div>
                        <div className="text-gray-900 font-bold">{loan.rate}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-600 text-sm">Tenure</div>
                        <div className="text-gray-900 font-bold">{loan.tenure}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {loan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Eligibility Criteria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {loan.eligibility.map((criteria, criteriaIndex) => (
                          <li key={criteriaIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Required Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {loan.documents.map((doc, docIndex) => (
                          <li key={docIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              EMI Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Calculate your monthly EMI and plan your loan repayment
            </p>
          </div>

          <div className="flex justify-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Get your loan approved in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold">Submit Application</h3>
              <p className="text-gray-600 text-sm">
                Fill out our simple application form with your basic details and loan requirements
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold">Document Verification</h3>
              <p className="text-gray-600 text-sm">
                Our team will verify your documents and assess your eligibility for the loan
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold">Loan Approval</h3>
              <p className="text-gray-600 text-sm">
                Quick processing and approval of your loan application within 48-72 hours
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold">Loan Disbursal</h3>
              <p className="text-gray-600 text-sm">
                Receive your approved loan amount directly in your bank account
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the minimum loan amount I can apply for?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The minimum loan amount varies by product. For personal loans, it's ₹25,000, 
                  while for business loans it's ₹50,000. Gold loans can be as low as ₹10,000.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the loan approval process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most loan applications are processed within 48-72 hours. For urgent cases, 
                  we offer same-day approval for personal and gold loans with complete documentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I prepay my loan before the tenure ends?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can prepay your loan partially or fully at any time. We charge minimal 
                  prepayment fees, and for some loan products, prepayment is completely free after 12 months.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens if I miss an EMI payment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We understand that sometimes financial situations can be challenging. 
                  Contact us immediately if you anticipate missing a payment, and we'll work with you 
                  to find a suitable solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Apply for a Loan?
            </h2>
            <p className="text-xl text-blue-100">
              Take the next step towards achieving your financial goals with our competitive loan products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/membership">Become a Member First</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}