import { apiService } from "./api";
import { VisitorDto } from "./visitor.dto";

export interface IVisitorEvent {
  firstname?: string;
  lastname?: string;
  companyName?: string;
  email: string;
}

// Some existing visitors in CO-CXER585
// jaime@lannister.com
// tyrion@lannister.com

export const VisitorsService = {
  /**
   * Find visitors by searching through the Proxyclick API
   * @param filter a filter containing email and/or company name
   * @returns a promise of an array of visitors
   */

  _myCompanyId: "CO-CXER585",

  getVisitors: async function (filter: {
    email?: string;
    companyName?: string;
  }): Promise<VisitorDto[]> {
    const visitors = await apiService.getVisitorsByCompanyId(
      this._myCompanyId,
      filter
    );

    return visitors;
  },

  // This is a stub function. Do not change this
  updateVisitor: function (
    email: string,
    update: {
      firstname?: string;
      lastname?: string;
    }
  ) {},
};
