import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import path from "path";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("react-simple-code-editor"), {
  ssr: false,
});

import css from "./style.css";

function CodeEditor({ file, write }) {
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
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={(code) => Prism.highlight(code, Prism.languages.js)}
        />
      </div>
    </div>
  );
}

CodeEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
};

export default CodeEditor;
