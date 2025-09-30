import React from "react";
import { createRoot } from "react-dom/client";

// Helper function to format large numbers into a readable currency format
const formatCurrency = (value: number): string => {
  const billions = value / 1_000_000_000;
  return `Rp ${billions.toFixed(2).replace('.', ',')} Miliar`;
};

// --- SVG Icons ---

const AssetIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 12m18 0h-6.52a4.5 4.5 0 0 0-8.96 0H3" />
    </svg>
);

const ProfitIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
);

const DepositIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c1.356 0 2.682-.25 3.9-1.22M12 21c-1.356 0-2.682-.25-3.9-1.22m0-12.793a9.004 9.004 0 0 1 7.8 0M12 3v.01M12 6h.01M12 9h.01M12 12h.01M12 15h.01" />
    </svg>
);

const LoanIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


// --- Components ---

const InfographicHeader = () => (
    <header className="infographic-header">
        <h1>Infografis Kinerja Keuangan</h1>
        <h2>PT Bank Perekonomian Rakyat Tata Anjung Sari</h2>
        <p>Posisi Laporan: Juni 2025</p>
    </header>
);

const HighlightCard = ({ icon, title, amount, comparison, isProfit = false }) => (
    <div className="card">
        {icon}
        <h3>{title}</h3>
        <p className="amount">{amount}</p>
        {isProfit ? (
             <p className="comparison">
                <span className="arrow up">▲</span> Jauh membaik dari rugi Rp 369 Ribu di Juni 2024
            </p>
        ) : (
            <p className="comparison">
                <span className="arrow up">▲</span> {comparison}
            </p>
        )}
    </div>
);

const FinancialHighlights = () => (
    <section>
        <h2 className="section-title">Kinerja Keuangan Utama</h2>
        <div className="highlights">
            <HighlightCard 
                icon={<AssetIcon />}
                title="Total Aset"
                amount={formatCurrency(95881007702)}
                comparison="Naik dari Rp 83,00 Miliar di Juni 2024"
            />
             <HighlightCard 
                icon={<ProfitIcon />}
                title="Laba Tahun Berjalan"
                amount={formatCurrency(1462393720)}
                comparison=""
                isProfit={true}
            />
            <HighlightCard 
                icon={<DepositIcon />}
                title="Total Simpanan"
                amount={formatCurrency(85566135100)} /* 16.99 M + 68.57 M */
                comparison="Naik dari Rp 76,04 Miliar di Juni 2024"
            />
            <HighlightCard 
                icon={<LoanIcon />}
                title="Kredit Diberikan"
                amount={formatCurrency(69128164631)}
                comparison="Naik dari Rp 61,93 Miliar di Juni 2024"
            />
        </div>
    </section>
);

const RatioCard = ({ value, title, description }) => (
    <div className="ratio-card">
        <div className="ratio-value">{value}</div>
        <div className="ratio-details">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

const KeyRatios = () => (
     <section>
        <h2 className="section-title">Rasio Keuangan Penting</h2>
        <div className="ratios">
            <RatioCard value="17,80%" title="KPMM (Capital Adequacy)" description="Rasio kecukupan modal yang sangat sehat." />
            <RatioCard value="3,07%" title="ROA (Return on Asset)" description="Tingkat profitabilitas dan efisiensi aset." />
            <RatioCard value="76,07%" title="LDR (Loan to Deposit)" description="Kemampuan menyalurkan kredit dari dana pihak ketiga." />
            <RatioCard value="75,91%" title="BOPO (Efisiensi Operasional)" description="Makin rendah rasio ini, makin efisien operasional bank." />
        </div>
    </section>
);

const ownershipData = [
    { name: "I Ketut Artana", percentage: 59.38, colorClass: "primary" },
    { name: "Ni Wayan Mastriani", percentage: 25.14, colorClass: "secondary" },
    { name: "Pemegang Saham Lainnya", percentage: 15.48, colorClass: "tertiary" }
];

const DonutChart = ({ data }) => {
    const size = 180;
    const strokeWidth = 25;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let cumulativePercent = 0;

    return (
        <svg className="donut-chart" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <g transform={`rotate(-90 ${size/2} ${size/2})`}>
                {data.map((item, index) => {
                    const dashoffset = circumference * (1 - (item.percentage / 100));
                    const rotate = cumulativePercent * 3.6; // 1% = 3.6 degrees
                    cumulativePercent += item.percentage;
                    return (
                        <circle
                            key={index}
                            className={`donut-segment segment-${item.colorClass}`}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="transparent"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeDashoffset={dashoffset}
                            transform={`rotate(${rotate} ${size/2} ${size/2})`}
                        />
                    );
                })}
            </g>
            <text className="donut-center-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
                Saham
            </text>
        </svg>
    );
};

const OwnershipStructure = () => (
    <section className="ownership">
         <h2 className="section-title">Struktur Kepemilikan Saham</h2>
         <div className="ownership-content">
            <DonutChart data={ownershipData} />
            <div className="ownership-legend">
                {ownershipData.map((item, index) => (
                    <div className="legend-item" key={index}>
                        <div className={`legend-swatch swatch-${item.colorClass}`}></div>
                        <div className="legend-info">
                            <span className="legend-name">{item.name}</span>
                            <span className="legend-percentage">{item.percentage}%</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    </section>
);

const App = () => {
    return (
        <div className="infographic-container">
            <InfographicHeader />
            <main className="infographic-body">
                <FinancialHighlights />
                <KeyRatios />
                <OwnershipStructure />
            </main>
            <footer className="infographic-footer">
                Data diolah dari Laporan Publikasi Triwulanan per Juni 2025. Angka disajikan dalam bentuk ringkas untuk kemudahan informasi.
            </footer>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);