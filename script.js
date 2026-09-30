const parkingSpaces = [
  { id: 1, available: true },
  { id: 2, available: false },
  { id: 3, available: true },
  { id: 4, available: true },
  { id: 5, available: false },
  { id: 6, available: true },
  { id: 7, available: false },
  { id: 8, available: true },
];

const parkingGrid = document.querySelector("#parking-grid");
const totalSpaces = document.querySelector("#total-spaces");
const availableSpaces = document.querySelector("#available-spaces");
const occupiedSpaces = document.querySelector("#occupied-spaces");
const themeToggle = document.querySelector("#theme-toggle");

function updateThemeButton(theme) {
  const isDark = theme === "dark";
  const label = isDark ? "Ativar modo claro" : "Ativar modo escuro";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme;
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("smart-parking-theme", nextTheme);
  updateThemeButton(nextTheme);
}

function formatSpaceNumber(id) {
  return String(id).padStart(2, "0");
}

function createParkingSpace(space) {
  const statusClass = space.available ? "available" : "occupied";
  const statusLabel = space.available ? "Disponível" : "Ocupada";
  const symbol = space.available
    ? `<span class="available-mark">P</span>`
    : `<svg class="car-top-view" viewBox="0 0 44 74" role="img" aria-label="Carro estacionado">
        <rect class="car-shadow" x="4" y="3" width="36" height="68" rx="12" />
        <rect class="car-body" x="5" y="1" width="34" height="68" rx="11" />
        <path class="car-window" d="M12 18c1-6 4-9 10-9s9 3 10 9l2 9H10l2-9Z" />
        <path class="car-window rear" d="M11 48h22l-2 11c-3 2-15 2-18 0l-2-11Z" />
        <rect class="car-roof" x="11" y="29" width="22" height="16" rx="4" />
        <rect class="car-light" x="8" y="5" width="7" height="3" rx="1.5" />
        <rect class="car-light" x="29" y="5" width="7" height="3" rx="1.5" />
        <rect class="car-light rear-light" x="8" y="62" width="7" height="3" rx="1.5" />
        <rect class="car-light rear-light" x="29" y="62" width="7" height="3" rx="1.5" />
        <rect class="wheel left one" x="1" y="15" width="5" height="13" rx="2" />
        <rect class="wheel right one" x="38" y="15" width="5" height="13" rx="2" />
        <rect class="wheel left two" x="1" y="46" width="5" height="13" rx="2" />
        <rect class="wheel right two" x="38" y="46" width="5" height="13" rx="2" />
      </svg>`;

  const element = document.createElement("article");
  element.className = `parking-space ${statusClass}`;
  element.setAttribute(
    "aria-label",
    `Vaga ${formatSpaceNumber(space.id)}: ${statusLabel}`
  );

  element.innerHTML = `
    <span class="space-symbol ${statusClass}" aria-hidden="true">${symbol}</span>
    <strong class="space-number">Vaga ${formatSpaceNumber(space.id)}</strong>
    <span class="space-status">${statusLabel}</span>
  `;

  return element;
}

function updateSummary() {
  const availableCount = parkingSpaces.filter(
    (space) => space.available
  ).length;

  totalSpaces.textContent = parkingSpaces.length;
  availableSpaces.textContent = availableCount;
  occupiedSpaces.textContent = parkingSpaces.length - availableCount;

}

function renderParkingSpaces() {
  const fragment = document.createDocumentFragment();

  parkingSpaces.forEach((space) => {
    fragment.appendChild(createParkingSpace(space));
  });

  parkingGrid.replaceChildren(fragment);
  updateSummary();
}

renderParkingSpaces();
updateThemeButton(document.documentElement.dataset.theme);
themeToggle.addEventListener("click", toggleTheme);
