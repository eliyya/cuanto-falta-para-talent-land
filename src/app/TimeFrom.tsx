'use client'

import { TimeLeft, timeLeftAtom } from '@/app/globals'
import { useAtomValue } from 'jotai'

export function TimeFrom({ from }: { from: keyof TimeLeft }) {
    const timeLeft = useAtomValue(timeLeftAtom)

    return <>{timeLeft[from].toString().padStart(2, '0')}</>
}
