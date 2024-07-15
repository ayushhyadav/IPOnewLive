const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IPOSchema = new Schema({
    Overview: String,
    // ipoDate: String,
    // listingDate: String,
    // faceValue: String,
    // priceBand: String,
    // lotSize: String,
    // totalIssueSize: String,
    // offerForSale: String,
    // employeeDiscount: String,
    // issueType: String,
    // listingAt: String,
    // shareHoldingPreIssue: Number,
    // shareHoldingPostIssue: Number,
    // timeline: String,
    // reservation: String,
    // lotSizeDetails: [{
    //   application: String,
    //   lots: Number,
    //   shares: Number,
    //   amount: String
    // }],
    // anchorInvestorsDetails: [{
    //   bidDate: String,
    //   sharesOffered: Number,
    //   anchorPortionSize: Number,
    //   lockInPeriodEnd50PercentShares: String,
    //   lockInPeriodEndRemainingShares: String
    // }],
    // promoterHolding: String,
    // aboutCompany: String,
    // financialInformation: [{
    //   periodEnded: String,
    //   assets: Number,
    //   revenue: Number,
    //   profitAfterTax: Number,
    //   netWorth: Number,
    //   reservesAndSurplus: Number,
    //   totalBorrowing: Number
    // }],
    // keyPerformanceIndicators: {
    //   marketCapitalization: Number,
    //   kpiAsOf: String,
    //   kpiValues: {
    //     ROE: Number,
    //     ROCE: Number,
    //     debtEquity: Number,
    //     RoNW: Number,
    //     PBV: Number,
    //     PATMargin: Number
    //   },
    //   eps: {
    //     preIPO: Number,
    //     postIPO: Number
    //   },
    //   peRatio: {
    //     preIPO: Number,
    //     postIPO: Number
    //   }
    // },
    // objectsOfTheIssue: String,
    // contactDetails: String,
    // registrar: String,
    // leadManagers: [String]
  });

const IPODETAILS = mongoose.model('IPO', IPOSchema);

module.exports = IPODETAILS;