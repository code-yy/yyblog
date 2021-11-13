import { client } from "lib/client";
import { GetStaticProps, NextPage } from "next";
import Footer from "src/layout/Footer";
import Header from "src/layout/Header";
import styles from "src/styles/Home.module.css";
import { Blogs } from "src/types/types";
import Link from "next/link";
import { fixDateFormat } from "lib/fixDateFormat";
import Profile from "src/layout/Profile";

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
      <div className="container flex justify-center mx-auto">
        <div className="block shadow rounded bg-gray-100 py-2 px-10 my-6">
          <div className="block shadow rounded bg-gray-100 my-7">
            {props.blogs.contents.map((blogs: any, index: any) => {
              return (
                <div
                  key={index}
                  className="max-w-3xl mx-auto p-5 mt-3 font-bold truncate border-4 border-black border-opacity-25"
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
