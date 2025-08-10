import SkillCard from "./SkillCard";
import { categories } from "../../models/skills";

interface SkillCardsProps {
    skillsId: number;
}

const SkillsCards = ({ skillsId }: SkillCardsProps) => {
    return <div className={`flex flex-col items-center ${skillsId === 0 ? "justify-center" : "justify-items-start"} gap-8 px-2`}>
        {skillsId === 0
            ? "No category selected"
            : categories.map(category => category.id === skillsId && category.skills.map((skill, index) =>
            <div className="flex flex-col justify-around gap-4" key={index}>
                <p className="text-center">{skill.skillName}</p>
                <div className="flex justify-center gap-6">
                    {skill.icons.map((icon, index) => <div key={index}>
                        <SkillCard icon={icon} />
                    </div>)}
                </div>
            </div>))}
    </div>
}

export default SkillsCards;