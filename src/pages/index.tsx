import { client } from "lib/client";
import { GetStaticProps, NextPage } from "next";
import Footer from "src/layout/Footer";
import Header from "src/layout/Header";
import styles from "src/styles/Home.module.css";
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
    <div>
      <Header title="YutoBlog" />
      <Card />
      <div className="container flex justify-center mx-auto">
        <div className="block shadow rounded bg-gray-200 py-5 px-10 mb-5">
          <div>
            <h1 className="text-center text-3xl font-bold">Blogs</h1>
            {props.blogs.contents.map((blogs: any, index: any) => {
              return (
                <div
                  key={index}
                  className="max-w-3xl mx-auto p-5 mt-3 font-bold truncate border-4 border-gray-200 border-opacity-5 bg-gray-100 rounded"
                >
                  {/* 日付を表示 */}
                  <div className={styles.blogs_category}>{fixDateFormat(blogs.createdAt)}</div>
                  <div>
                    {/* タイトルを表示 */}
                    <Link href={`/blogs/${blogs.id}`}>
                      <a>
                        <h3 className={styles.blogs_title}>{blogs.title}</h3>
                      </a>
                    </Link>
                  </div>
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
