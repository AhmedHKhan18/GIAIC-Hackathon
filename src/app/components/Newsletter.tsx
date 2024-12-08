export default function Newsletter() {
    return (
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
        <form className="flex justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
          />
          <button type="submit" className="ml-4 px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors">
            SUBMIT
          </button>
        </form>
      </section>
    )
  }
  
  