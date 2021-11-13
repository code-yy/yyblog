import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import styles from "src/components/blogs/blog.module.css";
import Header from "src/layout/Header";
import Footer from "src/layout/Footer";
import { Blogs } from "src/types/types";
import { client } from "../../../lib/client";
import { fixDateFormat } from "lib/fixDateFormat";

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

const Blog: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header title="Blog || YutoBlog" />
      <h2 className={styles.title}>ブログ一覧</h2>
      {props.blogs.contents.map((blogs: any, index: any) => {
        return (
          <div key={index} className={styles.wrap}>
            <div className={styles.blogs}>
              {/* タイトルを表示 */}
              <Link href={`/blogs/${blogs.id}`}>
                <a>
                  <h3 className={styles.blogs_title}>{blogs.title}</h3>
                </a>
              </Link>

              {/* 日付を表示 */}
              <div className={styles.blogs_category}>
                {fixDateFormat(blogs.createdAt)}
                <br />#{blogs.category[0]} #{blogs.category[1]} #{blogs.category[2]}
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Blog;
