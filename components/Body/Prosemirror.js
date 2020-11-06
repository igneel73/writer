import { EditorState, Plugin, PluginKey } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
//import { exampleSetup } from "./ProseMirror/index.js";
import { exampleSetup } from "prosemirror-example-setup";

import React, { useEffect, useRef } from "react";

const reactPropsKey = new PluginKey("reactProps");

function reactProps(initialProps) {
  return new Plugin({
    key: reactPropsKey,
    state: {
      init: () => initialProps,
      apply: (tr, prev) => tr.getMeta(reactPropsKey) || prev,
    },
  });
}

export default function ProseMirror(props) {
  const viewHost = useRef();
  const view = useRef(null);

  function handleInput() {
    props.setView(view.current);
  }

  useEffect(() => {
    // initial render
    const state = EditorState.create({
      schema,
      plugins: [reactProps(props), ...exampleSetup({ schema })],
    });
    view.current = new EditorView(viewHost.current, { state });
    return () => view.current.destroy();
  }, []); //J: this empty array is why this useEffect never runs again

  useEffect(() => {
    // every render
    const tr = view.current.state.tr.setMeta(reactPropsKey, props);
    view.current.dispatch(tr);
  });

  return <div ref={viewHost} onKeyUp={handleInput} />;
}
