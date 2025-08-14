const SkillsCategories = ({
  categories,
  onSetCategory,
}: {
  categories: object[];
  onSetCategory: (id: number) => void;
}) => {
  return (
    <div className="flex flex-row md:flex-col justify-around gap-4 sm:gap-10">
      {categories.map((category, index) => (
        <h3
          className="cursor-pointer"
          onClick={() => onSetCategory(category.id)}
          key={index}
        >
          {category.name}
        </h3>
      ))}
    </div>
  );
};

export default SkillsCategories;
