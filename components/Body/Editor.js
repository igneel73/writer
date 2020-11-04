import styles from "./Editor.module.css";

import ProseMirror from "./Prosemirror";

export default function Editor({ children }) {
  return (
    <div className={styles.editor}>
      <ProseMirror />
    </div>
  );
}
