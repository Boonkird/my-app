
import { BlockRenderer, TeamPageBlock } from "@/app/components/block";
import { fetchApi } from "@/app/utils/fetch";

async function getTeamMember(slug: string) {
  const res = (await fetchApi(
    "/api/team-members",
    {},
    {
      photo: {
        fields: ["alternativeText", "name", "url"],
      },
      block: {
        on: {
          "block.testimonial": {
            populate: {
              photo: {
                fields: ["alternativeText", "name", "url"],
              },
            },
          },
          "block.spoiler": {
            populate: true,
          },
          "block.richtext": {
            populate: true,
          },
        },
      },
    },
    {
      slug: {
        $eq: slug,
      },
    }
  )) as any;

  //     filters: {

  // });

  console.log(res.data);
  const teamMember = res.data?.data[0];
  console.dir(teamMember, { depth: null });
  console.log(teamMember);
  return teamMember;
}

interface UserProfile {
  id: number;
  documentId: string;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  photo: {
    id: number;
    alternativeText: string;
    name: string;
    url: string;
  };
  block: TeamPageBlock[];
}

export default async function TeamMemberDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return <p>No member found</p>;

  const teamMember = (await getTeamMember(slug)) as UserProfile;

  return (
    <div>
      {teamMember?.block.map((block: TeamPageBlock) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}
