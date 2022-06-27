import { CredentialsService, ICredentials } from "../proxyclick/credentials";
import { VisitorDto } from "../proxyclick/visitor.dto";
import { IVisitorEvent, VisitorsService } from "../proxyclick/visitors";
import { inMemoryCache } from "./cache";

/**
 * In response of a check-in event, returns a WiFi credentials object
 * @param visitorEvent the visitor event checking in
 * @returns a credentials object, containing the credentials for this visitor
 */

const handleInconsistencies = (
  email: string,
  event: IVisitorEvent,
  output: VisitorDto
): void => {
  let toUpdate: Partial<Pick<VisitorDto, "firstname" | "lastname">> = {};

  if (event.firstname === output.firstname) {
    toUpdate = { ...toUpdate, firstname: event.firstname };
  }
  if (event.lastname === output.lastname) {
    toUpdate = { ...toUpdate, lastname: event.lastname };
  }

  if (toUpdate.firstname || toUpdate.lastname) {
    VisitorsService.updateVisitor(email, toUpdate);
    inMemoryCache.invalidateCache(email);
  }
};

const getCreds = (
  email: string,
  firstname: string,
  lastname: string
): ICredentials => {
  const credsFromCache = inMemoryCache.get(email);

  if (!credsFromCache) {
    const freshCreds = CredentialsService.generate(firstname, lastname, email);
    inMemoryCache.set(email, freshCreds);
    return freshCreds;
  }

  return credsFromCache;
};

export async function handleCheckin(
  visitorEvent: IVisitorEvent
): Promise<ICredentials> {
  // TODO: Write the body of this function
  // This function is the entry point of the flow e.g. an event coming from a websocket/messaging system
  // 1. Call getVisitor to find existing visitor if it exists
  // 2. If existing but mismatch data -> call updateVisitor with event data
  // 3. If not existing -> throw an error
  // 4. Generate credentials and returns it using `CredentialsService.generate()`
  // 5. Optimize -> Make sure that subsequent calls do not need to call generate additional times

  if (!visitorEvent.email) {
    throw new Error("Email is mandatory");
  }

  // assuming email is a unique value
  const [visitor] = await VisitorsService.getVisitors({
    email: visitorEvent.email,
  });

  if (!visitor) {
    throw new Error(`No visitor found with email ${visitorEvent.email}`);
  }

  handleInconsistencies(visitorEvent.email, visitorEvent, visitor);

  const { firstname, lastname, email } = visitorEvent;

  return getCreds(firstname, lastname, email);
}
