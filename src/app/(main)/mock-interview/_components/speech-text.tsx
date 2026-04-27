import { Volume2 } from "lucide-react";

export default function SpeakButton({ text }: { text: string }) {
  
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <button onClick={handleSpeak}>
      <Volume2 className="w-5 h-5" />
    </button>
  );
}