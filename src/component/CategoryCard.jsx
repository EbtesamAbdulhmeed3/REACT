function CategoryCard({ category }) {
  return (
    <div className="border rounded-lg p-6 text-center shadow">
      <h3 className="text-xl font-bold">
        {category}
      </h3>
    </div>
  );
}

export default CategoryCard;