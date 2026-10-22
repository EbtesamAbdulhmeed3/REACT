import SpeakerCard from "./SpeakerCard";

function FeaturedSpeaker() {
  const speaker = {
    name: "Ahmed Mohamed",
    job: "Frontend Developer",
    bio: "Ahmed is a frontend developer who loves teaching modern web development.",
    image:
      "pexels-akio-1729456.jpg",
  };

  return (
    <section id="speakers" className="py-16 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Speaker
      </h2>

      <SpeakerCard {...speaker} />
    </section>
  );
}

export default FeaturedSpeaker;