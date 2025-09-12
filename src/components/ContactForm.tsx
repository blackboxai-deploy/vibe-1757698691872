"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("तुमच्या चौकशीसाठी धन्यवाद! आम्ही २४ तासांत तुमच्याशी संपर्क साधू.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>संपर्क साधा</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">पूर्ण नाव *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                placeholder="तुमचे पूर्ण नाव लिहा"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">फोन नंबर *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                placeholder="तुमचा फोन नंबर लिहा"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">ईमेल पत्ता *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              placeholder="तुमचा ईमेल पत्ता लिहा"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">विषय</Label>
            <Select onValueChange={(value) => handleChange("subject", value)}>
              <SelectTrigger>
                <SelectValue placeholder="चौकशीचा प्रकार निवडा" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="membership">सदस्यत्व चौकशी</SelectItem>
                <SelectItem value="loans">कर्ज माहिती</SelectItem>
                <SelectItem value="savings">बचत खाते</SelectItem>
                <SelectItem value="fd">मुदत ठेवी</SelectItem>
                <SelectItem value="business">व्यावसायिक कर्जे</SelectItem>
                <SelectItem value="insurance">विमा सेवा</SelectItem>
                <SelectItem value="other">इतर</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">संदेश *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              placeholder="कृपया तुमची चौकशी तपशीलवार लिहा"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "पाठवत आहे..." : "संदेश पाठवा"}
          </Button>

          <p className="text-sm text-gray-600 text-center">
            आम्ही सामान्यतः कामकाजाच्या दिवसांत २४ तासांत चौकशींना उत्तर देतो.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}