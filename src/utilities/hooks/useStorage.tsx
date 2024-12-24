import { useState } from 'react';

/**
 * Hook for managing state in local storage.
 *
 * @param key The key under which to store the value in local storage.
 * @param initialValue The initial value to set in local storage if no value exists.
 * @returns An array containing the stored value and a function to update it.
 *
 * @example
 * ```typescript
 * const [value, setValue] = useStorage('token', null)
 * ```
 */
const useStorage = (key: string, initialValue: any) => {
    const [state, setState] = useState(() => {
        // Initialize the state
        try {
            const value = window.localStorage.getItem(key);
            // Check if the local storage already has any values,
            // otherwise initialize it with the passed initialValue
            return value ? JSON.parse(value) : initialValue;
        } catch (error) {
            console.log(error);
        }
    });

    const setValue = (value: any) => {
        try {
            // If the passed value is a callback function,
            // then call it with the existing state.
            const valueToStore =
                value instanceof Function ? value(state) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setState(value);
        } catch (error) {
            console.log(error);
        }
    };

    return [state, setValue];
};

export default useStorage;
