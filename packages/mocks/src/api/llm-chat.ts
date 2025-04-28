import { http, HttpResponse } from 'msw'

import fibonacciContent from '../markdown/chats/fibonacci.md?raw'

const CHUNK = 10

export const fibonacciStreamHandler = http.get('/api/stream/fibonacci', () => {
    const e = new TextEncoder()

    const stream = new ReadableStream({
        async start(c) {
            for (let i = 0; i < fibonacciContent.length; i += CHUNK) {
                const chunk = fibonacciContent.substring(i, i + CHUNK)
                await new Promise((resolve) => setTimeout(resolve, 50))
                if (i === 0) {
                    c.enqueue(
                        e.encode(
                            `event: text_part_start\ndata: {"text": ${JSON.stringify(chunk)}}\n\n`
                        )
                    )
                } else {
                    c.enqueue(
                        e.encode(
                            `event: text_part_delta\ndata: {"text": ${JSON.stringify(chunk)}}\n\n`
                        )
                    )
                }
            }

            c.close()
        },
    })

    return new HttpResponse(stream, {
        headers: {
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Type': 'text/event-stream',
        },
    })
})
