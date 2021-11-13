import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "lib/client";
import Header from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Profile } from "src/components/Profile";
import { fixDateFormat } from "lib/fixDateFormat";

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
      <Header title="YY || portfolio" />
      <div className="container flex justify-center mx-auto mt-10">
        <div className="block shadow rounded bg-gray-200 py-5 px-10 mb-5">
          <h1 className="text-center text-3xl font-bold">Portfolio</h1>
          <div>
            {props.portfolio.contents.map((portfolio: any, index: any) => {
              return (
                <div
                  key={index}
                  className="w-3xl mx-auto p-5 mt-3 font-bold truncate border-4 border-gray-200 border-opacity-5 bg-gray-100 rounded"
                >
                  {/* 日付を表示 */}
                  <div>
                    {/* タイトルを表示 */}
                    <Link href={`/portfolio/${portfolio.id}`}>
                      <a>
                        <div>{fixDateFormat(portfolio.createdAt)}</div>
                        <h1 className="font-bold text-2xl py-2">『{portfolio.title}』</h1>
                        <p>{portfolio.description}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
