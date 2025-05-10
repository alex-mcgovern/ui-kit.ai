## Fibonacci Sequence Implementations

Here are implementations of the Fibonacci sequence in TypeScript, Python, and Rust:

### TypeScript Implementation

```typescript
function fibonacci(n: number): number {
    if (n <= 1) return n

    let a = 0,
        b = 1
    for (let i = 2; i <= n; i++) {
        ;[a, b] = [b, a + b]
    }
    return b
}

// Generate sequence
function fibonacciSequence(n: number): number[] {
    return Array(n)
        .fill(0)
        .map((_, i) => fibonacci(i))
}
```

### Python Implementation

```python
def fibonacci(n: int) -> int:
    if n <= 1:
        return n

    a, b = 0, 1
    for _ in range(2, n+1):
        a, b = b, a + b
    return b

# Generate sequence
def fibonacci_sequence(n: int) -> list:
    return [fibonacci(i) for i in range(n)]
```

### Rust Implementation

```rust
// Recursive approach
fn fibonacci(n: u32) -> u64 {
    if n <= 1 {
        return n as u64;
    }

    let mut a = 0;
    let mut b = 1;

    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}

// Generate sequence
fn fibonacci_sequence(n: u32) -> Vec<u64> {
    (0..n).map(|i| fibonacci(i)).collect()
}
```
