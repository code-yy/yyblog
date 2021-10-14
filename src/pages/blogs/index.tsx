import styles from "./blog.module.css";
import { client } from "../../../lib/client";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import Header from "../../components/Index.page/Header/Header";
import Footer from "../../components/Index.page/Footer/Footer";
import { fixDateFormat } from "../../../lib/fixDateFormat";

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
  blogs: any;
};

const Blog: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header title="Blog || YutoBlog" />

      {props.blogs.contents.map((blogs: any, index: any, tags: any) => {
        return (
          <div key={index} className={styles.wrap}>
            <div className={styles.blogs}>
              {/* タイトルを表示 */}
              <Link href={`/blogs/${blogs.id}`}>
                <a>
                  <h2 className={styles.blogs_title}>{blogs.title}</h2>
                </a>
              </Link>

              {/* 日付を表示 */}
              <span className="block">
                {fixDateFormat(blogs.createdAt)}
                <br />
                {/* タグを表示 */}#{blogs.category[0]} #{blogs.category[1]} #{blogs.category[2]}
              </span>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Blog;
