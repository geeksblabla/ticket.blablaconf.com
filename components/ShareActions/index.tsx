import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styles from "./index.module.css";

import { Facebook, Twitter, Linkedin, Link } from "./icons";
import { useState, useEffect } from "react";

const copyToClipboard = (str: string) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export const ShareActions = ({ shareUrl }: { shareUrl: string }) => {
  console.log(shareUrl);

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);
  const title =
    "Hey, I am attending #BlaBlaConf Grab your ticket too  #GeeksBlaBla #DevC_Morocco";

  return (
    <div className={styles.share}>
      <a
        className={styles.copy}
        onClick={() => {
          setCopied(true);
          copyToClipboard(shareUrl);
        }}
      >
        {copied ? "Link Copied" : "Copy Ticket URL"}
      </a>
      <div className={styles.icons}>
        <p className={styles.description}>Or share on </p>
        <div>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className={styles.icon}
          >
            <Facebook />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className={styles.icon}
          >
            <Twitter />
          </TwitterShareButton>
          <LinkedinShareButton
            className={styles.icon}
            url={shareUrl}
            windowWidth={750}
            windowHeight={600}
          >
            <Linkedin />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};
