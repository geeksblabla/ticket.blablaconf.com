const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || ""
)}`;

const GithubButton = () => {
  return (
    <a href={githubUrl}>
      <h2>Login with github </h2>
    </a>
  );
};

export default GithubButton;
