import { Github, Twitter } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="border-t-2 border-black bg-main text-black p-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Section Kiri */}
        <div className="text-lg font-bold uppercase tracking-widest">
          <a href="/" className="hover:underline">
            CodeFlow
          </a>
          <p className="text-sm font-thin">Ridho Hidayat</p>
        </div>

        {/* Section Tengah */}
        <nav className="flex space-x-4">
          <a href="#about" className="hover:underline text-black">
            Home
          </a>
          <a href="#about" className="hover:underline text-black">
            Docs
          </a>
          <a href="#about" className="hover:underline text-black">
            About
          </a>
          <a href="#services" className="hover:underline text-black">
            Services
          </a>
          <a href="#contact" className="hover:underline text-black">
            Contact
          </a>
        </nav>

        <div className="flex space-x-4">
          <Button variant="neutral">
            <Github />
          </Button>
          <Button variant="neutral">
            <Twitter />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
