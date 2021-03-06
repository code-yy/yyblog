// src/index.tsx
export type Blogs = {
  contents: any;
  id: string;
  title: string;
  createdAt: string;
  category: string;
  description: string;
  image: {
    url: string;
  };
  tags: { name: string; slug: string }[];
  slug: string;
};

export type Blog = { contents: Blogs[] };

// src/components/page/PortfolioCard.tsx
export type Portfolio = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  createdAt: string;
  body: any;
};

// src/pages/tag
export type Tag = {
  id: string;
  name: string;
  slug: string;
};

export type Tags = { contents: Tag[] };
