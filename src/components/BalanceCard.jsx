import trendImg from '../assets/trend-up.svg'

export function BalanceCard() {
    return (

        <div className="rounded" style={{
            padding: "7px",
            border: "1px solid #e9e9e9",
            width: "14rem",
        }}>
            <p style={{
                fontSize: "12px",
                color: "#475467",
                fontWeight: "500",
                marginBottom: "5px"
            }}>Current Balance</p>
            <p
                style={{
                    fontSize: "16px",
                    color: "#475467",
                    fontWeight: "500",
                    marginBottom: "5px"
                }}
            >€ 20,904.89</p>
            <div className='flex'>
                <div className='flex mr-2' style={{
                    color: "#17B26A",
                }} >
                    <img src={trendImg} alt="trendImg" /> <span
                        style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            marginLeft: "4px",
                        }}
                    >100</span>
                </div>
                <p style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#475467",
                }}>vs last month</p>
            </div>
        </div>
    );
} 