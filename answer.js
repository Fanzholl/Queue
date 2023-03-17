module.exports = {
    queue: [],

    push(x) {
        if (x < 1 || !Number.isInteger(x)) return;
        this.queue.push(x);
    },
    shift() {
        if (this.queue.length == 0) return 0;
        return this.queue.shift();
    },
    min() {
        if (this.queue.length == 0) return 0;
        return Math.min(...this.queue);
    },
    max() {
        if (this.queue.length == 0) return 0;
        return Math.max(...this.queue);
    },
}
