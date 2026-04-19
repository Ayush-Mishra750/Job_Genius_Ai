import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';
import React, { useEffect } from 'react'
import useSpeechToText from "react-hook-speech-to-text";

const SpeechRecorder = ({onAnswer}: { onAnswer: (answer: string) => void }) => {
      const { error, isRecording, results, startSpeechToText, stopSpeechToText } =
    useSpeechToText({ continuous: false });

    useEffect(()=>{
      if(!isRecording && results.length > 0){
        onAnswer(results.join(" "))
      }
    }, [isRecording, results,onAnswer])

  return (
    <div className="space-y-2">
        <Button
            variant={isRecording ? "destructive" : "outline"}
            onClick={isRecording ? stopSpeechToText : startSpeechToText}
            className="w-full"
          >
            <Mic className="mr-2 h-4 w-4" />
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Button>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <p className="text-sm text-muted-foreground">Your Answer:</p>
          {results.length > 0
          ? results.join(" ")
          : "Your answer will appear here..."}
        </div>
      
    </div>
  )
}

export default SpeechRecorder
