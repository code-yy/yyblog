import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { client } from "src/lib/client";
import { Profiles } from "src/components/Profiles";

export const getStaticProps: GetStaticProps = async () => {
  const profile = await client.get({ endpoint: "profile" });
  return {
    props: {
      profile: profile,
    },
    revalidate: 60 * 60,
  };
};

const Profile: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/profile/アルカ.PNG" />
      </Head>
      <div className="container flex justify-center mx-auto mt-10">
        <div className="block shadow rounded bg-gray-200 py-5 px-10 mb-5">
          <h1 className="text-center text-3xl font-bold">Profile</h1>
          <div>
            {props.profile.contents.map((profile: any, index: any) => {
              return (
                <div
                  key={index}
                  className="max-w-3xl mx-auto p-5 mt-3 font-bold truncate border-4 border-gray-200 border-opacity-5 bg-gray-100 rounded"
                >
                  {/* 日付を表示 */}
                  <div>
                    {/* タイトルを表示 */}
                    <Link href={`/profile/${profile.id}`}>
                      <a>
                        <div
                          className="prose"
                          dangerouslySetInnerHTML={{
                            __html: profile.body,
                          }}
                        ></div>
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

export default Profile;
