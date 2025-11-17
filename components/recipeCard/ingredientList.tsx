import type { JSX } from 'react';
import type { Ingredient } from "@/constants";
 
interface IngredientListProps {
    ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: IngredientListProps): JSX.Element => {
    return (
        <>
            <div className="mt-4 font-bold">Ingredients:</div>
            <ul className="list-disc ml-6">
                {ingredients.map((ingredient, index) => {
                    return (
                        <li key={index}>
                            {ingredient.name} ({ingredient.measurement} {ingredient.measurementUnit})
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export { IngredientList };
