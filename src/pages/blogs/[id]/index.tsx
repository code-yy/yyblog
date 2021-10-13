import { client } from "../../../../lib/client";
import Link from "next/link";
import type { NextPage } from "next";
import Header from "../../../components/Index.page/Header/Header";
import Footer from "../../../components/Index.page/Footer/Footer";
import styles from "./blog.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

type Props = {
  blogs: any;
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header title="Blog || YutoBlog" />
      <main>
        {/* blog */}
        <div className={styles.wrapper}>
          <div className={styles.blogs}>
            <h1 className={styles.title}>{props.blogs.title}</h1>
            <img src={props.blogs.image.url} alt="" width={700} />
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.blogs.body,
                }}
              />
            </div>
          </div>

          {/* profile */}
          <div className={styles.profile}>
            <div>
              <div className={styles.profile_img}></div>
              <div className={styles.profile_icons}>
                <Link href="https://twitter.com/yuto_yy_76">
                  <a className={styles.profile_icon}>
                    <FaTwitter size={30} color={"#00acee"} />
                  </a>
                </Link>
                <Link href="https://github.com/Utopia300">
                  <a className={styles.profile_icon}>
                    <FaGithub size={30} />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/yuto.jsx/?hl=ja">
                  <a className={styles.profile_icon}>
                    <GrInstagram size={30} color={"red"} />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.profile_name}>ユウト</div>
            <p className={styles.profile_yuto}>
              兵庫県在住、フロントエンド志望の19歳です。
              <br />
              プログラミング・フットボール・音楽・アニメ・ゲームが大好き。
              <br />
            </p>
            <button className={styles.profile_button}>プロフィール</button>
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
