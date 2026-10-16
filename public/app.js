// Placeholder: pings /api/health (a Pages Function, once one exists).
const label = document.getElementById("status");
const dot = document.querySelector(".dot");

fetch("/api/health")
  .then((r) => {
    if (!r.ok) throw new Error(r.status);
    label.textContent = "API online";
    dot.classList.add("ok");
  })
  .catch(() => {
    label.textContent = "API not connected yet";
    dot.classList.add("down");
  });
