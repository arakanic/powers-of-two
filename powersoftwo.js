function powersOfTwo(n) {
    return Array.from({length: n + 1}, (base, exp) => Math.pow(2, exp))
}