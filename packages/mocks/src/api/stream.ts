import { http, HttpResponse } from 'msw'

const CHUNK_SIZE = 1
const TEXT = 'Hi, how can I help?'

export const llmStreamHandler = http.get('/api/stream', () => {
    const e = new TextEncoder()

    const stream = new ReadableStream({
        async start(c) {
            for (let i = 0; i < TEXT.length; i += CHUNK_SIZE) {
                const chunk = TEXT.substring(i, i + CHUNK_SIZE)
                await new Promise((resolve) => setTimeout(resolve, 100))
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
