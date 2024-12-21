"use client";
import { TextFormat } from "@/utilities/functions/format/text";
import { getNestedPathFormik } from "@/utilities/functions/formik/getNestedFormik";
import "flatpickr/dist/flatpickr.css";
import { Field as FormikField, useFormikContext } from "formik";
import {
    ChangeEvent,
    FC,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from "react";
import Flatpickr from "react-flatpickr";
import { NumericFormat } from "react-number-format";
import { ShowError } from "./error";

interface FieldProps extends FieldGeneralProps {
    name: string;
    max?: number;
    min?: number;
    length?: number;
    icon?: ReactElement;
    textRight?: boolean;
    content?: string | number;
    row?: number;
    decimalScale?: number;
    onBlur?: (prop: any) => void;
    onChange?: (prop: any) => void;
}

export const Field: FC<FieldProps> = ({
    label,
    name,
    content,
    type = "text",
    required,
    clue,
    capitalize,
    placeholder,
    number,
    max,
    disabled,
    length,
    className = "form-input",
    icon,
    uppercase,
    textRight,
    row = 3,
    decimalScale = 2,
    hideErrorMessage,
    onChange,
}) => {
    const formik = useFormikContext();
    const [inputData, setInputData] = useState(
        getNestedPathFormik(formik.values, name),
    );

    const error = getNestedPathFormik(formik.errors, name);

    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const { value } = e.target;

            if (onChange) {
                onChange(value);
            }

            if (type === "amount" || type === "qty") {
                const validOutput = value.replace(/\./g, "").replace(/,/g, ".");
                formik.setFieldValue(
                    name,
                    Number(validOutput).toFixed(decimalScale),
                );
            } else {
                if (number) {
                    const numericValue = value.replace(/[^0-9]/g, "");
                    if (max && Number(value) > max) return;

                    if (length) {
                        formik.setFieldValue(
                            name,
                            numericValue.padStart(length, "0"),
                        );
                    } else {
                        formik.setFieldValue(name, numericValue);
                    }
                } else {
                    if (max && value.length > max) {
                        return;
                    }
                    setInputData(value);
                }
            }
        },
        [formik, number, max, length, name, onChange, type, decimalScale],
    );

    const handleOnBlur = useCallback(() => {
        if (capitalize) {
            formik.setFieldValue(name, TextFormat.capitalize(inputData));
        } else if (uppercase) {
            formik.setFieldValue(name, TextFormat.uppercase(inputData));
        } else {
            formik.setFieldValue(name, inputData);
        }
    }, [formik, capitalize, uppercase, inputData, name]);

    useEffect(() => {
        setInputData(getNestedPathFormik(formik.values, name));
    }, [formik.values, name]);

    let textClassName = className;

    if (icon) {
        textClassName += " ps-10 placeholder:text-white-dark";
    }

    if (capitalize) {
        textClassName += " capitalize";
    }

    if (uppercase) {
        textClassName += " uppercase";
    }

    if (textRight || type === "amount") {
        textClassName += " text-right";
    }

    if (disabled) {
        textClassName += " bg-gray-100";
    }

    return (
        <div
            className={
                formik.submitCount
                    ? `${error ? "has-error" : "has-success"}`
                    : ""
            }
        >
            {label && (
                <label className="font-bold text-sm">
                    {label}
                    {required && <span className="text-danger">*</span>}
                </label>
            )}

            <div className="relative text-white-dark">
                {disabled &&
                type !== "textarea" &&
                type !== "amount" &&
                type !== "qty" ? (
                    <div className={className + " bg-gray-100"}>
                        {getNestedPathFormik(formik.values, name) || "-"}
                    </div>
                ) : type === "textarea" ? (
                    /**
                    |--------------------------------------------------------------------------
                    | Textarea input
                    |--------------------------------------------------------------------------
                    |
                    | This section for input data with
                    | framework needs to place the application's name in a notification or
                    | other UI elements where an application name needs to be displayed.
                    |
                    */
                    <FormikField
                        rows={row}
                        name={name}
                        as="textarea"
                        id={name}
                        placeholder={
                            placeholder ? placeholder : `Input ${label || name}`
                        }
                        value={inputData}
                        className={textClassName}
                        onBlur={handleOnBlur}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(e)
                        }
                    />
                ) : type === "amount" ? (
                    /**
                     |--------------------------------------------------------------------------
                     | If input is amount
                     |--------------------------------------------------------------------------
                     |
                     | Disallow all input except number or comma / dot for decimal
                     | and because this is amount, provider currency sign
                     |
                     |
                     */
                    <div className="relative">
                        <span className="absolute left-3 top-2 font-normal ">
                            Rp.
                        </span>
                        <NumericFormat
                            value={
                                disabled && content
                                    ? content
                                    : getNestedPathFormik(formik.values, name)
                            }
                            disabled={disabled}
                            decimalSeparator=","
                            isAllowed={(value) => {
                                const { floatValue } = value;
                                if (max && floatValue! > max) return false;
                                return true;
                            }}
                            decimalScale={decimalScale}
                            placeholder={
                                placeholder || `Input ${label || name}`
                            }
                            allowNegative={false}
                            thousandSeparator="."
                            className={`${textClassName} text-end`}
                            onBlur={handleOnBlur}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            }
                        />
                    </div>
                ) : type === "date" ? (
                    /**
                     | --------------------------------------------------------------------------
                     | If input is amount
                     | --------------------------------------------------------------------------
                     |
                     | Disallow all input except number or comma / dot for decimal
                     | and because this is amount, provider currency sign
                     |
                     */

                    <Flatpickr
                        disabled={disabled}
                        value={getNestedPathFormik(formik.values, name)}
                        options={{
                            dateFormat: "d-m-Y",
                        }}
                        className={textClassName}
                        placeholder={placeholder || `Input ${label || name}`}
                        onChange={([date]) => formik.setFieldValue(name, date)}
                    />
                ) : type === "qty" ? (
                    <NumericFormat
                        value={getNestedPathFormik(formik.values, name)}
                        disabled={disabled}
                        isAllowed={(value) => {
                            const { floatValue } = value;
                            if (max && floatValue! > max) return false;
                            return true;
                        }}
                        decimalSeparator=","
                        decimalScale={decimalScale}
                        placeholder={placeholder || `Input ${label || name}`}
                        allowNegative={false}
                        thousandSeparator="."
                        className={`${textClassName} text-end`}
                        onBlur={handleOnBlur}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(e)
                        }
                    />
                ) : (
                    /**
                     | --------------------------------------------------------------------------
                     | General Input
                     | --------------------------------------------------------------------------
                     |
                     | This is general input form
                     |
                     */
                    <input
                        name={name}
                        type={type}
                        disabled={disabled}
                        value={inputData}
                        placeholder={placeholder || `Input ${label || name}`}
                        className={textClassName}
                        onBlur={handleOnBlur}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(e)
                        }
                    />
                )}
                {icon && (
                    <span className="absolute start-3 top-1/2 -translate-y-1/2">
                        {icon}
                    </span>
                )}
            </div>

            {!hideErrorMessage && (error || clue) && (
                <ShowError name={name} clue={clue} />
            )}
        </div>
    );
};
