interface FieldGeneralProps {
    label?: string;
    name?: string;
    required?: boolean;
    clue?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    number?: boolean;
    capitalize?: boolean;
    uppercase?: boolean;
    min?: number;
    max?: number;
    hideErrorMessage?: boolean;
    length?: number;
    type?:
        | "email"
        | "password"
        | "text"
        | "date"
        | "file"
        | "url"
        | "checkbox"
        | "radio"
        | "range"
        | "textarea"
        | "amount"
        | "qty";
}
