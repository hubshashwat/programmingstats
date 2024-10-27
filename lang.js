// Data for programming languages and their usage percentage
const languageData = {
  labels: ["JavaScript", "HTML/CSS", "SQL", "Python", "TypeScript"],
  datasets: [{
    label: "Popularity (%)",
    data: [65, 55.08, 49.43, 48.07, 34.83],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
  }]
};

// Initialize Chart
const ctx = document.getElementById('languageChart').getContext('2d');
const languageChart = new Chart(ctx, {
  type: 'bar',
  data: languageData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Popularity (%)'
        }
      }
    }
  }
});
