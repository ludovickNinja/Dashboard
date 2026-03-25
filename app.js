const dashboardData = {
  updatedAt: new Date(),
  orders: {
    pending: 186,
    assignedFactory: 129,
    inHouse: 57,
  },
  assignmentHistoryDaily: [
    { date: "2026-03-25", factories: { inHouse: 5, factoryA: 15, factoryB: 25 } },
    { date: "2026-03-24", factories: { inHouse: 7, factoryA: 14, factoryB: 22 } },
    { date: "2026-03-23", factories: { inHouse: 6, factoryA: 13, factoryB: 24 } },
    { date: "2026-03-22", factories: { inHouse: 4, factoryA: 11, factoryB: 20 } },
    { date: "2026-03-21", factories: { inHouse: 6, factoryA: 12, factoryB: 18 } },
    { date: "2026-03-20", factories: { inHouse: 5, factoryA: 10, factoryB: 19 } },
    { date: "2026-03-19", factories: { inHouse: 4, factoryA: 9, factoryB: 17 } },
    { date: "2026-03-18", factories: { inHouse: 3, factoryA: 11, factoryB: 16 } },
    { date: "2026-03-17", factories: { inHouse: 5, factoryA: 8, factoryB: 15 } },
    { date: "2026-03-16", factories: { inHouse: 4, factoryA: 9, factoryB: 14 } },
    { date: "2026-03-15", factories: { inHouse: 6, factoryA: 11, factoryB: 13 } },
    { date: "2026-03-14", factories: { inHouse: 3, factoryA: 10, factoryB: 12 } },
    { date: "2026-03-13", factories: { inHouse: 4, factoryA: 9, factoryB: 15 } },
    { date: "2026-03-12", factories: { inHouse: 5, factoryA: 8, factoryB: 16 } },
    { date: "2026-03-11", factories: { inHouse: 4, factoryA: 7, factoryB: 14 } },
    { date: "2026-03-10", factories: { inHouse: 6, factoryA: 9, factoryB: 15 } },
    { date: "2026-03-09", factories: { inHouse: 4, factoryA: 10, factoryB: 13 } },
    { date: "2026-03-08", factories: { inHouse: 3, factoryA: 8, factoryB: 14 } },
    { date: "2026-03-07", factories: { inHouse: 2, factoryA: 7, factoryB: 11 } },
    { date: "2026-03-06", factories: { inHouse: 3, factoryA: 8, factoryB: 12 } },
    { date: "2026-03-05", factories: { inHouse: 5, factoryA: 10, factoryB: 14 } },
    { date: "2026-03-04", factories: { inHouse: 3, factoryA: 6, factoryB: 11 } },
    { date: "2026-03-03", factories: { inHouse: 4, factoryA: 9, factoryB: 12 } },
    { date: "2026-03-02", factories: { inHouse: 5, factoryA: 10, factoryB: 13 } },
    { date: "2026-03-01", factories: { inHouse: 4, factoryA: 8, factoryB: 12 } },
    { date: "2026-02-28", factories: { inHouse: 3, factoryA: 7, factoryB: 10 } },
    { date: "2026-02-27", factories: { inHouse: 2, factoryA: 6, factoryB: 9 } },
    { date: "2026-02-26", factories: { inHouse: 3, factoryA: 8, factoryB: 11 } },
    { date: "2026-02-25", factories: { inHouse: 4, factoryA: 9, factoryB: 10 } },
    { date: "2026-02-24", factories: { inHouse: 3, factoryA: 8, factoryB: 9 } },
  ],
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

const FACTORY_LABELS = {
  inHouse: "In House",
  factoryA: "Factory A",
  factoryB: "Factory B",
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

function aggregateFactories(rows) {
  return rows.reduce(
    (totals, row) => {
      Object.entries(row.factories).forEach(([factoryKey, value]) => {
        totals[factoryKey] = (totals[factoryKey] || 0) + value;
      });
      return totals;
    },
    { inHouse: 0, factoryA: 0, factoryB: 0 }
  );
}

function getAssignmentSummaries() {
  const sorted = [...dashboardData.assignmentHistoryDaily].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
  const latest = sorted[0];
  const latestDate = parseISODate(latest.date);

  const weekStart = new Date(latestDate);
  weekStart.setDate(latestDate.getDate() - latestDate.getDay());

  const last7Start = new Date(latestDate);
  last7Start.setDate(latestDate.getDate() - 6);

  const monthStart = new Date(latestDate.getFullYear(), latestDate.getMonth(), 1);

  const todayRows = sorted.filter((row) => row.date === latest.date);
  const weekRows = sorted.filter((row) => parseISODate(row.date) >= weekStart);
  const last7Rows = sorted.filter((row) => parseISODate(row.date) >= last7Start);
  const monthRows = sorted.filter((row) => parseISODate(row.date) >= monthStart);

  return [
    { title: "Assigned Today", totals: aggregateFactories(todayRows) },
    { title: "Assigned This Week", totals: aggregateFactories(weekRows) },
    { title: "Assigned Last 7 Days", totals: aggregateFactories(last7Rows) },
    { title: "Assigned This Month", totals: aggregateFactories(monthRows) },
  ];
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

function renderAssignedPanel() {
  const panelBody = document.getElementById("assignedPanelBody");
  panelBody.innerHTML = "";

  const summaries = getAssignmentSummaries();

  summaries.forEach((summary) => {
    const periodSection = document.createElement("section");
    periodSection.className = "assigned-period";

    const rowsMarkup = Object.entries(FACTORY_LABELS)
      .map(
        ([factoryKey, label]) => `
          <div class="assigned-row">
            <span>${label}</span>
            <strong>${formatNumber(summary.totals[factoryKey] || 0)}</strong>
          </div>
        `
      )
      .join("");

    periodSection.innerHTML = `
      <h3>${summary.title}</h3>
      <div class="assigned-list">${rowsMarkup}</div>
    `;

    panelBody.appendChild(periodSection);
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
  renderWeeklyBars();
  renderGrowthTrend();
  renderWeeklyTable();
}

initDashboard();
