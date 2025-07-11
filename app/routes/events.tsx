import { Link } from "react-router";
import Card from "../components/Card";
import { events } from "../data/events";
import { recipes } from "../data/recipes";

export default function Events() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Past Events</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">{event.title}</h3>
              <span className="text-sm text-gray-500">{event.date}</span>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {event.tags.map((tag) => (
                  <span key={tag} className="bg-primary text-white text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-black">Recipes:</span>
                <ul>
                  {event.recipeIds.map(rid => {
                    const recipe = recipes.find(r => r.id === rid);
                    return recipe ? (
                      <li key={rid}>
                        <Link to={`/recipes/${rid}`} className="text-primary hover:underline">
                          {recipe.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
              <Link
                to={`/events/${event.id}`}
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                View Event
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
} 