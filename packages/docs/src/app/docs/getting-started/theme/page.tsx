import { Heading } from '@ui-kit.ai/components'

export default function Page() {
    return (
        <>
            <Heading level={1}>Theme</Heading>
            <Heading level={2}>Opacity</Heading>
            <div className='flex gap-2'>
                <div className='bg-accent size-12' />
                <div className='bg-accent/90 size-12' />
                <div className='bg-accent/80 size-12' />
                <div className='bg-accent/70 size-12' />
                <div className='bg-accent/60 size-12' />
                <div className='bg-accent/50 size-12' />
                <div className='bg-accent/40 size-12' />
                <div className='bg-accent/30 size-12' />
                <div className='bg-accent/20 size-12' />
                <div className='bg-accent/10 size-12' />
            </div>
        </>
    )
}
