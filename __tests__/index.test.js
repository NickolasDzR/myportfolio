const regEx = new RegExp(/^[a-zA-Z\d\\.\-]+\@[a-zA-Z\d\\.\-]+\.[a-zA-Z]+/)

const email = ['email@email.ru',
    '123myemail@yahoo.com',
    'email1323%$-@google.com',
    'user.ru',
    'user@ru',
    'user@user.123',
    'user@user.$ru',
    'user@user.1ru'
]

test('regEx', () => {
    expect(regEx.test(email[0])).toBe(true);
    expect(regEx.test(email[1])).toBe(true);
    expect(regEx.test(email[2])).toBe(false);
    expect(regEx.test(email[3])).toBe(false);
    expect(regEx.test(email[4])).toBe(false);
    expect(regEx.test(email[5])).toBe(false);
    expect(regEx.test(email[6])).toBe(false);
    expect(regEx.test(email[7])).toBe(false);
})