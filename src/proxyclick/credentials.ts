import * as crypto from "crypto";
// Do not modify this file

export interface ICredentials {
  username: string;
  password: string;
}

const key = "872184621648718956589728789";

export const CredentialsService = {
  generate: function (
    firstname: string,
    lastname: string,
    email: string
  ): ICredentials {
    const hmac = crypto.createHmac("sha256", key);

    hmac.update(firstname + lastname + email);

    return {
      username: `${firstname[0].toLowerCase()}${lastname.toLowerCase()}`,
      password: hmac.digest("hex").slice(0, 8),
    };
  },
};
