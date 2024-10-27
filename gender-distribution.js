// Data for gender distribution
const genderData = {
  labels: ["Men", "Women", "Non-binary/Genderqueer/Non-conforming"],
  datasets: [{
    label: "Gender Distribution (%)",
    data: [91.88, 5.17, 1.67],
    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
  }]
};

// Initialize Chart
const ctx = document.getElementById('genderChart').getContext('2d');
const genderChart = new Chart(ctx, {
  type: 'pie',
  data: genderData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gender Distribution in Software Development'
      }
    }
  }
});
