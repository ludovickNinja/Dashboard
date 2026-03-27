const dashboardData = {
  updatedAt: new Date(),
  orders: {
    pending: 186,
    assignedFactory: 129,
    inHouse: 57,
  },
  assignmentHistoryDaily: [
    { date: "2026-03-25", locations: { inHouse: 5, factoryA: 15, factoryB: 25, factoryC: 18 } },
    { date: "2026-03-24", locations: { inHouse: 7, factoryA: 14, factoryB: 22, factoryC: 17 } },
    { date: "2026-03-23", locations: { inHouse: 6, factoryA: 13, factoryB: 24, factoryC: 16 } },
    { date: "2026-03-22", locations: { inHouse: 4, factoryA: 11, factoryB: 20, factoryC: 14 } },
    { date: "2026-03-21", locations: { inHouse: 6, factoryA: 12, factoryB: 18, factoryC: 13 } },
    { date: "2026-03-20", locations: { inHouse: 5, factoryA: 10, factoryB: 19, factoryC: 12 } },
    { date: "2026-03-19", locations: { inHouse: 4, factoryA: 9, factoryB: 17, factoryC: 11 } },
    { date: "2026-03-18", locations: { inHouse: 3, factoryA: 11, factoryB: 16, factoryC: 12 } },
    { date: "2026-03-17", locations: { inHouse: 5, factoryA: 8, factoryB: 15, factoryC: 10 } },
    { date: "2026-03-16", locations: { inHouse: 4, factoryA: 9, factoryB: 14, factoryC: 11 } },
    { date: "2026-03-15", locations: { inHouse: 6, factoryA: 11, factoryB: 13, factoryC: 10 } },
    { date: "2026-03-14", locations: { inHouse: 3, factoryA: 10, factoryB: 12, factoryC: 9 } },
    { date: "2026-03-13", locations: { inHouse: 4, factoryA: 9, factoryB: 15, factoryC: 10 } },
    { date: "2026-03-12", locations: { inHouse: 5, factoryA: 8, factoryB: 16, factoryC: 11 } },
    { date: "2026-03-11", locations: { inHouse: 4, factoryA: 7, factoryB: 14, factoryC: 10 } },
    { date: "2026-03-10", locations: { inHouse: 6, factoryA: 9, factoryB: 15, factoryC: 11 } },
    { date: "2026-03-09", locations: { inHouse: 4, factoryA: 10, factoryB: 13, factoryC: 9 } },
    { date: "2026-03-08", locations: { inHouse: 3, factoryA: 8, factoryB: 14, factoryC: 8 } },
    { date: "2026-03-07", locations: { inHouse: 2, factoryA: 7, factoryB: 11, factoryC: 8 } },
    { date: "2026-03-06", locations: { inHouse: 3, factoryA: 8, factoryB: 12, factoryC: 9 } },
    { date: "2026-03-05", locations: { inHouse: 5, factoryA: 10, factoryB: 14, factoryC: 10 } },
    { date: "2026-03-04", locations: { inHouse: 3, factoryA: 6, factoryB: 11, factoryC: 8 } },
    { date: "2026-03-03", locations: { inHouse: 4, factoryA: 9, factoryB: 12, factoryC: 9 } },
    { date: "2026-03-02", locations: { inHouse: 5, factoryA: 10, factoryB: 13, factoryC: 10 } },
    { date: "2026-03-01", locations: { inHouse: 4, factoryA: 8, factoryB: 12, factoryC: 9 } },
    { date: "2026-02-28", locations: { inHouse: 3, factoryA: 7, factoryB: 10, factoryC: 7 } },
    { date: "2026-02-27", locations: { inHouse: 2, factoryA: 6, factoryB: 9, factoryC: 6 } },
    { date: "2026-02-26", locations: { inHouse: 3, factoryA: 8, factoryB: 11, factoryC: 7 } },
    { date: "2026-02-25", locations: { inHouse: 4, factoryA: 9, factoryB: 10, factoryC: 8 } },
    { date: "2026-02-24", locations: { inHouse: 3, factoryA: 8, factoryB: 9, factoryC: 7 } },
  ],
  assignedOrders: {
    factoryA: [
      { orderId: "A-1204", customer: "Northline", metal: "Silver", pieces: 22, dueDate: "2026-03-29", status: "Cutting" },
      { orderId: "A-1207", customer: "Vantage", metal: "Gold", pieces: 16, dueDate: "2026-03-30", status: "Setting" },
      { orderId: "A-1211", customer: "Crest", metal: "Platinum", pieces: 8, dueDate: "2026-04-01", status: "Polish" },
      { orderId: "A-1216", customer: "Monroe", metal: "Gold", pieces: 14, dueDate: "2026-04-02", status: "Casting" },
    ],
    factoryB: [
      { orderId: "B-903", customer: "Beacon", metal: "Silver", pieces: 30, dueDate: "2026-03-28", status: "Casting" },
      { orderId: "B-909", customer: "Luma", metal: "Gold", pieces: 20, dueDate: "2026-03-30", status: "Stone set" },
      { orderId: "B-914", customer: "Arbor", metal: "Platinum", pieces: 12, dueDate: "2026-04-03", status: "QC" },
      { orderId: "B-915", customer: "Plume", metal: "Gold", pieces: 18, dueDate: "2026-04-04", status: "Polish" },
    ],
    factoryC: [
      { orderId: "C-440", customer: "Brio", metal: "Silver", pieces: 26, dueDate: "2026-03-29", status: "Casting" },
      { orderId: "C-445", customer: "Merit", metal: "Gold", pieces: 17, dueDate: "2026-03-31", status: "Stone set" },
      { orderId: "C-452", customer: "Avery", metal: "Platinum", pieces: 9, dueDate: "2026-04-02", status: "QC" },
      { orderId: "C-457", customer: "Dalton", metal: "Silver", pieces: 15, dueDate: "2026-04-05", status: "Polish" },
    ],
    inHouse: [
      { orderId: "H-110", customer: "Atelier", metal: "Silver", pieces: 14, dueDate: "2026-03-28", status: "Design" },
      { orderId: "H-114", customer: "Atelier", metal: "Gold", pieces: 12, dueDate: "2026-03-30", status: "Bench" },
      { orderId: "H-119", customer: "Private", metal: "Platinum", pieces: 7, dueDate: "2026-04-01", status: "Stone set" },
      { orderId: "H-122", customer: "Private", metal: "Gold", pieces: 10, dueDate: "2026-04-03", status: "QC" },
    ],
  },
  weeklyFactoryPieces: [
    {
      week: "2026-W01",
      factoryA: 420,
      factoryB: 370,
      factoryC: 290,
      rejectionPct: 3.9,
      onTimePct: 91.2,
    },
    {
      week: "2026-W02",
      factoryA: 460,
      factoryB: 410,
      factoryC: 310,
      rejectionPct: 3.5,
      onTimePct: 92.8,
    },
    {
      week: "2026-W03",
      factoryA: 510,
      factoryB: 395,
      factoryC: 335,
      rejectionPct: 3.2,
      onTimePct: 93.5,
    },
    {
      week: "2026-W04",
      factoryA: 545,
      factoryB: 430,
      factoryC: 360,
      rejectionPct: 3,
      onTimePct: 94.1,
    },
    {
      week: "2026-W05",
      factoryA: 600,
      factoryB: 455,
      factoryC: 390,
      rejectionPct: 2.8,
      onTimePct: 95.3,
    },
    {
      week: "2026-W06",
      factoryA: 640,
      factoryB: 490,
      factoryC: 420,
      rejectionPct: 2.6,
      onTimePct: 96.4,
    },
  ],
};

const LOCATION_LABELS = {
  factoryA: "Factory 1",
  factoryB: "Factory 2",
  factoryC: "Factory 3",
  inHouse: "In House",
};

const TIMELINE_OPTIONS = [
  { value: "today", label: "Today", days: 1 },
  { value: "last7", label: "Last 7 Days", days: 7 },
  { value: "last14", label: "Last 14 Days", days: 14 },
  { value: "last30", label: "Last 30 Days", days: 30 },
];

const PIECE_PROFILES = {
  factoryA: { silver: 0.32, gold: 0.4, platinum: 0.28 },
  factoryB: { silver: 0.27, gold: 0.38, platinum: 0.35 },
  factoryC: { silver: 0.3, gold: 0.34, platinum: 0.36 },
  inHouse: { silver: 0.24, gold: 0.35, platinum: 0.41 },
};

const dashboardState = {
  timeline: "today",
  activeLocation: null,
};

function formatNumber(value) {
  return new Intl.NumberFormat().format(value);
}

function formatPercentage(value) {
  return `${value.toFixed(1)}%`;
}

function calculateTotals(weekRow) {
  return weekRow.factoryA + weekRow.factoryB + weekRow.factoryC;
}

function growthPercentage(current, previous) {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
}

function getWeeklyDataNewestFirst() {
  return [...dashboardData.weeklyFactoryPieces].sort((a, b) =>
    b.week.localeCompare(a.week)
  );
}

function parseISODate(dateText) {
  return new Date(`${dateText}T00:00:00`);
}

function getSortedAssignmentRows() {
  return [...dashboardData.assignmentHistoryDaily].sort((a, b) => b.date.localeCompare(a.date));
}

function getRowsForTimeline(timelineKey) {
  const option = TIMELINE_OPTIONS.find((item) => item.value === timelineKey) || TIMELINE_OPTIONS[0];
  return getSortedAssignmentRows().slice(0, option.days);
}

function aggregateLocations(rows) {
  return rows.reduce(
    (totals, row) => {
      Object.entries(row.locations).forEach(([locationKey, value]) => {
        totals[locationKey] = (totals[locationKey] || 0) + value;
      });
      return totals;
    },
    { factoryA: 0, factoryB: 0, factoryC: 0, inHouse: 0 }
  );
}

function splitByMetal(total, profile) {
  const silver = Math.round(total * profile.silver);
  const gold = Math.round(total * profile.gold);
  const platinum = Math.max(total - silver - gold, 0);
  return { silver, gold, platinum };
}

function getTimelineSummary() {
  const rows = getRowsForTimeline(dashboardState.timeline);
  const totals = aggregateLocations(rows);

  return Object.keys(LOCATION_LABELS).map((locationKey) => ({
    locationKey,
    label: LOCATION_LABELS[locationKey],
    total: totals[locationKey] || 0,
    pieces: splitByMetal(totals[locationKey] || 0, PIECE_PROFILES[locationKey]),
  }));
}

function renderKpis() {
  document.getElementById("pendingOrders").textContent = formatNumber(
    dashboardData.orders.pending
  );
  document.getElementById("factoryAssigned").textContent = formatNumber(
    dashboardData.orders.assignedFactory
  );
  document.getElementById("inHouse").textContent = formatNumber(
    dashboardData.orders.inHouse
  );

  document.getElementById(
    "lastUpdated"
  ).textContent = `Last updated: ${dashboardData.updatedAt.toLocaleString()}`;
}

function getTimelineLabel() {
  return TIMELINE_OPTIONS.find((item) => item.value === dashboardState.timeline)?.label || "Today";
}

function renderAssignedPanel() {
  const panelBody = document.getElementById("assignedPanelBody");
  panelBody.innerHTML = "";

  const summary = getTimelineSummary();

  const cardsMarkup = summary
    .map((location) => {
      const isActive = dashboardState.activeLocation === location.locationKey;
      return `
        <button class="factory-card ${isActive ? "active" : ""}" data-location="${location.locationKey}" type="button">
          <div class="factory-card-title-row">
            <h3>${location.label}</h3>
            <strong>${formatNumber(location.total)}</strong>
          </div>
          <div class="tier-list">
            <div class="tier-row"><span>Silver</span><strong>${formatNumber(location.pieces.silver)}</strong></div>
            <div class="tier-row"><span>Gold</span><strong>${formatNumber(location.pieces.gold)}</strong></div>
            <div class="tier-row"><span>Platinum</span><strong>${formatNumber(location.pieces.platinum)}</strong></div>
          </div>
        </button>
      `;
    })
    .join("");

  panelBody.innerHTML = `
    <div class="timeline-header">
      <label for="timelineSelect">Timeline</label>
      <select id="timelineSelect" class="timeline-select">
        ${TIMELINE_OPTIONS.map(
          (option) => `<option value="${option.value}" ${option.value === dashboardState.timeline ? "selected" : ""}>${option.label}</option>`
        ).join("")}
      </select>
    </div>
    <div class="factory-card-grid">${cardsMarkup}</div>
    <section id="orderDetails" class="order-details empty">
      <h3>Assigned orders detail</h3>
      <p>Select a factory or in-house box to see assigned orders for ${getTimelineLabel().toLowerCase()}.</p>
    </section>
  `;
}

function renderOrderDetail(locationKey) {
  const detail = document.getElementById("orderDetails");
  if (!detail) return;

  const locationLabel = LOCATION_LABELS[locationKey];
  const orders = dashboardData.assignedOrders[locationKey] || [];

  if (!locationKey || !orders.length) {
    detail.className = "order-details empty";
    detail.innerHTML = `
      <h3>Assigned orders detail</h3>
      <p>No assigned orders to show for this selection.</p>
    `;
    return;
  }

  const rows = orders
    .map(
      (order) => `
        <tr>
          <td>${order.orderId}</td>
          <td>${order.customer}</td>
          <td>${order.metal}</td>
          <td>${formatNumber(order.pieces)}</td>
          <td>${order.status}</td>
          <td>${order.dueDate}</td>
        </tr>
      `
    )
    .join("");

  detail.className = "order-details";
  detail.innerHTML = `
    <h3>${locationLabel} · Assigned Orders (${getTimelineLabel()})</h3>
    <table class="order-table">
      <thead>
        <tr>
          <th>Order</th>
          <th>Customer</th>
          <th>Metal</th>
          <th>Pieces</th>
          <th>Status</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function bindAssignedPanelEvents() {
  const panelBody = document.getElementById("assignedPanelBody");
  panelBody.addEventListener("change", (event) => {
    if (event.target.id !== "timelineSelect") return;
    dashboardState.timeline = event.target.value;
    dashboardState.activeLocation = null;
    renderAssignedPanel();
  });

  panelBody.addEventListener("click", (event) => {
    const card = event.target.closest(".factory-card");
    if (!card) return;

    dashboardState.activeLocation = card.dataset.location;
    renderAssignedPanel();
    renderOrderDetail(dashboardState.activeLocation);
  });
}

function renderWeeklyBars() {
  const container = document.getElementById("weeklyBars");
  container.innerHTML = "";

  const weeklyData = getWeeklyDataNewestFirst();
  const totals = weeklyData.map(calculateTotals);
  const max = Math.max(...totals);

  weeklyData.forEach((weekData, index) => {
    const total = totals[index];
    const width = (total / max) * 100;

    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span>${weekData.week}</span>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${width}%"></div>
      </div>
      <strong>${formatNumber(total)}</strong>
    `;

    container.appendChild(row);
  });
}

function renderGrowthTrend() {
  const container = document.getElementById("growthTrend");
  const weekly = [...getWeeklyDataNewestFirst()].reverse();
  const totals = weekly.map(calculateTotals);

  const width = 760;
  const height = 240;
  const padding = 36;

  const maxY = Math.max(...totals) * 1.1;
  const xStep = (width - padding * 2) / (totals.length - 1);

  const points = totals.map((value, i) => {
    const x = padding + i * xStep;
    const y = height - padding - (value / maxY) * (height - padding * 2);
    return { x, y, value, week: weekly[i].week };
  });

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");

  const yTicks = 4;
  let gridLines = "";
  for (let i = 0; i <= yTicks; i += 1) {
    const y = padding + ((height - padding * 2) / yTicks) * i;
    gridLines += `<line class="grid-line" x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" />`;
  }

  const pointsMarkup = points
    .map(
      (p) => `
      <circle class="point" cx="${p.x}" cy="${p.y}" r="4" />
      <text x="${p.x}" y="${height - 10}" text-anchor="middle" fill="#6b7280" font-size="12">${p.week.slice(-3)}</text>
      <text x="${p.x}" y="${p.y - 10}" text-anchor="middle" fill="#1f2937" font-size="11">${formatNumber(p.value)}</text>
    `
    )
    .join("");

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Weekly total pieces trend">
      ${gridLines}
      <line class="axis" x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" />
      <line class="axis" x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" />
      <path class="trend-line" d="${pathD}" />
      ${pointsMarkup}
    </svg>
  `;
}

function renderWeeklyTable() {
  const body = document.getElementById("weeklyTableBody");
  body.innerHTML = "";

  const weeklyData = getWeeklyDataNewestFirst();
  const rows = weeklyData.map((week, index, all) => {
    const total = calculateTotals(week);
    const previousTotal = index < all.length - 1 ? calculateTotals(all[index + 1]) : 0;
    const growth = growthPercentage(total, previousTotal);
    return { ...week, total, growth };
  });

  rows.forEach((row, index) => {
    const tr = document.createElement("tr");

    const growthText =
      index === rows.length - 1 ? "—" : `${row.growth >= 0 ? "+" : ""}${row.growth.toFixed(1)}%`;
    const growthClass =
      index === rows.length - 1 ? "" : row.growth >= 0 ? "growth-positive" : "growth-negative";

    tr.innerHTML = `
      <td>${row.week}</td>
      <td>${formatNumber(row.factoryA)}</td>
      <td>${formatNumber(row.factoryB)}</td>
      <td>${formatNumber(row.factoryC)}</td>
      <td><strong>${formatNumber(row.total)}</strong></td>
      <td>${formatPercentage(row.rejectionPct)}</td>
      <td>${formatPercentage(row.onTimePct)}</td>
      <td class="${growthClass}">${growthText}</td>
    `;

    body.appendChild(tr);
  });
}

function initDashboard() {
  renderKpis();
  renderAssignedPanel();
  bindAssignedPanelEvents();
  renderWeeklyBars();
  renderGrowthTrend();
  renderWeeklyTable();
}

initDashboard();
