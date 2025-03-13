import { ImageResponse } from 'next/og'
import { getTimeLeft } from './utils'

// Image metadata
export const size = {
    width: 64,
    height: 64,
}
export const contentType = 'image/png'
export const dynamic = 'force-dynamic'
// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '-8px', // Ajusta el espacio entre los elementos
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
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        },
    )
}
