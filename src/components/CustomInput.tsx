type InputType = "text" | "number" | "date";

interface Props {
  label: string;
  inputType: InputType;
  value?: string | number | readonly string[] | undefined;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput = ({
  label,
  inputType,
  value,
  name,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col w-full min-w-0 text-white font-bold shadow-xl">
      <label htmlFor="">{label}</label>
      <input
        className="p-1 bg-white rounded-md w-full active:outline-0 focus:outline-2 focus:outline-black text-black"
        type={inputType}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};
