import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const AllDataPage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const dummySubmissions = [
      { id: 1, name: 'John Doe', email: 'john@example.com', balance: 100 },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', balance: 200 },
    ];
    setSubmissions(dummySubmissions);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}> {/* Gray background for the page */}
      <Card className="m-3 navy-blue-background"> {/* Navy blue card background */}
        <Card.Body>
          <Card.Title className="navy-blue-text">All User Submissions</Card.Title> {/* Navy blue text */}
          <Card.Text className="navy-blue-text">
            <ul>
              {submissions.map((submission) => (
                <li key={submission.id} className="navy-blue-text"> {/* Navy blue text for list */}
                  Name: {submission.name}, Email: {submission.email}, Balance: {submission.balance}
                </li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllDataPage;
