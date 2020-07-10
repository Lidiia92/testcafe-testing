import { Selector } from 'testcafe';

// prettier-ignore
fixture `Send Forgotten Password Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can request new password to be sent to his email', async (t) => {
	//Get selectors
	const signInButton = Selector('#signin_button');
	const linkToPassword = Selector('a').withText('Forgot your password ?');
	const emailInput = Selector('#user_email');
	const message = Selector('div').innerText;

	//Actions
	await t.click(signInButton);
	await t.click(linkToPassword);
	await t.typeText(emailInput, 'test@gmail.com', { paste: true });
	await t.pressKey('enter');

	//Assertions
	await t.expect(message).contains('test@gmail.com');
	await t.expect(emailInput.exists).notOk();
});
