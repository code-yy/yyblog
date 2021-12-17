export type Blog = {
  id?: string;
  title?: string;
  description?: string;
  body?: any;
  image?: any;
  category?: any;
  createdAt?: any;
  tags: any;
};

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
  tags: { name: string; id: string }[];
};

export type Portfolio = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  createdAt: string;
  body: any;
};

export type Props = {
  blog: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    tag: any;
    body: any;
    image: {
      url: string;
    };
  };
  highlightedBody: any;
};

export type Tag = {
  id: string;
  name: string;
};

export type Tags = { contents: Tag[] };
