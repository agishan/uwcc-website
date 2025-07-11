import { Link } from "react-router";
import Card from "./Card";

type Event = {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://source.unsplash.com/400x300/?food,cooking";
        }}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-black">{event.title}</h3>
          <span className="text-sm text-gray-500">{event.date}</span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {event.tags.map((tag) => (
            <span key={tag} className="bg-primary text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          to={`/events/${event.id}`}
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
} 