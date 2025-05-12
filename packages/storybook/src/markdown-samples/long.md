# The Fascinating Fibonacci Sequence

## Introduction 🧮

The **Fibonacci sequence** is a series of numbers where each number is the _sum of the two preceding ones_, usually starting with 0 and 1. Named after Italian mathematician **Leonardo Fibonacci**, this sequence appears throughout nature and has numerous applications in mathematics and computer science.

> "Mathematics is the language in which God has written the universe." — Galileo Galilei

### Mathematical Definition

The Fibonacci sequence can be defined as:

$$F_n = F_{n-1} + F_{n-2}$$

With seed values:

- $F_0 = 0$
- $F_1 = 1$

## The First 10 Fibonacci Numbers

| Index (n) | Value $(F_n)$ |
| :-------: | :-----------: |
|     0     |       0       |
|     1     |       1       |
|     2     |       1       |
|     3     |       2       |
|     4     |       3       |
|     5     |       5       |
|     6     |       8       |
|     7     |      13       |
|     8     |      21       |
|     9     |      34       |

## Implementations in TypeScript

### 1. Recursive Approach

This is the most intuitive implementation, directly following the mathematical definition:

```typescript
function fibonacciRecursive(n: number): number {
    if (n <= 1) return n
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
```

⚠️ **Warning**: This implementation suffers from exponential time complexity $(O(2^n))$!

### 2. Memoization Approach

We can dramatically improve the recursive solution with memoization:

```typescript
function fibonacciMemoized(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) return memo[n]
    if (n <= 1) return n

    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo)
    return memo[n]
}
```

### 3. Iterative Approach

The most efficient implementation uses an iterative approach:

```typescript
function fibonacciIterative(n: number): number {
    if (n <= 1) return n

    let a = 0
    let b = 1
    let result = 0

    for (let i = 2; i <= n; i++) {
        result = a + b
        a = b
        b = result
    }

    return result
}
```

### 4. One-liner with Memoization

For fans of concise code:

```typescript
const fib = (n: number, memo: Record<number, number> = {}): number =>
    memo[n] || (memo[n] = n <= 1 ? n : fib(n - 1, memo) + fib(n - 2, memo))
```

### 5. Generate Fibonacci Sequence

To generate the entire sequence up to index `n`:

```typescript
function generateFibonacciSequence(n: number): number[] {
    const sequence = [0, 1]

    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }

    return sequence
}
```

## Performance Comparison

- [x] Recursive (without memoization): O(2^n) - Exponential time complexity 😱
- [x] Memoized Recursive: O(n) - Linear time complexity 👍
- [x] Iterative: O(n) - Linear time complexity and O(1) space complexity 👍👍

## Interesting Properties

1. **Golden Ratio**: The ratio of consecutive Fibonacci numbers approaches the golden ratio (approximately 1.618033988749895)

    ```typescript
    // Calculate golden ratio approximation
    function goldenRatioApproximation(n: number): number {
        const sequence = generateFibonacciSequence(n)
        return sequence[n] / sequence[n - 1]
    }
    ```

2. **Sum of Fibonacci Numbers**:
   $\sum_{i=0}^{n} F_i = F_{n+2} - 1$

3. **Sum of Squares**:
   $\sum_{i=0}^{n} F_i^2 = F_n \cdot F_{n+1}$

## The Fibonacci Spiral

The Fibonacci sequence can be visualized as a spiral:

```
    ┌───┐
    │   │
┌───┘   │
│       │
│   ┌───┘
│   │
└───┘
```

## Applications

- Computer algorithms
- Financial market analysis
- Natural patterns (like the arrangement of leaves on stems)
- Art and architecture

## Interactive Example

Try it yourself! Here's a simple app structure:

```typescript
interface FibonacciCalculator {
    calculate(n: number): number
}

class RecursiveFibonacci implements FibonacciCalculator {
    calculate(n: number): number {
        if (n <= 1) return n
        return this.calculate(n - 1) + this.calculate(n - 2)
    }
}

class MemoizedFibonacci implements FibonacciCalculator {
    private memo: Record<number, number> = {}

    calculate(n: number): number {
        if (n in this.memo) return this.memo[n]
        if (n <= 1) return n

        this.memo[n] = this.calculate(n - 1) + this.calculate(n - 2)
        return this.memo[n]
    }
}

class IterativeFibonacci implements FibonacciCalculator {
    calculate(n: number): number {
        if (n <= 1) return n

        let a = 0,
            b = 1
        for (let i = 2; i <= n; i++) {
            const temp = a + b
            a = b
            b = temp
        }

        return b
    }
}
```

## Testing Performance

To compare performance between implementations:

```typescript
function timeExecution(fn: () => void): number {
    const start = performance.now()
    fn()
    return performance.now() - start
}

console.log(`Recursive: ${timeExecution(() => new RecursiveFibonacci().calculate(30))}ms`)
console.log(`Memoized: ${timeExecution(() => new MemoizedFibonacci().calculate(30))}ms`)
console.log(`Iterative: ${timeExecution(() => new IterativeFibonacci().calculate(30))}ms`)
```

## Conclusion

The Fibonacci sequence demonstrates how simple rules can create complex and beautiful patterns. Its presence in nature and usefulness in computing makes it one of mathematics' most fascinating sequences.

---

_"In my opinion, everything happens naturally, not because the galaxies would have a plan or intention, but because all these are the inevitable consequences of certain natural principles."_ — **_Leonardo Fibonacci_**
