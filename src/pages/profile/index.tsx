import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Headline } from "src/components/model/Headline";
import { addClassNames } from "src/lib/addClassNames";
import { client } from "src/lib/client";
import cheerio from "cheerio";

export const getStaticProps: GetStaticProps = async () => {
  const profile: any = await client.get({ endpoint: "profile" });
  const $ = cheerio.load(profile.body);
  const classNamesAddedHtml = addClassNames($);
  return { props: { profile: profile, parsedHtml: classNamesAddedHtml.html() }, revalidate: 60 };
};

type Props = {
  profile: any;
  parsedHtml: any;
};

const Profile: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/profile/アルカ.PNG" />
      </Head>
      <Headline title={"Profile"} />
      <div className="flex justify-center">
        <article
          className="prose"
          dangerouslySetInnerHTML={{
            __html: props.parsedHtml,
          }}
        ></article>
      </div>
    </div>
  );
};

export default Profile;
