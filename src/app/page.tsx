import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  सावित्रीबाई फुले
                  <span className="block text-blue-600">महिला नागरी</span>
                  <span className="block text-green-600">सहकारी पतसंस्था</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  शहापूरमध्ये सहकारी बँकिंग आणि आर्थिक सेवांद्वारे महिलांचे सशक्तिकरण करत आहोत. 
                  आर्थिक समावेशन आणि महिला सशक्तिकरणाद्वारे मजबूत समुदाय तयार करत आहोत.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <Link href="/membership">सदस्य व्हा</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                  <Link href="/services">आमच्या सेवा</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">१०००+</div>
                  <div className="text-sm text-gray-600">सक्रिय सदस्य</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹५० लाख+</div>
                  <div className="text-sm text-gray-600">वितरित कर्जे</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">१५+</div>
                  <div className="text-sm text-gray-600">वर्षांची सेवा</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32374ca5-bb94-48bd-b701-ce8ff4106656.png"
                  alt="Professional Indian women in cooperative banking setting with modern office environment"
                  className="rounded-2xl shadow-2xl w-full max-w-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-gray-600">विश्वसनीय</div>
                  <div className="text-xl font-bold text-gray-900">महिला उद्योजक</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              आमच्या आर्थिक सेवा
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              महिलांच्या गरजा आणि सशक्तिकरणासाठी विशेषतः डिझाइन केलेल्या सर्वसमावेशक बँकिंग आणि आर्थिक समाधाने
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">बचत खाते</CardTitle>
                <CardDescription>
                  स्पर्धात्मक व्याजदरांसह सुरक्षित बचत आणि निधीचा सहज प्रवेश
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• उच्च व्याजदर</li>
                  <li>• कमीत कमी शिल्लक नाही</li>
                  <li>• ऑनलाइन बँकिंग</li>
                  <li>• मोबाइल अॅप प्रवेश</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">वैयक्तिक कर्जे</CardTitle>
                <CardDescription>
                  तुमच्या तत्काळ आर्थिक गरजांसाठी जलद आणि सोपे वैयक्तिक कर्जे
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• कमी व्याजदर</li>
                  <li>• जलद मंजुरी</li>
                  <li>• लवचिक परतफेड</li>
                  <li>• कमीत कमी कागदपत्रे</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">व्यावसायिक कर्जे</CardTitle>
                <CardDescription>
                  महिला उद्योजकांना त्यांचे व्यवसाय सुरू करण्यासाठी आणि वाढवण्यासाठी सहाय्य
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• स्टार्टअप फंडिंग</li>
                  <li>• कार्यशील भांडवल</li>
                  <li>• उपकरणे कर्जे</li>
                  <li>• व्यावसायिक मार्गदर्शन</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-orange-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">मुदत ठेवी</CardTitle>
                <CardDescription>
                  आर्थिक वाढीसाठी हमी परतावयासह सुरक्षित गुंतवणुकीचे पर्याय
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• हमी परतावा</li>
                  <li>• लवचिक अटी</li>
                  <li>• अकाली पैसे काढणे</li>
                  <li>• कर फायदे</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">शिक्षण कर्जे</CardTitle>
                <CardDescription>
                  महिला आणि त्यांच्या कुटुंबासाठी शिक्षण आणि कौशल्य विकासास पाठिंबा
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• विद्यार्थी-अनुकूल दर</li>
                  <li>• स्थगिती कालावधी</li>
                  <li>• कोर्स लवचिकता</li>
                  <li>• सोप्या कागदपत्रे</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-teal-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">विमा सेवा</CardTitle>
                <CardDescription>
                  तुमच्या आणि तुमच्या कुटुंबाचे संरक्षण करण्यासाठी व्यापक विमा संरक्षण
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• जीवन विमा</li>
                  <li>• आरोग्य विमा</li>
                  <li>• मालमत्ता विमा</li>
                  <li>• गट धोरणे</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">सर्व सेवा पहा</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f327da29-ed47-480c-93d0-5a8de85c95d2.png"
                alt="Modern cooperative bank interior with women customers and staff in professional setting"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  सावित्रीबाई फुले महिला नागरी सहकारी पतसंस्था का निवडा?
                </h2>
                <p className="text-lg text-gray-600">
                  आम्ही सहकारी बँकिंग तत्त्वांद्वारे महिलांच्या आर्थिक सशक्तिकरणासाठी वचनबद्ध आहोत
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">महिला-केंद्रित दृष्टिकोन</h3>
                    <p className="text-gray-600">महिलांच्या आर्थिक गरजा आणि सशक्तिकरणासाठी विशेषतः डिझाइन केलेले</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">समुदायिक फोकस</h3>
                    <p className="text-gray-600">सहकारी बँकिंग तत्त्वांद्वारे मजबूत समुदाय निर्माण करणे</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">स्पर्धात्मक दर</h3>
                    <p className="text-gray-600">ठेवींवर सर्वोत्तम व्याजदर आणि स्पर्धात्मक कर्ज दर</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">जलद सेवा</h3>
                    <p className="text-gray-600">जलद मंजुरी प्रक्रिया आणि कमीत कमी कागदपत्रांची आवश्यकता</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/about">आमच्याबद्दल अधिक जाणून घ्या</Link>
                </Button>
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
              आमच्या आर्थिक कुटुंबात सामील होण्यासाठी तयार आहात?
            </h2>
            <p className="text-xl text-blue-100">
              आजच सदस्य व्हा आणि आर्थिक सशक्तिकरणाच्या दिशेने तुमचा प्रवास सुरू करा
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/membership">सदस्य व्हा</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">आमच्याशी संपर्क साधा</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}