export interface Props {
  title: string;
  slug: string;
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "brown" | "gray" | "black";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Marketing Theory",
    slug: "marketing",
    color: "blue",
    description:
      "Explore strategies and concepts in digital marketing, content creation, SEO, and more.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    color: "orange",
    description:
      "Discover the latest trends and strategies in digital marketing, including SEO, content marketing, social media, and more.",
  },
  {
    title: "SEO",
    slug: "seo",
    color: "green",
    description:
      "Master the art of Search Engine Optimization to improve your website's visibility and ranking.",
  },
  {
    title: "Marketing Psychology",
    slug: "marketing-psychology",
    color: "yellow",
    description:
      "Discover the psychological principles behind marketing and consumer behavior.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    color: "purple",
    description:
      "Best practices, tools, and trends in modern web development.",
  },
  {
    title: "Legal",
    slug: "legal",
    color: "black",
    description:
      "Legal considerations, compliance, and regulations in business and technology.",
  },
];
