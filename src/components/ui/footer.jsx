import { Globe, MessageCircle, Pin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-warm-cream my-4" >
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-10">

        {/* Clinic */}
        <div className="flex flex-col gap-4 max-w-xs">
          <h2 className="text-xl font-bold text-saddle-brown">
            Sunshine State <br />
            <span className="tracking-widest text-modern-earthy">Women's Care</span>
          </h2>
          <p className="text-sm text-saddle-brown leading-relaxed">
            Providing compassionate and professional gynecological care for women
            in a comfortable and supportive environment.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/SunshineStateWomensCareLLC/" target="_blank">
              <Globe className="text-modern-earthy hover:text-saddle-brown transition" size={20} />
            </a>
            <a href="https://businessreviewcentral.com/sunshine-state-womens-care-llc/" target="_blank">
              <MessageCircle className="text-modern-earthy hover:text-saddle-brown transition" size={20} />
            </a>
            <a href="https://www.google.com/maps/place/Sunshine+State+Women's+Care,+LLC/" target="_blank">
              <Pin className="text-modern-earthy hover:text-saddle-brown transition" size={20} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-saddle-brown uppercase tracking-widest">
            Contact
          </h3>
          <div className="flex flex-col gap-3 text-sm text-saddle-brown">
            <a href="tel:5613682005" className="hover:text-modern-earthy transition">
              (561) 368-2005
            </a>
            <a href="mailto:drzann@comcast.net" className="hover:text-modern-earthy transition">
              drzann@comcast.net
            </a>
            
            <a  href="https://www.google.com/maps/place/Sunshine+State+Women's+Care,+LLC/"
              target="_blank"
              className="hover:text-modern-earthy transition leading-relaxed"
            >
              660 Glades Rd. Suite 240 <br /> Boca Raton, FL 33431
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-saddle-brown uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-saddle-brown">
            <li><a href="/meet-the-doctor" className="hover:text-modern-earthy transition">Meet the Doctor</a></li>
            <li><a href="/contactUs" className="hover:text-modern-earthy transition">Contact</a></li>
            <li><a href="/testimonials" className="hover:text-modern-earthy transition">Testimonials</a></li>
            <li><a href="/patient-forms" className="hover:text-modern-earthy transition">Patient Forms</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-saddle-brown/20 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-saddle-brown/60">
          <p>© 2024 Sunshine State Women's Care. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a href="https://o360.com/" target="_blank" className="underline hover:text-saddle-brown transition">
              O360®
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}