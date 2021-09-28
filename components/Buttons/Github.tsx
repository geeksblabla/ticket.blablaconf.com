import styles from "./index.module.css";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || ""
)}`;

const GithubButton = () => {
  return (
    <a href={githubUrl} className={styles.github_button}>
      Customize with Github
    </a>
  );
};

export default GithubButton;
