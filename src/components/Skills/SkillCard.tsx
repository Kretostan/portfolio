import Icon from "../UI/Icon";

type IconType = {
  iconName: string;
  alt: string;
  size: number;
};

const SkillCard = ({ icon }: { icon: IconType }) => {
  return (
    <Icon
      icon={icon.iconName}
      alt={icon.alt}
      height={icon.size}
      width={icon.size}
      themed
    />
  );
};

export default SkillCard;
