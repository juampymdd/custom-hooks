import { useState } from "react"

// {
//     username: '',
//     email: '',
//     password: ''
// }

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState)

    const handleReset = () => {
        setFormState(initialState)
    }

    const handleInputChange = ({ target }) => {
        const { name, value } = target
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
