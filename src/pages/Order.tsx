import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import BackgroundVideo from "@/components/common/BackgroundVideo";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Order: React.FC = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Grilled Steak",
      price: 32,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/601295dc-01ca-49e7-ace4-c408689216b6.jpg",
    },
    {
      id: 2,
      name: "Fresh Sushi Platter",
      price: 28,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/69177eab-b3e7-4d25-87f1-96f5b9960f9a.jpg",
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      price: 24,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/6a8c51fc-e57d-4019-8f5a-261ad58864e1.jpg",
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      price: 10,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/0d75e6a3-13b9-4ac6-85b4-3c63fa5bdb49.jpg",
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 12,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/3438882a-505e-4e2b-aa2f-161dcdb3e46d.jpg",
    },
    {
      id: 6,
      name: "Lobster Thermidor",
      price: 45,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/84953e12-8c10-42cd-88d4-35fed0671d18.jpg",
    },
  ];

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Order placed successfully!",
      description: "Your order will be ready in 30-45 minutes",
    });
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <BackgroundVideo opacity={0.15} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl xl:text-6xl font-bold mb-4 max-sm:text-4xl">
            Order <span className="gradient-text">Online</span>
          </h1>
          <p className="text-xl text-muted-foreground max-sm:text-lg">
            Select your favorite dishes and place your order
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl smooth-transition">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-2xl font-bold text-primary">${item.price}</span>
                  </div>
                  <Button
                    onClick={() => addToCart(item)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            size="lg"
            onClick={() => setShowCart(true)}
            className="rounded-full shadow-lg animate-glow relative"
          >
            <ShoppingBag className="w-6 h-6 mr-2" />
            View Cart
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </motion.div>

        <AnimatePresence>
          {showCart && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50"
                onClick={() => setShowCart(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card shadow-2xl z-50 overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowCart(false)}
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                      <p className="text-lg text-muted-foreground">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex gap-4">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h3 className="font-semibold mb-1">{item.name}</h3>
                                    <p className="text-primary font-bold mb-2">
                                      ${item.price}
                                    </p>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        className="h-8 w-8"
                                        onClick={() => updateQuantity(item.id, -1)}
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="w-8 text-center font-medium">
                                        {item.quantity}
                                      </span>
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        className="h-8 w-8"
                                        onClick={() => updateQuantity(item.id, 1)}
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                      <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 ml-auto"
                                        onClick={() => removeFromCart(item.id)}
                                      >
                                        <Trash2 className="w-4 h-4 text-destructive" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      <Card className="mb-6">
                        <CardHeader>
                          <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="Enter your phone" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Delivery Address</Label>
                            <Input id="address" placeholder="Enter delivery address" />
                          </div>
                          <div className="pt-4 border-t">
                            <div className="flex justify-between text-lg font-semibold mb-4">
                              <span>Total:</span>
                              <span className="text-primary text-2xl">
                                ${getTotalPrice().toFixed(2)}
                              </span>
                            </div>
                            <Button
                              onClick={handleCheckout}
                              className="w-full"
                              size="lg"
                            >
                              Place Order
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Order;
