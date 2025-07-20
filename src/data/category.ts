export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "blue",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Lifestyle",
    slug: "lifestyle",
    color: "orange",
    description:
      "Explore the latest trends and ideas in fashion, food, home design, and more, and get inspiration for living your best life.",
  },
  {
    title: "Personal",
    slug: "personal",
    color: "green",
    description:
      "Discover tips and strategies for self-improvement, personal development, and achieving your goals, and find resources to help you grow as a person.",
  },
  {
    title: "Travel",
    slug: "travel",
    color: "pink",
    description:
      "Plan your next adventure and get travel tips and inspiration from experienced travelers, with articles covering destinations, cultures, and more.",
  },
  {
    title: "Design",
    slug: "design",
    color: "purple",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
  {
    title: "Marketing",
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
    title: "Customer Service",
    slug: "customer-service",
    color: "pink",
    description:
      "Learn best practices for customer service, issue resolution, and enhancing customer satisfaction.",
  },
  {
    title: "SEO",
    slug: "SEO",
    color: "green",
    description:
      "Master the art of Search Engine Optimization to improve your website's visibility and ranking.",
  },
];
