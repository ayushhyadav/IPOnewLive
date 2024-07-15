import React, { useState } from "react";
import axios from "axios";
import "./admin.css";

function Admin() {
  const [formValues, setFormValues] = useState({
    ipoName: '',
    overview: '',
    img: '',
    Type: '',
    ipoDetails: {
      ipoDate: '',
      listingDate: '',
      faceValue: '',
      priceBand: '',
      lotSize: '',
      totalIssueSize: '',
      offerForSale: '',
      employeeDiscount: '',
      issueType: '',
      listingAt: '',
      shareHoldingPreIssue: '',
      shareHoldingPostIssue: '',
    },
    ipoTimeline: {
      ipoOpenDate: '',
      ipoCloseDate: '',
      basisOfAllotment: '',
      initiationOfRefunds: '',
      creditOfSharesToDemat: '',
      listingDate: '',
      cutoffTimeForUpiMandateConfirmation: '',
    },
    ipoReservation: '',
    investorCategory: {
      anchorInvestorSharesOffered: {
        anchorInvestorsharesOffered: '',
        anchorInvestormaximumAllottees: '',
      },
      qibSharesOffered: {
        qibSharesOfferedsharesOffered: '',
        qibSharesOfferedmaximumAllottees: '',
      },
      niiSharesOffered: {
        niiSharesOfferedsharesOffered: '',
        niiSharesOfferedmaximumAllottees: '',
      },
      bNiiSharesOffered: {
        bNiiSharesOfferedsharesOffered: '',
        bNiiSharesOfferedmaximumAllottees: '',
      },
      sNiiSharesOffered: {
        sNiiSharesOfferedsharesOffered: '',
        sNiiSharesOfferedmaximumAllottees: '',
      },
      retailSharesOffered: {
        retailSharesOfferedsharesOffered: '',
        retailSharesOfferedmaximumAllottees: '',
      },
      employeeSharesOffered: {
        employeeSharesOfferedsharesOffered: '',
        employeeSharesOfferedmaximumAllottees: '',
      },
      totalSharesOffered: {
        totalSharesOfferedsharesOffered: '',
        totalSharesOfferedmaximumAllottees: '',
      },
    },
    ipoLotSize: {
      description: '',
      retailMin: {
        retailMinlot: '',
        retailMinshare: '',
        retailMinprice: '',
      },
      retailMax: {
        retailMaxlot: '',
        retailMaxshare: '',
        retailMaxprice: '',
      },
      sHniMin: {
        sHniMinlot: '',
        sHniMinshare: '',
        sHniMinprice: '',
      },
      sHniMax: {
        sHniMaxlot: '',
        sHniMaxshare: '',
        sHniMaxprice: '',
      },
      bHniMin: {
        bHniMinlot: '',
        bHniMinshare: '',
        bHniMinprice: '',
      },
    },
    ipoAnchorInvestorsDetails: {
      bidDate: '',
      sharesOffered: '',
      anchorPortionSize: '',
      anchorLockInPeriodEndDate50: '',
      anchorLockInPeriodEndDate90: '',
    },
    ipoPromotorHolding: {
      description: '',
      shareHoldingPreIssue: '',
      shareHoldingPostIssue: '',
    },
    about: '',
    limitedFinancialInformation: {
      description: '',
      periodEnded: [],
      assets: [],
      revenue: [],
      profitAfterTax: [],
      netWorth: [],
      reservesAndSurplus: [],
      totalBorrowing: [],
    },
    keyPerformanceIndicators: {
      description: '',
      roe: '',
      roce: '',
      debtEquity: '',
      ronw: '',
      pbv: '',
      patMargin: '',
      eps: '',
      pe: '',
    },
    objectsOfTheIssue: '',
    limitedContactDetails: '',
    ipoRegistrar: '',
    ipoSharesOffered: {
      anchorInvestor: '',
      qib: '',
      nii: '',
      bNii: '',
      sNii: '',
      retail: '',
      employee: '',
    },
    ipoInvestorCategories: '',
    dayWiseIpoGmpTrend: {
      allotment: '',
      close: '',
      dayBefore: '',
      open: '',
    },
    ipoGreyMarketPremium: '',
    ipoLeadManagers: '',
    axiscapitallimited: '',
    Jmfinanciallimited: '',
    ipoSubscriptionStatus: {
      qualifiedInstitutions: {
        qualifiedInstitutionssubscription: '',
        qualifiedInstitutionssharesBidFor: '',
        qualifiedInstitutionstotalAmount: '',
      },
      bNii: {
        bNiisubscription: '',
        bNiisharesBidFor: '',
        bNiitotalAmount: '',
      },
      sNii: {
        sNiisubscription: '',
        sNiisharesBidFor: '',
        sNiitotalAmount: '',
      },
      retailInvestors: {
        retailInvestorssubscription: '',
        retailInvestorssharesBidFor: '',
        retailInvestorstotalAmount: '',
      },
      employees: {
        employeessubscription: '',
        employeessharesBidFor: '',
        employeestotalAmount: '',
      },
      others: {
        otherssubscription: '',
        otherssharesBidFor: '',
        otherstotalAmount: '',
      },
      total: {
        totalsubscription: '',
        totalsharesBidFor: '',
        totaltotalAmount: '',
      },
      totalApplications: {
        totalApplicationssubscription: '',
        totalApplicationssharesBidFor: '',
        totalApplicationstotalAmount: '',
      },
    },
    ipoDayWiseSubscriptionDetails: {
      day1: '',
      day2: '',
      day3: '',
    },
    days: [
      {
        qib: '',
        nii: '',
        retail: '',
        emp: '',
        total: '',
      },
    ],
  });
  const [file, setFile] = useState(null);

  // const handleChange = (e, dayIndex, field) => {
  //   const updatedDays = [...formData.days];
  //   updatedDays[dayIndex][field] = e.target.value;
  //   setFormData({ days: updatedDays });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const updatedDays = [...formValues.days];
    // updatedDays[dayIndex][field] = value;
    // setFormValues({ ...formValues, days: updatedDays });

    if (name === "img") {
      setFile(e.target.files[0]);
    } else {
      const updatedFormValues = { ...formValues };

      // Split the name to handle nested fields
      const nameParts = name.split(".");

      // Traverse through nested structure if exists
      let currentField = updatedFormValues;
      for (let i = 0; i < nameParts.length; i++) {
        const part = nameParts[i];

        // Debug logging to understand the structure
        console.log(`Traversing: ${part}, currentField:`, currentField);

        if (i === nameParts.length - 1) {
          // Last part of the name, update the value
          currentField[part] = value;
        } else {
          // Ensure each part of the path exists
          if (!currentField[part]) {
            currentField[part] = {};
          }
          currentField = currentField[part];

          // Check if currentField is still undefined
          if (typeof currentField !== 'object') {
            console.error(`Failed to traverse: ${part}, currentField:`, currentField);
            break;
          }
        }
      }

      setFormValues(updatedFormValues);
    }
  };


  // const handleChange = (e, dayIndex, field) => {
  //   const { name, value } = e.target;
  //   const updatedDays = [...formValues.days];
  //   updatedDays[dayIndex][field] = value;
  //   setFormValues({ ...formValues, days: updatedDays });

  //   if (name === "img") {
  //     setFile(e.target.files[0]);
  //   } else {
  //     const updatedFormValues = { ...formValues };

  //     // Split the name to handle nested fields
  //     const nameParts = name.split(".");

  //     // Traverse through nested structure if exists
  //     let currentField = updatedFormValues;
  //     for (let i = 0; i < nameParts.length; i++) {
  //       const part = nameParts[i];

  //       if (i === nameParts.length - 1) {
  //         // Last part of the name, update the value
  //         currentField[part] = value;
  //       } else {
  //         // Ensure each part of the path exists
  //         if (!currentField[part]) {
  //           currentField[part] = {};
  //         }
  //         currentField = currentField[part];
  //       }
  //     }

  //     setFormValues(updatedFormValues);
  //   }
  // };



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Send formData to the backend or perform any desired action
  //   console.log(formData);
  // };

  const addDay = () => {
    setFormValues({
      days: [
        ...formValues.days,
        {
          qib: '',
          nii: '',
          retail: '',
          emp: '',
          total: '',
        },
      ],
    });
  };

  const removeDay = (index) => {
    const updatedDays = [...formValues.days];
    updatedDays.splice(index, 1);
    setFormValues({ days: updatedDays });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);

    const flattenObject = (obj, parentKey = '', result = {}) => {
      for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
      return result;
    };

    const flattenedValues = flattenObject(formValues);
    for (let key in flattenedValues) {
      formData.append(key, flattenedValues[key]);
    }

    try {
      const response = await axios.post("/submitIPO", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("IPO details submitted successfully!", response.data);
      setFormValues({
        ipoName: '',
        overview: '',
        img: '',
        Type: '',
        ipoDetails: {
          ipoDate: '',
          listingDate: '',
          faceValue: '',
          priceBand: '',
          lotSize: '',
          totalIssueSize: '',
          offerForSale: '',
          employeeDiscount: '',
          issueType: '',
          listingAt: '',
          shareHoldingPreIssue: '',
          shareHoldingPostIssue: '',
        },
        ipoTimeline: {
          ipoOpenDate: '',
          ipoCloseDate: '',
          basisOfAllotment: '',
          initiationOfRefunds: '',
          creditOfSharesToDemat: '',
          listingDate: '',
          cutoffTimeForUpiMandateConfirmation: '',
        },
        ipoReservation: '',
        investorCategory: {
          anchorInvestorSharesOffered: {
            anchorInvestorsharesOffered: '',
            anchorInvestormaximumAllottees: '',
          },
          qibSharesOffered: {
            qibSharesOfferedsharesOffered: '',
            qibSharesOfferedmaximumAllottees: '',
          },
          niiSharesOffered: {
            niiSharesOfferedsharesOffered: '',
            niiSharesOfferedmaximumAllottees: '',
          },
          bNiiSharesOffered: {
            bNiiSharesOfferedsharesOffered: '',
            bNiiSharesOfferedmaximumAllottees: '',
          },
          sNiiSharesOffered: {
            sNiiSharesOfferedsharesOffered: '',
            sNiiSharesOfferedmaximumAllottees: '',
          },
          retailSharesOffered: {
            retailSharesOfferedsharesOffered: '',
            retailSharesOfferedmaximumAllottees: '',
          },
          employeeSharesOffered: {
            employeeSharesOfferedsharesOffered: '',
            employeeSharesOfferedmaximumAllottees: '',
          },
          totalSharesOffered: {
            totalSharesOfferedsharesOffered: '',
            totalSharesOfferedmaximumAllottees: '',
          },
        },
        ipoLotSize: {
          description: '',
          retailMin: {
            retailMinlot: '',
            retailMinshare: '',
            retailMinprice: '',
          },
          retailMax: {
            retailMaxlot: '',
            retailMaxshare: '',
            retailMaxprice: '',
          },
          sHniMin: {
            sHniMinlot: '',
            sHniMinshare: '',
            sHniMinprice: '',
          },
          sHniMax: {
            sHniMaxlot: '',
            sHniMaxshare: '',
            sHniMaxprice: '',
          },
          bHniMin: {
            bHniMinlot: '',
            bHniMinshare: '',
            bHniMinprice: '',
          },
        },
        ipoAnchorInvestorsDetails: {
          bidDate: '',
          sharesOffered: '',
          anchorPortionSize: '',
          anchorLockInPeriodEndDate50: '',
          anchorLockInPeriodEndDate90: '',
        },
        ipoPromotorHolding: {
          description: '',
          shareHoldingPreIssue: '',
          shareHoldingPostIssue: '',
        },
        about: '',
        limitedFinancialInformation: {
          description: '',
          periodEnded: [],
          assets: [],
          revenue: [],
          profitAfterTax: [],
          netWorth: [],
          reservesAndSurplus: [],
          totalBorrowing: [],
        },
        keyPerformanceIndicators: {
          description: '',
          roe: '',
          roce: '',
          debtEquity: '',
          ronw: '',
          pbv: '',
          patMargin: '',
          eps: '',
          pe: '',
        },
        objectsOfTheIssue: '',
        limitedContactDetails: '',
        ipoRegistrar: '',
        ipoSharesOffered: {
          anchorInvestor: '',
          qib: '',
          nii: '',
          bNii: '',
          sNii: '',
          retail: '',
          employee: '',
        },
        ipoInvestorCategories: '',
        dayWiseIpoGmpTrend: {
          allotment: '',
          close: '',
          dayBefore: '',
          open: '',
        },
        ipoGreyMarketPremium: '',
        ipoLeadManagers: '',
        axiscapitallimited: '',
        Jmfinanciallimited: '',
        ipoSubscriptionStatus: {
          qualifiedInstitutions: {
            qualifiedInstitutionssubscription: '',
            qualifiedInstitutionssharesBidFor: '',
            qualifiedInstitutionstotalAmount: '',
          },
          bNii: {
            bNiisubscription: '',
            bNiisharesBidFor: '',
            bNiitotalAmount: '',
          },
          sNii: {
            sNiisubscription: '',
            sNiisharesBidFor: '',
            sNiitotalAmount: '',
          },
          retailInvestors: {
            retailInvestorssubscription: '',
            retailInvestorssharesBidFor: '',
            retailInvestorstotalAmount: '',
          },
          employees: {
            employeessubscription: '',
            employeessharesBidFor: '',
            employeestotalAmount: '',
          },
          others: {
            otherssubscription: '',
            otherssharesBidFor: '',
            otherstotalAmount: '',
          },
          total: {
            totalsubscription: '',
            totalsharesBidFor: '',
            totaltotalAmount: '',
          },
          totalApplications: {
            totalApplicationssubscription: '',
            totalApplicationssharesBidFor: '',
            totalApplicationstotalAmount: '',
          },
        },
        ipoDayWiseSubscriptionDetails: {
          day1: '',
          day2: '',
          day3: '',
        },
      });
      setFile(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit IPO details!");
    }
  };
  return (

    <div>
      <div className="container">
        <h2 className="mb-4"> IPO Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-md-6 d-flex flex-wrap mb-5">
              <label style={{ fontSize: 22, fontWeight: 500, marginBottom: 15 }}>
                Ipo Name
              </label>
              <input
                name="ipoName"
                className="w-100"
                value={formValues.ipoName}
                style={{ height: 40 }}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 d-flex flex-wrap mb-5">
              <label style={{ fontSize: 22, fontWeight: 500, marginBottom: 15 }}>
                Ipo Type
              </label>

              <input
                name="Type"
                className="w-100"
                value={formValues.Type}
                style={{ height: 40 }}
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>OverView</h3>
              <div>
                <textarea
                  id="overview"
                  className="w-100"
                  name="overview"
                  value={formValues.overview}
                  rows="4"
                  cols="100"
                  onChange={handleChange}
                ></textarea>
                <br />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>IPO Details</h3>

              <input
                className="my-3"
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="ipoDetails.ipoDate"
                value={formValues?.ipoDetails?.ipoDate}
                placeholder="IPO Date"
                onChange={handleChange}

              />
              <br />
              <input
                type="text"
                className="form-control"
                name="ipoDetails.listingDate"
                value={formValues?.ipoDetails?.listingDate}
                placeholder="Listing Date"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="ipoDetails.faceValue"
                value={formValues?.ipoDetails?.faceValue}
                placeholder="Face Value"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="ipoDetails.priceBand"
                value={formValues?.ipoDetails?.priceBand}
                placeholder="Price Band"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="ipoDetails.lotSize"
                value={formValues?.ipoDetails?.lotSize}
                placeholder="Lot Size"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="ipoDetails.totalIssueSize"
                value={formValues?.ipoDetails?.totalIssueSize}
                placeholder="Total Issue Size"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="ipoDetails.offerForSale"
                value={formValues?.ipoDetails?.offerForSale}
                placeholder="Offer for Sale"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoDetails.issueType"
                value={formValues?.ipoDetails?.issueType}
                placeholder="Issue Type"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoDetails.listingAt"
                value={formValues?.ipoDetails?.listingAt}
                placeholder="Listing At"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoDetails.shareHoldingPreIssue"
                value={formValues?.ipoDetails?.shareHoldingPreIssue}
                placeholder="Share holding pre issue"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoDetails.shareHoldingPostIssue"
                value={formValues?.ipoDetails?.shareHoldingPostIssue}
                placeholder="Share holding post issue"
              />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5">
              <h3>IPO Timeline (Tentative Schedule)</h3>
            </div>
            <div className="col-md-6 mt-3">
              <input
                type="text"

                className="form-control"
                name="ipoTimeline.ipoOpenDate"
                value={formValues?.ipoTimeline?.ipoOpenDate || ''}
                placeholder="IPO Open Date"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoTimeline.ipoCloseDate"
                value={formValues?.ipoTimeline?.ipoCloseDate}
                placeholder="IPO Close Date"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoTimeline.basisOfAllotment"
                value={formValues?.ipoTimeline?.basisOfAllotment}
                placeholder="Basis of Allotment"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoTimeline.initiationOfRefunds"
                value={formValues?.ipoTimelineinitiationOfRefunds}
                placeholder="Initiation of Refunds"
              />
            </div>
            <div className="col-md-6 mt-3">
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoTimeline.creditOfSharesToDemat"
                value={formValues?.ipoTimeline?.creditOfSharesToDemat}
                placeholder="Credit of Shares to Demat"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoTimeline.listingDate"
                value={formValues?.ipoTimeline?.listingDate}
                placeholder="Listing Date"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoTimeline.cutoffTimeForUpiMandateConfirmation"
                value={formValues?.ipoTimeline?.cutoffTimeForUpiMandateConfirmation}
                placeholder="Cut-off time for UPI mandate confirmation"
              />
              <br />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 mt-">
              <h3>IPO Reservation</h3>
              <textarea
                id="message"
                className="w-100"
                name="ipoReservation"
                value={formValues.ipoReservation}
                onChange={handleChange}
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          <div className="row">
            {/* <textarea id="message" name="message" rows="4" cols="50"></textarea><br /> */}
            <div className="col-md-12 mt-4">
              <h3>Investor Category</h3>
            </div>
            <div className="row">
              <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                Anchor Investor Shares Offered
              </label>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}


                >
                  <input
                    // style={{ maxWidth: "45%", width: "100%" }}
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.anchorInvestorSharesOffered.anchorInvestorsharesOffered"
                    value={formValues?.investorCategory?.anchorInvestorSharesOffered?.anchorInvestorsharesOffered}
                    placeholder="Shares Offered"
                  />

                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  // style={{ maxWidth: "45%", width: "100%" }}
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.anchorInvestorSharesOffered.anchorInvestormaximumAllottees"
                  value={formValues?.investorCategory?.anchorInvestorSharesOffered?.anchorInvestormaximumAllottees}
                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                  QIB Shares Offered
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.qibSharesOffered.qibSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.qibSharesOffered?.qibSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.qibSharesOffered.qibSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.qibSharesOffered?.qibSharesOfferedmaximumAllottees}
                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                  NII (HNI) Shares Offered
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.niiSharesOffered.niiSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.niiSharesOffered?.niiSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.niiSharesOffered.niiSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.niiSharesOffered?.niiSharesOfferedmaximumAllottees}
                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                  bNII ₹10L
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.bNiiSharesOffered.bNiiSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.bNiiSharesOffered?.bNiiSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.bNiiSharesOffered.bNiiSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.bNiiSharesOffered?.bNiiSharesOfferedmaximumAllottees}
                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                  sNII ₹10L
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.sNiiSharesOffered.sNiiSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.sNiiSharesOffered?.sNiiSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.sNiiSharesOffered.sNiiSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.sNiiSharesOffered?.sNiiSharesOfferedmaximumAllottees}

                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                  Retail Shares Offered
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.retailSharesOffered.retailSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.retailSharesOffered?.retailSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.retailSharesOffered.retailSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.retailSharesOffered?.retailSharesOfferedmaximumAllottees}

                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBlock: 15 }}>
                  Employee Shares Offered
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.employeeSharesOffered.employeeSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.employeeSharesOffered?.employeeSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.employeeSharesOffered.employeeSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.employeeSharesOffered?.employeeSharesOfferedmaximumAllottees}

                  placeholder="Maximum Allottees"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}>
                  Total Shares Offered
                </label>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="investorCategory.totalSharesOffered.totalSharesOfferedsharesOffered"
                    value={formValues?.investorCategory?.totalSharesOffered?.totalSharesOfferedsharesOffered}
                    placeholder="Shares Offered"
                  />
                </div>

              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="investorCategory.totalSharesOffered.totalSharesOfferedmaximumAllottees"
                  value={formValues?.investorCategory?.totalSharesOffered?.totalSharesOfferedmaximumAllottees}
                  placeholder="Maximum Allottees"
                />
              </div>
            </div>


            <div className="row mt-3">
              <div className="col-md-12">
                <div className="Lot-Size">
                  <h3 className="mt-3">IPO Lot Size</h3>
                  <textarea
                    style={{ width: '100%' }}
                    id="message"
                    onChange={handleChange}
                    rows="4"
                    cols="50"
                    name="ipoLotSize.description"
                    value={formValues?.ipoLotSize?.description}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label
                  style={{ fontSize: 18, fontWeight: 500, marginBottom: 15 }}
                  className="mt-3"
                >
                  Retail (Min)
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.retailMin.retailMinlot"
                  value={formValues?.ipoLotSize?.retailMin?.lot}
                  placeholder="lot"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.retailMin.retailMinshare"
                  value={formValues?.ipoLotSize?.retailMin?.share}
                  placeholder="share"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.retailMin.retailMinprice"
                  value={formValues?.ipoLotSize?.retailMin?.price}
                  placeholder="price"
                />
              </div>

            </div>
            <div className="row mt-3">
              <div className="col-md-12 mb-3">
                <label
                  style={{ fontSize: 18, fontWeight: 500, }}

                >
                  Retail (Max)
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.retailMax.retailMaxlot"
                  value={formValues?.ipoLotSize?.retailMax?.lot}
                  placeholder="lot"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.retailMax.retailMaxshare"
                  value={formValues?.ipoLotSize?.retailMax?.share}
                  placeholder="share"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.retailMax.retailMaxprice"
                  value={formValues?.ipoLotSize?.retailMax?.price}
                  placeholder="price"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 mb-3">
                <label
                  style={{ fontSize: 18, fontWeight: 500 }}
                >
                  S-HNI (Min)
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.sHniMin.sHniMinlot"
                  value={formValues?.ipoLotSize?.sHniMin?.lot}
                  placeholder="lot"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.sHniMin.sHniMinshare"
                  value={formValues?.ipoLotSize?.sHniMin?.share}
                  placeholder="share"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.sHniMin.sHniMinprice"
                  value={formValues?.ipoLotSize?.sHniMin?.price}
                  placeholder="price"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label
                  style={{ fontSize: 18, fontWeight: 500 }}
                  className="mb-3"
                >
                  S-HNI (Max)
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.sHniMax.sHniMaxlot"
                  value={formValues?.ipoLotSize?.sHniMax?.lot}
                  placeholder="lot"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.sHniMax.sHniMaxshare"
                  value={formValues?.ipoLotSize?.sHniMax?.share}
                  placeholder="share"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.sHniMax.sHniMaxprice"
                  value={formValues?.ipoLotSize?.sHniMax?.price}
                  placeholder="price"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label
                  style={{ fontSize: 18, fontWeight: 500 }}
                  className="mb-3"
                >
                  B-HNI (Min)
                </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.bHniMin.bHniMinlot"
                  value={formValues?.ipoLotSize?.bHniMin?.lot}
                  placeholder="B-HNI (Min)"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.bHniMin.bHniMinshare"
                  value={formValues?.ipoLotSize?.bHniMin?.share}
                  placeholder="B-HNI (Min)"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoLotSize.bHniMin.bHniMinprice"
                  value={formValues?.ipoLotSize?.bHniMin?.price}
                  placeholder="B-HNI (Min)"
                />
              </div>

            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <h3> IPO Anchor Investors Details</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <input

                    type="text"
                    onChange={handleChange}
                    className="form-control mb-3"
                    name="ipoAnchorInvestorsDetails.bidDate"
                    value={formValues?.ipoAnchorInvestorsDetails?.bidDate}
                    placeholder="Bid Date"
                  />
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="ipoAnchorInvestorsDetails.sharesOffered mb-3"
                    value={formValues?.ipoAnchorInvestorsDetails?.sharesOffered}
                    placeholder="Shares Offered"
                  />
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control mt-3"
                    name="ipoAnchorInvestorsDetails.anchorLockInPeriodEndDate90 "
                    value={formValues?.ipoAnchorInvestorsDetails?.anchorLockInPeriodEndDate90}
                    placeholder="Anchor lock-in period end date for remaining shares (90 Days)"
                  />

                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control mb-3"
                    name="ipoAnchorInvestorsDetails.anchorLockInPeriodEndDate50"
                    value={formValues?.ipoAnchorInvestorsDetails?.anchorLockInPeriodEndDate50}
                    placeholder="Anchor lock-in period end date for 50% shares (30 Days)"
                  />
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    name="ipoAnchorInvestorsDetails.anchorPortionSize"
                    value={formValues?.ipoAnchorInvestorsDetails?.anchorPortionSize}
                    placeholder="Anchor Portion Size (In Cr.)"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 mb-3">
                <h3>IPO Promoter Holding</h3>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoPromotorHolding.shareHoldingPreIssue"
                  value={formValues?.ipoPromotorHolding?.shareHoldingPreIssue}
                  placeholder="Share Holding Pre Issue"
                />
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoPromotorHolding.shareHoldingPostIssue"
                  value={formValues?.ipoPromotorHolding?.shareHoldingPostIssue}
                  placeholder="Share Holding Post Issue"
                />
              </div>
              <div className="col-md-6">
                <textarea

                  id="message"
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  name="ipoPromotorHolding.description"
                  value={formValues?.ipoPromotorHolding?.description}
                ></textarea>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="About">
                  <h3>About</h3>
                  <textarea
                    id="message"
                    onChange={handleChange}
                    rows="4"
                    cols="50"
                    name="about"
                    value={formValues?.about}
                  ></textarea>
                  <br />
                </div>
              </div>
            </div>
            <div className="row about-2 mt-5">
              <div className="col-md-12">
                <h3>Limited Financial Information (Restated)</h3>
                <textarea

                  id="message"
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  name="limitedFinancialInformation.description"
                  value={formValues?.limitedFinancialInformation?.description}
                ></textarea>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <h5>Period Ended</h5>
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                  placeholder="date"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                  placeholder="date"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                  placeholder="date"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h5>Assets</h5>
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h5>Revenue</h5>

              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h5>Profit After Tax</h5>

              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h5>Net Worth</h5>

              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h5>Reserves and Surplus</h5>

              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="value %"
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <h5>Total Borrowing</h5>

            </div>
            <div className="col-md-4">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="value %"
              />
            </div>
            <div className="col-md-4">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="value %"
              />
            </div>
            <div className="col-md-4">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="value %"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>Key Performance Indicators</h3>
              <textarea
                id="message"
                onChange={handleChange}
                rows="4"
                cols="50"
                name="keyPerformanceIndicators.description"
                value={formValues?.keyPerformanceIndicators?.description}
              ></textarea>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 mb-3">
              <h5>KPI</h5>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.roe"
                value={formValues?.keyPerformanceIndicators?.roe}
                placeholder="ROE"
              />
              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.roce"
                value={formValues?.keyPerformanceIndicators?.roce}
                placeholder="ROCE"
              />
              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.debtEquity"
                value={formValues?.keyPerformanceIndicators?.debtEquity}
                placeholder="Debt/Equity"
              />
              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.ronw"
                value={formValues?.keyPerformanceIndicators?.ronw}
                placeholder="RoNW"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.pbv"
                value={formValues?.keyPerformanceIndicators?.pbv}
                placeholder="P/BV"
              />

              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.patMargin"
                value={formValues?.keyPerformanceIndicators?.patMargin}
                placeholder="PAT Margin (%)"
              />

              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.eps"
                value={formValues?.keyPerformanceIndicators?.eps}
                placeholder="EPS (Rs) "
              />

              <input
                type="text"
                onChange={handleChange}
                className="form-control mb-2"
                name="keyPerformanceIndicators.pe"
                value={formValues?.keyPerformanceIndicators?.pe}
                placeholder="P/E (x) "
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="Objects-Issue">
                <h3>Objects of the Issue (IPO Objectives)</h3>
                <textarea
                  onChange={handleChange}
                  id="message"
                  rows="4"
                  cols="50"
                  name="objectsOfTheIssue"
                  value={formValues?.objectsOfTheIssue}
                ></textarea>

              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="IPO-Registrar">
                <h3>IPO Registrar</h3>
                <textarea
                  id="message"
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  name="ipoRegistrar"
                  value={formValues?.ipoRegistrar}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="Limited-Details">
                <h3>Limited Contact Details</h3>
                <textarea
                  onChange={handleChange}
                  id="message"
                  rows="4"
                  cols="50"
                  name="limitedContactDetails"
                  value={formValues?.limitedContactDetails}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>IPO Shares Offered</h3>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.anchorInvestor"
                value={formValues?.ipoSharesOffered?.anchorInvestor}
                placeholder="Anchor Investor"
              />
              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.qib"
                value={formValues?.ipoSharesOffered?.qib}
                placeholder="QIB"
              />
              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.nii"
                value={formValues?.ipoSharesOffered?.nii}
                placeholder="NII"
              />
              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.bNii"
                value={formValues?.ipoSharesOffered?.bNii}
                placeholder="bNII (bids above ₹10L)"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.sNii"
                value={formValues?.ipoSharesOffered?.sNii}
                placeholder="sNII (bids below ₹10L)"
              />

              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.retail"
                value={formValues?.ipoSharesOffered?.retail}
                placeholder="Retail"
              />

              <input
                type="text"
                onChange={handleChange}
                className="form-control mt-2"
                name="ipoSharesOffered.employee"
                value={formValues?.ipoSharesOffered?.employee}
                placeholder="Employee"
              />

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="Shares-Offered">
                <h3>IPO Investor Categories</h3>
                <textarea
                  id="message"
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  name="ipoInvestorCategories"
                  value={formValues?.ipoInvestorCategories}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 about-2 mb-3 border-box">
              <h3>Day-wise IPO GMP Trend</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control mb-2"
                  name="allotment"
                  value={formValues?.dayWiseIpoGmpTrend?.allotment}
                  placeholder="12-03-2024 Allotment"
                />

                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="close"
                  value={formValues?.dayWiseIpoGmpTrend?.close}
                  placeholder="11-03-2024 Close"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control mb-2"
                  name="dayBefore"
                  value={formValues?.dayWiseIpoGmpTrend?.dayBefore}
                  placeholder="10/03/2024"
                />

                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="open"
                  value={formValues?.dayWiseIpoGmpTrend?.open}
                  placeholder="06-03-2024 Open"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="Shares-Offered">
                <h3>IPO grey market premium (GMP)</h3>
                <textarea
                  id="message"
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  name="ipoGreyMarketPremium"
                  value={formValues.ipoGreyMarketPremium}
                ></textarea>

              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>IPO Lead Manager(s)</h3>
            </div>
            <div className="col-md-6 mt-3">
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoLeadManagers"
                value={formValues?.ipoLeadManagers}
                placeholder="Intensive Fiscal Services Private Limited"
              />
              <br />
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="axiscapitallimited"
                value={formValues?.axiscapitallimited}
                placeholder="Axis Capital Limited"
              />
            </div>
            <div className="col-md-6 mt-3">
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="jmfinanciallimited"
                value={formValues?.Jmfinanciallimited}
                placeholder="Jm Financial Limited"
              />
            </div>

          </div>
          <div className="row mt-5 border-box">
            <div className="col-md-12">
              <h3>IPO Subscription Status Lives</h3>
              <textarea
                id="message" name="message" rows="4" cols="50"></textarea>
            </div>
          </div>
          <div className="row mt-5">
            <div className="row mt-3">
              <div className="col-md-12 mb-2">
                <label>Qualified Institutions</label>
              </div>
              <div className="col-md-4 mb-2">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.qualifiedInstitutions.qualifiedInstitutionssubscription"
                  value={formValues?.ipoSubscriptionStatus?.qualifiedInstitutions?.qualifiedInstitutionssubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4 mb-2">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.qualifiedInstitutions.qualifiedInstitutionssharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.qualifiedInstitutions?.qualifiedInstitutionssharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4 mb-2"><input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoSubscriptionStatus.qualifiedInstitutions.qualifiedInstitutionstotalAmount"
                value={formValues?.ipoSubscriptionStatus?.qualifiedInstitutions?.qualifiedInstitutionstotalAmount}
                placeholder="Total Amount (Rs Cr.)*" /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 mb-2">
                <label>bNII (bids above ₹10L)</label>
              </div>
              <div className="col-md-4 mb-2">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.bNii.bNiisubscription"
                  value={formValues?.ipoSubscriptionStatus?.bNii?.bNiisubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4 mb-2">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.bNii.bNiisharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.bNii?.bNiisharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4 mb-2">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.bNii.bNiitotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.bNii?.bNiitotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label>sNII (bids below ₹10L)</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.sNii.sNiisubscription"
                  value={formValues?.ipoSubscriptionStatus?.sNii?.sNiisubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.sNii.sNiisharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.sNii?.sNiisharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.sNii.sNiitotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.sNii?.sNiitotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label>Retail Investors</label>

              </div>
              <div className="col-md-4"><input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoSubscriptionStatus.retailInvestors.retailInvestorssubscription"
                value={formValues?.ipoSubscriptionStatus?.retailInvestors?.retailInvestorssubscription}
                placeholder="Subscription" /></div>
              <div className="col-md-4"><input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="ipoSubscriptionStatus.retailInvestors.retailInvestorssharesBidFor"
                value={formValues?.ipoSubscriptionStatus?.retailInvestors?.retailInvestorssharesBidFor}
                placeholder="Shares Bid for" /></div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.retailInvestors.retailInvestorstotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.retailInvestors?.retailInvestorstotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label>Employees</label>

              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.employees.employeessubscription"
                  value={formValues?.ipoSubscriptionStatus?.employees?.employeessubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.employees.employeessharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.employees?.employeessharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.employees.employeestotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.employees?.employeestotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label>Others</label>

              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.others.otherssubscription"
                  value={formValues?.ipoSubscriptionStatus?.others?.otherssubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.others.otherssharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.others?.otherssharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.others.otherstotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.others?.otherstotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label>Total</label>

              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.total.totalsubscription"
                  value={formValues?.ipoSubscriptionStatus?.total?.totalsubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.total.totalsharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.total?.totalsharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.total.totaltotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.total?.totaltotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label>Total Application : 620,502 (4.07 times)</label>

              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.totalApplications.totalApplicationssubscription"
                  value={formValues?.ipoSubscriptionStatus?.totalApplications?.totalApplicationssubscription}
                  placeholder="Subscription" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.totalApplications.totalApplicationssharesBidFor"
                  value={formValues?.ipoSubscriptionStatus?.totalApplications?.totalApplicationssharesBidFor}
                  placeholder="Shares Bid for" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="ipoSubscriptionStatus.totalApplications.totalApplicationstotalAmount"
                  value={formValues?.ipoSubscriptionStatus?.totalApplications?.totalApplicationstotalAmount}
                  placeholder="Total Amount (Rs Cr.)*" />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h3>IPO (Day-wise) Subscription Details (times)</h3>
              <div className="row ">
            <div className="col-md-12">
              <div className="Subscription-Details">
                {formValues.days.map((day, index) => (
                  <div key={index}>
                    <h3>Day {index + 1}</h3>
                    <label>
                      QIB:
                      <input
                      className="w-100"
                        type="text"
                        value={formValues.days.qib}
                        onChange={(e) => handleChange(e, index, 'qib')}
                      />
                    </label>
                    <label>
                      NII:
                      <input
                      className="w-100"
                        type="text"
                        value={formValues.days.nii}
                        onChange={(e) => handleChange(e, index, 'nii')}
                      />
                    </label>
                    <label>
                      Retail:
                      <input
                      className="w-100"
                        type="text"
                        value={formValues.days.retail}
                        onChange={(e) => handleChange(e, index, 'retail')}
                      />
                    </label>
                    <label>
                      EMP:
                      <input
                      className="w-100"
                        type="text"
                        value={formValues.days.emp}
                        onChange={(e) => handleChange(e, index, 'emp')}
                      />
                    </label>
                    <label>
                      Total:
                      <input
                      className="w-100"

                        type="text"
                        value={formValues.days.total}
                        onChange={(e) => handleChange(e, index, 'total')}
                      />
                    </label>
                    <button type="button" onClick={() => removeDay(index)}>
                      Remove Day
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addDay}>
                  Add Day
                </button>
              </div>
            </div>
          </div>
            </div>

          </div>

        
          <div className="col-md-12">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>

      </div>
    </div>
  );
}
export default Admin;
