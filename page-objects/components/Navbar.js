import { Selector, t } from 'testcafe';

class Navbar {
	constructor() {
		this.signInButton = Selector('#signin_button');
		this.searchBox = Selector('#searchTerm');
		this.userIcon = Selector('.icon-user');
		this.logoutButton = Selector('#logout_link');
	}

	async search(text) {
		await t
			.typeText(this.searchBox, text, { paste: true, replace: true })
			.pressKey('enter');
	}
}

export default Navbar;
