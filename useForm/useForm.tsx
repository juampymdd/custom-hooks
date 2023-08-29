import { ChangeEvent, useState } from "react"

interface FormState {
  [key: string]: string;
}

// {
//     username: '',
//     email: '',
//     password: ''
// }

export const useForm = (initialState : FormState  = {}) => {
    const [formState, setFormState] = useState(initialState)

    const handleReset = () => {
        setFormState(initialState)
    }

    const handleInputChange  = ( event :ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        handleReset,
        handleInputChange,
    }
}
