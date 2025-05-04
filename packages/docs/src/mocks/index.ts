async function initMocks() {
    if (typeof window === 'undefined') {
        const { server } = await import('./server')
        server.listen()
    } else {
        console.log('Starting browser mocks')
        const { worker } = await import('./browser')
        worker.start()
    }
}

initMocks()
