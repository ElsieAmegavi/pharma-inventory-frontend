import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  imgSrc: string; 
  altText: string; 
}

const StatCard = ({ title, value, description, imgSrc, altText }: StatCardProps) => {
  return (
    <Card className="flex flex-row items-center p-4 shadow-md rounded-md">
      <img 
        src={imgSrc} 
        alt={altText} 
        className="w-12 h-12 mr-4"
      />
      <div>
        <CardHeader>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default StatCard;