export default function sortByPriority(a, b) {
  const priorityOrder = { High: 3, Medium: 2, Low: 1 };

  // Compare priorities using the priorityOrder object
  return priorityOrder[b.priority] - priorityOrder[a.priority];
}
