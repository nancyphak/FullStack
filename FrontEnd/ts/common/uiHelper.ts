import { PromiseFactory } from "./promiseFactory";

let uiHelper = {
    get: get,
    append: append
}
function append($selector, htmlRender) {
    window.jQuery($selector).append(htmlRender);
}
function get(url: string) {
    let def = PromiseFactory.create();
    window.jQuery.get(url)
        .then((data) => {
            def.resolve(data);
        })
        .catch((error) => {
            def.reject(error);
        });
    return def;
}
export default uiHelper;