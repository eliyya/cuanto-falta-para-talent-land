import { atom } from 'jotai'
import { getTimeLeft } from './utils'

export type TimeLeft = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const timeLeftAtom = atom<TimeLeft>(getTimeLeft())
