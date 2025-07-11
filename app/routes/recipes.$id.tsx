import { useParams, Link } from "react-router";
import Card from "../components/Card";
import { recipes } from "../data/recipes";
import { events } from "../data/events";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));
  if (!recipe) return <div className="p-8 text-black">Recipe not found.</div>;

  // Find all events that use this recipe
  const usedInEvents = events.filter(event => event.recipeIds.includes(recipe.id));

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-black">{recipe.title}</h1>
          <div className="text-gray-500 mb-2">{recipe.cuisine} • {recipe.time} • {recipe.servings}</div>
          <div className="mb-4">
            {recipe.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1">{tag}</span>
            ))}
          </div>
          <p className="mb-4 text-lg text-gray-700">{recipe.description}</p>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-black">Ingredients</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700 mb-4">
            {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-black">Steps</h2>
          <ol className="list-decimal list-inside ml-4 text-gray-700 mb-4">
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          {usedInEvents.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-black">Featured in Events:</h3>
              <ul>
                {usedInEvents.map(event => (
                  <li key={event.id}>
                    <Link to={`/events/${event.id}`} className="text-primary hover:underline">
                      {event.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </main>
  );
} 