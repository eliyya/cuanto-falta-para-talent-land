import { ImageResponse } from 'next/og'
import { getTimeLeft } from './utils'
import './globals.css'

// Image metadata
export const alt = getTimeLeft().days + ' dias para talent land'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    const tl = getTimeLeft()
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage:
                        'linear-gradient(to bottom, var(--background), var(--muted))',
                    height: '100%',
                    width: '100%',
                    padding: '1rem',
                    fontFamily: 'var(--font-geist-sans)', // Aquí aplicas la fuente importada
                }}
            >
                <main
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem' /* gap-8 en Tailwind es 8 * 0.5rem = 2rem */,
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    <h1
                        style={{
                            fontSize:
                                '4.5rem' /* text-4xl en Tailwind es 4 * 0.75rem = 2.25rem */,
                            fontWeight:
                                '800' /* font-extrabold en Tailwind es 800 */,
                            letterSpacing:
                                '-0.01562em' /* tracking-tight en Tailwind es -0.01562em */,
                        }}
                    >
                        QUEDAN
                    </h1>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <TimeCard value={tl.days} label='DÍAS' />
                        <TimeCard value={tl.hours} label='HORAS' />
                        <TimeCard value={tl.minutes} label='MINUTOS' />
                        <TimeCard value={tl.seconds} label='SEGUNDOS' />
                    </div>

                    <h2
                        style={{
                            fontSize:
                                '3rem' /* text-2xl en Tailwind es 2 * 0.75rem = 1.5rem */,
                            fontWeight:
                                '700' /* font-bold en Tailwind es 700 */,
                            letterSpacing:
                                '-0.01562em' /* tracking-tight en Tailwind es -0.01562em */,
                        }}
                    >
                        PARA TALENT LAND
                    </h2>
                </main>
            </div>
        ),
        {
            ...size,
        },
    )
}

function TimeCard({ value, label }: { value: number; label: string }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.5rem' /* rounded-lg en Tailwind es 0.5rem */,
                border: '1px solid' /* border en Tailwind tiene un borde de 1px */,
                padding: '1rem' /* p-4 en Tailwind es 4 * 0.25rem = 1rem */,
                boxShadow:
                    '0 1px 2px rgba(0, 0, 0, 0.05)' /* shadow-sm en Tailwind es un pequeño sombra */,
            }}
        >
            <span
                style={{
                    fontSize:
                        '3.75rem' /* text-6xl en Tailwind es 6 * 0.75rem = 3.75rem */,
                    fontWeight: '700' /* font-bold en Tailwind es 700 */,
                }}
            >
                {value.toString().padStart(2, '0')}
            </span>
            <span
                style={{
                    color: 'white' /* text-muted-foreground: Utiliza una variable CSS o un color específico */,
                    fontSize: '0.875rem' /* text-sm en Tailwind es 0.875rem */,
                    fontWeight: '500' /* font-medium en Tailwind es 500 */,
                }}
            >
                {label}
            </span>
        </div>
    )
}
