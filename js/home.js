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
                <img id="${empPayrollData._id}" onclick="remove(this)" src="../assest/icons/delete-black-18dp.svg" alt="Delete">
                <img id="${empPayrollData._id}" onclick="update(this)" src="../assest/icons/create-black-18dp.svg" alt="Edit">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const remove = (node) =>{
    let empPayrollData = empPayrollList.find(empData => empData._id==node.id);
    if (!empPayrollData) return;
    const index = empPayrollList
                  .map(empData => empData._id)
                  .indexOf(empPayrollDat._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent= empPayrollList.length;
    createInnerHtml();
}
