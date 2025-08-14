import { useTheme } from "next-themes";

interface IconProps {
  icon: string;
  alt: string;
  height?: number;
  width?: number;
  themed?: boolean;
}

const Icon = ({ icon, alt, height, width, themed = false }: IconProps) => {
  const { resolvedTheme } = useTheme();
  const iconTheme = resolvedTheme === "dark" ? "-dark" : "-light";

  if (!height && !width) {
    return (
      <img
        src={"/icons/" + icon + (themed ? iconTheme : "") + ".svg"}
        alt={alt}
        style={{
          height: "auto",
          maxHeight: "32px",
          width: "auto",
        }}
        draggable={false}
      />
    );
  }

  return (
    <img
      src={"/icons/" + icon + (themed ? iconTheme : "") + ".svg"}
      alt={alt}
      height={height}
      width={height}
      draggable={false}
    />
  );
};

export default Icon;
