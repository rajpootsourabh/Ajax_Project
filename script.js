$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        const id = $('#id').val();
        const password = $('#password').val();

        const data = {
            username: id,
            password: password
        };

        // Replace 'https://example.com/api/login' with your actual API endpoint
        $.ajax({
            url: 'http://localhost:5000/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log('Success:', response);
                // Handle success
                alert('Login successful!');
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                // Handle error
                alert('Login failed: ' + error);
            }
        });
    });
});
