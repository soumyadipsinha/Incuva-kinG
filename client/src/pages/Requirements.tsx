import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Palette, FileText, Building, Ruler, Hash, ShoppingCart, ArrowRight } from "lucide-react";

export default function RequirementsPage() {
  const [formData, setFormData] = useState({
    preferences: "",
    description: "",
    companyType: "",
    colorCombinations: [] as string[],
    sizes: "",
    content: "",
    quantity: "",
    businessName: "",
    contactNumber: "",
    email: ""
  });

  const colorOptions = [
    "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray",
    "Brown", "Gold", "Silver", "Navy", "Teal", "Coral", "Lime", "Indigo", "Maroon", "Cyan"
  ];

  const companyTypes = [
    "Technology", "Healthcare", "Finance", "Education", "Retail", "Food & Beverage",
    "Real Estate", "Manufacturing", "Consulting", "Marketing", "Legal", "Non-Profit",
    "Entertainment", "Sports", "Fashion", "Automotive", "Travel", "Other"
  ];

  const sizeOptions = [
    "Small (100x100px)", "Medium (300x300px)", "Large (500x500px)", "Extra Large (1000x1000px)",
    "Business Card Size", "Letterhead Size", "Banner Size", "Custom Size"
  ];

  const handleColorToggle = (color: string) => {
    setFormData(prev => ({
      ...prev,
      colorCombinations: prev.colorCombinations.includes(color)
        ? prev.colorCombinations.filter(c => c !== color)
        : [...prev.colorCombinations, color]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Here you can process the form data
    
    // Create email template with form data
    const subject = encodeURIComponent("Design Order Requirements - Incuva");
    const body = encodeURIComponent(`Dear Incuva Team,

I would like to place an order with the following requirements:

BUSINESS INFORMATION:
• Business Name: ${formData.businessName}
• Company Type: ${formData.companyType}
• Contact Number: ${formData.contactNumber}
• Email: ${formData.email}

DESIGN REQUIREMENTS:
• Design Preferences: ${formData.preferences}
• Project Description: ${formData.description}
• Content/Text to Include: ${formData.content}

SPECIFICATIONS:
• Size Requirements: ${formData.sizes}
• Quantity: ${formData.quantity}
• Color Combinations: ${formData.colorCombinations.join(', ') || 'No specific colors selected'}

Please send me a detailed quote and timeline for your design.

Thank you!

Thank you for choosing Incuva!`);

    // Open email client with pre-filled template
    window.open(`mailto:soumyadipsinha273@gmail.com?subject=${subject}&body=${body}`);
    
    // Also redirect to contact page
    window.location.href = "/contact";
  };

  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Design Requirements
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              Tell us about your design so we can provide you with the best design solution. 
              Fill out the form below with your requirements and preferences.
            </p>
            
          </div>
        </div>
      </section>

      {/* Requirements Form */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-center">Design Details</CardTitle>
                <CardDescription className="text-center">
                  Please provide as much detail as possible to help us understand your vision
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Business Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Business Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business/Company Name *
                      </label>
                      <Input
                        placeholder="Enter your business name"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Type *
                      </label>
                      <Select value={formData.companyType} onValueChange={(value) => handleInputChange("companyType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company type" />
                        </SelectTrigger>
                        <SelectContent>
                          {companyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <Input
                        placeholder="Enter your contact number"
                        value={formData.contactNumber}
                        onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Design Preferences */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Design Preferences
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Design Preferences *
                    </label>
                    <Input
                      placeholder="e.g., Modern, Minimalist, Professional, Creative, etc."
                      value={formData.preferences}
                      onChange={(e) => handleInputChange("preferences", e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Design Description *
                    </label>
                    <textarea
                      placeholder="Describe your Design in detail. What do you want to achieve? Any specific requirements or ideas?"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Color Combinations */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Color Combinations
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select preferred colors (you can choose multiple)
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                      {colorOptions.map((color) => (
                        <div
                          key={color}
                          className={`p-2 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.colorCombinations.includes(color)
                              ? "border-primary bg-primary/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => handleColorToggle(color)}
                        >
                          <div
                            className="w-full h-8 rounded"
                            style={{
                              backgroundColor: color.toLowerCase() === "white" ? "#f3f4f6" : 
                                             color.toLowerCase() === "black" ? "#000000" :
                                             color.toLowerCase() === "gray" ? "#6b7280" :
                                             color.toLowerCase() === "gold" ? "#fbbf24" :
                                             color.toLowerCase() === "silver" ? "#9ca3af" :
                                             color.toLowerCase() === "navy" ? "#1e3a8a" :
                                             color.toLowerCase() === "teal" ? "#14b8a6" :
                                             color.toLowerCase() === "coral" ? "#f97316" :
                                             color.toLowerCase() === "lime" ? "#84cc16" :
                                             color.toLowerCase() === "indigo" ? "#6366f1" :
                                             color.toLowerCase() === "maroon" ? "#7c2d12" :
                                             color.toLowerCase() === "cyan" ? "#06b6d4" :
                                             color.toLowerCase()
                            }}
                          />
                          <p className="text-xs text-center mt-1 text-gray-600">{color}</p>
                        </div>
                      ))}
                    </div>
                    {formData.colorCombinations.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-600 mb-2">Selected colors:</p>
                        <div className="flex flex-wrap gap-2">
                          {formData.colorCombinations.map((color) => (
                            <Badge key={color} variant="secondary" className="flex items-center gap-1">
                              {color}
                              <button
                                onClick={() => handleColorToggle(color)}
                                className="ml-1 text-gray-500 hover:text-gray-700"
                              >
                                ×
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Size and Content */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-primary" />
                    Size & Content
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Size Requirements *
                      </label>
                      <Select value={formData.sizes} onValueChange={(value) => handleInputChange("sizes", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {sizeOptions.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity *
                      </label>
                      <Input
                        placeholder="Enter quantity needed"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content/Text to Include
                    </label>
                    <Input
                      placeholder="e.g., Company name, tagline, contact information, etc."
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <Button 
                    onClick={handleSubmit}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Send Order & Contact Us
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = "/contact"}
                    className="flex-1"
                    size="lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Connect Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Fill Out Requirements?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Providing detailed requirements helps us deliver exactly what you envision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Pricing</h3>
              <p className="text-gray-600">Get precise quotes based on your specific requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Delivery</h3>
              <p className="text-gray-600">Clear requirements mean quicker turnaround times.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Results</h3>
              <p className="text-gray-600">Your vision becomes reality with detailed specifications.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
