const jobs = Array.from({length: 100}, () => 1e9);


for (const job of jobs) {
    let count = 0;
    for (let i = 0; i < job; i++) {
        count++;
    }
}

const tick = performance.now();
for (const jobElement of jobs) {
    let count = 0;
    for (let i = 0; i < jobs; i++) {
        count++;
    }
}

const tock = performance.now();

console.log(`Main thread took ${tock - tick} ms`)