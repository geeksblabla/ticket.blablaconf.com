/* eslint-disable @next/next/no-img-element */
import { getTicketsInfo, User } from "../../utils/db";
import { NextSeo, NextSeoProps } from "next-seo";
import styles from "../../styles/Home.module.css";

import { getTicketImg } from "../../utils/ticket-image-generator";
import { Layout } from "../../components/Layout";
import { ShareActions } from "../../components/ShareActions";
import GetTicket from "../../components/Buttons/GetTicket";

//TODO: add typing
const TicketPage = ({
  user,
  share,
  seoConfig,
}: {
  seoConfig: NextSeoProps;
  share: boolean;
  user?: { name: string; image: string; url: string };
}) => {
  return (
    <Layout>
      <NextSeo {...seoConfig} />
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            {share
              ? " Share your ticket with friends 🎉🎉"
              : `${user?.name}'s  Ticket`}
          </h1>
          {share && user?.url && <ShareActions shareUrl={user?.url} />}
          {!share && (
            <div className={styles.get_ticket}>
              <GetTicket />
            </div>
          )}
        </div>
        <div className={styles.ticket_container}>
          <img
            className={styles.ticket}
            src={user?.image}
            height={450}
            alt={`${user?.name}'s  Ticket`}
          />
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({
  query,
}: {
  query: { username: string; share: boolean };
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
        url: process.env.NEXT_PUBLIC_HOST + "/user/" + u.login,
      };
    }
  }

  return {
    props: {
      user,
      share: query.share || false,
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
          url: getTicketImg(user),
        },
      ],
      site_name: "blablaconf.com",
      imageWidth: 1200,
      imageHeight: 630,
    },
  };

  return seoConfig;
};
