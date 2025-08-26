import digitalmarketingtoolsMe from "../assets/authors/digitalmarketingtools-me.png";

export interface Props {
  name: string;
  slug: string;
  image: ImageMetadata;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Gae4IT",
    slug: "gae4it",
    image: digitalmarketingtoolsMe,
    bio: "Gae4IT is a Front-End Web Developer and Digital Marketer with a passion for creating beautiful and functional websites. He has a strong background in HTML, CSS, JavaScript, and various web development frameworks. Gae4IT is also skilled in SEO, content marketing, and social media management. In his free time, he enjoys exploring new technologies and sharing his knowledge with others through blogging and online tutorials.",
  },
];
