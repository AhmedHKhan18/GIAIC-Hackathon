'use client'
import { CartItem } from "@/app/components/Cart-item"
import { CartSummary } from "@/app/components/cart-summary"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useState, useEffect } from "react"

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
 
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);


  const cartItems = [
    {
      image: "/placeholder.svg?height=120&width=120",
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
    },
    {
      image: "/placeholder.svg?height=120&width=120",
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const shipping = "Free"

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-8">
        <h1 className="text-2xl font-semibold mb-8">Bag</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.length >= 0 ? cart.map((item, index):any => {
              return(
              <CartItem key={index} {...item} />
            )}):<p>Your cart is empty</p>}
          </div>
          <div>
            <CartSummary
              subtotal={totalPrice}
              shipping={shipping}
              total={totalPrice}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

