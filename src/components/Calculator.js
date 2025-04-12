import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { evaluate } from "mathjs";
import "../Stylish/Calculator.css";

const buttons = [
  ["7", "8", "9", "DEL"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  [".","0", "÷", "+"],
  [ "C","="],
];

export default function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === "C") {
      setInput(""); // مسح جميع المدخلات
    } else if (value === "=") {
      try {
        // استبدال الرموز قبل التقييم
        const formattedInput = input.replace(/×/g, "*").replace(/÷/g, "/");
        const result = evaluate(formattedInput);

        // إضافة للعملية في الهيستوري
        const entry = `${input} = ${result}`;
        setHistory([entry, ...history.slice(0, 4)]); // نحتفظ بآخر 5 عمليات

        setInput(result.toString());
      } catch {
        setInput(0);
      }
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); // حذف آخر حرف
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calc-wrapper ">
      <Container className="calc-container shadow-lg p-4 rounded-4 bg-white">
        <div className="display fw-bold rounded-3 mb-4 px-3 py-2 text-end fs-3">
          {input || "0"}
        </div>

        {buttons.map((row, i) => (
          <Row key={i} className="mb-3">
            {row.map((btn, j) => (
              <Col key={j} className="d-grid">
                <Button
                  variant={
                    btn === "="
                      ? "success p-0"
                      : btn === "C"
                      ? "danger p-0"
                      : btn === "DEL"
                      ? " DEL warning"
                      : "outline-secondary"
                      
                  }
                  size={btn === "C" || btn === "=" ? "lg" : "lg"} // تكبير أزرار C و =
                  className="btn-custom p-3 m-1 "
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </Button>
              </Col>
            ))}
          </Row>
        ))}

        {/* History Section */}
        {history.length > 0 && (
          <div className="history mt-4">
            <h5 className="mb-2 text-muted">History</h5>
            <ul className="list-group">
              {history.map((entry, idx) => (
                <li key={idx} className="list-group-item small">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
}
