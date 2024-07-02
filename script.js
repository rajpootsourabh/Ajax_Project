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
    
                // 1. Storing data in sessionStorage to access on another page
                // sessionStorage.setItem('userData', JSON.stringify(response.user));

                // 2. Storing data in sessionStorage to access on another page
                // localStorage.setItem('userData', JSON.stringify(response.user));

                // 3. Pass data via URL parameters
                window.location.href = `profile2.html?name=${response.user.username}&email=${response.user.email}`;

                // Redirect to another HTML page
                // window.location.href = 'profile2.html';

                // alert('Login successful!');
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                // Handle error
                alert('Login failed: ' + error);
            }
        });
    });
});
