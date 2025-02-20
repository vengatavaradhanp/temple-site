import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

const TamilVoiceEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState("ta-IN");

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Start Speech Recognition
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setContent((prev) => prev + " " + transcript);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  // Stop Speech Recognition
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  // Jodit Editor Configuration
  const editorConfig = {
    readonly: false,
    removeButtons: ["about"], // Removes "About Jodit" from the toolbar
    footer: true, // Enables the footer
    events: {
      afterInit: (editor) => {
        const footer = editor.container.querySelector(".jodit-status-bar");
        if (footer) {
          footer.innerHTML = `<span style="font-weight:bold;color:#2d89ef;"> <a href="https://datatechgenius.com/"> DataTech Genius</a> </span>`;
        }
      },
    },
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        DataTech Genius - Tamil Voice Editor 🎤
      </h2>
      <div className="flex justify-between items-center mb-2">
        <button
          className={`px-4 py-2 rounded ${
            listening ? "bg-red-500" : "bg-green-500"
          } text-white`}
          onClick={listening ? stopListening : startListening}
        >
          {listening ? "Stop Listening" : "🎤"}
        </button>
        <select
          className="border px-2 py-1 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en-US">English</option>
          <option value="ta-IN">Tamil</option>
        </select>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={setContent}
        config={editorConfig}
      />
    </div>
  );
};

export default TamilVoiceEditor;
