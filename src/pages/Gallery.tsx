import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/601295dc-01ca-49e7-ace4-c408689216b6.jpg",
      alt: "Grilled Steak",
      category: "Food",
    },
    {
      id: 2,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/9c38af44-8ff2-4923-b6c2-7ee3153d5d37.jpg",
      alt: "Restaurant Interior",
      category: "Interior",
    },
    {
      id: 3,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/69177eab-b3e7-4d25-87f1-96f5b9960f9a.jpg",
      alt: "Sushi Platter",
      category: "Food",
    },
    {
      id: 4,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/05f83932-6ff1-4118-b38e-4dbbb56c1b9a.jpg",
      alt: "Chef Cooking",
      category: "Kitchen",
    },
    {
      id: 5,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/0d75e6a3-13b9-4ac6-85b4-3c63fa5bdb49.jpg",
      alt: "Chocolate Lava Cake",
      category: "Food",
    },
    {
      id: 6,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/11680cb8-05d7-4586-b71b-c7becfacff6c.jpg",
      alt: "Fine Dining Table",
      category: "Interior",
    },
    {
      id: 7,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/6a8c51fc-e57d-4019-8f5a-261ad58864e1.jpg",
      alt: "Pasta Carbonara",
      category: "Food",
    },
    {
      id: 8,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/608383f1-25bd-4ed3-a5f2-5d52c7a4c5a3.jpg",
      alt: "Restaurant Bar",
      category: "Interior",
    },
    {
      id: 9,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/84953e12-8c10-42cd-88d4-35fed0671d18.jpg",
      alt: "Lobster Dish",
      category: "Food",
    },
    {
      id: 10,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/3469fc86-9a94-4322-bafc-e73277afb5dd.jpg",
      alt: "Outdoor Patio",
      category: "Interior",
    },
    {
      id: 11,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/737da2b1-cf0e-47e7-b61d-4b2449ffb9dc.jpg",
      alt: "Tiramisu",
      category: "Food",
    },
    {
      id: 12,
      src: "https://miaoda-site-img.s3cdn.medo.dev/images/3871f416-0ac2-4f61-a870-030cb82ecfdf.jpg",
      alt: "Wine Glasses",
      category: "Interior",
    },
  ];

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
            <span className="text-white">Our</span> <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-sm:text-lg">
            A visual journey through our culinary creations and ambiance
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm font-medium text-primary mb-1">{image.category}</p>
                    <p className="text-lg font-semibold">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-8 h-8" />
                </Button>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="max-w-5xl max-h-[90vh] relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <p className="text-primary font-medium mb-1">{selectedImage.category}</p>
                    <p className="text-white text-xl font-semibold">{selectedImage.alt}</p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
