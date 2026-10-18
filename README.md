# Political Intelligence Dashboard: Secunderabad Parliamentary Constituency (PC-08)

A responsive, high-performance political intelligence web application delivering retrospective electoral analytics, demographic breakdowns, and predictive indicators for the Secunderabad Lok Sabha constituency in Telangana.

---

## 📌 Project Overview

This dashboard synthesizes and visualizes granular electoral data across **5 Parliamentary election cycles (2004–2024)** and **3 State Assembly election cycles (2014, 2018, 2023)** covering all 7 assembly segments under Secunderabad PC.

### Key Capabilities
- **Demographic & Electors Profiling:** High-level summary cards tracking total electors (~2.1M), urban/rural split, literacy rate, and incumbent representation.
- **Parliamentary Analytics:** Dynamic tabbed toggles across 5 Lok Sabha cycles showing candidate vote counts, victory margins, and real-time vote share percentages embedded via Chart.js plugins.
- **Assembly Segment Breakdown:** Interactive visual breakdown of the 7 assembly constituencies (*Musheerabad, Amberpet, Khairatabad, Jubilee Hills, Sanathnagar, Nampally, Secunderabad*) showing party dominance and winning margins.
- **Forward-Looking Indicators:** Voter behavior insights, turnout trend analysis, and mock dynamic candidate profiling architectures.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, Chart.js, react-chartjs-2, chartjs-plugin-datalabels
- **Backend:** Node.js, Express, TypeScript, tsx, Helmet, CORS
- **Data Layer:** Structured, validated relational JSON models conforming to official ECI statistical formats
- **Deployment Targets:** Vercel (Frontend SPA), Render / Railway (Backend API)

```
[ Client: React + Vite SPA ] 
            │
      REST HTTP (JSON)
            │
            ▼
[ Backend: Express + TypeScript API ] 
            │
     Data Controller
            │
            ▼
[ Structured Electoral Datasets (secunderabad_election_data_v2.json) ]
```

---

## 🚀 Quickstart & Local Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 1. Backend Setup
```bash
cd political-dashboard-api
npm install
npm run dev
```
The API server will launch at `http://localhost:5000`.

### 2. Frontend Setup
In a new terminal window:
```bash
cd dashboard-ui
npm install
npm run dev
```
The application will launch at `http://localhost:5173`.

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status check |
| `GET` | `/api/constituency/profile` | Constituency demographics & assembly segment metadata |
| `GET` | `/api/elections/parliamentary` | 5 election cycles (2004–2024) of Lok Sabha data |
| `GET` | `/api/elections/assembly` | 3 election cycles (2014, 2018, 2023) of Vidhan Sabha segment outcomes |

---

## 📊 Data Sources & Analytical Methodology

### Data Sources
1. **Election Commission of India (ECI):** Statistical Reports on General Elections (2004, 2009, 2014, 2019, 2024).
2. **Chief Electoral Officer (CEO), Telangana:** State Legislative Assembly Statistical Reports (2014, 2018, 2023).
3. **Census of India:** District Census Handbook (Hyderabad District) for baseline demographic indicators.
4. **IndiaVotes Archive:** Validated candidate-level vote counts and polling statistics.

### Methodology & Calculations
- **Vote Share Percentage:**
  $$\text{Vote Share (\%)} = \left( \frac{\text{Candidate Valid Votes}}{\text{Total Valid Votes Polled}} \right) \times 100$$
- **Seat Conversion Ratio:** Aggregated frequency of Assembly segments won per party relative to the total 7 segments.
- **Turnout Percentage:** Total votes polled divided by registered electors at the time of the respective electoral roll revision.

---

## 🛡️ Security, Performance & Scalability Considerations

- **Security Measures:** 
  - Helmet middleware enabled to enforce secure HTTP headers (XSS Filter, HSTS, frameguard).
  - Explicit CORS whitelisting preventing unauthorized cross-origin requests.
  - Sanitized input handling on all API queries.
- **Performance Optimization:**
  - Client-side code splitting via Vite bundler.
  - Optimized Chart.js re-rendering lifecycle using native canvas manipulation.
  - Responsive SVG and vector layout rendering with near-zero CLS (Cumulative Layout Shift).
- **Scalability:**
  - Decoupled REST architecture allowing zero-downtime microservice migration.
  - Schema-ready JSON data structure directly portable to MongoDB Atlas or PostgreSQL schemas.

