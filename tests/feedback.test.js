import { Selector } from 'testcafe';
import FeedbackPage from '../page-objects/pages/FeedbackPage';

const feedbackPage = new FeedbackPage();

// prettier-ignore
fixture `Send Forgotten Password Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback via form', async (t) => {
	//Selectors
	const linkToFeedback = Selector('#feedback');

	//Actions
	await t.click(linkToFeedback);
	await t.typeText(feedbackPage.form_name, 'Test', { paste: true });
	await t.typeText(feedbackPage.form_email, 'test@gmail.com', {
		paste: true,
	});
	await t.typeText(feedbackPage.form_subject, 'Test', { paste: true });
	await t.typeText(feedbackPage.form_comment, 'Test', { paste: true });
	await t.click(feedbackPage.form_submit);

	//Assertions
	await t
		.expect(feedbackPage.message.innerText)
		.contains('Thank you for your comments');
});
