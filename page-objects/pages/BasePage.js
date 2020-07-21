import { Selector, t } from 'testcafe';

class BasePage {
	async waitFor(miliseconds) {
		await t.wait(miliseconds);
	}

	async setTestSpeed(testspeed) {
		await t.setTestSpeed(testspeed);
	}
}

export default BasePage;
