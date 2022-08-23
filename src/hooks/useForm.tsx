import { useState } from "react"

interface Target{
  name: string,
  value: any
}

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState)
  const [initialValues, setInitialValues] = useState(initialState)

  const handleInputChage = (target: Target) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    })
  }

  const toInitialState = () => {
    setValues(initialValues)
  }

  const setState = (target: any) => {
    setValues(target)
  }

  return[values, handleInputChage, toInitialState, setState]
}