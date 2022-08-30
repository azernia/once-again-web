export interface LoginForm {
    username: string;
    password: string;
    captcha: string
}

export interface Captcha {
    captchaImage: string,
    captchaKey: string
}
