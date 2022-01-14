import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Headline } from "@/components/model/Headline";

import { client } from "src/lib/client";
import { Tags } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const tags: Tags = await client.get({ endpoint: "tags" });

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
    <Layout title={"yyblog | Tags"}>
      <div className="container flex justify-center mx-auto mt-10">
        <div className="block py-5 px-10 mb-5 min-w-[665px] bg-gray-50 rounded shadow">
          <Headline title={"Tags"} />
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
      </div>
    </Layout>
  );
};

export default Tag;
