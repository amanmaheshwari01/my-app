export default function Form() {
  return (
    <div>
      <div className="relative isolate bg-warm-cream px-6 py-24 sm:py-32 lg:px-8">
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 pointer-events-none transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >

        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-saddle-brown sm:text-6xl">
            Contact Us
          </h2>
        </div>

        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            
            <div>
              <label htmlFor="first-name" className="text-2xl font-semibold text-saddle-brown">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                className="w-full mt-2 rounded-md bg-white px-3 py-2 text-black"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="text-2xl font-semibold text-saddle-brown">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                className="w-full mt-2 rounded-md bg-white px-3 py-2 text-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-2xl font-semibold text-saddle-brown">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="w-full mt-2 rounded-md bg-white px-3 py-2 text-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-2xl font-semibold text-saddle-brown">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-2 rounded-md bg-white px-3 py-2 text-black"
              ></textarea>
            </div>

          </div>

          <div className="mt-10">
            <button className="w-full bg-indigo-500 py-4 rounded-md text-white text-2xl cursor-pointer">
              Let's talk
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}