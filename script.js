document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const tableBody = document.getElementById('users-table').getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);

    nameCell.textContent = name;
    emailCell.textContent = email;

    document.getElementById('registration-form').reset();
});
