import {
  faDroplet,
  faLightbulb,
  faTrash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const getIcon = (utilityName: string): IconDefinition => {
  if (utilityName === "Water Works") {
    return faDroplet;
  }
  if (utilityName === "Electric Company") {
    return faLightbulb;
  }

  return faTrash;
};

export default getIcon;
