"use client";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  color?: string;
}

export function StatsCard({ title, value, description, color = "blue" }: StatsCardProps) {
  const colorClasses = {
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    green: "text-green-600 bg-green-50 border-green-200",
    purple: "text-purple-600 bg-purple-50 border-purple-200",
    orange: "text-orange-600 bg-orange-50 border-orange-200",
  };

  return (
    <div className={`rounded-lg p-6 border ${colorClasses[color as keyof typeof colorClasses]} text-center`}>
      <div className={`text-3xl font-bold mb-2 ${color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`}>
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-1">
        {title}
      </div>
      <div className="text-sm text-gray-600">
        {description}
      </div>
    </div>
  );
}