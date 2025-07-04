import { useParams } from "react-router";
import Card from "../components/Card";

const eventDetails = {
  1: {
    title: "Sushi Night",
    date: "2024-03-15",
    images: ["https://source.unsplash.com/600x400/?sushi", "https://source.unsplash.com/600x400/?japanese-food"],
    description: "We learned to roll sushi and make miso soup!",
    recipe: {
      ingredients: [
        "2 cups sushi rice",
        "Nori sheets",
        "Fresh fish or veggies",
        "Soy sauce",
        "Rice vinegar",
        "Sugar",
        "Salt",
      ],
      steps: [
        "Cook sushi rice and season with vinegar, sugar, and salt.",
        "Lay out nori, spread rice, add fillings.",
        "Roll tightly and slice.",
        "Serve with soy sauce.",
      ],
    },
    tags: ["Beginner", "Japanese", "1.5h"],
  },
  2: {
    title: "Pasta Party",
    date: "2024-02-10",
    images: ["https://source.unsplash.com/600x400/?pasta", "https://source.unsplash.com/600x400/?italian-food"],
    description: "Homemade pasta from scratch!",
    recipe: {
      ingredients: [
        "2 cups flour",
        "3 eggs",
        "Pinch of salt",
        "Olive oil",
      ],
      steps: [
        "Make a well in the flour, add eggs and salt.",
        "Mix and knead until smooth.",
        "Roll out and cut into shapes.",
        "Boil until al dente.",
      ],
    },
    tags: ["Intermediate", "Italian", "2h"],
  },
  3: {
    title: "Baking Workshop",
    date: "2024-01-20",
    images: ["https://source.unsplash.com/600x400/?baking", "https://source.unsplash.com/600x400/?bread"],
    description: "Learn to make bread and pastries!",
    recipe: {
      ingredients: [
        "3 cups flour",
        "1 cup warm water",
        "2 tsp yeast",
        "1 tsp salt",
        "1 tbsp sugar",
      ],
      steps: [
        "Mix flour, yeast, salt, and sugar.",
        "Add warm water and knead for 10 minutes.",
        "Let rise for 1 hour.",
        "Shape and bake at 400°F for 30 minutes.",
      ],
    },
    tags: ["Beginner", "Baking", "2.5h"],
  },
};

export default function EventDetail() {
  const { id } = useParams();
  const event = eventDetails[Number(id) as keyof typeof eventDetails];
  if (!event) return <div className="p-8 text-black">Event not found.</div>;
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-black">{event.title}</h1>
      <div className="text-gray-500 mb-4">{event.date}</div>
      <div className="flex flex-wrap gap-4 mb-6">
        {event.images.map((img, i) => (
          <img 
            key={i} 
            src={img} 
            alt={event.title} 
            className="w-64 h-40 object-cover rounded"
            onError={(e) => {
              e.currentTarget.src = "https://source.unsplash.com/600x400/?food,cooking";
            }}
          />
        ))}
      </div>
      <p className="mb-6 text-lg text-gray-700">{event.description}</p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">Recipe</h2>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Ingredients:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            {event.recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-black">Steps:</h3>
          <ol className="list-decimal list-inside ml-4 text-gray-700">
            {event.recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <div className="flex flex-wrap gap-2 mt-2">
        {event.tags.map((tag) => (
          <span key={tag} className="bg-primary bg-opacity-10 text-primary px-2 py-0.5 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
} 