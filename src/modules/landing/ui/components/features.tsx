"use client";
import { motion } from "framer-motion";

import { Box, Clock10, Sparkles, Users2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectIcon } from "@/components/icons";
import { TextEffect } from "@/components/ui/motion/hero-text";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

export function Features() {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 h-screen justify-center mt-24 md:mt-0"
      id="features"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center flex flex-col gap-4 w-[90%]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <TextEffect
          per="word"
          as="h3"
          preset="blur"
          className="text-3xl md:text-6xl font-semibold"
        >
          Features
        </TextEffect>
        <p className="text-sm text-muted-foreground">
          Everything you need to turn meeting discussions into actionable
          results
        </p>
      </motion.div>
      <motion.ul
        className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 w-[70%] xl:grid-rows-2"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-primary" />}
          title="AI Powered Analysis"
          description="Advanced LLM identifies action items, deadlines & priorities from your meeting transcripts."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Clock10 className="h-4 w-4 text-primary" />}
          title="Real-time Processing"
          description="Get your todo lists generated instantly as your meeting ends. No waiting, no manual work required."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Users2 className="h-4 w-4 text-primary" />}
          title="Team Assignment"
          description="Automatically assign tasks to team members mentioned in the meeting and send notifications."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-primary" />}
          title="Smart Prioritization"
          description="AI understands context and urgency to automatically prioritize your tasks based on importance."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<ProjectIcon className="h-4 w-4 text-primary" />}
          title="Progress Tracking"
          description="Monitor task completion rates and team productivity with detailed analytics and reporting."
        />
      </motion.ul>
    </motion.div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
