import { PromiseFactory } from "./promise";
let uiHelper = {
    get: get,
    append: append
}
function get(url: string) {
    let def = PromiseFactory.create();
    window.jQuery.get(url).then((data) => {
        def.resolve(data);
    }).catch((error) => {
        def.reject(error);
    })
    return def;
}
function append(selector: string, htmlRender: string) {
    window.jQuery(selector).append(htmlRender);
}
export default uiHelper;