'use client'

import { useCallback, useMemo } from "react";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { RECIPE_SCHEMA } from "@/constants";
import { RecipeCard } from "@/components/recipeCard";
import { RecipeForm } from "@/components/recipeForm";
import { Button } from "@/components/button";

export default function Home() {
  const { isLoading, object, submit, error, clear } = useObject({
    api: '/api/recipe',
    schema: RECIPE_SCHEMA,
  });

  const recipeResponse = useMemo(
    () => {
      if (!object) {
        return undefined;
      }

      try {
        return RECIPE_SCHEMA.parse(object);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return undefined;
      }
    },
    [object],
  );

  const onSubmit = useCallback(
    (recipe: string, urls: string[]) => {
      submit({
        recipe,
        urls: urls.filter((url) => !url),
      });
    },
    [submit],
  );

  const onClear = useCallback(
    () => {
      clear();
    },
    [clear],
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between my-10 py-22 px-16 bg-white dark:bg-black sm:items-start">
        {
          !recipeResponse && !error && <RecipeForm loading={isLoading} onSubmit={onSubmit}/>
        }
        {
          error && (
            <>
              <div className="rounded-md border-black border-2 p-3 w-full">
                {JSON.stringify(error)}
              </div>
              <Button text="Clear" onClick={onClear} />
            </>
          )
        }
        {
          recipeResponse && (
            <>
              <div className="text-3xl font-semibold">Recipe Result</div>
              <RecipeCard recipe={recipeResponse} />
              <Button text="Clear" onClick={onClear} />
            </>
          )
        }
      </main>
    </div>
  );
}
