const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); 
const bodyParser = require("body-parser");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://mern:12345@cluster0.sgnyyr9.mongodb.net/ipodata?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const ipoSchema = new mongoose.Schema({
    ipoName: String,
    overview: String,
    img: String,
    Type:String,
    ipoDetails: {
      ipoDate: String,
      listingDate: String,
      faceValue: String,
      priceBand: String,
      lotSize: String,
      totalIssueSize: String,
      offerForSale: String,
      employeeDiscount: String,
      issueType: String,
      listingAt: String,
      shareHoldingPreIssue: String,
      shareHoldingPostIssue: String
    },
    ipoTimeline: {
      ipoOpenDate: String,
      ipoCloseDate: String,
      basisOfAllotment: String,
      initiationOfRefunds: String,
      creditOfSharesToDemat: String,
      listingDate: String,
      cutoffTimeForUpiMandateConfirmation: String
    },
    ipoReservation: String,
    investorCategory: {
      anchorInvestorSharesOffered: {
        anchorInvestorsharesOffered: String,
        anchorInvestormaximumAllottees: String
      },
      qibSharesOffered: {
        qibSharesOfferedsharesOffered: String,
        qibSharesOfferedmaximumAllottees: String
      },
      niiSharesOffered: {
        niiSharesOfferedsharesOffered: String,
        niiSharesOfferedmaximumAllottees: String
      },
      bNiiSharesOffered: {
        bNiiSharesOfferedsharesOffered: String,
        bNiiSharesOfferedmaximumAllottees: String
      },
      sNiiSharesOffered: {
        sNiiSharesOfferedsharesOffered: String,
        sNiiSharesOfferedmaximumAllottees: String
      },
      retailSharesOffered: {
        retailSharesOfferedsharesOffered: String,
        retailSharesOfferedmaximumAllottees: String
      },
      employeeSharesOffered: {
        employeeSharesOfferedsharesOffered: String,
        employeeSharesOfferedmaximumAllottees: String
      },
      totalSharesOffered: {
        totalSharesOfferedsharesOffered: String,
        totalSharesOfferedmaximumAllottees: String
      }
    },
    ipoLotSize: {
      description: String,
      retailMin: {
        retailMinlot: String,
        retailMinshare: String,
        retailMinprice: String
      },
      retailMax: {
        retailMaxlot: String,
        retailMaxshare: String,
        retailMaxprice: String
      },
      sHniMin: {
        sHniMinlot: String,
        sHniMinshare: String,
        sHniMinprice: String
      },
      sHniMax: {
        sHniMaxlot: String,
        sHniMaxshare: String,
        sHniMaxprice: String
      },
      bHniMin: {
        bHniMinlot: String,
        bHniMinshare: String,
        bHniMinprice: String
      }
    },
    ipoAnchorInvestorsDetails: {
      bidDate: String,
      sharesOffered: String,
      anchorPortionSize: String,
      anchorLockInPeriodEndDate50: String,
      anchorLockInPeriodEndDate90: String
    },
    ipoPromotorHolding: {
      description: String,
      shareHoldingPreIssue: String,
      shareHoldingPostIssue: String
    },
    about: String,
    limitedFinancialInformation: {
      description: String,
      periodEnded: [String],
      assets: [String],
      revenue: [String],
      profitAfterTax: [String],
      netWorth: [String],
      reservesAndSurplus: [String],
      totalBorrowing: [String]
    },
    keyPerformanceIndicators: {
      description: String,
      roe: String,
      roce: String,
      debtEquity: String,
      ronw: String,
      pbv: String,
      patMargin: String,
      eps: String,
      pe: String
    },
    objectsOfTheIssue: String,
    limitedContactDetails: String,
    ipoRegistrar: String,
    ipoSharesOffered: {
      anchorInvestor: String,
      qib: String,
      nii: String,
      bNii: String,
      sNii: String,
      retail: String,
      employee: String
    },
    ipoInvestorCategories: String,
    dayWiseIpoGmpTrend: {
      allotment: String,
      close: String,
      dayBefore: String,
      open: String
    },
    ipoGreyMarketPremium: String,
    ipoLeadManagers: String,
    axiscapitallimited: String,
    Jmfinanciallimited: String,
    ipoSubscriptionStatus: {
      qualifiedInstitutions: {
        qualifiedInstitutionssubscription: String,
        qualifiedInstitutionssharesBidFor: String,
        qualifiedInstitutionstotalAmount: String
      },
      bNii: {
        bNiisubscription: String,
        bNiisharesBidFor: String,
        bNiitotalAmount: String
      },
      sNii: {
        sNiisubscription: String,
        sNiisharesBidFor: String,
        sNiitotalAmount: String
      },
      retailInvestors: {
        retailInvestorssubscription: String,
        retailInvestorssharesBidFor: String,
        retailInvestorstotalAmount: String
      },
      employees: {
        employeessubscription: String,
        employeessharesBidFor: String,
        employeestotalAmount: String
      },
      others: {
        otherssubscription: String,
        otherssharesBidFor: String,
        otherstotalAmount: String
      },
      total: {
        totalsubscription: String,
        totalsharesBidFor: String,
        totaltotalAmount: String
      },
      totalApplications: {
        totalApplicationssubscription: String,
        totalApplicationssharesBidFor: String,
        totalApplicationstotalAmount: String
      }
    },
    ipoDayWiseSubscriptionDetails: {
      day1: String,
      day2: String,
      day3: String
    },
    // days: [
    //   {
    //     qib: String,
    //     nii: String,
    //     retail: String,
    //     emp: String,
    //     total: String,
    //   },
    // ],
  });
const IPO = mongoose.model('IPO', ipoSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});
const upload = multer({ storage: storage });

// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
// POST endpoint for submitting IPO details with file upload

app.post('/submitIPO', upload.single('img'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const ipoData = req.body;
    ipoData.img = req.file.filename; 
    
    //Create a new IPO document with generated unique _id
    const ipo = new IPO(ipoData);

    // Save the IPO document to the database
    await ipo.save();

    res.status(201).json({ message: 'IPO details submitted successfully!', id: ipo._id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 
app.get('/ipo/:ipoId', async (req, res) => {
  try {
    const ipoId = req.params.ipoId;
    console.log(`Fetching IPO with ID: ${ipoId}`);
    const ipo = await IPO.findById(ipoId);
    if (!ipo) {
      console.log('IPO not found');
      return res.status(404).json({ error: 'IPO not found' });
    }
    res.json(ipo);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to fetch all IPO data  
app.get('/ipo', async (req, res) => {
  try {
    const ipos = await IPO.find();
    res.json(ipos);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

