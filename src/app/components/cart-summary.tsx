

interface CartSummaryProps {
  subtotal: number
  shipping: string
  total: number
}

export function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Delivery & Handling</span>
          <span className="font-medium">{shipping}</span>
        </div>
        <div className="border-t pt-4 flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-teal-500 hover:bg-teal-600 p-3 rounded-full text-white">
          Member Checkout
        </button>
      </div>
    </div>
  )
}

