interface Response {
    token: string;
    user: {
        name: string;
        password: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
                user: {
                    name: 'Janio',
                    password: '123456',
                },
            });
        }, 2000);
    });
}