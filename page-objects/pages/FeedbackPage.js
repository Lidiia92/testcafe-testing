import { Selector, t } from 'testcafe';
import BasePage from './BasePage';

class FeedbackPage extends BasePage {
	constructor() {
		super();
		this.formName = Selector('#name');
		this.formEmail = Selector('#email');
		this.formSubject = Selector('#subject');
		this.formComment = Selector('#comment');
		this.formSubmit = Selector('input').withAttribute(
			'value',
			'Send Message'
		);
		this.message = Selector('div');
	}
}

export default FeedbackPage;
