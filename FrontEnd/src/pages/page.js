function Page(templateUrl) {
    this.templateUrl = templateUrl;
    this.renderTo = "";
    this.render = render;
    function render(renderTo = "body") {
        var self = this;
        self.renderTo = renderTo;
        window.uiHelper.get(templateUrl).then((html) => {
            window.uiHelper.append(self.renderTo, html);
        }).catch((errors) => {
            console.log(errors);
        })
    }
}