/**
 * Utility Functions
 * 
 * Provides common helper functions used across the application.
 * Currently exports `cn` (classNames) utility for merging Tailwind CSS classes dynamically while resolving conflicts.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
