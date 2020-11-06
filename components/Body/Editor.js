import styles from "./Editor.module.css";

import ProseMirror from "./Prosemirror";

export default function Editor(props, { children }) {
  return (
    <div className={styles.editor}>
      <ProseMirror view={props.view} setView={props.setView} />
    </div>
  );
}
