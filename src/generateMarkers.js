import randomLatitude from "random-latitude";
import randomLongitude from "random-longitude";

export default function generateMarkers(amount = 0) {
  const markers = [];

  for (let i = 0; i < amount; i++) {
    markers.push({
      id: `marker-${i}`,
      iconColor: i % 2 === 0 ? "blue" : "red",
      position: [randomLatitude(), randomLongitude()],
    });
  }

  return markers;
}
