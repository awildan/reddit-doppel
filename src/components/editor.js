import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const Editor = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      //   config={}
      data="What are you thoughts ?"
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle('height', '150px', editor.editing.view.document.getRoot());
        });
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  );
};

export default Editor;
