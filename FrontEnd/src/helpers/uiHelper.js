(function (global) {
    global.uiHelper = {
        append: append,
        get: get
    }
    function append(selector, htmlRender) {
        $(selector).append(htmlRender);
    }
    function get(url) {
        let def = FactoryPromise.create();
        $.get(url).then((data) => {
            def.resolve(data);
        }).catch((errors) => {
            def.reject(errors);
        })
        return def;
    }
})(window);