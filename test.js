const { Builder, By, Key } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

const geckoDriverPath = '/path/to/geckodriver'; // Replace with the actual path

async function main() {
  // Launch the Firefox browser using Selenium with the specified driver path
  const driver = await new Builder().forBrowser('firefox').setFirefoxService(new firefox.ServiceBuilder(geckoDriverPath)).build();


  try {
    // Open the page with the issue or problem
    await driver.get('https://gemsoft-games.dev.digicode.ua/genies-gold/?config=18a5ab6fc2a2502373a6e052429aee53&token=DZP3XNSJEUHMOEDVF9USHC4PX8JR150L&language=en&env=dev&lobbyUrl=https://www.pokiez.xyz&lobbyUrl=https://www.pokiez.xyz');

    // Open the developer tools (debugger)
    const body = await driver.findElement(By.css('body'));
    await body.sendKeys(Key.F12);

    // Wait for the debugger to load
    await driver.sleep(3000);

    // Get all source code elements from the debugger
    const sourceCodeElements = await driver.findElements(By.css('.source-code'));

    for (const sourceCodeElement of sourceCodeElements) {
      // Get the URL of the source code
      const url = await sourceCodeElement.getAttribute('url');

      // Get the code from the debugger
      const sourceCode = await sourceCodeElement.getText();

      // Split the URL to create the folder structure
      const urlParts = url.split('/');
      const fileName = urlParts.pop();
      const filePath = path.join(...urlParts);

      // Create the directories if they don't exist
      
      fs.mkdirSync(filePath, { recursive: true });

      // Save the code to a file
      fs.writeFileSync(path.join(filePath, fileName), sourceCode, 'utf-8');
    }

    console.log('Code for the pages has been saved in the corresponding files and folders.');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

main();
