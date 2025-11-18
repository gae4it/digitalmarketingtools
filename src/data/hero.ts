export interface HeroCTAButton {
  label: string;
  href: string;
  style?: "primary" | "secondary";
}

export interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  textPosition?: "left" | "center" | "right";
  variant?: "default" | "large" | "compact";
  ctaButtons?: HeroCTAButton[];
}
