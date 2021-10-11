import styles from "../styles/Home.module.css";
import Header from "../components/Index.page/Header/Header";
import Main from "../components/Index.page/Main/Main";
import Footer from "../components/Index.page/Footer/Footer";
import { client } from "../../lib/cilent";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";

type Blog = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  body: string;
  category: { name: string };
  tags: { name: string }[];
  createdAt: string;
};

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
    <div className={styles.container}>
      <Header title="YutoBlog" />

      <Main />
      <ul>
        {props.blogs.contents.map((blog, index) => {
          return (
            <li key={index}>
              <Link href={`/blog/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
