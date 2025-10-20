import Image from "/kretostan-logo.webp";

const Logo = () => {
  return (
    <button className="flex items-center px-3 py-3 sm:py-4">
      <img src={Image} alt="Kretostan logo" height={170} width={170} draggable={false} />
    </button>
  );
};

export default Logo;
