'use client'
import { TARGET } from './constants'
import { timeLeftAtom } from './globals'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { getTimeLeft } from './utils'

export function HandlerTime() {
    const setTimeLeft = useSetAtom(timeLeftAtom)

    useEffect(() => {
        const updateTime = () => {
            const difference = TARGET - Date.now()

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return false
            }

            setTimeLeft(getTimeLeft())
            return true
        }

        if (!updateTime()) return

        const interval = setInterval(() => {
            if (!updateTime()) clearInterval(interval)
        }, 1000)

        return () => clearInterval(interval)
    }, [setTimeLeft])

    return null
}
