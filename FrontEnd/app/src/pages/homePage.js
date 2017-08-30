function HomePage() {
    Page.call(this, "src/pages/homePage.html");
}
HomePage.prototype = new Page();
HomePage.prototype.constructor = HomePage;