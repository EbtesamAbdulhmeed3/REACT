// function About() {
//   return (
//     <section
//       id="about"
//       className="py-16 px-10 bg-gray-100"
//     >
//       <div className="grid md:grid-cols-2 gap-10 items-center">

//         <img
//           src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
//           alt="Event"
//           className="w-full rounded-lg"
//         />

//         <div>
//           <h2 className="text-3xl font-bold mb-5">
//             What is Evently?
//           </h2>

//           <p className="text-gray-600 leading-7">
//             Evently is a platform that helps people discover
//             events and workshops. You can explore different
//             categories, meet speakers, and register for events.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 bg-gray-800 p-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/Footer">Products</Link>
    </nav>
  );
}
