import type { JSX } from "react";
import { Button as HeadlessButton } from '@headlessui/react';

interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({ text, disabled, onClick = () => {} }: ButtonProps): JSX.Element => {
    return (
        <HeadlessButton className="inline-flex gap-2 rounded-md px-3 py-2 text-sm/6 font-semibold mt-3 bg-emerald-500 hover:bg-emerald-300 cursor-pointer disabled:bg-slate-300 disabled:hover:bg-slate-200" onClick={onClick} disabled={disabled}>
            {text}
        </HeadlessButton>
    );
};

export { Button };
