import { TextProps } from "./interfaces";
import TextComponent from "./styles";

export default function Text({
  size,
  type,
  textColor,
  weight,
  children,
  underline,
  textTransform,
}: TextProps) {
  return (
    <TextComponent
      as={type}
      textColor={textColor}
      size={size}
      weight={weight}
      underline={underline}
      textTransform={textTransform}
    >
      {children}
    </TextComponent>
  );
}
