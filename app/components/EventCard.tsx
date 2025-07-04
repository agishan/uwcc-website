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
    <Card className="flex flex-col">
      <Link to={`/events/${event.id}`} className="block">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://source.unsplash.com/400x300/?food,cooking";
          }}
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-1 text-black">
          <Link to={`/events/${event.id}`} className="hover:underline text-black">
            {event.title}
          </Link>
        </h2>
        <div className="text-sm text-gray-500 mb-2">{event.date}</div>
        <p className="text-gray-700 flex-1 mb-2">{event.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {event.tags.map((tag) => (
            <span key={tag} className="bg-primary bg-opacity-10 text-primary px-2 py-0.5 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
} 