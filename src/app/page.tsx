import { TimeLeft } from './globals'
import { TimeFrom } from './TimeFrom'
import { HandlerTime } from './HandlerTime'
import { HTMLAttributes } from 'react'
import { cn } from './utils'

export const dynamic = 'force-dynamic'
export default function CountdownLanding() {
    return (
        <div className='from-background to-muted flex min-h-screen flex-col items-center justify-center bg-gradient-to-b p-4'>
            <main className='container flex flex-col items-center justify-center gap-8 text-center'>
                <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
                    QUEDAN
                </h1>

                <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
                    <TimeCard value='days' label='DÍAS' />
                    <TimeCard value='hours' label='HORAS' />
                    <TimeCard value='minutes' label='MINUTOS' />
                    <TimeCard value='seconds' label='SEGUNDOS' />
                    <HandlerTime />
                </div>

                <h2 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl'>
                    PARA TALENT LAND
                </h2>
            </main>
        </div>
    )
}

function TimeCard({ value, label }: { value: keyof TimeLeft; label: string }) {
    return (
        <Card className='flex flex-col items-center justify-center p-4'>
            <span className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
                <TimeFrom from={value} />
            </span>
            <span className='text-muted-foreground text-xs font-medium sm:text-sm'>
                {label}
            </span>
        </Card>
    )
}

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'bg-card text-card-foreground rounded-lg border shadow-sm',
                className,
            )}
            {...props}
        />
    )
}
