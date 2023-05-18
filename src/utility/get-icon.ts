import {
  faDroplet,
  faLightbulb,
  faTrash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export function getIcon(utilityName: string): IconDefinition {
  if (utilityName === "Water Works") {
    return faDroplet;
  }
  if (utilityName === "Electric Company") {
    return faLightbulb;
  }

  return faTrash;
}

export function getIconColor(utilityName: string) {
  if (utilityName === "Water Works") {
    return "blue-icon";
  }

  if (utilityName === "Electric Company") {
    return "yellow-icon";
  }

  return "black-icon";
}
