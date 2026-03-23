import { Globe, MessageCircle, Pin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row justify-between gap-10">

        {/* Clinic */}
        <div className="flex flex-col gap-4 max-w-xs">
          <h2 className="text-xl font-bold text-primary-strong">
            Sunshine State <br />
            <span className="tracking-widest text-text-primary">Women's Care</span>
          </h2>
          <p className="text-sm text-text-primary font-semibold leading-relaxed">
            Providing compassionate and professional gynecological care for women
            in a comfortable and supportive environment.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/SunshineStateWomensCareLLC/" target="_blank">
              <Globe className="text-primary hover:text-primary-strong transition-colors" size={20} />
            </a>
            <a href="https://businessreviewcentral.com/sunshine-state-womens-care-llc/" target="_blank">
              <MessageCircle className="text-primary hover:text-primary-strong transition-colors" size={20} />
            </a>
            <a href="https://www.google.com/maps/place/Sunshine+State+Women's+Care,+LLC/" target="_blank">
              <Pin className="text-primary hover:text-primary-strong transition-colors" size={20} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-text-primary uppercase tracking-widest">
            Contact
          </h3>
          <div className="flex flex-col gap-3 text-sm text-text-primary">
            <a href="tel:5613682005" className="hover:text-text-secondary transition-colors">
              (561) 368-2005
            </a>
            <a href="mailto:drzann@comcast.net" className="hover:text-text-secondary transition-colors">
              drzann@comcast.net
            </a>
            
            <a  href="https://www.google.com/maps/place/Sunshine+State+Women's+Care,+LLC/"
              target="_blank"
              className="hover:text-text-secondary transition-colors leading-relaxed"
            >
              660 Glades Rd. Suite 240 <br /> Boca Raton, FL 33431
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold text-text-primary uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text-primary">
            <li><a href="/#" className="hover:text-text-secondary transition-colors">Meet the Doctor</a></li>
            <li><a href="/contactUs" className="hover:text-text-secondary transition-colors">Contact</a></li>
            <li><a href="/#testimonials" className="hover:text-text-secondary transition-colors">Testimonials</a></li>
            <li><a href="/#getInTouch" className="hover:text-text-secondary transition-colors">Patient Forms</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-secondary">
          <p>© 2024 Sunshine State Women's Care. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a href="https://o360.com/" target="_blank" className="underline hover:text-primary-strong transition-colors">
              O360®
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}