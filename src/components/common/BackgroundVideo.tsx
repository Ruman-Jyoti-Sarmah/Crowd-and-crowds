import React from "react";
import { motion } from "framer-motion";

interface BackgroundVideoProps {
  videoUrl?: string;
  opacity?: number;
  overlay?: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl,
  opacity = 0.15,
  overlay = true,
}) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {videoUrl ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
          )}
        </>
      ) : (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, hsl(40 20% 98%) 0%, hsl(42 30% 92%) 50%, hsl(38 25% 95%) 100%)",
              "linear-gradient(135deg, hsl(38 25% 95%) 0%, hsl(40 20% 98%) 50%, hsl(42 30% 92%) 100%)",
              "linear-gradient(135deg, hsl(42 30% 92%) 0%, hsl(38 25% 95%) 50%, hsl(40 20% 98%) 100%)",
              "linear-gradient(135deg, hsl(40 20% 98%) 0%, hsl(42 30% 92%) 50%, hsl(38 25% 95%) 100%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      )}
      
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(42 88% 55% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(45 95% 65% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, hsl(38 85% 60% / 0.1) 0%, transparent 50%)`,
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
