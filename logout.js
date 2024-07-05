window.addEventListener('popstate', function(event) {
    if (window.location.pathname === '/protected-route' && !isLoggedIn()) {
        window.location.href = '/login';
    }
});

function isLoggedIn() {
    // Implement your logic to check if the user is logged in
    // For example, check session or token validity
    return /* true or false based on session or token */;
}

$(document).ready(function() {
    $('#logout').click(function(e) {
        e.preventDefault();
        
        $.ajax({
            type: 'POST',
            url: '/logout',
            success: function(response) {
                window.location.href = '/login'; // Redirect to login page
            },
            error: function(xhr, status, error) {
                console.error('Error logging out:', error);
                // Handle error if necessary
            }
        });
    });
});
