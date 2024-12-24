import { IRootState } from "@/stores";
import { getNestedPathFormik } from "@/utilities/functions/formik/getNestedFormik";
import { useFormikContext } from "formik";
import { FC } from "react";
import { useSelector } from "react-redux";
import Select, { StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import { ShowError } from "./error";

interface SelectFieldProps extends FieldGeneralProps {
    name: string;
    options: { value: any; label: string }[];
    style?: React.CSSProperties;
    clearable?: boolean;
    creatable?: boolean;
    multiple?: boolean;
    additionalFunction?: (selectedOption: any, formik: any) => void;
}

export const SelectField: FC<SelectFieldProps> = ({
    label,
    name,
    options,
    placeholder,
    required,
    clue,
    disabled,
    clearable,
    creatable,
    multiple,
    additionalFunction,
}) => {
    const formik = useFormikContext<any>();
    const error = getNestedPathFormik(formik.errors, name);
    const values = getNestedPathFormik(formik.values, name);

    const handleChange = (selectedOption: any) => {
        formik.setFieldValue(name, selectedOption ? selectedOption.value : "");

        if (additionalFunction) {
            additionalFunction(selectedOption, formik);
        }
    };

    const customPlaceholder = placeholder
        ? placeholder
        : `Select ${label || name}`;

    const isDark = useSelector(
        (state: IRootState) => state.themeConfig.isDarkMode,
    );

    const customStyles: StylesConfig = {
        singleValue: (provided: any) => ({
            ...provided,
            // fontWeight: 400,
            fontSize: "14px",
            color: isDark ? "light" : "black",
        }),
        input: (provided: any) => ({
            ...provided,
            color: isDark ? "light" : "black",
        }),
        control: (provided: any) => ({
            ...provided,
            background: isDark ? "#132136" : "#fff",
            color: isDark ? "white !important" : "black !important",
            border: isDark ? "none" : "0.5 solid #f6f6f6",
        }),
        menu: (provided: any) => ({
            ...provided,
            background: isDark ? "#0e1726" : "#fff",
            color: isDark ? "#f6f6f6" : "light",
            fontSize: "14px",
            fontWeight: 400,
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? isDark
                    ? "#4361ee"
                    : "#2196f3"
                : state.isFocused
                  ? isDark
                      ? "#4361ee"
                      : "#e7f7ff"
                  : isDark
                    ? "dark"
                    : "light",

            color: isDark ? "light" : "black",
        }),
        menuPortal: (base: any) => ({ ...base, zIndex: 999 }),
    };

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

            {creatable ? (
                <CreatableSelect
                    options={options}
                    isSearchable
                    isDisabled={disabled}
                    isClearable={clearable}
                    isMulti={multiple}
                    styles={customStyles}
                    onChange={(selectedOption) => handleChange(selectedOption)}
                    value={{
                        value: getNestedPathFormik(formik.values, name),
                        label:
                            getNestedPathFormik(formik.values, name) ||
                            customPlaceholder,
                    }}
                    placeholder={customPlaceholder}
                    menuPortalTarget={document.body}
                    menuPlacement="auto"
                />
            ) : (
                <Select
                    options={options}
                    isSearchable
                    isMulti={multiple}
                    isDisabled={disabled}
                    isClearable={clearable}
                    id={name}
                    styles={customStyles}
                    onChange={(selectedOption) => handleChange(selectedOption)}
                    value={
                        values
                            ? options?.find(
                                  (option: any) => option.value === values,
                              )
                            : {
                                  value: "",
                                  label: customPlaceholder,
                              }
                    }
                    placeholder={customPlaceholder}
                    menuPortalTarget={document.body}
                    menuPlacement="auto"
                />
            )}

            {(error || clue) && <ShowError name={name} clue={clue} />}
        </div>
    );
};
