import { Link } from "react-router";
import Banner from "../components/Banner";
import Card from "../components/Card";

const mostRecentEvent = {
  id: 1,
  title: "Sushi Night",
  image: "https://source.unsplash.com/600x400/?sushi",
  description: "We learned to roll sushi and make miso soup!",
};

export function meta(_: any) {
  return [
    { title: "UW Cooking Club" },
    { name: "description", content: "University Cooking Club - Home" },
  ];
}

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <Banner
        title="UW Cooking Club"
        subtitle="Bringing people together, one recipe at a time."
        backgroundImage="https://source.unsplash.com/1200x400/?cooking,kitchen"
        ctaText="Join Our Next Event"
        ctaLink="/events"
      />
      
      {/* Who are we? */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Who are we?</h2>
          <p className="text-gray-700">
            We are a group of students passionate about cooking, eating, and sharing food from all cultures. Our events are open to all skill levels and focus on learning, fun, and community.
          </p>
        </div>
      </section>

      {/* Most Recent Event */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-black">Most Recent Event</h2>
          <Card className="flex flex-col md:flex-row overflow-hidden">
            <img
              src={mostRecentEvent.image}
              alt={mostRecentEvent.title}
              className="w-full md:w-1/2 h-64 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://source.unsplash.com/600x400/?food,cooking";
              }}
            />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2 text-black">{mostRecentEvent.title}</h3>
              <p className="text-gray-700 mb-4">{mostRecentEvent.description}</p>
              <Link
                to={`/events/${mostRecentEvent.id}`}
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                See Details
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
