
export interface Feature {
  title: string;
  description: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
  longDescription?: string;
  features?: Feature[];
  processSteps?: string[];
  tools?: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
  avatar: string;
}
