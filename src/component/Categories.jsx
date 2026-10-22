import categoriesk from "../data/categoriesk";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="py-16 px-10 bg-green-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {categoriesk.map((category) => (
          <CategoryCard
            key={category}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;