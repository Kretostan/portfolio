import Icon from "../ui/Icon";

type IconType = {
  iconName: string;
  alt: string;
  size: number;
};

const SkillCard = ({ icon }: { icon: IconType }) => {
  return (
    <div>
      <Icon
        icon={icon.iconName}
        alt={icon.alt}
        height={icon.size}
        width={icon.size}
        themed
      />
    </div>
  );
};

export default SkillCard;
