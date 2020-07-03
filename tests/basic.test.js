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
	await t.typeText(name_input, 'John');
	await t.click(submit_button);
	await t.expect(articleText).contains('John');
});
