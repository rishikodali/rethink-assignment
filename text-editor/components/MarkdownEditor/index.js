import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import path from "path";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("for-editor"), {
  ssr: false,
});

import css from "./style.css";

function MarkdownEditor({ file, write }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  const onChange = (value) => {
    setValue(value);
    write();
  };

  return (
    <div className={css.editor}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <div className={css.content}>
        <Editor value={value} onChange={onChange} />
      </div>
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
};

export default MarkdownEditor;
