import type { NextPage } from "next";
import "remixicon/fonts/remixicon.css";
import { fixDateFormat } from "../../../../lib/fixDateFormat";
import { client } from "../../../../lib/client";
import Header from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Profile } from "src/components/Profile";

type Props = {
  portfolio: any;
};

const PortfolioID: NextPage<Props> = (props) => {
  return (
    <div>
      <Header title={`${props.portfolio.title} || YutoBlog`} />
      <main>
        <div className="flex justify-center">
          <div className="block shadow rounded bg-gray-200 py-5 px-7 my-6">
            {/* ブログタイトル */}
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">
              {props.portfolio.title}
            </h1>
            <img
              src={props.portfolio.image.url}
              alt={props.portfolio.image.url}
              width={700}
              className="py-3 block object-cover heigth-auto mx-auto"
            />
            {/* ブログ公開日時 */}
            <div className="flex">
              <div>
                <i className="ri-history-line"></i>
              </div>
              <div>{fixDateFormat(props.portfolio.createdAt)}</div>
            </div>
            <div>
              <div>
                <div
                  className="prose text-left"
                  dangerouslySetInnerHTML={{
                    __html: props.portfolio.body,
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

export default PortfolioID;

export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "portfolio" });

  const paths = data.contents.map((content: any) => `/portfolio/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "portfolio", contentId: id });

  return {
    props: {
      portfolio: data,
    },
  };
};
