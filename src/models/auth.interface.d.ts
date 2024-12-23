interface FormLogin {
    email: string;
    password: string;
}

interface FormVerify {
    email: string;
    code: string;
}

interface FormRegister {
    email: string;
    name: string;
    password: string;
    passwordConfirmation: string;
}

interface ILoginSuccessResponse {
    status: string;
    message: string;
    data: IUserLocalSchema;
}

interface IUserLocalSchema {
    id: string;
    name: string;
    email: string;
    token: string;
}
