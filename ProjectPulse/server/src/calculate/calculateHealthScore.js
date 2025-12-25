export function calculateHealtScore(status) {
  switch (status) {
    case "On Track":
      return 90;
    case "At Risk":
      return 65;
    case "Critical":
      return 30;
    case "Completed":
      return 100;
    default:
      return 80;
  }
}
