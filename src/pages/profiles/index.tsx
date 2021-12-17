import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Headline } from "src/components/model/Headline";
import { ProfileCard } from "src/components/page/ProfileCard";
import { client } from "src/lib/client";

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
      <div className="flex justify-center">
        <div>
          <Headline title={"Profile"} />
          <div>
            {props.profile.contents.map((profile: any, index: any) => {
              return (
                <div
                  key={index}
                  className="max-w-3xl mx-auto p-5 mt-3 font-bold truncate border-1 border-black border-opacity-5 bg-gray-100 rounded"
                >
                  <ProfileCard profile={profile} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
