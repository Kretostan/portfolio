type Category = {
  id: number;
  name: string;
};

type SkillsCategoryProps = {
  categories: Category[];
  onSetCategory: (id: number) => void;
};

const SkillsCategories = ({
  categories,
  onSetCategory,
}: SkillsCategoryProps) => {
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
