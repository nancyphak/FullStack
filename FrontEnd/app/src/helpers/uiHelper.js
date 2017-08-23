(function(global){
    global.UiHelper = {
        append : append,
        get: get
    };
    function append(selector, htmlRender){
        $(selector).append(htmlRender);
    }
    function get(url){
        return $.get(url);
    }
})(window);