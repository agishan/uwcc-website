import { useParams, Link } from "react-router";
import Card from "../components/Card";
import { events } from "../data/events";
import { recipes } from "../data/recipes";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));
  if (!event) return <div className="p-8 text-black">Event not found.</div>;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-black">{event.title}</h1>
      <div className="text-gray-500 mb-4">{event.date}</div>
      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="mb-6 text-lg text-gray-700">{event.description}</p>
      <h2 className="text-2xl font-semibold mb-4 text-black">Recipes from this event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {event.recipeIds.map(rid => {
          const recipe = recipes.find(r => r.id === rid);
          return recipe ? (
            <Card key={rid} className="overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">{recipe.title}</h3>
                <p className="text-gray-700 mb-2">{recipe.description}</p>
                <Link to={`/recipes/${rid}`} className="text-primary hover:underline">
                  View Recipe
                </Link>
              </div>
            </Card>
          ) : null;
        })}
      </div>
    </main>
  );
} 