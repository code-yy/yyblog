import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Headline } from "@/components/model/Headline";
import { PortfolioCard } from "@/components/page/PortfolioCard";
import { client } from "@/lib/client";

export const getStaticProps: GetStaticProps = async () => {
  const portfolio = await client.get({ endpoint: "portfolio" });
  return {
    props: {
      portfolio: portfolio,
    },
    revalidate: 60 * 60,
  };
};

const Portfolio: NextPage = (props: any) => {
  return (
    <Layout title={"yyblog | Portfolio"}>
      <Headline title={"Portfolio"} />
      <ul>
        {props.portfolio.contents.map((portfolio: any, index: any) => {
          return (
            <li key={index}>
              <PortfolioCard portfolio={portfolio} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Portfolio;
