import Card from "./Card";

type ExecMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export default function ExecCard({ member }: { member: ExecMember }) {
  return (
    <Card className="p-6 w-64 flex flex-col items-center text-center">
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name}
          className="w-20 h-20 rounded-full mb-4 object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      ) : null}
      <div 
        className={`w-20 h-20 bg-accent rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500 ${
          member.image ? 'hidden' : ''
        }`}
      >
        {member.name.split(' ').map(n => n[0]).join('')}
      </div>
      <h3 className="text-lg font-semibold mb-1 text-black">{member.name}</h3>
      <div className="text-primary font-medium mb-2">{member.role}</div>
      <p className="text-gray-700 text-sm">{member.bio}</p>
    </Card>
  );
} 