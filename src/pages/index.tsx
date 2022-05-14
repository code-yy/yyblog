import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Headline } from "@/components/model/Headline";
import { BlogCard } from "@/components/page/BlogCard";
import { client } from "@/lib/client";
import type { Blogs } from "@/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogs: blogs,
    },
    revalidate: 60 * 60,
  };
};

type Props = {
  blogs: Blogs;
};

const Home: NextPage<Props> = (props) => {
  return (
    <Layout title={"yyblog"}>
      <Headline title={"Blogs"} />
      {props.blogs.contents.map((blogs: any, index: any) => {
        return (
          <div key={index} className="mb-4 bg-gray-50 rounded-md border hover:shadow-sm transition">
            <BlogCard blogs={blogs} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
