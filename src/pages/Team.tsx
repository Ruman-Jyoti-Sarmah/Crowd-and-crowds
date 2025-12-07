import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Award, Users } from "lucide-react";
import BackgroundVideo from "@/components/common/BackgroundVideo";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Chef Marcus Chen",
      role: "Executive Chef",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/05f83932-6ff1-4118-b38e-4dbbb56c1b9a.jpg",
      bio: "With 20 years of culinary excellence, Chef Marcus brings innovation to every dish",
      specialty: "French Cuisine",
    },
    {
      id: 2,
      name: "Chef Sarah Williams",
      role: "Pastry Chef",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/2c3138ff-c51a-41d1-98f5-308cea9b802a.jpg",
      bio: "Award-winning pastry chef specializing in artisan desserts and baked goods",
      specialty: "Pastry & Desserts",
    },
    {
      id: 3,
      name: "Chef David Rodriguez",
      role: "Sous Chef",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/2f8500c1-45d2-482b-a3e9-d86e9bb84623.jpg",
      bio: "Passionate about creating memorable dining experiences with seasonal ingredients",
      specialty: "Mediterranean Cuisine",
    },
  ];

  const stats = [
    {
      icon: ChefHat,
      value: "15+",
      label: "Expert Chefs",
    },
    {
      icon: Award,
      value: "25+",
      label: "Awards Won",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
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
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto max-sm:text-lg">
            Our talented chefs and staff are dedicated to creating exceptional culinary experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="glass-effect hover:shadow-xl smooth-transition text-center">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-4"
                  >
                    <stat.icon className="w-12 h-12 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl smooth-transition h-full">
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">Specialty</p>
                      <p className="text-lg font-semibold">{member.specialty}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="glass-effect max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl xl:text-4xl font-bold mb-6 max-sm:text-2xl">
                Join Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for passionate individuals who share our love for exceptional food and hospitality. 
                If you're interested in joining our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@modernrestaurant.com"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 smooth-transition"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
