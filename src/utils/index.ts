import { useEffect, useState } from "react";

export const useDebounce = <V>(value: V, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => { setDebounceValue(value) }, delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}

export const useMount = (cb: () => void) => {
    useEffect(() => {
        cb()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

const isFalsy = (value: unknown) => value === 0 ? false : !value
export const cleanObj = (obj: object) => {
    const res = { ...obj }
    Object.keys(res).forEach(key => {
        // @ts-ignore
        const val = res[key]
        // @ts-ignore
        if (isFalsy(val)) delete res[key]
    })
    return res
}

export const useArray = <T>(initArray: T[]) => {
    const [value, setValue] = useState(initArray)
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        remove: (idx: number) => {
            let copy = [...value]
            copy.splice(idx, 1)
            setValue(copy)
        },
        clear: () => setValue([])
    }
}