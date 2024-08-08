"use client";
import { AnimationProps } from "@/types/types";
import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 10 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({ children, className }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRotate({
  children,
  from,
  to,
  opacityFrom,
  opacityTo,
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  opacityFrom?: number;
  opacityTo?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: opacityFrom ?? 0, rotate: from ?? 90 }}
      whileInView={{ opacity: opacityTo ?? 1, rotate: to ?? 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

// move to top
export function FadeInScale({
  children,
  from,
  to,
  opacityFrom,
  opacityTo,
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  opacityFrom?: number;
  opacityTo?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: opacityFrom ?? 0, scale: from ?? 0.5 }}
      whileInView={{ opacity: opacityTo ?? 1, scale: to ?? 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function SpringUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function SpringDown({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function SpringUpDownAndStay({
  children,
  y,
}: {
  children: React.ReactNode;
  y: number;
}) {
  return (
    <motion.div
      initial={{ y: -y }}
      whileInView={{ y: y }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
