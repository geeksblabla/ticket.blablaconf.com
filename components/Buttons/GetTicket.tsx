import styles from "./index.module.css";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || ""
)}`;

const GetTicket = () => {
  return (
    <a href="https://blablaconf.com" className={styles.github_button}>
      GET YOUR TICKET
    </a>
  );
};

export default GetTicket;
