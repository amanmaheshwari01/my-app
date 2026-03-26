import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaClock } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF size={13} />,  href: "/facebook",  label: "Facebook"  },
  { icon: <FaTwitter   size={13} />,  href: "/twitter",   label: "Twitter"   },
  { icon: <FaInstagram size={13} />,  href: "/instagram", label: "Instagram" },
  { icon: <FaLinkedinIn size={13} />, href: "/linkedin",  label: "LinkedIn"  },
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-background border-b border-border px-8 py-2.5 flex items-center justify-between">

      {/* ── Left: phone + hours ── */}
      <div className="flex items-center gap-5">

        <a
          href="tel:+11234567890"
          className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-200 no-underline"
        >
          <FaPhone size={11} className="text-primary" />
          <span className="text-sm font-semibold">+1 (123) 456-7890</span>
        </a>

        <span className="text-border text-xs select-none">|</span>

        <div className="flex items-center gap-1.5 text-text-primary text-xs">
          <FaClock size={11} className="text-primary opacity-70" />
          <span>Mon – Fri &nbsp;·&nbsp; 9:00 AM – 6:00 PM EST</span>
        </div>

      </div>

      {/* ── Center: announcement ── */}
      <p className="text-xs font-semibold text-text-primary tracking-widest uppercase hidden md:block">
        Now accepting new patients — Same-week appointments available
      </p>

      {/* ── Right: social icon links ── */}
      <div className="flex items-center gap-3">
        {socialLinks.map(({ icon, href, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="w-7 h-7 rounded-full flex items-center justify-center
                       text-text-secondary border border-border
                       hover:bg-primary hover:text-white hover:border-primary
                       transition-all duration-200"
          >
            {icon}
          </Link>
        ))}
      </div>

    </div>
  );
}