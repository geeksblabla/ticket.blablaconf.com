import { getTicketsInfo, User } from "../../utils/db";
import { NextSeo, NextSeoProps } from "next-seo";
import {
  getTicketGraphImg,
  getTicketImg,
} from "../../utils/ticket-image-generator";

//TODO: add typing
const TicketPage = ({
  user,
  seoConfig,
}: {
  seoConfig: NextSeoProps;
  user?: { name: string; image: string };
}) => {
  return (
    <div>
      <NextSeo {...seoConfig} /> {JSON.stringify(user)}
      <div>
        <h1> {`${user?.name} 's BlaBlaConf Ticket`} </h1>
        <img src={user?.image} />
      </div>
    </div>
  );
};

export async function getServerSideProps({
  query,
}: {
  query: { username: string };
}) {
  const username = query.username;
  let seoConfig = null;
  let user = null;

  console.log(username);

  if (username && username !== "") {
    const userDoc = await getTicketsInfo(username);
    if (userDoc.exists) {
      // TODO: only pass required data
      const u = userDoc.data() as User;
      seoConfig = generateTicketsSeoConfig(u);
      user = {
        name: u.name === null ? u.login : u.name,
        image: getTicketImg(u),
      };
    }
  }

  return {
    props: {
      user,
      seoConfig,
    },
  };
}

export default TicketPage;

const generateTicketsSeoConfig = (user: User): NextSeoProps => {
  const name = user.name === null ? user.login : user.name;
  const seoConfig = {
    title: name + "'s BlaBlaConf Ticket",
    description:
      "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: process.env.NEXT_PUBLIC_HOST + "/user/" + user.login,
      title: name + "'s BlaBlaConf Ticket",
      description:
        "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
      images: [
        {
          url: getTicketGraphImg(user),
        },
      ],
      site_name: "blablaconf.com",
      imageWidth: 1200,
      imageHeight: 1200,
    },
  };

  return seoConfig;
};
