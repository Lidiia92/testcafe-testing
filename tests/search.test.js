import { Selector } from 'testcafe';

// prettier-ignore
fixture `Send Forgotten Password Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can search for information using search box', async (t) => {
	//Selectors
	const searchBox = Selector('#searchTerm');
	const resultsTitle = Selector('h2');
	const linkText = Selector('div').innerText;

	//Actions
	await t.typeText(searchBox, 'online bank', { paste: true });
	await t.pressKey('enter');

	//Assertions
	await t.expect(resultsTitle.exists).ok();
	await t.expect(searchBox.exists).ok();
	await t.expect(linkText).contains('Zero - Free Access to Online Banking');
});
