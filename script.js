// Fetch data and initialize charts
async function fetchData() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data.developers;
}

// Initialize charts
let genderChart;
let ageChart;

function initCharts(data) {
  const genderData = calculateGenderData(data);
  const ageData = calculateAgeData(data);

  // Gender Chart
  const genderCtx = document.getElementById('genderChart').getContext('2d');
  genderChart = new Chart(genderCtx, {
    type: 'pie',
    data: {
      labels: Object.keys(genderData),
      datasets: [{
        label: 'Gender Distribution',
        data: Object.values(genderData),
        backgroundColor: ['#3498db', '#e74c3c']
      }]
    }
  });

  // Age Chart
  const ageCtx = document.getElementById('ageChart').getContext('2d');
  ageChart = new Chart(ageCtx, {
    type: 'bar',
    data: {
      labels: Object.keys(ageData),
      datasets: [{
        label: 'Age Distribution',
        data: Object.values(ageData),
        backgroundColor: '#2ecc71'
      }]
    }
  });
}

// Calculate data for charts
function calculateGenderData(data) {
  const genderCounts = data.reduce((acc, dev) => {
    acc[dev.gender] = (acc[dev.gender] || 0) + 1;
    return acc;
  }, {});
  return genderCounts;
}

function calculateAgeData(data) {
  const ageCounts = data.reduce((acc, dev) => {
    acc[dev.age_range] = (acc[dev.age_range] || 0) + 1;
    return acc;
  }, {});
  return ageCounts;
}

// Apply filters and update charts
async function applyFilters() {
  const genderFilter = document.getElementById('gender-filter').value;
  const ageFilter = document.getElementById('age-filter').value;
  const data = await fetchData();

  const filteredData = data.filter(dev => {
    const genderMatch = genderFilter === 'all' || dev.gender === genderFilter;
    const ageMatch = ageFilter === 'all' || dev.age_range === ageFilter;
    return genderMatch && ageMatch;
  });

  updateCharts(filteredData);
}

// Update charts with new data
function updateCharts(data) {
  const genderData = calculateGenderData(data);
  const ageData = calculateAgeData(data);

  genderChart.data.datasets[0].data = Object.values(genderData);
  genderChart.update();

  ageChart.data.datasets[0].data = Object.values(ageData);
  ageChart.update();
}

// Load initial data and set up charts
fetchData().then(initCharts);
