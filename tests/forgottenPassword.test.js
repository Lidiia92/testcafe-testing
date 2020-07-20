import { Selector } from 'testcafe';
import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage';

const navbar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

// prettier-ignore
fixture `Send Forgotten Password Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can request new password to be sent to his email', async (t) => {
	//Get selectors

	//Actions
	await t.click(navbar.signInButton);
	await t.click(loginPage.forgottenPasswordLink);
	await t.typeText(forgottenPasswordPage.emailInput, 'test@gmail.com', {
		paste: true,
		replace: true,
	});
	await t.pressKey('enter');

	//Assertions
	await t
		.expect(forgottenPasswordPage.message.innerText)
		.contains('test@gmail.com');
	await t.expect(forgottenPasswordPage.emailInput.exists).notOk();
});
