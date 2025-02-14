// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// types/index.ts
export interface Destination {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

export interface Experience {
  id: number
  title: string
  description: string
  image: string
}