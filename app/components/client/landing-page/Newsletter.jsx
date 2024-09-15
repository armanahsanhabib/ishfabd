import { FiMail } from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className="categoris mt-5 bg-green-50">
      <div className="container mx-auto flex items-center justify-between px-2 py-6 sm:px-4 md:px-8">
        <div className="left flex items-center gap-3">
          <div className="icon text-5xl text-green-700">
            <FiMail />
          </div>
          <h3 className="text-2xl font-bold text-green-800">
            Subscribe to our newsletter
          </h3>
        </div>
        <form>
          <input
            type="text"
            name="newsletter"
            id="newsletter"
            placeholder="yourmail@gmail.com"
            className="w-[350px] rounded-l-md border border-r-0 border-green-500 bg-green-50 px-3 py-2 outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="cursor-pointer rounded-r-md border border-green-500 bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          />
        </form>
      </div>
    </div>
  )
}

export default Newsletter
