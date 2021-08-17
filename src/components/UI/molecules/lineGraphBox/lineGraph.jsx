import React, { PureComponent } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'
import activeDot from 'assets/images/img_line1.png'

class CustomizedXAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={8}
                    textAnchor="middle"
                    fontSize={13}
                    fill="#8f8f8f"
                >
                    {payload.value.substring(5)}
                </text>
            </g>
        )
    }
}

class CustomizedYAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={4}
                    textAnchor="end"
                    fontSize={13}
                    fill="#8f8f8f"
                >
                    {payload.value.toLocaleString()}
                </text>
            </g>
        )
    }
}

const CustomizedDot = (props) => {
    const { cx, cy } = props

    return (
        <image
            width={16}
            height={16}
            xlinkHref={activeDot}
            x={cx - 8}
            y={cy - 8}
        ></image>
    )
}

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, value } = this.props

        return (
            <text
                x={x}
                y={y}
                dy={-10}
                fill="#0abe16"
                fontSize={13}
                textAnchor="middle"
            >
                {value.toLocaleString()}
            </text>
        )
    }
}

function LineGraph({ data }) {
    return (
        <ResponsiveContainer width={2055} height={254} debounce={1000}>
            <LineChart
                width="100%"
                height="100%"
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid
                    vertical={false}
                    stroke="#f4f6f7"
                    strokeWidth={1}
                    fill="#FFFFFF"
                />
                <XAxis
                    dataKey="DAY"
                    interval={0}
                    padding={{ left: 0, right: 0 }}
                    tickLine={false}
                    tickSize={0}
                    tick={<CustomizedXAxisTick />}
                    stroke="#ecf0f2"
                    strokeWidth={1}
                    scale="band"
                    tickMargin={10}
                />
                <YAxis
                    width={73}
                    type="number"
                    tickCount={9}
                    domain={['auto', 'dataMax + 100']}
                    interval="preserveEnd"
                    padding={{ top: 0, bottom: 0 }}
                    tickLine={false}
                    tickSize={0}
                    strokeWidth={1}
                    stroke="#ecf0f2"
                    tickMargin={10}
                    tick={<CustomizedYAxisTick />}
                />
                <Tooltip />
                <Line
                    type="linear"
                    dataKey="COUNT"
                    activeDot={<CustomizedDot />}
                    label={<CustomizedLabel />}
                    stroke="#0abe16"
                    strokeWidth={2}
                    isAnimationActive={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraph