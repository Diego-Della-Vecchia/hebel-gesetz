import {writable} from "svelte/store"

export const left = writable<[number, number, number]>([0,0,0])

export const right = writable<[number, number, number]>([0,0,0])