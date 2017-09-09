export class PromiseFactory {
    public static create(): Promise {
        return new Promise();
    }
}
class Promise {
    private data: any;
    private error: any;
    private onSuccessCallback: any;
    private onErrorCallback: any;
    public resolve(data: any) {
        this.data = data;
        this.processPromise();
        return this;
    }
    public reject(error: any) {
        this.error = error;
        this.processPromise();
        return this;
    }
    public then(successCallback: any) {
        this.onSuccessCallback = successCallback;
        this.processPromise();
        return this;
    }
    public catch(errorCallback: any) {
        this.onErrorCallback = errorCallback;
        this.processPromise();
        return this;
    }
    private processPromise() {
        if (this.data && this.onSuccessCallback) {
            this.onSuccessCallback(this.data);
        }
        if (this.error && this.onErrorCallback) {
            this.onErrorCallback(this.error);
        }
    }
}