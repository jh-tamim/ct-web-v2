export interface TextType {
  type:
    | "Major-heading"
    | "heading"
    | "subheading"
    | "paragraph"
    | "paragraphBold";
  align?: "start" | "end" | "center" | "justify";
  text: string;
  extraClass?: string;
  mode?: "normal" | "bold" | "extra-bold";
}
