function calculateAge() {
    let dateOfBirth = new Date(document.getElementById('date').value);
    let result = document.getElementById('age');
    let today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    result.value = `You turned ${age} this year.`;
}