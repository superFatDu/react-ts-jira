import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => { setDebounceValue(value) }, delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}

export const useMount = (cb) => {
    useEffect(() => {
        cb()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

const isFalsy = (value) => value === 0 ? false : !value
export const cleanObj = (obj) => {
    const res = { ...obj }
    Object.keys(res).forEach(key => {
        const val = res[key]
        if (isFalsy(val)) delete res[key]
    })
    return res
}