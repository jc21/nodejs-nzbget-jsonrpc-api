class JSONRPCError extends Error {
    constructor(public message: string, public code?: number) {
        super(message);
        Error.captureStackTrace(this, JSONRPCError);
        this.name = (this as any).constructor.name; // OR this.name = (<any>this).constructor.name;
        this.code = code || 1;
    }
}

export {JSONRPCError};
