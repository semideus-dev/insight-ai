"use client";

import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/motion/hero-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center flex-col w-[90%]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="hidden md:flex" variants={itemVariants}>
        <TextEffect
          per="word"
          as="h3"
          preset="blur"
          className="text-6xl font-semibold"
        >
          Talk to Text — Instantly!
        </TextEffect>
      </motion.div>

      <motion.div
        className="mt-6 text-muted-foreground text-lg text-center w-1/2 flex flex-col items-center gap-6"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants}>
          InsightAi transforms your meeting transcripts into clear, actionable
          to-do lists using AI. No more note-taking — just automatic follow-ups,
          organized and ready.
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-6"
            variants={itemVariants}
          >
            <Link href="/sign-in">
              <Button className="bg-white h-12 px-8 text-base rounded-full hover:bg-white/70">
                Get Started
              </Button>
            </Link>
            <Button
              className="h-12 px-8 text-base rounded-full"
              variant="outline"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
