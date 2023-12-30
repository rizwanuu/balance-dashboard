import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export function DataTable({ tableData }) {
    return (
        <table className="w-11/12 border-none text-right"
            style={{
                border: "none"
            }}
        >
            <thead
                style={{
                    background: "#F4F5F6",
                    border: "1px solid #D6D8DC",
                }}
            >
                <tr
                    style={{
                        marginBottom: "24px"
                    }} >
                    {tableData?.tHead.map((head) => (
                        <th key={head} className="p-3"
                            style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                marginBottom: "1rem"
                            }}
                        >{head}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="border-none "
                style={{
                    background: "#F4F5F6",
                    border: "1px solid #D6D8DC",
                }}>
                {tableData?.tRow?.map((item, index) => (
                    <tr key={index} className="border-none ">
                        <td className="p-3">
                            {item}
                        </td>
                        <td className="p-3">
                            {item}
                        </td>
                        <td className="p-3">
                            {item}
                        </td>
                        <td className="p-3">
                            {item}
                        </td>

                        <td className="p-3">
                            {item}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}