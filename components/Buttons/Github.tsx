import { useState } from "react";
import styles from "./index.module.css";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || ""
)}`;

const GithubButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <a
      href={githubUrl}
      onClick={() => setLoading(true)}
      className={styles.github_button}
    >
      {loading ? "Loading Github Profile ...." : "Customize with Github"}
    </a>
  );
};

export default GithubButton;
