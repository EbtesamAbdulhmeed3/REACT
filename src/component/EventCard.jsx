// function EventCard({
//   title,
//   description,
//   date,
//   location,
//   category,
//   speaker,
//   image,
// }) {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-5">
//         <p className="text-green-600 font-semibold mb-4">
//           {category}
//         </p>

//         <h2 className="text-xl font-bold mb-2">
//           {title}
//         </h2>

//         <p className="text-gray-600 mb-3">
//           {description}
//         </p>

//         <p>📅 {date}</p>
//         <p>📍 {location}</p>
//         <p>🎤 {speaker}</p>

//         <button className="bg-gree-600 text-white px-4 py-2 rounded mt-4">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EventCard;