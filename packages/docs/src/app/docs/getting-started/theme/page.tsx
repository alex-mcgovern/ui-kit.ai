import { Heading } from '@ui-kit.ai/components'

export default function Page() {
    return (
        <>
            <Heading level={1}>Theme</Heading>
            <Heading
                className='my-6'
                level={2}
            >
                Background
            </Heading>
            <Heading
                className='my-6'
                level={3}
            >
                Default
            </Heading>
            <AllBAckgroundColors />
            <Heading
                className='my-6'
                level={3}
            >
                Info
            </Heading>
            <AllBAckgroundColors className='info' />
            <Heading
                className='my-6'
                level={3}
            >
                Error
            </Heading>
            <AllBAckgroundColors className='error' />
            <Heading
                className='my-6'
                level={3}
            >
                Warning
            </Heading>
            <AllBAckgroundColors className='warning' />
            <Heading
                className='my-6'
                level={3}
            >
                Success
            </Heading>
            <AllBAckgroundColors className='success' />
        </>
    )
}

function AllBAckgroundColors({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className='flex gap-2 mb-4'>
                <div className='bg-base size-12' />
                <div className='bg-base/90 size-12' />
                <div className='bg-base/80 size-12' />
                <div className='bg-base/70 size-12' />
                <div className='bg-base/60 size-12' />
                <div className='bg-base/50 size-12' />
                <div className='bg-base/40 size-12' />
                <div className='bg-base/30 size-12' />
                <div className='bg-base/20 size-12' />
                <div className='bg-base/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-raised size-12' />
                <div className='bg-raised/90 size-12' />
                <div className='bg-raised/80 size-12' />
                <div className='bg-raised/70 size-12' />
                <div className='bg-raised/60 size-12' />
                <div className='bg-raised/50 size-12' />
                <div className='bg-raised/40 size-12' />
                <div className='bg-raised/30 size-12' />
                <div className='bg-raised/20 size-12' />
                <div className='bg-raised/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-tint-light size-12' />
                <div className='bg-tint-light/90 size-12' />
                <div className='bg-tint-light/80 size-12' />
                <div className='bg-tint-light/70 size-12' />
                <div className='bg-tint-light/60 size-12' />
                <div className='bg-tint-light/50 size-12' />
                <div className='bg-tint-light/40 size-12' />
                <div className='bg-tint-light/30 size-12' />
                <div className='bg-tint-light/20 size-12' />
                <div className='bg-tint-light/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-tint size-12' />
                <div className='bg-tint/90 size-12' />
                <div className='bg-tint/80 size-12' />
                <div className='bg-tint/70 size-12' />
                <div className='bg-tint/60 size-12' />
                <div className='bg-tint/50 size-12' />
                <div className='bg-tint/40 size-12' />
                <div className='bg-tint/30 size-12' />
                <div className='bg-tint/20 size-12' />
                <div className='bg-tint/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-tint-dark size-12' />
                <div className='bg-tint-dark/90 size-12' />
                <div className='bg-tint-dark/80 size-12' />
                <div className='bg-tint-dark/70 size-12' />
                <div className='bg-tint-dark/60 size-12' />
                <div className='bg-tint-dark/50 size-12' />
                <div className='bg-tint-dark/40 size-12' />
                <div className='bg-tint-dark/30 size-12' />
                <div className='bg-tint-dark/20 size-12' />
                <div className='bg-tint-dark/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-accent-dark size-12' />
                <div className='bg-accent-dark/90 size-12' />
                <div className='bg-accent-dark/80 size-12' />
                <div className='bg-accent-dark/70 size-12' />
                <div className='bg-accent-dark/60 size-12' />
                <div className='bg-accent-dark/50 size-12' />
                <div className='bg-accent-dark/40 size-12' />
                <div className='bg-accent-dark/30 size-12' />
                <div className='bg-accent-dark/20 size-12' />
                <div className='bg-accent-dark/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-accent-mid size-12' />
                <div className='bg-accent-mid/90 size-12' />
                <div className='bg-accent-mid/80 size-12' />
                <div className='bg-accent-mid/70 size-12' />
                <div className='bg-accent-mid/60 size-12' />
                <div className='bg-accent-mid/50 size-12' />
                <div className='bg-accent-mid/40 size-12' />
                <div className='bg-accent-mid/30 size-12' />
                <div className='bg-accent-mid/20 size-12' />
                <div className='bg-accent-mid/10 size-12' />
            </div>
            <div className='flex gap-2 mb-4'>
                <div className='bg-accent-light size-12' />
                <div className='bg-accent-light/90 size-12' />
                <div className='bg-accent-light/80 size-12' />
                <div className='bg-accent-light/70 size-12' />
                <div className='bg-accent-light/60 size-12' />
                <div className='bg-accent-light/50 size-12' />
                <div className='bg-accent-light/40 size-12' />
                <div className='bg-accent-light/30 size-12' />
                <div className='bg-accent-light/20 size-12' />
                <div className='bg-accent-light/10 size-12' />
            </div>
        </div>
    )
}
