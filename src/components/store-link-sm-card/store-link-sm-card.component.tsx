import { Card } from "antd";

import { formatNumber } from '../../shared/utils/utils';

interface Props {
    text: string;
    value: number;
    isMoney?: boolean;
}

export default function StoreLinkSmCard({ text, value, isMoney }: Props) {
    return (
        <Card>
            <p className="card-text-regular">{text}</p>
            <h2>{isMoney ? "₹" : ""}{formatNumber(value)}</h2>
        </Card>
    )
}