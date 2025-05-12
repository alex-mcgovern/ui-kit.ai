# Fibonacci Sequence

**Iterative** approach:

```typescript
// Iterative approach
function fibonacci(n: number): number[] {
    const sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence
}
```

Calculate the **first 10** Fibonacci numbers with `fibonacci(9)`.
