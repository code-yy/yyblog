import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/lib/client";
import { fixDateFormat } from "src/lib/fixDateFormat";
import { Portfolio } from "src/types/types";
import { Layout } from "src/components/layout/Layout";
import "remixicon/fonts/remixicon.css";

type Props = {
  portfolio: Portfolio;
};

const PortfolioID: NextPage<Props> = (props) => {
  return (
    <Layout title={`Portfolio | ${props.portfolio.title}`}>
      <main>
        <div className="flex justify-center">
          <div>
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">{props.portfolio.title}</h1>
            <img
              src={props.portfolio.image.url}
              alt={props.portfolio.image.url}
              width={700}
              className="py-3 block object-cover heigth-auto mx-auto"
            />
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
        </div>
      </main>
    </Layout>
  );
};

export default PortfolioID;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "portfolio" });

  const paths = data.contents.map((content: any) => `/portfolio/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "portfolio", contentId: id });

  return {
    props: {
      portfolio: data,
    },
  };
};
