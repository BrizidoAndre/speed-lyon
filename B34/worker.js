// worker.js
self.onmessage = function (e) {
    const n = e.data;
    let result = 0;
    let lastProgress = -1;

    for (let i = 1; i <= n; i++) {
        result += i;

        // Envia o progresso apenas quando o número inteiro muda para otimizar performance
        let progress = Math.floor((i / n) * 100);
        if (progress > lastProgress) {
            self.postMessage({type: 'progress', value: progress});
            lastProgress = progress;
        }
    }

    self.postMessage({type: 'result', value: result});
};