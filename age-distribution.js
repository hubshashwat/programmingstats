// Data for age distribution
const ageData = {
  labels: [
    "Under 18 years old",
    "18-24 years old",
    "25-34 years old",
    "35-44 years old",
    "45-54 years old",
    "55-64 years old",
    "65 years or older",
    "Prefer not to say"
  ],
  datasets: [{
    label: "Age Distribution (%)",
    data: [0.5, 16.8, 42, 25.8, 10.1, 3.8, 0.7, 0.3],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#36A2EB', '#FF6384']
  }]
};

// Initialize Chart
const ctx = document.getElementById('ageChart').getContext('2d');
const ageChart = new Chart(ctx, {
  type: 'bar',
  data: ageData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage (%)'
        }
      }
    }
  }
});
