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
	await t.typeText(feedbackPage.formName, 'Test', { paste: true });
	await t.typeText(feedbackPage.formEmail, 'test@gmail.com', {
		paste: true,
	});
	await t.typeText(feedbackPage.formSubject, 'Test', { paste: true });
	await t.typeText(feedbackPage.formComment, 'Test', { paste: true });
	await t.click(feedbackPage.formSubmit);

	//Assertions
	await t
		.expect(feedbackPage.message.innerText)
		.contains('Thank you for your comments');
});
