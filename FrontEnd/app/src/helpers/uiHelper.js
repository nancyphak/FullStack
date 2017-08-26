(function(global){
    global.uiHelper = {
        append:append,
        get:get
    }
    function append(selector, renderHtml){
        $(selector).append(renderHtml);
    }
    function get(url){
        return $.get(url);
    }
})(window);