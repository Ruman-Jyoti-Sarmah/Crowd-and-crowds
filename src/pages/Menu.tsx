import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Category = "all" | "starters" | "main" | "drinks" | "desserts";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  rating: number;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "starters", label: "Starters" },
    { id: "main", label: "Main Course" },
    { id: "drinks", label: "Drinks" },
    { id: "desserts", label: "Desserts" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan and croutons",
      price: "₹12",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/3438882a-505e-4e2b-aa2f-161dcdb3e46d.jpg",
      category: "starters",
      rating: 4.6,
    },
    {
      id: 2,
      name: "Grilled Steak",
      description: "Premium beef steak with seasonal vegetables",
      price: "₹32",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/601295dc-01ca-49e7-ace4-c408689216b6.jpg",
      category: "main",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Fresh Sushi Platter",
      description: "Assorted sushi with wasabi and soy sauce",
      price: "₹28",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/69177eab-b3e7-4d25-87f1-96f5b9960f9a.jpg",
      category: "main",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      description: "Creamy pasta with bacon and parmesan",
      price: "₹24",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/6a8c51fc-e57d-4019-8f5a-261ad58864e1.jpg",
      category: "main",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: "₹10",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/0d75e6a3-13b9-4ac6-85b4-3c63fa5bdb49.jpg",
      category: "desserts",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Tiramisu",
      description: "Classic Italian coffee-flavored dessert",
      price: "₹9",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/737da2b1-cf0e-47e7-b61d-4b2449ffb9dc.jpg",
      category: "desserts",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Grilled Chicken",
      description: "Tender chicken breast with fresh vegetables",
      price: "₹22",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/9b57e38a-f6f8-4222-a29f-88ae745c02ab.jpg",
      category: "main",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Lobster Thermidor",
      description: "Luxury lobster in creamy brandy sauce",
      price: "₹45",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/84953e12-8c10-42cd-88d4-35fed0671d18.jpg",
      category: "main",
      rating: 5.0,
    },
    {
      id: 9,
      name: "Gourmet Burger",
      description: "Premium beef burger with artisan fries",
      price: "₹18",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/ba5ed6aa-b5b0-4107-b285-7fa31d48ad2d.jpg",
      category: "main",
      rating: 4.7,
    },
    {
      id: 10,
      name: "Shrimp Scampi",
      description: "Garlic butter shrimp with pasta",
      price: "₹26",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/174e805c-1bc6-443f-a41f-684cba8e509c.jpg",
      category: "main",
      rating: 4.8,
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl xl:text-6xl font-bold mb-4 max-sm:text-4xl">
            <span className="text-white">Our</span> <span className="gradient-text">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-sm:text-lg">
            Explore our delicious selection of dishes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`relative px-6 py-3 rounded-full font-medium smooth-transition ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card hover:bg-muted"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl smooth-transition h-full">
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end justify-center pb-4">
                      <Button asChild size="sm" className="animate-glow">
                        <Link to="/order">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Order Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span className="font-medium">{item.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">(80+ reviews)</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">No items found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;
