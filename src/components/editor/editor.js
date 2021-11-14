import React, { useState } from 'react';

// Components
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';

const WYSIWYGEditor = (props) => {
  //   console.log(props);
  const contentDataState = ContentState.createFromBlockArray(
    convertFromHTML(props.value),
  );
  const editorDataState = EditorState.createWithContent(contentDataState);

  const [editorState, setEditorState] = useState(editorDataState);
  //   const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    props.onChange(editorState);
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent())),
    );
  };

  //   React.useEffect(() => {
  //     if (props.value) {
  //       setEditorState(
  //         EditorState.createWithContent(
  //           ContentState.createFromBlockArray(convertFromHTML(props.value)),
  //         ),
  //       );
  //     }
  //   }, [props.value]);

  return (
    <React.Fragment>
      <div className="editor">
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </React.Fragment>
  );
};

export default WYSIWYGEditor;
