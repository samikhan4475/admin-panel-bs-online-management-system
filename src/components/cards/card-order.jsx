import { useState, useMemo } from "react";
import { Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { OrderTable } from "../table";
import "./card-order.css";

const OrderCard = ({ showTable = true }) => {
  const [array] = useState([]);

  // ==== dashboard stats ====
  const totals = useMemo(
    () => ({
      totalStudents: 2450,
      enrolled: 1830,
      faculty: 220,
      courses: 150,
      revenue: 424852,
      pendingFees: 120,
      scholarships: 340,
      applicationsToday: 45,
    }),
    []
  );

  // charts
  const revenueTrend = [
    { value: 400 },
    { value: 600 },
    { value: 500 },
    { value: 700 },
    { value: 650 },
    { value: 850 },
    { value: 950 },
    { value: 880 },
  ];

  const deptData = [
    { name: "CS", value: 420 },
    { name: "BBA", value: 310 },
    { name: "ENG", value: 290 },
    { name: "LAW", value: 230 },
  ];

  const COLORS = ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"];

  return (
    <div className="order-card-wrapper">
      {/* ===== MAIN HEADER CARD ===== */}
      <Card className="order-card shadow-lg border-0">
        <Card.Header className="order-card-header">
          <div>
            <h3 className="order-title">Students</h3>
            <h4 className="order-value">
              {totals.enrolled.toLocaleString()} Enrollments
            </h4>
          </div>
        </Card.Header>

        <Card.Body className="order-card-body">
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={revenueTrend}>
              <Line
                dataKey="value"
                stroke="#ffffff"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      {/* ===== TOP STATS ===== */}
      <div className="stats-grid">
        <Card className="stats-card">
          <div className="stats-kpi-label">Total Students</div>
          <div className="stats-kpi-value">{totals.totalStudents}</div>
        </Card>
        <Card className="stats-card">
          <div className="stats-kpi-label">Faculty Members</div>
          <div className="stats-kpi-value">{totals.faculty}</div>
        </Card>
        <Card className="stats-card">
          <div className="stats-kpi-label">Courses Offered</div>
          <div className="stats-kpi-value">{totals.courses}</div>
        </Card>
        <Card className="stats-card">
          <div className="stats-kpi-label">Total Revenue</div>
          <div className="stats-kpi-value">
            ${totals.revenue.toLocaleString()}
          </div>
        </Card>
        <Card className="stats-card">
          <div className="stats-kpi-label">Pending Fees</div>
          <div className="stats-kpi-value">{totals.pendingFees}</div>
        </Card>
        <Card className="stats-card">
          <div className="stats-kpi-label">Scholarships</div>
          <div className="stats-kpi-value">{totals.scholarships}</div>
        </Card>
        <Card className="stats-card">
          <div className="stats-kpi-label">Applications (Today)</div>
          <div className="stats-kpi-value">{totals.applicationsToday}</div>
        </Card>
      </div>

      {/* ===== CHARTS ===== */}
      <div className="charts-grid">
        <Card className="chart-card shadow-sm">
          <h5 className="chart-title">Revenue Trend</h5>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueTrend}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4e73df"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="chart-card shadow-sm">
          <h5 className="chart-title">Students by Department</h5>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={deptData} dataKey="value" outerRadius={85} label>
                {deptData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ===== TABLE (optional recent enrollments) ===== */}
      {showTable && (
        <Card className="table-card shadow-sm">
          <h5 className="mb-3">Recent Enrollments</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Reg No</th>
                <th>Name</th>
                <th>Program</th>
                <th>Status</th>
                <th>Fee Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021-CS-101</td>
                <td>Ali Khan</td>
                <td>BSCS</td>
                <td>
                  <span className="badge bg-success">Enrolled</span>
                </td>
                <td>$1,200</td>
              </tr>
              <tr>
                <td>2021-BBA-223</td>
                <td>Sara Ahmed</td>
                <td>BBA</td>
                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>
                <td>$0</td>
              </tr>
              <tr>
                <td>2021-ENG-078</td>
                <td>Hassan Ali</td>
                <td>English</td>
                <td>
                  <span className="badge bg-success">Enrolled</span>
                </td>
                <td>$900</td>
              </tr>
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export { OrderCard };
