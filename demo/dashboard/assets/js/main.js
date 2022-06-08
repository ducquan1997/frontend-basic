// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let topbar = document.querySelector(".topbar");
let orderDetails = document.querySelector(".order-details")

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  topbar.classList.toggle("active");
  orderDetails.classList.toggle("active");
};

// Hovered class in selected List item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => {
  item.addEventListener("mouseover", activeLink);
});

// Chart JS www.chartjs.org
// Traffic Source Chart
const trafficSourceChart = document
  .getElementById("trafficSource")
  .getContext("2d");
const trafficSource = new Chart(trafficSourceChart, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Amazon", "Shoppe", "Lazada"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1600, 1900, 1000, 1500, 1200],
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(153, 102, 255, 0.9)",
        ],
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)'
        // ],
        // borderWidth: 1
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//Earnings Chart
const earningsChart = document.getElementById("earnings").getContext("2d");
const earnings = new Chart(earningsChart, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Decembe",
    ],
    datasets: [
      {
        label: "Earning",
        data: [
          1200, 1900, 3300, 1700, 2700, 3100, 4700, 2540, 4400, 2250, 4255,
          3700,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1
      },
    ],
  },
  options: {
    responsive: true,
  },
});
