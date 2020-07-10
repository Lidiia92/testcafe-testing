import { Selector } from 'testcafe';

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async (t) => {
	const signInButton = Selector('#signin_button');
	await t.click(signInButton);

	const loginForm = Selector('#login_form');
	await t.expect(loginForm.exists).ok();

	const usernameInput = Selector('#user_login');
	const passwordInput = Selector('#user_password');

	await t.typeText(usernameInput, 'invalid username', { paste: true });
	await t.typeText(passwordInput, 'invalid password', { paste: true });

	const submitButton = Selector('.btn-primary');
	await t.click(submitButton);

	const error = Selector('.alert-error').innerText;
	await t.expect(error).contains('Login and/or password are wrong.');
});

test('User can login to the application', async (t) => {
	const signInButton = Selector('#signin_button');
	await t.click(signInButton);

	const loginForm = Selector('#login_form');
	await t.expect(loginForm.exists).ok();

	const usernameInput = Selector('#user_login');
	const passwordInput = Selector('#user_password');

	await t.typeText(usernameInput, 'username', { paste: true });
	await t.typeText(passwordInput, 'password', { paste: true });

	const submitButton = Selector('.btn-primary');
	await t.click(submitButton);

	const accountSummary = Selector('#account_summary_tab');
	await t.expect(accountSummary.exists).ok();
	await t.expect(loginForm.exists).notOk();

	const userIcon = Selector('.icon-user');
	await t.click(userIcon);

	const logoutButton = Selector('#logout_link');
	await t.click(logoutButton);

	await t.expect(logoutButton.exists).notOk();
	await t.expect(signInButton.exists).ok();
});
