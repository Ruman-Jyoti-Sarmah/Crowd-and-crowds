import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Award, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundVideo from "@/components/common/BackgroundVideo";

const Home: React.FC = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Our master chefs bring decades of culinary expertise to every dish",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest ingredients sourced from trusted suppliers",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick preparation without compromising on quality",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in culinary innovation",
    },
  ];

  const popularDishes = [
    {
      name: "Grilled Steak",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/601295dc-01ca-49e7-ace4-c408689216b6.jpg",
      price: "$32",
      rating: 4.9,
    },
    {
      name: "Fresh Sushi Platter",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/69177eab-b3e7-4d25-87f1-96f5b9960f9a.jpg",
      price: "$28",
      rating: 4.8,
    },
    {
      name: "Pasta Carbonara",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/6a8c51fc-e57d-4019-8f5a-261ad58864e1.jpg",
      price: "$24",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen">
      <BackgroundVideo opacity={0.2} />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-50" />
        
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 max-sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience Culinary{" "}
              <span className="gradient-text">Excellence</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto max-sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover a world of flavors crafted with passion, served with elegance
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="text-lg px-8 animate-glow">
                <Link to="/menu">
                  View Menu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/order">Order Now</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <Card className="glass-effect hover:shadow-lg smooth-transition group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block mb-4"
                    >
                      <feature.icon className="w-12 h-12 text-primary mx-auto" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              Popular <span className="gradient-text">Dishes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-sm:text-lg">
              Taste our most loved creations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl smooth-transition">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{dish.name}</h3>
                      <span className="text-2xl font-bold text-primary">{dish.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span className="font-medium">{dish.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">(120+ reviews)</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link to="/menu">
                View Full Menu <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-warm)] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl xl:text-5xl font-bold mb-6 max-sm:text-3xl">
                Where Passion Meets <span className="gradient-text">Flavor</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Modern Restaurant, we believe that great food is an art form. Our chefs combine traditional techniques with innovative approaches to create dishes that delight all your senses.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every ingredient is carefully selected, every dish thoughtfully prepared, and every meal served with genuine hospitality.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/9c38af44-8ff2-4923-b6c2-7ee3153d5d37.jpg"
                  alt="Restaurant interior"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/05f83932-6ff1-4118-b38e-4dbbb56c1b9a.jpg"
                  alt="Chef cooking"
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
