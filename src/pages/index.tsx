import { client } from "lib/client";
import { GetStaticProps, NextPage } from "next";
import Footer from "src/layout/Footer";
import Header from "src/layout/Header";
import { Blogs } from "src/types/types";
import Link from "next/link";
import { fixDateFormat } from "lib/fixDateFormat";
import Profile from "src/layout/Profile";
import { Card } from "src/components/Card";

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get({ endpoint: "blogs" });
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

const Home: NextPage<Props> = (props: any) => {
  return (
    <div className="bg-gray-100">
      <Header title="YutoBlog" />
      <Card />
      <div className="container flex justify-center mx-auto">
        <div className="block shadow rounded bg-gray-200 py-5 px-10 mb-5">
          <div>
            <h1 className="text-center text-3xl font-bold">Blogs</h1>
            {props.blogs.contents.map((blogs: any, index: any) => {
              return (
                <div key={index} className="max-w-3xl mx-auto">
                  <Link href={`/blogs/${blogs.id}`}>
                    <a>
                      <div className="px-5 py-3 mt-3 truncate border-4 border-gray-200 border-opacity-5 bg-gray-100 rounded  hover:bg-gray-300">
                        <div>{fixDateFormat(blogs.createdAt)}</div>
                        <h3 className="font-bold text-lg pt-1">{blogs.title}</h3>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
