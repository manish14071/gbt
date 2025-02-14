
"use client"
import Button from './shared/Button'
import { motion } from 'framer-motion'
import { InputBase, styled } from '@mui/material'

const AnimatedInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('all'),
    '&:focus': {
      boxShadow: `${theme.palette.primary.main} 0 0 0 2px`,
    },
  },
}))

export default function Newsletter() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-6 bg-gradient-to-r from-emerald-50 to-cyan-50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Join Our Global Community
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Subscribe to receive exclusive travel offers and insider tips from around the world
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto md:max-w-none">
          <AnimatedInput
            fullWidth
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:border-emerald-300 focus:border-emerald-500 transition-all"
          />
          <Button 
            className="md:w-auto w-full transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-emerald-200/50"
            variant="gradient"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </motion.section>
  )
}