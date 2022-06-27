import { VisitorDto } from "../proxyclick/visitor.dto";

// proxyclick-auth
export const headersMock = { headers: { authorization: "Bearer fake-token" } };
export const tokenMock = {
  data: {
    access_token: "fake-token",
    token_type: "Bearer",
  },
};

// proxyclick-data
export const visitorsUrl = `https://api.proxyclick.com/v1/companies/CO-CXER585/vm/visitors`;
export const visitorsMock: { data: { visitors: VisitorDto[] } } = {
  data: {
    visitors: [
      {
        id: "one",
        object: "visitor",
        email: "fake-one@email.com",
        firstname: "fake-one",
        lastname: "faker",
        companyName: "fake-co",
        phone: "",
        mobile: "",
      },
      {
        id: "one",
        object: "visitor",
        email: "fake-two@email.com",
        firstname: "fake-two",
        lastname: "faker",
        companyName: "fake-co",
        phone: "",
        mobile: "",
      },
    ],
  },
};
