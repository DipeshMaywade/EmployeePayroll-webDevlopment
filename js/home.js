window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
    "<th>Start Date</th><th>Action</th>"

    let innerHtml = `${headerHtml}`; 
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" src="${empPayrollData._image}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td><div class="dept-label">${empPayrollData._department}</div>
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="1" onclick="remove(this)" src="" alt="Delete" name="${empPayrollData._id}" >
                <img id="1" onclick="update(this)" src="" alt="Edit" name="${empPayrollData._id}">
            </td>
        </tr>
        `;
    }
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () =>{
    let employeePayrollList = [
        {
            _name: "Deep",
            _gender: "Male",
            _department: [
                "Engineering",
                "Finance"
            ],
            _salary: "500000",
            _startDate: "29-02-2019",
            _id: new Date().getTime(),
            _image: "../assest/profile-images/Ellipse -3.png"
        },
        {
            _name: "Ram",
            _gender: "Male",
            _department: [
                "Sales"
            ],
            _salary: "300000",
            _startDate: "20-02-2020",
            _id: new Date().getTime(),
            _image: "../assest/profile-images/Ellipse -2.png"
            
        }
    ];
    return employeePayrollList;
}