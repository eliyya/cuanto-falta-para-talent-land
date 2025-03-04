import { getTimeLeft } from '../utils'
import { ImageResponse } from 'next/og'

const size = {
    width: 64,
    height: 64,
}
export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '-8px',
                }}
            >
                <span
                    style={{
                        fontSize: '28px',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    {getTimeLeft().days}
                </span>
                <span
                    style={{
                        fontSize: '16px',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    {getTimeLeft().days > 0 ? 'DIAS' : 'DIA'}
                </span>
            </div>
        ),
        {
            ...size,
        },
    )
}
