"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  iconColor: string;
  href?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  features, 
  icon, 
  iconColor,
  href 
}: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group">
      <CardHeader>
        <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <div className={`w-6 h-6 ${icon} rounded`}></div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        {href && (
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href={href}>Learn More</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}