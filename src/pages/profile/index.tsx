import { GetStaticProps, NextPage } from "next";
import { Headline } from "src/components/model/Headline";
import { addClassNames } from "src/lib/addClassNames";
import { client } from "src/lib/client";
import cheerio from "cheerio";
import { Layout } from "src/components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const profile: any = await client.get({ endpoint: "profile" });
  const $ = cheerio.load(profile.body);
  const classNamesAddedHtml = addClassNames($);
  return { props: { profile: profile, parsedHtml: classNamesAddedHtml.html() }, revalidate: 60 };
};

type Props = {
  parsedHtml: any;
};

const Profile: NextPage<Props> = (props) => {
  return (
    <Layout title={"yyblog || Profile"}>
      <Headline title={"Profile"} />
      <div className="flex justify-center">
        <article
          className="prose"
          dangerouslySetInnerHTML={{
            __html: props.parsedHtml,
          }}
        ></article>
      </div>
    </Layout>
  );
};

export default Profile;
