import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Leaf } from "lucide-react";
import BackgroundVideo from "@/components/common/BackgroundVideo";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Modern Restaurant opened its doors with a vision to revolutionize fine dining",
    },
    {
      year: "2013",
      title: "First Award",
      description: "Received our first Michelin star for culinary excellence",
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Expanded our kitchen and dining area to accommodate growing demand",
    },
    {
      year: "2019",
      title: "Sustainability Focus",
      description: "Launched our farm-to-table initiative with local organic suppliers",
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Introduced our innovative tasting menu featuring molecular gastronomy",
    },
    {
      year: "2024",
      title: "Today",
      description: "Continuing to push boundaries while honoring culinary traditions",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every dish is crafted with love and dedication to culinary excellence",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We source only the finest ingredients from trusted suppliers",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our guests and local partners",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and supporting local farmers",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <BackgroundVideo opacity={0.15} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl xl:text-6xl font-bold mb-4 max-sm:text-4xl">
            About <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto max-sm:text-lg">
            Discover the story behind our passion for exceptional cuisine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="glass-effect overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl xl:text-4xl font-bold mb-6 max-sm:text-2xl">
                    Our <span className="gradient-text">Story</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Modern Restaurant was born from a simple dream: to create a dining experience that transcends the ordinary. 
                    Founded in 2010 by Chef Marcus Chen, our restaurant has become a beacon of culinary innovation and excellence.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    We believe that food is more than sustenance—it's an art form, a cultural expression, and a way to bring people together. 
                    Every dish we serve tells a story, blending traditional techniques with modern creativity.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Today, we continue to push the boundaries of gastronomy while staying true to our core values of quality, 
                    sustainability, and exceptional hospitality.
                  </p>
                </div>
                <div className="relative h-96 xl:h-auto">
                  <img
                    src="https://miaoda-site-img.s3cdn.medo.dev/images/479d4109-ee4e-420c-a85e-9cd07773c06b.jpg"
                    alt="Restaurant entrance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 max-sm:text-3xl">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect hover:shadow-xl smooth-transition h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block mb-4"
                    >
                      <value.icon className="w-12 h-12 text-primary mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 max-sm:text-3xl">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden xl:block" />
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
                  } flex-col xl:flex-row`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "xl:text-right" : "xl:text-left"} text-center xl:text-left`}>
                    <Card className="glass-effect hover:shadow-xl smooth-transition">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg"
                    >
                      {event.year}
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 hidden xl:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
