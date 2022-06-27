import { getRandomEvent } from "./data/fake";
import { handleCheckin } from "./process/process";
import { EmailSender } from "./sender/email-sender";

/**
 * simulate event every 3 sec
 */
const main = () => {
  const canFail = true;

  setInterval(() => {
    const event = getRandomEvent(canFail);

    handleCheckin(event)
      .then((creds) => {
        const content = `Hey ${creds.username} ! Your password is ${creds.password}`;
        console.log(content);
        EmailSender.sendEmail(event.email, content);
      })
      .catch(console.error);
  }, 3000);
};

main();
