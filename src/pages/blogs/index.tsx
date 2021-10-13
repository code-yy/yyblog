import styles from "../../styles/Home.module.css";
import { client } from "../../../lib/client";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import Header from "../../components/Index.page/Header/Header";
import Footer from "../../components/Index.page/Footer/Footer";

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

      <ul>
        {props.blogs.contents.map((blogs: any, index: any) => {
          return (
            <li key={index}>
              <Link href={`/blogs/${blogs.id}`}>
                <a>{blogs.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Blog;
