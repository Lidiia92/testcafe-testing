import { Selector, t } from 'testcafe';

class Navbar {
	constructor() {
		this.signInButton = Selector('#signin_button');
		this.searchBox = Selector('#searchTerm');
	}
}

export default Navbar;
