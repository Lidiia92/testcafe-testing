import { Selector } from 'testcafe';
import xPathToCss from 'xpath-to-css';
import Navbar from '../page-objects/components/Navbar';

const navbar = new Navbar();

// prettier-ignore
fixture `Send Forgotten Password Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can search for information using search box', async (t) => {
	//Selectors
	const resultsTitle = Selector('h2');
	const linkText = Selector('div').innerText;

	//XPATH
	const xPath = `xpath example`;
	const css = xPathToCss(xPath);

	//Actions
	await t.typeText(navbar.searchBox, 'online bank', { paste: true });
	await t.pressKey('enter');

	//Assertions
	await t.expect(resultsTitle.exists).ok();
	await t.expect(navbar.searchBox.exists).ok();
	await t.expect(linkText).contains('Zero - Free Access to Online Banking');
});
