export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fire-safety-compliance-high-rise-buildings-india-2025",
    title: "Fire Safety Compliance for High-Rise Buildings in India (2025 Update)",
    excerpt: "MEP coordination? Oh, we figured that out on site. Famous",
    category: "Industry Insights",
    author: "shreshtha mathur",
    date: "May 14, 2025",
  },
  {
    slug: "fire-safety-compliance-high-rise-buildings-india-2026",
    title: "Fire Safety Compliance for High-Rise Buildings in India (2026 Update)",
    excerpt: "The urban scenario in India is changing at a breakneck",
    category: "Industry Insights",
    author: "shreshtha mathur",
    date: "May 14, 2026",
  },
  {
    slug: "mep-consultants-pune-efficient-building-design",
    title: "Why MEP Consultants in Pune Are Essential for Efficient Building Design",
    excerpt: "When you look at a building in Pune, whether it",
    category: "MEP Strategy",
    author: "shreshtha mathur",
    date: "April 28, 2026",
  },
  {
    slug: "fire-safety-compliance-high-rise-buildings-india-2025-checklist",
    title: "Fire Safety Compliance for High-Rise Buildings in India (2025 Update)",
    excerpt: "MEP coordination? Oh, we figured that out on site. Famous",
    category: "Fire Safety",
    author: "shreshtha mathur",
    date: "March 20, 2025",
  },
  {
    slug: "fire-safety-compliance-high-rise-buildings-india-2026-guide",
    title: "Fire Safety Compliance for High-Rise Buildings in India (2026 Update)",
    excerpt: "The urban scenario in India is changing at a breakneck",
    category: "Industry Insights",
    author: "shreshtha mathur",
    date: "February 12, 2026",
  },
  {
    slug: "mep-consultants-pune-efficient-building-design-guide",
    title: "Why MEP Consultants in Pune Are Essential for Efficient Building Design",
    excerpt: "When you look at a building in Pune, whether it",
    category: "MEP Strategy",
    author: "shreshtha mathur",
    date: "January 18, 2026",
  },
];

export const tocItems = [
  "Understanding Fire Safety Compliance in India",
  "Some of the key areas covered by the NBC include:",
  "The 2026 Update: What’s New in Fire Safety Regulations",
  "A. Smart Fire Detection and Alarm Systems",
  "B. Mandatory sprayer system",
  "C. Enhanced evacuation and refuge area regulation",
  "D. Digital fire Safety Compliance and NOC System",
  "E. Periodic Fire Audits and Maintenance",
  "Challenges in High-Rise Fire Safety",
  "The Role of Shreshtha Consultants in Fire Safety Compliance",
  "Services Offered by Shreshtha Consultants:",
  "Fire Safety Compliance Checklist for 2026",
  "The Importance of Continuous Compliance",
  "The Future of Fire Safety in India",
  "Conclusion",
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
