function fibonacci(n) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
    const sequence = fibonacci(n - 1);
    const nextValue = sequence[n - 1] + sequence[n - 2];
    sequence.push(nextValue);
    return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
