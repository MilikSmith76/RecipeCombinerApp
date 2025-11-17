import type { JSX } from "react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { InputField } from "./inputField";
import { Button } from "./button";

interface RecipeFormProps {
    loading: boolean;
    onSubmit: (recipe: string, urls: string[]) => void;
}

const RecipeForm = ({ loading, onSubmit }: RecipeFormProps): JSX.Element => {
    const [recipe, setRecipe] = useState('');
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [url3, setUrl3] = useState('');

    const onRecipeChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
        setRecipe(event.target.value);
        },
        [setRecipe],
    );

    const onUrl1Change = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
        setUrl1(event.target.value);
        },
        [setUrl1],
    );

    const onUrl2Change = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
        setUrl2(event.target.value);
        },
        [setUrl2],
    );

    const onUrl3Change = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
        setUrl3(event.target.value);
        },
        [setUrl3],
    );

    const handleSubmit = useCallback(
        () => {
            onSubmit(recipe, [url1, url2, url3]);
        },
        [recipe, url1, url2, url3, onSubmit],
    );

    const disabled = useMemo(() => !recipe || !url1, [recipe, url1]);

    return (
        <>
            <div className="text-3xl font-semibold">Recipe Combiner App</div>
            <InputField name="Recipe Name" onChange={onRecipeChange}/>
            <InputField name="Recipe URL 1" onChange={onUrl1Change}/>
            <InputField name="Recipe URL 2" onChange={onUrl2Change}/>
            <InputField name="Recipe URL 3" onChange={onUrl3Change}/>
            {!loading && <Button text="submit" onClick={handleSubmit} disabled={disabled} />}
            {loading && <Button text="Loading..." />}
        </>
    );
};

export { RecipeForm };
