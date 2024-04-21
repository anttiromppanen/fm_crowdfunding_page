export type OptionIds =
  | "bamboo-stand"
  | "black-edition-stand"
  | "mahogany-stand";

export type ExtendedOptionIds = OptionIds | "" | "no-reward";

export interface ParticipationOverlayDefaultProps {
  activeRadioTab: OptionIds;
  setActiveRadioTab: React.Dispatch<React.SetStateAction<OptionIds>>;
}
