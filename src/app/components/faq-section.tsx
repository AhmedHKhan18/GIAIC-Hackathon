'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "What shipping methods are available?",
        answer: "We offer standard and express shipping options. Standard shipping typically takes 3-5 business days, while express shipping can deliver your order within 1-2 business days."
      },
      {
        question: "How long will it take to receive my order?",
        answer: "Delivery time depends on your location and chosen shipping method. Standard shipping usually takes 3-5 business days, while express shipping can deliver within 1-2 business days."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to many countries worldwide. International shipping times and costs vary depending on the destination."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. Products must be in original condition and packaging to be eligible for a full refund."
      },
      {
        question: "How do I initiate a return?",
        answer: "To initiate a return, please log into your account and go to the 'Order History' section. Select the item you wish to return and follow the prompts."
      },
      {
        question: "How long does it take to process a refund?",
        answer: "Once we receive your return, it typically takes 3-5 business days to process the refund. The funds may take an additional 3-5 business days to appear in your account, depending on your bank."
      }
    ]
  },
  {
    category: "Product & Stock",
    questions: [
      {
        question: "Are all products shown on the website in stock?",
        answer: "We strive to keep our inventory up to date, but occasionally, items may be out of stock. The product page will indicate if an item is currently unavailable."
      },
      {
        question: "Can I request a product that's out of stock?",
        answer: "Yes, you can sign up for email notifications on the product page. We'll let you know when the item is back in stock."
      },
      {
        question: "Do you offer product warranties?",
        answer: "Many of our products come with manufacturer warranties. Please check the product description for specific warranty information."
      }
    ]
  },
  {
    category: "Ordering",
    questions: [
      {
        question: "How do I place an order?",
        answer: "To place an order, simply add items to your cart and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, and various other payment methods. You can see all available options at checkout."
      }
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-teal-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-teal-500" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}

export function FAQSection() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {faqData.map((category, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => (
                  <FAQItem key={itemIndex} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

