import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Headline } from "src/components/model/Headline";
import { client } from "src/lib/client";
import { fixDateFormat } from "src/lib/fixDateFormat";

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
      <div className="flex justify-center">
        <div>
          <Headline title={"Portfolio"} />
          <div>
            {props.portfolio.contents.map((portfolio: any, index: any) => {
              return (
                <div key={index} className="max-w-3xl mx-auto">
                  <div>
                    <Link href={`/portfolio/${portfolio.id}`}>
                      <a>
                        <div className="flex px-5 py-3 mt-3 text-ellipsis border-1 border-black border-opacity-10 bg-gray-100 rounded  hover:bg-gray-300">
                          <div>
                            <img
                              src={portfolio.image.url}
                              alt={portfolio.image.url}
                              width={150}
                              className="mx-auto pr-3"
                            />
                          </div>
                          <div>
                            <div>{fixDateFormat(portfolio.createdAt)}</div>
                            <h1 className="font-bold text-lg pt-1">『{portfolio.title}』</h1>
                            <p>{portfolio.description}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
