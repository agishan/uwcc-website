import { Link } from "react-router";
import Card from "../components/Card";
import { recipes } from "../data/recipes";

export default function Recipes() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={recipe.images && recipe.images[0] ? recipe.images[0] : "/images/placeholder.jpg"}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">{recipe.name}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {recipe.servings ? `Serves: ${recipe.servings}` : recipe.makes ? `Makes: ${recipe.makes}` : ""}
              </p>
              <p className="text-gray-700 mb-4">
                {recipe.instructions && recipe.instructions[0]}
              </p>
              <Link
                to={`/recipes/${recipe.id}`}
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                View Recipe
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
} 