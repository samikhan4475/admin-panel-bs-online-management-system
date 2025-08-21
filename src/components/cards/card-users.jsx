import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  Table,
  Badge,
  Spinner,
  Form,
  Button,
  Row,
  Col,
  Pagination,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./card-user.css";

const API_BASE = "http://localhost:5000";

const UserCard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI states
  const [search, setSearch] = useState("");
  const [feeStatus, setFeeStatus] = useState("All");
  const [program, setProgram] = useState("All");
  const [semester, setSemester] = useState("All");

  // pagination
  const [page, setPage] = useState(1);
  const perPage = 10;

  const chartData = [
    { value: 400 },
    { value: 300 },
    { value: 500 },
    { value: 600 },
    { value: 200 },
    { value: 350 },
    { value: 450 },
  ];

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/admin/admissions`);
        setStudents(Array.isArray(res.data?.data) ? res.data.data : []);
      } catch (e) {
        console.error("Error fetching students:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmissions();
  }, []);

  // Unique programs & semesters for filters
  const programOptions = useMemo(() => {
    const set = new Set(students.map((s) => s.program).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [students]);

  const semesterOptions = useMemo(() => {
    // flatten all semester numbers
    const set = new Set(
      students
        .flatMap((s) => (Array.isArray(s.semesters) ? s.semesters : []))
        .map((x) => x?.semester)
        .filter((x) => x !== undefined && x !== null)
    );
    // sort numeric
    return ["All", ...Array.from(set).sort((a, b) => a - b)];
  }, [students]);

  // helpers
  const norm = (v) => (v || "").toString().toLowerCase().trim();
  const formatDate = (iso) => (iso ? String(iso).split("T")[0] : "");

  // Filtered list (memoized)
  const filtered = useMemo(() => {
    let list = [...students];

    // search by name / roll / cnic / email
    if (search.trim()) {
      const key = norm(search);
      list = list.filter((s) => {
        const name = `${s.firstName || ""} ${s.middleName || ""} ${
          s.lastName || ""
        }`.trim();
        return (
          norm(name).includes(key) ||
          norm(s.rollNo).includes(key) ||
          norm(s.cnic).includes(key) ||
          norm(s.email).includes(key)
        );
      });
    }

    // fee status filter
    if (feeStatus !== "All") {
      list = list.filter((s) => (s.feeStatus || "Pending") === feeStatus);
    }

    // program filter
    if (program !== "All") {
      list = list.filter((s) => s.program === program);
    }

    // semester filter (match if any semester equals selected)
    if (semester !== "All") {
      const sel = Number(semester);
      list = list.filter((s) =>
        (s.semesters || []).some((x) => Number(x.semester) === sel)
      );
    }

    return list;
  }, [students, search, feeStatus, program, semester]);

  // Pagination slice
  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageRows = filtered.slice(start, start + perPage);

  useEffect(() => {
    // reset to page 1 when filters/search change
    setPage(1);
  }, [search, feeStatus, program, semester]);

  // Export helpers (shape/flatten rows)
  const flattenRow = (s) => ({
    RollNo: s.rollNo || "",
    Name: `${s.firstName || ""} ${s.middleName || ""} ${
      s.lastName || ""
    }`.trim(),
    FatherName: s.fatherName || "",
    CNIC: s.cnic || "",
    FatherCNIC: s.fatherCnic || "",
    Gender: s.gender || "",
    DOB: formatDate(s.dateOfBirth),
    Email: s.email || "",
    Phone: s.phoneNumber || "",
    Program: s.program || "",
    Shift: s.shift || "",
    Semesters: (s.semesters || []).map((x) => x.semester).join(", "),
    MeritScore: s.meritScore ?? "",
    City: s.city || "",
    State: s.state || "",
    Country: s.country || "",
    Qualification: s.qualification || "",
    Board: s.board || "",
    Year: s.year || "",
    FeeStatus: s.feeStatus || "Pending",
  });

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filtered.map(flattenRow));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admissions");
    XLSX.writeFile(workbook, "admissions.xlsx");
  };
  const exportPDF = () => {
    const doc = new jsPDF("l", "pt", "a4"); // landscape for wide tables

    autoTable(doc, {
      head: [
        [
          "Roll No",
          "Name",
          "Father Name",
          "CNIC",
          "Gender",
          "DOB",
          "Email",
          "Phone",
          "Program",
          "Shift",
          "Semester",
          "City",
          "State",
          "Country",
          "Fee Status",
        ],
      ],
      body: students.map((s) => [
        s.rollNo || "",
        `${s.firstName || ""} ${s.middleName || ""} ${s.lastName || ""}`.trim(),
        s.fatherName || "",
        s.cnic || "",
        s.gender || "",
        s.dateOfBirth ? String(s.dateOfBirth).split("T")[0] : "",
        s.email || "",
        s.phoneNumber || "",
        s.program || "",
        s.shift || "",
        (s.semesters || []).map((x) => x.semester).join(", "),
        s.city || "",
        s.state || "",
        s.country || "",
        s.feeStatus || "Pending",
      ]),
      styles: {
        fontSize: 8,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [20, 132, 140], // teal color for header
        textColor: [255, 255, 255],
      },
      tableWidth: "auto",
      startY: 20,
    });

    doc.save("students.pdf");
  };

  return (
    <div>
      <Card className="user-card shadow-sm">
        <Card.Header
          className=" d-flex justify-content-between align-items-center"
          style={{ background: "white !important" }}
        >
          <h4>Registered Students</h4>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" onClick={exportExcel}>
              Export Excel
            </Button>
            <Button variant="outline-secondary" onClick={exportPDF}>
              Export PDF
            </Button>
          </div>
        </Card.Header>

        <Card.Body>
          <div className="mt-3">
            <Row className="g-2">
              <Col md={6}>
                <InputGroup>
                  <Form.Control
                    placeholder="Search by Name / Roll No / CNIC / Email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="shadow-none"
                    size="1"
                  />
                  <Button
                    size="1"
                    style={{
                      background: "#fff",
                      color: "#000",
                      border: "1px solid black",
                    }}
                    onClick={() => setSearch("")}
                  >
                    Clear
                  </Button>
                </InputGroup>
              </Col>
              {/* <Col md={2}>
                <Form.Select
                  value={feeStatus}
                  onChange={(e) => setFeeStatus(e.target.value)}
                >
                  <option value="All">All Fees</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
              </Col> */}
              {/* <Col md={6}>
                <Form.Select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                >
                  {programOptions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </Form.Select>
              </Col> */}
              {/* <Col md={2}>
                <Form.Select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                >
                  {semesterOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Form.Select>
              </Col> */}
            </Row>
          </div>

          <div className="student-table-container mt-4">
            {loading ? (
              <div className="text-center py-4">
                <Spinner animation="border" />
              </div>
            ) : (
              <>
                <Table hover responsive className="student-table">
                  <thead>
                    <tr>
                      <th>Roll No</th>
                      <th>Name</th>
                      <th>Father Name</th>
                      <th>CNIC</th>
                      <th>Father CNIC</th>
                      <th>Gender</th>
                      <th>DOB</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Program</th>
                      <th>Shift</th>
                      <th>Semester(s)</th>
                      <th>Merit Score</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Fee Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageRows.map((s, idx) => (
                      <tr key={s._id || idx}>
                        <td>{s.rollNo}</td>
                        <td>
                          {(s.firstName || "") +
                            (s.middleName ? ` ${s.middleName}` : "") +
                            (s.lastName ? ` ${s.lastName}` : "")}
                        </td>
                        <td>{s.fatherName}</td>
                        <td>{s.cnic}</td>
                        <td>{s.fatherCnic}</td>
                        <td>{s.gender}</td>
                        <td>{formatDate(s.dateOfBirth)}</td>
                        <td>{s.email}</td>
                        <td>{s.phoneNumber}</td>
                        <td>{s.program}</td>
                        <td>{s.shift}</td>
                        <td>
                          {(s.semesters || [])
                            .map((x) => x.semester)
                            .join(", ")}
                        </td>
                        <td>{s.meritScore}</td>
                        <td>{s.city}</td>
                        <td>{s.state}</td>
                        <td>{s.country}</td>
                        <td>
                          <Badge
                            bg={
                              (s.feeStatus || "Pending") === "Submitted"
                                ? "success"
                                : "danger"
                            }
                            className="py-1 px-2"
                          >
                            {s.feeStatus || "Pending"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* Pagination */}
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    Showing{" "}
                    <strong>
                      {filtered.length === 0 ? 0 : start + 1}-
                      {Math.min(start + perPage, filtered.length)}
                    </strong>{" "}
                    of <strong>{filtered.length}</strong>
                  </div>
                  <Pagination className="mb-0">
                    <Pagination.First
                      onClick={() => setPage(1)}
                      disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    />
                    {[...Array(totalPages)].map((_, i) => (
                      <Pagination.Item
                        key={i + 1}
                        active={currentPage === i + 1}
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                    />
                    <Pagination.Last
                      onClick={() => setPage(totalPages)}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export { UserCard };
