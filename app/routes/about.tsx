export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">About Us</h1>
      <div className="mb-6">
        <img
          src="/images/banner/Banner.png"
          alt="Club Banner"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold text-black">UW Cooking Club</span> is a community of food lovers at the university who come together to cook, learn, and share delicious meals. Whether you're a beginner or a seasoned chef, our club welcomes everyone who's passionate about food and fun!
        </p>
        <p className="text-gray-600 italic">
          "Bringing people together, one recipe at a time."
        </p>
      </div>
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-black">Our Mission</h2>
        <p className="text-gray-700">
          To foster a welcoming environment where students can explore diverse cuisines, develop cooking skills, and make lasting friendships through shared culinary experiences.
        </p>
      </section>
    </main>
  );
} 