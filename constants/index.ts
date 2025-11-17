import { z } from 'zod';

const MAX_GEMINI_RESPONSE_TIME = 60;

const GEMINI_LATEST_FLASH_MODEL = 'gemini-2.5-flash';

const GEMINI_LATEST_FLASH_LITE_MODEL = 'gemini-2.5-flash-lite';

const GEMINI_OLDER_FLASH_MODEL = 'gemini-2.0-flash';

const AI_RECIPE_SYSTEM = `
    You determine a normalized final recipe by using multiple urls as reference.
    The final recipe must be proportional to the reference recipes.
    The final recipe must only contain one of each ingredient.
    The final recipe should only use cups, teaspoons, tablespoons, and no unit measurements.
    Respond with an object containing the recipe name, ingredients, estimated time in minutes, and steps for the final recipe.
`;

const INGREDIENT_SCHEMA = z.object({
    name: z.string().describe('Name of the ingredient.'),
    measurement: z.string().describe('Required numeric measure of the ingredient.'),
    measurementUnit: z.string().describe('Unit measurement of the ingredient.'),
});

type Ingredient = z.infer<typeof INGREDIENT_SCHEMA>;

const RECIPE_SCHEMA = z.object({
    name: z.string(),
    ingredients: z.array(
        INGREDIENT_SCHEMA,
    ),
    steps: z.array(z.string()).describe('Steps to make the recipe.'),
    estimatedTime: z.number().describe('Estimated time it takes to make the recipe.'),
});

type Recipe = z.infer<typeof RECIPE_SCHEMA>;

const TEST_RESPONSE_DATE = {
    name: 'Test Recipe',
    ingredients: [
        {
            name: 'flour',
            measurement: '1 1/2',
            measurementUnit: 'cup',
        },
        {
            name: 'sugar',
            measurement: '1',
            measurementUnit: 'cup',
        },
        {
            name: 'butter',
            measurement: '1/2',
            measurementUnit: 'cup',
        },
    ],
    steps: [
        'Combine all ingredients into a dough',
        'Bake the dough for 10 minutes',
    ],
    estimatedTime: 60,
};

export {
    AI_RECIPE_SYSTEM,
    MAX_GEMINI_RESPONSE_TIME,
    RECIPE_SCHEMA,
    TEST_RESPONSE_DATE,
    GEMINI_LATEST_FLASH_MODEL,
    GEMINI_LATEST_FLASH_LITE_MODEL,
    GEMINI_OLDER_FLASH_MODEL,
};
export type { Ingredient, Recipe };
