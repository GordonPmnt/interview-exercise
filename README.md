# Visitor WiFi Credentials generator exercise

## Part 1

This is a WiFi credentials generator micro-service that responds to Visitor check-in events with credentials (username/password)

The function to generate the credentials is provided and is located in `proxyclick/credentials.ts`
The visitors should be searched through via the Proxyclick API: https://api.proxyclick.com/v1/docs/#introduction
Help article about how to use the API: https://proxyclick.help/en/articles/3850772-how-to-access-the-proxyclick-api

- The company ID to be used is the following: CO-CXER585
- Client ID: `98C5EB84170E6FB3617C47A5B17ECFACB4A0FD49`
- Client secret will be sent via email

### Goal

1. Write the function `getVisitors` that search through visitors using Proxyclick API
2. Write code in the function `handleCheckin` located in process/process.ts
3. Optimize the process so that consecutive checks-in of the same visitor do not need to call `generate` multiple times
4. Write some unit tests to validate those behaviors

### Notes

- Feel free to add any librairies you want
- Feel free to organize your code how you prefer
- Send a zip of the code to your interviewer (no pull request please)

### Flow

1. Check-in event coming in. Find visitor corresponding to email from Proxyclick API
2. If visitor not found -> throw an error
3. If visitor is found but firstname/lastname mismatch -> Update visitor using the function `updateVisitor`
4. Generate credentials for this visitor and returns it

## Part 2

Please do the architecture exercice located in Webhooks.md

## Commands

- `npm install` install the necessary dependencies
- `npm run build` build the javascript
- `npm run watch` continuously build and run the process
- `npm test` run the tests (you'll need to write them)

If you have any questions, feel free to contact us
# interview
