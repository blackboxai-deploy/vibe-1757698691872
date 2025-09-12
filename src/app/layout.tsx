import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "सावित्रीबाई फुले महिला नागरी सहकारी पतसंस्था शहापूर",
  description: "शहापूरमधील महिला उद्योजकांसाठी आर्थिक सेवा, कर्जे, बचत आणि सहाय्य प्रदान करणारी महिला नागरी सहकारी पतसंस्था",
  keywords: "सहकारी बँक, महिला बँक, कर्जे, बचत, शहापूर, आर्थिक सेवा, महिला सशक्तिकरण",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SP</span>
                  </div>
                  <div className="hidden md:block">
                    <h1 className="text-lg font-bold text-gray-900">
                      सावित्रीबाई फुले महिला
                    </h1>
                    <p className="text-xs text-gray-600">नागरी सहकारी पतसंस्था</p>
                  </div>
                </Link>
              </div>

              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        मुख्यपृष्ठ
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        आमच्याबद्दल
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>आर्थिक सेवा</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <Link href="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">सर्व सेवा</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            संपूर्ण आर्थिक सेवांची माहिती
                          </p>
                        </Link>
                        <Link href="/loans" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">कर्जे</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            वैयक्तिक, व्यवसाय आणि शिक्षण कर्जे
                          </p>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/membership" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        सदस्यत्व
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        संपर्क
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-2">
                <Button asChild className="hidden sm:inline-flex">
                  <Link href="/membership">सदस्य व्हा</Link>
                </Button>
                <Button variant="outline" size="sm" className="md:hidden">
                  मेनू
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">सावित्रीबाई फुले</h3>
                    <p className="text-xs text-gray-600">महिला नागरी सहकारी</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  शहापूरमध्ये आर्थिक समावेशन आणि सहकारी बँकिंग सेवांद्वारे महिलांचे सशक्तिकरण करत आहोत.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">द्रुत दुवे</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-gray-600 hover:text-gray-900">आमच्याबद्दल</Link></li>
                  <li><Link href="/services" className="text-gray-600 hover:text-gray-900">सेवा</Link></li>
                  <li><Link href="/loans" className="text-gray-600 hover:text-gray-900">कर्जे</Link></li>
                  <li><Link href="/membership" className="text-gray-600 hover:text-gray-900">सदस्यत्व</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">सेवा</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-gray-600">बचत खाते</span></li>
                  <li><span className="text-gray-600">मुदत ठेवी</span></li>
                  <li><span className="text-gray-600">वैयक्तिक कर्जे</span></li>
                  <li><span className="text-gray-600">व्यावसायिक कर्जे</span></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">संपर्क माहिती</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>शहापूर, महाराष्ट्र</p>
                  <p>फोन: +91 XXXXX XXXXX</p>
                  <p>ईमेल: info@spmnsps.com</p>
                  <p>वेळ: सोम-शुक्र सकाळी ९:०० - संध्याकाळी ५:००</p>
                </div>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
              <p>&copy; २०२४ सावित्रीबाई फुले महिला नागरी सहकारी पतसंस्था शहापूर. सर्व अधिकार राखीव.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}