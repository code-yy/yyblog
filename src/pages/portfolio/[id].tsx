import "remixicon/fonts/remixicon.css";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/Layout";
import { client } from "@/lib/client";
import { fixDateFormat } from "@/lib/fixDateFormat";
import type { Portfolio } from "@/types/types";

type Props = {
  portfolio: Portfolio;
};

const PortfolioID: NextPage<Props> = (props) => {
  return (
    <Layout title={`Portfolio | ${props.portfolio.title}`}>
      <main>
        <div className="flex justify-center">
          <div>
            <h1 className="items-center mx-auto max-w-4xl text-3xl font-bold text-center">{props.portfolio.title}</h1>
            <img
              src={props.portfolio.image.url}
              alt={props.portfolio.image.url}
              width={700}
              className="block object-cover py-3 mx-auto"
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
                  className="text-left prose"
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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "portfolio", contentId: id });

  return {
    props: {
      portfolio: data,
    },
  };
};
