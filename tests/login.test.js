import { Selector } from 'testcafe';
import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';

const navbar = new Navbar();
const loginPage = new LoginPage();

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async (t) => {
	await t.click(navbar.signInButton);
	loginPage.loginToApp('invalid username', 'invalid password');

	await t
		.expect(loginPage.errorMessage.innerText)
		.contains('Login and/or password are wrong.');
});

test('User can login to the application', async (t) => {
	await t.click(navbar.signInButton);
	loginPage.loginToApp('username', 'password');

	const accountSummary = Selector('#account_summary_tab');
	await t.expect(accountSummary.exists).ok();
	await t.expect(loginPage.loginForm.exists).notOk();
	await t.click(navbar.userIcon);
	await t.click(navbar.logoutButton);

	await t.expect(navbar.logoutButton.exists).notOk();
	await t.expect(navbar.signInButton.exists).ok();
});
