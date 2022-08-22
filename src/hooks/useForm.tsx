import { useState } from "react"

interface Target{
  name: string,
  value: any
}

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState)

  const handleInputChage = (target: Target) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    })
  }

  return[values, handleInputChage]
}