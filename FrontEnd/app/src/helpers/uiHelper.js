(function (global) {
    global.uiHelper = {
        append: append,
        get: get
    };
    function append(selector, htmlRender) {
        $(selector).append(htmlRender);
    }
    function get(url) {
        var def = PromiseFactory.create();
        $.get(url).then((html) => {
            def.reslove(html);
        }).catch((errors) => {
            def.reject(errors);
        });
        return def;
    }
})(window);