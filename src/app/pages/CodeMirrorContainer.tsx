"use client";

import { useEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // Replace with your preferred theme
import CodeMirror from 'codemirror';

const CodeMirrorComponent = ({ value, onChange }) => {
  const textareaRef = useRef(null);
  const codeMirrorRef = useRef(null);

  useEffect(() => {
    if (!codeMirrorRef.current) {
      codeMirrorRef.current = CodeMirror.fromTextArea(textareaRef.current, {
        lineNumbers: true,
        mode: 'javascript', // Replace with your preferred language mode
        theme: 'material', // Replace with your preferred theme
      });

      codeMirrorRef.current.on('change', (cm) => {
        onChange(cm.getValue());
      });
    }

    codeMirrorRef.current.setValue(value);
  }, [value, onChange]);

  return <textarea ref={textareaRef} />;
};

export { CodeMirrorComponent } ;