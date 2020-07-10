import { Selector } from 'testcafe';

// prettier-ignore
fixture `Send Forgotten Password Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback via form', async (t) => {
	//Selectors
	const linkToFeedback = Selector('#feedback');
	const form_name = Selector('#name');
	const form_email = Selector('#email');
	const form_subject = Selector('#subject');
	const form_comment = Selector('#comment');
	const form_submit = Selector('input').withAttribute(
		'value',
		'Send Message'
	);
	const message = Selector('div').innerText;

	//Actions
	await t.click(linkToFeedback);
	await t.typeText(form_name, 'Test', { paste: true });
	await t.typeText(form_email, 'test@gmail.com', { paste: true });
	await t.typeText(form_subject, 'Test', { paste: true });
	await t.typeText(form_comment, 'Test', { paste: true });
	await t.click(form_submit);

	//Assertions
	await t.expect(message).contains('Thank you for your comments');
});
