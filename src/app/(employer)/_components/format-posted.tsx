export function formatPostedTime(date: Date) {
  const now = new Date().getTime();
  const posted = new Date(date).getTime();
  const diffMs = now - posted;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);

  if (seconds < 60) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  if (days < 7) return `${days} day ago`;
  if (weeks >= 1) return `${weeks} week ago`;

  // fallback
  return new Date(date).toLocaleDateString();
}
