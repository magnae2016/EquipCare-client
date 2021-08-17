import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
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
                    letterSpacing="-0.3"
                >
                    {payload.value.substring(5).replaceAll('-', '.')}
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
                    letterSpacing="-0.3"
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

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div>
                <div className="bb-tooltip-container">
                    <table className="bb-tooltip">
                        <tbody>
                            <tr>
                                <th colSpan="2">{`${label.replaceAll(
                                    '-',
                                    '.'
                                )}`}</th>
                            </tr>
                            <tr className="bb-tooltip-name-line1">
                                <td className="value" colSpan="2">
                                    {`${payload[0].value.toLocaleString()}건`}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return null
}

function LineGraph({ data }) {
    return (
        <LineChart
            width={2055}
            height={254}
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
                dataKey="DATE"
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
                width={65}
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
            <Tooltip
                content={<CustomTooltip />}
                active={true}
                cursor={{
                    opacity: '0.25',
                    stroke: '#77a4f0',
                    strokeWidth: 1,
                    strokeDasharray: '3 2',
                }}
            />
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
    )
}

export default LineGraph
