// Data for web frameworks usage
const frameworkData = {
  labels: [
    "Node.js",
    "React.js",
    "jQuery",
    "Express",
    "Angular"
  ],
  datasets: [{
    label: "Usage (%)",
    data: [47.12, 42.62, 28.57, 22.99, 20.39],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
  }]
};

// Initialize Chart
const ctx = document.getElementById('frameworkChart').getContext('2d');
const frameworkChart = new Chart(ctx, {
  type: 'bar',
  data: frameworkData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Usage (%)'
        }
      }
    }
  }
});
