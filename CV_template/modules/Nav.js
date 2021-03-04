const Nav = () => `
    <nav>
        <header class="main-header">
        <div class="header-wrapper">
            <div class="logo-img"><img src="../images/logo.jpg" width="150px" height="200px"></div>
            <h1 class="special">HorlerTech Solution</h1>
            <nav class="logo-nav">
                <ul>
                    <li id="home-bar"><a href="../index.html">Home</a></li>
                    <li><a href="#">|</a></li>
                    <li class="active"><a href="#">CV Template</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="../jQueryVersion/indexQueryCV.html">Query CV</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="../CV_hardcopy/sampleCV.html">Sample CV</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="../pages/blog.html">Blog</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="../pages/contact.html" target>Contact</a></li>
                </ul>
            </nav>
            <div class="search">
                <label for="search">Search</label>
                <input type="Search" name="nav-search" id="search" placeholder="Search...">
            </div>
        </div>
        </header>
        <div id="time-stamp">
            <h2>Current Time is: &nbsp <span id="time"></span></h2></div>
        </div>
    </nav>
`
export default Nav;
