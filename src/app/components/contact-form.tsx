'use client'

import { useState } from 'react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your name
        </label>
        <input
          id="name"
          placeholder="Abc"
          required
          className='p-4 border border-gray-400 rounded-xl w-full'
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Abc@def.com"
          required
          className='p-4 border border-gray-400 rounded-xl w-full'
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          placeholder="This is an optional"
          className='p-4 border border-gray-400 rounded-xl w-full'
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Hi! I'd like to ask about"
          className='min-h-[120px] p-4 border border-gray-400 rounded-xl w-full'
          required
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-teal-500 hover:bg-teal-600 p-3 rounded-full text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

