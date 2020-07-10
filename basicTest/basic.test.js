import { Selector } from 'testcafe';

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        //await runDatabaseReset()
        //await seedTestData()
    })
    .beforeEach(async t => {
        //Slowing speed of the test, 1 is default
        await t.setTestSpeed(1);
        await t.setPageLoadTimeout(0);
    })
    .after(async t => {
        //Cleaning test data
    })
    .afterEach(async t => {
        
    })

test('My first TestCafe test', async (t) => {
	const name_input = Selector('#developer-name');
	const submit_button = Selector('#submit-button');
	const articleText = Selector('#article-header').innerText;

	//Screenshots
	//await t.takeScreenshot({ fullPage: true });
	//await t.takeElementScreenshot(submit_button);

	await t.typeText(name_input, 'John');
	await t.click(submit_button);
	await t.expect(articleText).contains('John');

	//Double Click
	await t.doubleClick('selector', { options });

	//Right Click
	await t.rightClick('selector', { options });

	//Drag element
	await t.drag('selector', 200, 0, { options });

	//Select text
	await t.select('selector', { options });

	//Resize window
	await t.resize(800, 600);

	//Deep equal
	await t.expect('foo').eql('foo', 'message', options);

	//Ok
	await t.expect(true).ok();

	//Contains
	await t.expect('foo').contains('o');

	//Greater than
	await t.expect(10).gte(10);
});
