function PromiseFactory() { }
PromiseFactory.create = function () {
    return new Promise();
    function Promise() {
        this.data = null;
        this.errors = null;
        this.onSuccessCallback = null;
        this.reslove = reslove;
        this.reject = reject;
        this.then = then;
        this.catch = fail;
        return;
        function reject(errors) {
            this.errors = errors;
            process.call(this);
            return this;
        }
        function fail(errorCallback) {
            this.onErrorCallback = errorCallback;
            process.call(this);
            return this;
        }
        function reslove(data) {
            this.data = data;
            process.call(this);
            return this;
        }
        function then(callback) {
            this.onSuccessCallback = callback;
            process.call(this);
            return this;
        }
        function process() {
            if (this.data && this.onSuccessCallback) {
                this.onSuccessCallback(this.data);
            }
            if (this.errors && this.onErrorCallback) {
                this.onErrorCallback(this.errors);
            }
        }
    }
}