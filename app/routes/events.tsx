import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";

const events = [
  {
    id: 1,
    title: "Sushi Night",
    date: "2024-03-15",
    image: "https://source.unsplash.com/400x300/?sushi",
    description: "Learned to roll sushi and make miso soup!",
    tags: ["Beginner", "Japanese", "1.5h"],
  },
  {
    id: 2,
    title: "Pasta Party",
    date: "2024-02-10",
    image: "https://source.unsplash.com/400x300/?pasta",
    description: "Homemade pasta from scratch!",
    tags: ["Intermediate", "Italian", "2h"],
  },
  {
    id: 3,
    title: "Baking Workshop",
    date: "2024-01-20",
    image: "https://source.unsplash.com/400x300/?baking",
    description: "Learn to make bread and pastries!",
    tags: ["Beginner", "Baking", "2.5h"],
  },
  // Add more events as needed
];

export default function Events() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Past Events</h1>
      <div className="mb-6">
        <SearchBar placeholder="Search events..." className="max-w-md" />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
} 