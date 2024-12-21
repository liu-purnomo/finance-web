interface FormLogin {
    email: string;
    password: string;
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