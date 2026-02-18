import Link from "next/link";
import Image from "next/image";
import { Rocket, Facebook, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/savolix", icon: Facebook },
  { name: "GitHub", href: "https://github.com/LakshanRanasinghe", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/buddhika-lakshan-ranasinghe-225461218/", icon: Linkedin },
  { name: "WhatsApp", href: "https://wa.me/94782528736", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Image src="/savolix-logo.png" alt="Savolix Logo" width={24} height={24} />
              </div>
              <span className="text-xl font-bold tracking-tight font-display">Savolix</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              We build premium digital experiences that elevate brands. From concept to code, we deliver excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="bg-white/5 p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "E-Commerce", "UI/UX Design", "Maintenance", "Consulting"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>191/A, Kumbaloluwa,<br /> Veyangoda, Sri Lanka</span>
              </li> */}
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+94782528736" className="hover:text-foreground transition-colors">
                  +94 78 252 8736
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:buddhika@dayzsolutions.com" className="hover:text-foreground transition-colors">
                  buddhika@dayzsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Savolix Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
