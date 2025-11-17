import type { Recipe } from "@/constants";
import type { JSX } from "react";
import { IngredientList } from "./ingredientList";
import { StepList } from "./stepList";

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
    return (
        <div className="rounded-md border-black border-2 p-3 mt-2 w-full">
            <div className="text-xl font-bold">{recipe.name}</div>
            <div className="mt-4">
                <span className="font-bold">Estimated Time: </span>
                {recipe.estimatedTime} mins
            </div>
            <IngredientList ingredients={recipe.ingredients} />
            <StepList steps={recipe.steps} />
        </div>
    );
};

export { RecipeCard };
