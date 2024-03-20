window.addEventListener('load', () => {
    const processForm = () => {
        const form = document.getElementById('empForm');
        const id = form.querySelector('#id').value;
        const name = form.querySelector('#name').value;
        const ext = form.querySelector('#ext').value;
        const email = form.querySelector('#email').value;
        const department = form.querySelector('#department').value;
        console.log("Employee ID:", id);
        console.log("Full Name:", name);
        console.log("Extension:", ext);
        console.log("Email:", email);
        console.log("Department:", department);
    }; document.getElementById('empForm').addEventListener('submit', (e) => {
        e.preventDefault(); processForm();});});