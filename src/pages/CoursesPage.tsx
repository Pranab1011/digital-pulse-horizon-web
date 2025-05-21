
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Data Science",
    description: "Learn to analyze and interpret complex data to make informed business decisions. This course covers statistical analysis, data visualization, and predictive modeling.",
    duration: "12 weeks",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Master the fundamentals of machine learning algorithms and their applications. Build predictive models and learn how to train, evaluate and optimize them.",
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Explore the cutting-edge field of AI including neural networks, deep learning, natural language processing, and computer vision.",
    duration: "14 weeks",
    level: "Advanced"
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Develop skills in data manipulation, analysis, and visualization using industry-standard tools. Learn to extract meaningful insights from raw data.",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    id: 5,
    title: "Business Analytics",
    description: "Bridge the gap between data and business strategy. Learn how to use analytics to drive decision-making and create value for organizations.",
    duration: "9 weeks",
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Master modern digital marketing techniques including SEO, content marketing, social media, email campaigns, and analytics-driven marketing strategies.",
    duration: "6 weeks",
    level: "Beginner"
  }
];

const CoursesPage = () => {
  useEffect(() => {
    document.title = "JK International - Courses";
  }, []);

  return (
    <div className="min-h-screen bg-jk-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Expand your skills with our industry-leading courses. Designed by experts to help you stay ahead in the rapidly evolving tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="bg-jk-navy border border-gray-700 hover:border-jk-blue transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 rounded-full bg-jk-blue/20">
                    <Book className="h-5 w-5 text-jk-blue" />
                  </span>
                  <span className="text-sm text-jk-blue">{course.level}</span>
                </div>
                <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                <CardDescription className="text-gray-400">{course.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-jk-blue hover:bg-jk-skyblue text-white">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
