const {test} = require('@playwright/test');
//test annotation belongs to playwright packages

// test case formate. shoud use await method before every step 
//js is asynchronous and try to execute all steps at once
// if use await in test case, we should wrrite async before function. 

//Test fixtures are used to establish environment for each test ex: page,context
// browser, BrowserName 
//fixtures are nothing but a global variable which are available accross the project
// annonymus funtion having no name can be used as =>
// playwright by deafault run test using headless mood. 

test.only("This is the First test", async ({browser})=>
{
//we need to create a new instance of context to run the browser
//chrome - plugins/cookies
  const context = await browser.newContext(); // will open a incognito/fresh browser
  const page = await context.newPage(); // open a new page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("page test", async ({page})=>
{
 //here another way-- if want to fresh instance of browser and page
 // use parameter as page which create default instance and page.
  await page.goto("https://google.com");
});