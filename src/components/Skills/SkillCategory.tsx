import { categories } from "../../models/skills";

const SkillCategory = ({ categoryId }: { categoryId: number }) => {
    return <h2 className="flex justify-center text-xl">
        {categoryId === 0
            ? "Please select category"
            : categories.map(category => category.id === categoryId && category.fullName)}
    </h2>
}

export default SkillCategory