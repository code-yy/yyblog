import type { NextPage } from "next";
import "remixicon/fonts/remixicon.css";
import { fixDateFormat } from "../../../../lib/fixDateFormat";
import { client } from "../../../../lib/client";
import Header from "src/layout/Header";
import { Footer } from "src/layout/Footer";
import { Blog } from "src/types/types";
import { Profile } from "src/layout/Profile";

type Props = {
  blogs: Blog;
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <Header title={`${props.blogs.title} || YutoBlog`} />
      <main>
        <div className="flex justify-center">
          <div className="block shadow rounded bg-gray-200 py-5 px-7 my-6">
            {/* ブログタイトル */}
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">
              {props.blogs.title}
            </h1>
            <img
              src={props.blogs.image.url}
              alt={props.blogs.image.url}
              width={700}
              className="py-3 block object-cover heigth-auto mx-auto"
            />
            {/* ブログ公開日時 */}
            <div className="flex">
              <div>
                <i className="ri-history-line"></i>
              </div>
              <div>{fixDateFormat(props.blogs.createdAt)}</div>
            </div>
            <div>
              <div>
                <div
                  className="prose text-left"
                  dangerouslySetInnerHTML={{
                    __html: props.blogs.body,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Profile />
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
