function FactoryPromise() { }
FactoryPromise.create = function () {
    return new Promise();
    function Promise() {
        this.data = null;
        this.errors = null;
        this.onSuccessCallback = null;
        this.onErrorCallback = null;
        this.then = then;
        this.resolve = resolve;
        this.catch = fail;
        this.reject = reject;
        function then(successCallback) {
            this.onSuccessCallback = successCallback;
            processPromise.call(this);
            return this;
        }
        function resolve(data) {
            this.data = data;
            processPromise.call(this);
        }
        function fail(errorCallback) {
            this.onErrorCallback = errorCallback;
            processPromise.call(this);
            return this;
        }
        function reject(errors) {
            this.errors = errors;
            processPromise.call(this);
            return this;
        }
        function processPromise() {
            if (this.onSuccessCallback && this.data) {
                this.onSuccessCallback(this.data);
            }
            if (this.onErrorCallback && this.errors) {
                this.onErrorCallback(this.errors);
            }
            return this;
        }
    }
}