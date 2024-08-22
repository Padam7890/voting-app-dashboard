import { InputProps } from "@/types/inputProps";

const Input = ({
  type,
  formik,
  id,
  name,
  value,
  onChange,
  onBlur,
  multiple = false,
  className = "",
  placeholder = "",
  title,
  checked = false,
  hidden = false,
  childrens = [],
  ...props
}: InputProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-2.5 block font-medium text-black dark:text-white"
      >
        {title}
      </label>
      <div className="relative">
        <input
          hidden={hidden}
          type={type}
          id={id}
          name={name}
          value={value}
          multiple={multiple}
          onChange={onChange}
          onBlur={onBlur}
          checked={checked}
          className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`}
          placeholder={placeholder}
          {...props}
        />
        {childrens.length > 0 && (
          <span className="absolute right-4 top-4">
            {childrens.map((child, index) => (
              <span key={index}>{child}</span>
            ))}
          </span>
        )}
        {formik.touched[name] && formik.errors[name] ? (
          <div className=" mt-2 text-xs text-red">
            <>{formik.errors[name]}</>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
