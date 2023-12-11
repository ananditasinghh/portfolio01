    <script>
        document.getElementById('navbar-toggle').addEventListener('click', function() {
            var navbar = document.getElementById('navbar');
            if (navbar.style.width === '200px') {
                navbar.style.width = '0';
            } else {
                navbar.style.width = '200px';
            }
        });
    </script>
