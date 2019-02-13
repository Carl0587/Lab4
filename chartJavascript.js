
var canvas = document.getElementById('soda-chart')
console.log(canvas)
var ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    axisY :{
        crosshair :{
            enable: true
        }
    },
    data: {
        labels: ["Verrazano-Narrows", "Golden Gate", "Mackinac", "George Washington", "Tacoma Narrows"],
        datasets: [{
            label: 'Spam(meters)',
            data: [1298.4, 1280.2, 1158, 1067, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

