import styles from "./TableOfContents.module.css";

export default function TableOfContents(props, { children }) {
  //props.view.state.doc.content.content
  // .textContent
  // .type.name ("heading", "paragraph")
  // .attrs {level} ("1", "2", ... , "6")
  if (!props.view) return null; //lol
  const pmContent = props.view.state.doc.content.content;
  const nodeItems = pmContent.map((node, index) => {
    const pmType = node.type.name;
    return <li key={index}>{pmType}</li>;
  });
  return (
    <div className={styles.tableofcontents}>
      <h2>Table of Contents</h2>
      <ul>{nodeItems}</ul>
    </div>
  );
}
