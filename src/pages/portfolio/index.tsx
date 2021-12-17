import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Headline } from "src/components/model/Headline";
import { PortfolioCard } from "src/components/page/PortfolioCard";
import { client } from "src/lib/client";

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
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
      </Head>
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
    </div>
  );
};

export default Portfolio;
