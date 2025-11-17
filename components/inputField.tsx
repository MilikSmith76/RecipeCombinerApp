import { Description, Field, Input, Label } from "@headlessui/react";
import type { ChangeEventHandler, JSX } from "react";

interface InputFieldProps {
    name: string;
    description?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField = ({ name, description, onChange }: InputFieldProps): JSX.Element => {
    return (
        <Field className="mt-3 w-full">
            <Label className="text-sm/6 font-medium">{name}</Label>
            {description && <Description className="text-sm/6">{description}</Description>}
            <Input className="w-full rounded-lg border-black border-2 py-2 px-3" name={name} onChange={onChange}/>
        </Field>
    );
};

export { InputField };
