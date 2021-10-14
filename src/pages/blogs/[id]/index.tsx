import { client } from "../../../../lib/client";
import type { NextPage } from "next";
import Header from "../../../components/Index.page/Header/Header";
import Footer from "../../../components/Index.page/Footer/Footer";
import styles from "./blog.module.css";

type Props = {
  blogs: any;
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header title={`${props.blogs.title} || YutoBlog`} />
      <main>
        {/* blog */}
        <div className={styles.wrapper}>
          <div className={styles.blogs}>
            <h1 className={styles.title}>{props.blogs.title}</h1>
            <div className={styles.body}>
              <img src={props.blogs.image.url} alt="" className={styles.blog_image} />
              <div className={styles.blog_container}>
                <div
                  className={styles.blog_body}
                  dangerouslySetInnerHTML={{
                    __html: props.blogs.body,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};