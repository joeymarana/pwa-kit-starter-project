import {useEffect} from  'react'

export const useUpdateLogger = (value, label='noname') => {
    useEffect(() => {
        console.log(label + ' update to')
        console.log(value)
    })
}