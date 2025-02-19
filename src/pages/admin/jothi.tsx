import React, { useRef, useState, useEffect } from "react";

const TamilVoiceTypingEditor: React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [content, setContent] = useState("");

  // Load Google Input Tools for Tanglish to Tamil Transliteration
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/jsapi";
    script.onload = () => {
      (window as any).google.load("elements", "1", {
        packages: "transliteration",
        callback: initializeTransliteration,
      });
    };
    document.body.appendChild(script);
  }, []);

  const initializeTransliteration = () => {
    const options = {
      sourceLanguage: "en",
      destinationLanguage: ["ta"],
      shortcutKey: "ctrl+b",
      transliterationEnabled: true,
    };

    const control = new (
      window as any
    ).google.elements.transliteration.TransliterationControl(options);

    if (textAreaRef.current) {
      control.makeTransliteratable([textAreaRef.current]);
    }
  };

  // Voice Typing Functionality
  const startVoiceTyping = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ta-IN"; // Tamil language
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setContent(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopVoiceTyping = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Tamil Voice Typing and Tanglish to Tamil</h2>
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={isListening ? stopVoiceTyping : startVoiceTyping}
          style={{
            padding: "10px 20px",
            backgroundColor: isListening ? "#FF6B6B" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isListening ? "Stop Voice Typing" : "Start Voice Typing 🎤"}
        </button>
      </div>
      <textarea
        ref={textAreaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        placeholder="Start typing in Tanglish or use voice typing..."
      />
      <p style={{ marginTop: "10px" }}>
        Press <strong>Ctrl + B</strong> to toggle transliteration.
      </p>
    </div>
  );
};

export default TamilVoiceTypingEditor;
