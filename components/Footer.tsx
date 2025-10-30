import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Branding */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Sarah & Michael</h3>
            <p className="text-secondary-300">
              Join us as we celebrate our love and commitment to each other.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Questions?</h4>
            <p className="text-secondary-300 mb-2">
              For any inquiries, please reach out:
            </p>
            <a
              href="mailto:wedding@sarahandmichael.com"
              className="text-secondary-300 hover:text-white transition-colors"
            >
              wedding@sarahandmichael.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-700 text-center text-secondary-400">
          <p>&copy; {currentYear} Sarah & Michael. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with <span className="text-primary-400">♥</span> for our special day
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
