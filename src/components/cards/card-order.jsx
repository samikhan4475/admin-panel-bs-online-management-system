import { useMemo } from "react";
import { Card } from "react-bootstrap";

import "./card-order.css";

const OrderCard = ({ showTable = true }) => {
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

  return (
    <div className="order-card-wrapper">
      <div className="stats-grid">
        <Card className="stats-card">
          <div className="stats-kpi-label">Total Students</div>
          <div className="stats-kpi-value">{totals.totalStudents}</div>
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
