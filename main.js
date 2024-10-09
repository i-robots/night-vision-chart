import './style.css'
import { NightVision } from 'night-vision'

document.querySelector('#app').innerHTML = `
<style>
body {
    background-color: #0c0d0e;
}
</style>
<h1>Night Vision Charts</h1>
<div id="chart-container"></div>
`
// Generate some random data
function data() {
    return Array(30).fill(1).map((x, i) => [
        new Date(`${i+1} Nov 2022 GMT+0000`).getTime(),
        i * Math.random()
    ])
}
let chart = new NightVision('chart-container')
chart.data = {
    panes: [{
        overlays: [{
            name: 'APE Stock',
            type: 'Spline',
            data: data(),
            settings: {
                precision: 2
            }
        }]
    }]
}