import Chart from "react-apexcharts";

const chartConfig = {
    type: "bar",
    height: 300,
    width:700,  
    series: [
        {
            name: "",
            type: 'column',
            data: [0, 5, 10, 15, 20],
        },
        {
            name: "",
            type: 'column',
            data: [0, 5, 10, 15, 20],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: 'line',
        },
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#55D1BD", '#FA9AB2'],
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 2,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#dddddd",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            title: {
                text: 'Servings',
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#dddddd",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
                formatter: (val) => {
                    return val + 'K'
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 1,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: 0,
            },
            column: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        },
        fill: {
            type: 'pattern',
            opacity: .8,
            pattern: {
                style: ['slantedLines'], 

            },
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: "light",
        },
    },
};

export default function BarChart() {
    return (
        <>
            <div>
                <Chart {...chartConfig} />
            </div>
        </>
    );
} 