import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import path from "path";
import dynamic from "next/dynamic";
const CKEditor = dynamic(() => import("ckeditor4-react"), {
  ssr: false,
});

import css from "./style.css";

function PlaintextEditor({ file, write }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  return (
    <div className={css.editor}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <div className={css.content}>
        <CKEditor data={value} onChange={write} />
      </div>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
};

export default PlaintextEditor;
