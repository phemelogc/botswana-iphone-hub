import Logo from "./Logo";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-slate-400">
              Your trusted iPhone partner in Botswana. Quality devices, honest prices, friendly service.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-accent transition-smooth">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-400 hover:text-accent transition-smooth">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-accent transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/26774320023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-accent transition-smooth"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
                +267 7432 0023
              </a>
              <p className="text-slate-500 text-sm">
                Monday - Saturday: 8:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} B Phones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
