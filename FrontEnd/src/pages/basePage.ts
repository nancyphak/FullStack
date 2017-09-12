import uiHelper from "../common/uiHelper";
export class BasePage {
    private templateUrl: string;
    private renderTo: string;
    constructor(templateUrl: string) {
        this.templateUrl = templateUrl;
    }

    public render(renderTo: string = "body"): void {
        let self = this;
        self.renderTo = renderTo;
        uiHelper.get(self.templateUrl).then((html) => {
            uiHelper.append(self.renderTo, html);
        }).catch((error) => {
            console.log(error);
        })
    }
}