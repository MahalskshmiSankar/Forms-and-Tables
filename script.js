document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;

    const tableBody = document.getElementById('users-table').getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);

    nameCell.textContent = name;
    emailCell.textContent = email;

    document.getElementById('registration-form').reset();

    // For demonstration, let's save the user data to local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email });
    localStorage.setItem('users', JSON.stringify(users));
});

document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.getElementById('users-table').getElementsByTagName('tbody')[0];

    users.forEach(user => {
        const newRow = tableBody.insertRow();
        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);

        nameCell.textContent = user.name;
        emailCell.textContent = user.email;
    });
});
