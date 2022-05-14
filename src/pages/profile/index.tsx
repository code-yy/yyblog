import cheerio from "cheerio";
import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Headline } from "@/components/model/Headline";
import { addClassNames } from "@/lib/addClassNames";
import { client } from "@/lib/client";

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
    <Layout title={"yyblog | Profile"}>
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
