import { VFC } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { client } from "src/lib/client";
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

export const TagBar: VFC<Props> = (props) => {
  return (
    <div>
      <main className="ml-10">
        <div className="block shadow rounded bg-gray-200 py-2 px-10 text-center mb-5">
          <div className="text-3xl font-bold p-3">Tags</div>
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
      </main>
    </div>
  );
};
