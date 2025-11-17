import type { JSX } from 'react';
 
interface StepListProps {
    steps: string[],
}

const StepList = ({ steps }: StepListProps): JSX.Element => {
    return (
        <>
            <div className="mt-4 font-bold">Ingredients:</div>
            <ul className="list-disc ml-6">
                {steps.map((step, index) => {
                    return (
                        <li key={index}>
                            {step}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export { StepList };
