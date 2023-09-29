import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getStoredItems } from "../localstorage";
import { useLoaderData } from "react-router-dom";

const COLORS = ["#00c49f", "#ff444a"];

const Statistics = () => {
    const donationCount = getStoredItems();
    const cards = useLoaderData();

    const data = [
        { name: "Donations", value: donationCount.length },
        { name: "Remaining", value: cards.length - donationCount.length },
    ];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <>
        <div className="flex justify-center items-center bg-white mb-5">
            <div className="">
                <PieChart width={300} height={500}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-full mx-auto">
                    <p>Your Donation</p>
                    <div className="bg-[#00c49f] rounded-xl"></div>
                    <p>Total Donation</p>
                    <div className="bg-[#ff444a] rounded-xl"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Statistics;
