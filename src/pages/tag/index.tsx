import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { client } from "src/lib/client";
import { Profiles } from "src/components/Profiles";
import { Tags } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const tags: Tags = await client.get({ endpoint: "tag" });

  return {
    props: {
      tags: tags,
    },
    revalidate: 60 * 60,
  };
};

type Props = {
  tags: Tags;
};

const Tag: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>Tags</title>
        <link rel="icon" href="/profile/アルカ.PNG" />
      </Head>
      <div className="container flex justify-center mx-auto mt-10">
        <div className="block shadow rounded bg-gray-200 py-5 px-10 mb-5 min-w-[665px]">
          <h1 className="text-center text-3xl font-bold">Tags</h1>
          <ul className="pl-4 list-disc">
            {props.tags.contents.map((tag, index) => {
              return (
                <li key={index}>
                  <Link href={`/tag/${tag.id}`}>
                    <a className="text-blue-600 underline">{tag.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Profiles />
        </div>
      </div>
    </div>
  );
};

export default Tag;
