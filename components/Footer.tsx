import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-sage-800 to-sage-900 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-400 via-gold-400 to-sage-400" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 text-6xl text-coral-400/10">✿</div>
      <div className="absolute bottom-10 left-10 text-5xl text-gold-400/10">❀</div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Branding */}
          <div>
            <h3 className="text-3xl font-script font-bold mb-4 text-coral-300">Jhe & Eifer</h3>
            <p className="text-cream/90 font-body">
              Join us as we celebrate our love and commitment to each other under the summer sun 🌸
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold-300">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-coral-300 transition-colors font-body bloom inline-block"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold-300">Questions?</h4>
            <p className="text-cream/90 mb-2 font-body">
              For any inquiries, please reach out:
            </p>
            <a
              href="mailto:terddy03@gmail.com"
              className="text-coral-300 hover:text-gold-300 transition-colors font-body bloom inline-block"
            >
              terddy03@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sage-600/50 text-center text-cream/70">
          <p className="font-body">&copy; {currentYear} Jhe & Eifer. All rights reserved.</p>
          <p className="mt-2 text-sm font-body">
            Made with <span className="text-coral-400">♥</span> for our special day
          </p>
          <p className="mt-2 text-xs text-gold-300/70 font-script">
            A blooming day under the summer sun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
