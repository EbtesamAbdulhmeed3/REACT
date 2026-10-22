
// export default function Hero() {
//   return (
//     <h1>
//       hello ebtesam
//     </h1>
//   )
// }
// function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
//       <h1 className="text-5xl font-bold mb-4">
//         Discover Products Made For You
//       </h1>

//       <p className="text-gray-600 text-lg mb-6 max-w-xl">
//         Explore our collection of high-quality products made to make
//         your everyday life easier and better.
//       </p>

//       <button className="bg-blue-800 text-white px-9 py-3 rounded-lg hover:bg-blue-600">
//         Shop Now
//       </button>

//     </section>
//   );
// }

// export default Hero;

// function Hero() {
//   return (
//     <nav className="border-b px-8 py-6 flex justify-between items-center">
      
//       <h1 className="text-2xl font-bold">
//         Logo
//       </h1>

//       <div className="flex gap-10">
//         <a href="#home">Home</a>
//         <a href="#products">Products</a>
//         <a href="#contact">Contact</a>
//       </div>

//     </nav>
//   );
// }

// export default Hero ;

function Hero() {
  return (
    <section
      id="home"
      className="min-h-500px bg-green-600 text-white flex h-78 flex-col items-center justify-center text-center px-5 "
    >
      <h1 className="text-5xl font-bold mb-5">
        Discover Events That Move You Forward
      </h1>

      <p className="text-lg max-w-2xl mb-8">
        Join amazing events and workshops, meet inspiring people,
        and learn new skills.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-green-600 px-6 py-3 rounded">
          Explore Events
        </button>

        <button className="border border-white px-6 py-3 rounded">
          Become a Speaker
        </button>
      </div>
    </section>
  );
}

export default Hero;