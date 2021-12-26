import { GetStaticProps, NextPage } from "next";
import { client } from "src/lib/client";
import { Headline } from "src/components/model/Headline";
import { BlogCard } from "src/components/page/BlogCard";
import { Layout } from "src/components/Layout";
import { Blogs } from "src/types/types";

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
          <div key={index} className="mb-4 rounded-md border hover:shadow-sm transition bg-gray-50">
            <BlogCard blogs={blogs} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
