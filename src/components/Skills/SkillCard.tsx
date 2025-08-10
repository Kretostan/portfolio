import Icon from "../ui/Icon";

const SkillCard = ({ icon }) => {
    return <div>
        <Icon icon={icon.iconName} alt={icon.alt} height={icon.size} width={icon.size} themed />
    </div>
}

export default SkillCard;