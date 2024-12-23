import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container py-20 px-4 bg-white border-t-2 border-black text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-black border-b-4 border-black inline-block">
        Contact Us
      </h2>
      <p className="text-lg text-center mb-6 text-gray-700">
        Have any questions or feedback? We would love to hear from you!
      </p>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6 bg-white border-2 rounded-lg border-black p-4 xl:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-start text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-start text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-start text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] rounded-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none transition duration-200"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact