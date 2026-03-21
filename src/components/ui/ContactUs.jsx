export default function ContactUs() {
  return (
    <div>
      <div className="relative isolate bg-surface px-6 py-24 sm:py-32 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-primary-strong sm:text-6xl">
            Contact Us
          </h2>
        </div>

        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-text-primary">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                className="w-full mt-2 rounded-lg bg-background border border-border px-3 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-text-primary">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                className="w-full mt-2 rounded-lg bg-background border border-border px-3 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="w-full mt-2 rounded-lg bg-background border border-border px-3 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full mt-2 rounded-lg bg-background border border-border px-3 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

          </div>

          <div className="mt-10">
            <button className="w-full bg-primary hover:bg-primary-strong text-background py-3 rounded-full text-base font-medium cursor-pointer transition-colors">
              Let's talk
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}