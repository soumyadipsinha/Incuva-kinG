import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, CheckCircle, Star, Users, Award, FileText, Palette, Camera, Share2, Zap, Shield, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Connect With Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your project? Get in touch with our design and printing experts. 
              We're here to bring your vision to life.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <span className="text-gray-700 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-500" />
                <span className="text-gray-700 font-medium">500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with us for your design and printing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Email Contact */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Mail className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Email Us</CardTitle>
                <CardDescription>Send us your requirements</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <div className="text-2xl font-bold text-primary">orders@incuva.com</div>
                  <p className="text-sm text-muted-foreground">
                    For design orders, quotes, and project inquiries
                  </p>
                </div>
                <Button className="w-full" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Phone Contact */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Call Us</CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <div className="text-2xl font-bold text-primary">+91 98765 43210</div>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9 AM - 7 PM
                  </p>
                </div>
                <Button className="w-full" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Visit Us</CardTitle>
                <CardDescription>Our design studio</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <div className="text-lg font-bold text-primary">Incuva Design Studio</div>
                  <p className="text-sm text-muted-foreground">
                    123 Design Street, Creative District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
                <Button className="w-full" variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Ordering Instructions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Order via Email</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to place your order and get your design project started.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-600">1</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">Choose Your Service</CardTitle>
                      <CardDescription>Select from our design and printing services</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Logo Design - ₹499
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Business Cards - ₹99-149
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Banner Design - ₹199
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      And many more...
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">Send Your Requirements</CardTitle>
                      <CardDescription>Email us with your project details</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Include in your email:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Service type and quantity</li>
                      <li>• Your business information</li>
                      <li>• Design preferences and colors</li>
                      <li>• Any reference images or ideas</li>
                      <li>• Delivery timeline requirements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">Get Quote & Confirm</CardTitle>
                      <CardDescription>We'll send you a detailed quote</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Transparent pricing breakdown
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Timeline and delivery schedule
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Payment terms and methods
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-purple-600">4</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">Start Your Project</CardTitle>
                      <CardDescription>We begin work on your design</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Regular progress updates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Unlimited revisions included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Final files in all formats
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Email Template */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Email Template</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use this template to send us your project requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Sample Email Template</CardTitle>
                <CardDescription>Copy and customize this template for your order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm">
                  <div className="space-y-4">
                    <div>
                      <span className="text-muted-foreground">To:</span> orders@incuva.com
                    </div>
                    <div>
                      <span className="text-muted-foreground">Subject:</span> Design Order - [Your Service Type]
                    </div>
                    <div className="border-t pt-4">
                      <p>Dear Incuva Team,</p>
                      <br />
                      <p>I would like to place an order for the following services:</p>
                      <br />
                      <p><strong>Service Required:</strong> [Logo Design / Business Cards / Banner Design / etc.]</p>
                      <p><strong>Quantity:</strong> [Number of items]</p>
                      <p><strong>Business Name:</strong> [Your Company Name]</p>
                      <p><strong>Industry:</strong> [Your Business Type]</p>
                      <br />
                      <p><strong>Design Preferences:</strong></p>
                      <p>• Colors: [Preferred colors]</p>
                      <p>• Style: [Modern / Classic / Minimalist / etc.]</p>
                      <p>• Text to include: [Your text content]</p>
                      <br />
                      <p><strong>Timeline:</strong> [When you need it delivered]</p>
                      <p><strong>Budget:</strong> [Your budget range]</p>
                      <br />
                      <p>Please send me a detailed quote and timeline for this project.</p>
                      <br />
                      <p>Thank you!</p>
                      <p>[Your Name]</p>
                      <p>[Your Contact Number]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Copy Template & Open Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Incuva?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional design and printing services with unmatched quality and speed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Professional designs and printing that exceed expectations.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced designers and printers with creative expertise.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfaction</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get professional design and printing services at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Send Email Order
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-amber-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}