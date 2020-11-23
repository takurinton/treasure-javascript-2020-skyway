// ほぼコピペ
// 修正するところはしましょう
export class RecognitionEffect {
    r: SpeechRecognition = new (window as any).webkitSpeechRecognition();
    running = false;
  
    onFinal?: (c: string) => void;
    onProgress?: (c: string) => void;
    onError?: () => void;
  
    constructor() {
      this.r.continuous = true;
      this.r.interimResults = true;
  
      this.r.onresult = (e) => {
        for (let i = e.resultIndex; i < e.results.length; ++i) {
          if (e.results[i].isFinal) {
            if (this.onFinal) this.onFinal(e.results[i][0].transcript);
          } else {
            // eslint-disable-next-line no-lonely-if
            if (this.onProgress) this.onProgress(e.results[i][0].transcript);
          }
        }
      };
  
      this.r.onerror = (err) => {
        console.warn(err);
        if (this.onError) this.onError();
      };
      this.start();
    }
  
    start() {
      this.running = true;
      this.r.start();
    }
  
    stop() {
      this.running = false;
      this.r.stop();
    }
  
    // start stop 切り替え　
    toggle() {
      if (this.running) {
        this.stop();
      } else {
        this.start();
      }
  }
}