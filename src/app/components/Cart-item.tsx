'use client'
import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { useParams } from "next/navigation";

interface CartItemProps {
  image: string
  title: string
  color: string
  size: string
  quantity: number
  price: number
}


export function CartItem({ image, title, color, size, quantity, price }: CartItemProps) {
    const [cart, setCart] = useState<any[]>([]);
    const id = useParams()

    const handleRemoveFromCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();  // If necessary
        // Your logic
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      };
  return (
    <div className="flex items-start space-x-4 py-6 border-b">
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-sm">MRP: ${price}</p>
        </div>
        <div className="mt-2 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Size</span>
            <span className="text-sm font-medium">{size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Quantity</span>
            <span className="text-sm font-medium">{quantity}</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg" onClick={handleRemoveFromCart}>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

