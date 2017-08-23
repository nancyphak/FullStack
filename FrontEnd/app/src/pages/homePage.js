function HomePage() {
    this.renderTo = '';
    this.templateUrl = "src/pages/homePage.html";
    this.render = render;
    return this;
    function render(renderTo = 'body') {
        var self = this;
        this.renderTo = renderTo;
        var templateUrl = this.templateUrl;
        window.UiHelper.get(templateUrl).then((html) => {
            window.UiHelper.append(self.renderTo, html);
        });
    }
}