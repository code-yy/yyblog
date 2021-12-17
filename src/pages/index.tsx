import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Blogs } from "src/types/types";
import { fixDateFormat } from "src/lib/fixDateFormat";
import { client } from "src/lib/client";
import { Headline } from "src/components/model/Headline";

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
    <div>
      <Head>
        <title>yyblog</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
      </Head>
      <Headline title={"Blogs"} />
      {props.blogs.contents.map((blogs: any, index: any) => {
        return (
          <div key={index} className="mb-4 rounded-md border hover:shadow-sm transition bg-gray-50">
            <Link href={`/blogs/${blogs.id}`}>
              <a className="block md:flex md:justify-center items-center py-4 w-full">
                <img
                  src={blogs.image.url}
                  alt={blogs.image.url}
                  className="block object-cover w-full md:w-1/6 min-h-hull border"
                />
                <div className="md:pl-4 w-full md:w-3/4">
                  <div>{fixDateFormat(blogs.updatedAt)}</div>
                  <h3 className="text-lg font-bold">{blogs.title}</h3>
                  <p className="text-sm text-gray-700">{blogs.description}</p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
