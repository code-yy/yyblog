import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Blogs } from "src/types/types";
import { fixDateFormat } from "src/lib/fixDateFormat";
import { client } from "src/lib/client";

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
        <title>Yutopage</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
      </Head>
      <div className="flex justify-center">
        <div>
          <h1 className="text-center text-3xl font-bold">Blogs</h1>
          {props.blogs.contents.map((blogs: any, index: any) => {
            return (
              <div key={index} className="max-w-3xl mx-auto">
                <Link href={`/blogs/${blogs.id}`}>
                  <a>
                    <div className="flex px-5 py-3 mt-3 truncate border-4 border-gray-200 border-opacity-5 bg-gray-100 rounded  hover:bg-gray-300">
                      <div>
                        <img
                          src={blogs.image.url}
                          alt={blogs.image.url}
                          width={150}
                          className="mx-auto pr-3"
                        />
                      </div>
                      <div>
                        <div>{fixDateFormat(blogs.updatedAt)}</div>
                        <h3 className="font-bold text-lg pt-1">{blogs.title}</h3>
                        <p className="text-sm pt-1">{blogs.description}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
