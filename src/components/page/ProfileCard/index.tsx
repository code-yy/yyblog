import { VFC } from "react";
import Link from "next/link";

type Props = {
  profile: {
    id: string;
    body: string;
  };
};

export const ProfileCard: VFC<Props> = (props: any) => {
  return (
    <div>
      <div>
        <Link href={`/profile/${props.profile.id}`}>
          <a>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: props.profile.body,
              }}
            ></div>
          </a>
        </Link>
      </div>
    </div>
  );
};
