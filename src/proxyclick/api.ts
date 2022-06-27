import axios, { AxiosResponse } from "axios";
import { URLSearchParams } from "url";
import { VisitorDto } from "./visitor.dto";

type VisitorParams = {
  email?: string;
  companyName?: string;
};

class Api {
  private baseUrl: string = "https://api.proxyclick.com";

  private authUrl: string = `${this.baseUrl}/oauth`;

  private apiUrl: string = `${this.baseUrl}/v1`;

  // nb: with a higer version we could use #token in order ot make it actually private
  private token: string | null = null;

  private async refreshToken(): Promise<void> {
    try {
      const { data } = await axios.post(
        `${this.authUrl}/token`,
        new URLSearchParams({
          // Would better be in a env var
          client_id: "98C5EB84170E6FB3617C47A5B17ECFACB4A0FD49",
          client_secret: "35AB6F2717090B22F061990251078C5567F59FEA",
          grant_type: "password",
          username: "pxc_interview@yopmail.com",
          password: "interview123",
        }),
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );

      this.token = data.access_token;
    } catch (err) {
      console.error(err.message);
    }
  }

  private async get<T>(path: string): Promise<AxiosResponse<T>> {
    // tokens are valids 24h, so it will do the job for the tech test
    if (!this.token) await this.refreshToken();

    return axios.get(path, {
      headers: { authorization: `Bearer ${this.token}` },
    });
  }

  public async getVisitorsByCompanyId(
    companyId: string,
    { email, companyName }: VisitorParams
  ): Promise<VisitorDto[]> {
    let endpoint = `${this.apiUrl}/companies/${companyId}/vm/visitors?`;

    if (companyName) {
      endpoint = endpoint + `companyName=${companyName}&`;
    }
    if (email) {
      endpoint = endpoint + `email=${email}&`;
    }

    try {
      const { data } = await this.get<{ visitors: VisitorDto[] }>(
        endpoint.slice(0, -1)
      );
      return data.visitors;
    } catch (err) {
      console.error(err);
    }
  }
}

export const apiService = new Api();
