let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
     return localStorage.getItem('EmployeePayrollList') ?
                         JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
                       "<th>Start Date</th><th>Action</th>";
    
    if (empPayrollList.length == 0) return ;

    let innerHtml = `${headerHtml}`; 
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