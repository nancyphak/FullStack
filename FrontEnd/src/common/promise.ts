export class PromiseFactory {
    public static create() {
        return new Promise();
    }
}
class Promise {
    private data: any;
    private error: any;
    private onSusscessCallback: any;
    private onErrorCallBack: any;
    public then(susscessCallback: any) {
        this.onSusscessCallback = susscessCallback;
        this.processPromise();
        return this;
    }
    public catch(errorCallback: any) {
        this.onErrorCallBack = errorCallback;
        this.processPromise();
        return this;
    }
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
    private processPromise() {
        if (this.data && this.onSusscessCallback) {
            this.onSusscessCallback(this.data);
        }
        if (this.error && this.onErrorCallBack) {
            this.onErrorCallBack(this.error);
        }
    }
}