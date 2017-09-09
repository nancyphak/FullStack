import uiHelper from "../common/uiHelper";
export class BasePage {
    private renderTo: string;
    private templateUrl: string;
    constructor(templateUrl: string) {
        this.templateUrl = templateUrl;
    }
    public render(renderTo: string = "body"): void {
        let self = this;
        self.renderTo = renderTo;
        uiHelper.get(self.templateUrl).then((data) => {
            uiHelper.append(self.renderTo, data);
        }).catch((error) => {
            console.log(error);
        });
    }
}