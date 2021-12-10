import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { client } from "src/lib/client";
import { Profiles } from "src/components/Profiles";
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
      <div className="container flex justify-center mx-auto mt-10">
        <div className="block shadow rounded bg-gray-200 py-5 px-10 mb-5">
          <h1 className="text-center text-3xl font-bold">Portfolio</h1>
          <div>
            {props.portfolio.contents.map((portfolio: any, index: any) => {
              return (
                <div key={index} className="w-3xl mx-auto ">
                  {/* 日付を表示 */}
                  <div>
                    {/* タイトルを表示 */}
                    <Link href={`/portfolio/${portfolio.id}`}>
                      <a>
                        <div className="px-5 py-3 mt-3 truncate border-4 border-gray-200 border-opacity-5 bg-gray-100 rounded  hover:bg-gray-300">
                          <div>{fixDateFormat(portfolio.createdAt)}</div>
                          <h1 className="font-bold text-2xl py-2">『{portfolio.title}』</h1>
                          <p>{portfolio.description}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Profiles />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
