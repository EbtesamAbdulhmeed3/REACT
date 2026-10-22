function SpeakerCard({ name, job, bio, image }) {
  return (
    <div className="max-w-md mx-auto text-center border rounded-lg p-6 shadow">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
      />

      <h2 className="text-2xl font-bold">
        {name}
      </h2>

      <p className="text-green-600 mb-3">
        {job}
      </p>

      <p className="text-gray-600 mb-4">
        {bio}
      </p>

      <div className="flex justify-center gap-4">
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  );
}

export default SpeakerCard;