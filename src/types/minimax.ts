// MiniMax homepage content types

export interface NavDropdownItem {
  label: string;
  href: string;
  iconSrc?: string;
}

export interface NavDropdownGroup {
  title: string;
  iconSrc?: string;
  items: NavDropdownItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  dropdownGroups?: NavDropdownGroup[];
}

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle?: string;
  heading?: { pre: string; iconSrc?: string; post: string };
  description?: string;
  ctaButtons?: { label: string; href: string }[];
  cards?: CarouselCard[];
  bannerImageSrc?: string;
}

export interface CarouselCard {
  label: string;
  imageSrc: string;
  tags?: string[];
  href?: string;
}

export interface ModelCard {
  title: string;
  type: string;
  description: string;
  imageSrc: string;
  badge?: string;
  href: string;
}

export interface ProductCard {
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
}

export interface VoiceSample {
  title: string;
  imageSrc: string;
  tags: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface CompanyStats {
  serviceCountries: string;
  globalUsers: string;
  enterpriseCustomers: string;
  enterpriseCountries: string;
}