export type Blog = {
  id?: string;
  title?: string;
  description?: string;
  body?: any;
  image?: any;
  category?: any;
  createdAt?: any;
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
};

export type Props = {
  blog: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    tag: any;
    body: any;
    image: {
      url: string;
    };
  };
  highlightedBody: any;
};
