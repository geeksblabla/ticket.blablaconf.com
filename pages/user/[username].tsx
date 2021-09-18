import { getTicketsInfo } from "../../utils/firebase-admin";

//TODO: add typing
const TicketPage = ({ user }) => {
  return <div> {JSON.stringify(user)}</div>;
};

export async function getServerSideProps({ query }) {
  const username = query.username;
  let user = null;
  console.log(username);

  if (username && username !== "") {
    const userDoc = await getTicketsInfo(username);
    if (userDoc.exists) {
      // TODO: only pass required data
      const { createdAt, ...data } = userDoc.data();
      user = data;
    }
  }

  return {
    props: {
      user,
    },
  };
}

export default TicketPage;
