import React, { useState, useEffect } from "react";
import axios from "axios";
import { universalurl } from "../helper";

const EmployeeLeave = () => {
    const [leaveData, setLeaveData] = useState([]);

    useEffect(() => {
        const fetchLeaveData = async () => {
            try {
                const response = await axios.get(`${universalurl}/auth/get_leave`, { withCredentials: true });
                setLeaveData(response.data);
            } catch (error) {
                console.error("Error fetching leave data:", error);
            }
        };

        fetchLeaveData();
    }, []);

    return (
        <div className="tw-mx-auto tw-p-4">
            <h2 className="tw-text-lg tw-font-bold tw-mb-4">Leave Requests</h2>
            <div className="tw-space-y-4">
                {leaveData.length > 0 ? (
                    leaveData.map((leave, index) => (
                        <div key={index} className="tw-border tw-border-gray-300 tw-rounded-md tw-p-4">
                            <p><strong>Name:</strong> {leave.name}</p>
                            <p><strong>Employee ID:</strong> {leave.employeeId}</p>
                            <p><strong>Reason:</strong> {leave.reason}</p>
                            <p><strong>Number of Days:</strong> {leave.numberOfDays}</p>
                            <p><strong>From Date:</strong> {leave.fromDate}</p>
                            <p><strong>To Date:</strong> {leave.toDate}</p>
                        </div>
                    ))
                ) : (
                    <p>No leave requests found.</p>
                )}
            </div>
        </div>
    );
};

export default EmployeeLeave;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { universalurl } from "../helper";

// const Leave = () => {
//     const [leaveData, setLeaveData] = useState([]);

//     useEffect(() => {
//         // Mocked fetchLeaveData function with dummy data
//         const fetchLeaveData = async () => {
//             try {
//                 // Mocking a delay
//                 await new Promise((resolve) => setTimeout(resolve, 1000));

//                 // Dummy data
//                 const dummyData = [
//                     {
//                         name: "John Doe",
//                         employeeId: "EMP123",
//                         reason: "Medical",
//                         numberOfDays: 3,
//                         fromDate: "2024-07-01",
//                         toDate: "2024-07-03"
//                     },
//                     {
//                         name: "Jane Smith",
//                         employeeId: "EMP124",
//                         reason: "Vacation",
//                         numberOfDays: 5,
//                         fromDate: "2024-07-10",
//                         toDate: "2024-07-15"
//                     },
//                     {
//                         name: "Alice Johnson",
//                         employeeId: "EMP125",
//                         reason: "Personal",
//                         numberOfDays: 2,
//                         fromDate: "2024-07-20",
//                         toDate: "2024-07-21"
//                     }
//                 ];

//                 setLeaveData(dummyData);
//             } catch (error) {
//                 console.error("Error fetching leave data:", error);
//             }
//         };

//         fetchLeaveData();
//     }, []);

//     return (
//         <div className="tw-mx-auto tw-p-4">
//             <h2 className="tw-text-lg tw-font-bold tw-mb-4">Leave Requests</h2>
//             <div className="tw-space-y-4">
//                 {leaveData.length > 0 ? (
//                     leaveData.map((leave, index) => (
//                         <div key={index} className="tw-border tw-border-gray-300 tw-rounded-md tw-p-4">
//                             <p><strong>Name:</strong> {leave.name}</p>
//                             <p><strong>Employee ID:</strong> {leave.employeeId}</p>
//                             <p><strong>Reason:</strong> {leave.reason}</p>
//                             <p><strong>Number of Days:</strong> {leave.numberOfDays}</p>
//                             <p><strong>From Date:</strong> {leave.fromDate}</p>
//                             <p><strong>To Date:</strong> {leave.toDate}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No leave requests found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Leave;
