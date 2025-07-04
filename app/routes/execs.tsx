import ExecCard from "../components/ExecCard";

const execTeams = [
  {
    team: "Marketing",
    members: [
      { 
        name: "Alice Kim", 
        role: "Marketing Lead", 
        bio: "Loves food photography and spicy ramen.",
        image: "https://source.unsplash.com/200x200/?portrait,woman,asian"
      },
      { 
        name: "Ben Lee", 
        role: "Social Media", 
        bio: "Makes the best memes and pasta.",
        image: "https://source.unsplash.com/200x200/?portrait,man,asian"
      },
    ],
  },
  {
    team: "Events",
    members: [
      { 
        name: "Carmen Tran", 
        role: "Events Lead", 
        bio: "Organizes chaos into deliciousness.",
        image: "https://source.unsplash.com/200x200/?portrait,woman,vietnamese"
      },
      { 
        name: "David Park", 
        role: "Event Coordinator", 
        bio: "Can chop onions without crying.",
        image: "https://source.unsplash.com/200x200/?portrait,man,korean"
      },
    ],
  },
  {
    team: "Logistics",
    members: [
      { 
        name: "Emily Chen", 
        role: "Logistics Lead", 
        bio: "Always has a backup spatula.",
        image: "https://source.unsplash.com/200x200/?portrait,woman,chinese"
      },
    ],
  },
];

export default function Execs() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Meet the Execs</h1>
      <div className="space-y-10">
        {execTeams.map((team) => (
          <section key={team.team}>
            <h2 className="text-2xl font-semibold mb-4 text-black">{team.team} Team</h2>
            <div className="flex flex-wrap gap-6">
              {team.members.map((member) => (
                <ExecCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
} 