export function formatJobDescription(text: string) {
  if (!text) return "";

  const lines = text.split("\n").filter((line) => line.trim() !== "");

  let html = "";
  let inList = false;

  lines.forEach((line) => {
    const cleanLine = line.trim();

    // detect section headings
    if (
      cleanLine.match(
        /Responsibilities|Requirements|Skills|Benefits|Qualifications|Preferred/i
      )
    ) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      html += `<h3 class="font-semibold text-lg mt-6 break-words">${cleanLine}</h3>`;
      return;
    }

    // convert normal lines to bullet items
    if (!inList) {
      html += "<ul class='list-disc pl-6 space-y-2 mt-2'>";
      inList = true;
    }

    html += `<li class="break-words whitespace-normal leading-relaxed">${cleanLine}</li>`;
  });

  if (inList) html += "</ul>";

  return html;
}