import React from "react";
import { ArrowRight, Globe, Shield, Sparkles, Star, User, Zap } from "lucide-react";

export interface NavDropdownItem {
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "AI Trip Planner",
        href: "/ai-generator",
        description: "Personalized trip planning using our advanced AI to match your travel personality.",
        icon: <Sparkles className="w-4 h-4" />,
        category: "Planning",
      },
      {
        name: "Travel Permits",
        href: "/licenses",
        description: "Quick and easy authorization for photography, research, and technical deployment.",
        icon: <Globe className="w-4 h-4" />,
        category: "Planning",
      },
      {
        name: "Custom Itinerary",
        href: "/personalized-plan",
        description: "Design your own perfect Egyptian journey with our flexible planning framework.",
        icon: <Zap className="w-4 h-4" />,
        category: "Planning",
      },
      {
        name: "Sovereign Card",
        href: "/card",
        description: "Secure payments with automated VAT refunds and integrated transit across Egypt.",
        icon: <Shield className="w-4 h-4" />,
        category: "Essential",
      },
      {
        name: "Private Guides",
        href: "/tour-guide",
        description: "Expert local guides providing personalized support and historical insights.",
        icon: <User className="w-4 h-4" />,
        category: "Essential",
      },
      {
        name: "Top Recommendations",
        href: "/recommendations",
        description: "Hand-picked travel routes verified by our local experts for the best experience.",
        icon: <Star className="w-4 h-4" />,
        category: "Essential",
      },
    ],
  },
  {
    name: "Stories & Info",
    href: "/about",
    dropdown: [
      {
        name: "Travel Stories",
        href: "/stories",
        description: "Explore unique experiences and hidden gems from our community of travelers.",
        icon: <ArrowRight className="w-4 h-4" />,
        category: "Discovery",
      },
      {
        name: "Why Choose Us",
        href: "/why-us",
        description: "Learn about our commitment to excellence and authentic travel experiences.",
        icon: <Shield className="w-4 h-4" />,
        category: "Discovery",
      },
      {
        name: "Our Blog",
        href: "/blogs",
        description: "Latest news, travel tips, and updates from the heart of Egyptian tourism.",
        icon: <Zap className="w-4 h-4" />,
        category: "Discovery",
      },
      {
        name: "Terms of Service",
        href: "/terms",
        description: "Our clear and simple guidelines for a safe and enjoyable booking experience.",
        icon: <Shield className="w-4 h-4" />,
        category: "Support",
      },
      {
        name: "Privacy Policy",
        href: "/privacy",
        description: "How we protect your data and ensure your personal information stays private.",
        icon: <Globe className="w-4 h-4" />,
        category: "Support",
      },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];
