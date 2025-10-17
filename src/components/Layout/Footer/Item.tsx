import {useTheme} from "next-themes";
import {motion} from "framer-motion";
import Icon from "../../UI/Icon.tsx";


type ItemProps = {
  darkIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  lightIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const Item = ({darkIcon, lightIcon, name}: ItemProps) => {
  const { resolvedTheme } = useTheme();

  return <motion.a
    whileHover={{ color: "var(--accent-color-2)" }}
    className="flex items-center gap-1.5"
    href="https://github.com/Kretostan"
    target="_blank"
    rel="noopener noreferrer"
    key={resolvedTheme + " " + name}
  ><Icon Icon={resolvedTheme === "dark" ? darkIcon : lightIcon}  size={16} />
    {name}
  </motion.a>;
};

export default Item;
