import styles from "./Body.module.css";

import TableOfContents from "./TableOfContents";
import Editor from "./Editor";
import Comments from "./Comments";

import React, { useState } from "react";

export default function Body() {
  const [view, setView] = useState(null);

  return (
    <div className={styles.body}>
      <TableOfContents view={view} />
      <Editor view={view} setView={setView} />
      <Comments />
    </div>
  );
}
