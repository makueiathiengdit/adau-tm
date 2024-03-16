import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    is_active: {
      type: Boolean,
      default: true,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    security_question_id: {
      type: Number,
    },
    security_questio_answer: {
      type: String,
    },
    last_modified: {
      type: Date,
      default: Date.now,
    },
    company_id: {
      type: Number,
      required: true,
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);

const companyOwnerSchema = new mongoose.Schema({
  first_name: { type: String, required: true }, // Not nullable in Mongoose
  last_name: { type: String, required: true }, // Not nullable in Mongoose
  mobile_number: {
    type: String,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  emailAddress: {
    type: String,
    validate: {
      validator: validateEmail,
      message: "Invalid email address",
    },
  },
  city: String,
  country: String,
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
});

const companySchema = new mongoose.Schema({
  name: String,
  description: { type: String, maxlength: 100 }, // Limit description length
  address: {
    street: String,
    city: String,
    country: String,
  },
  mobileNumber: {
    type: String,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  logo: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyOwner" }, // Reference to CompanyOwner model
  branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }], // Array of references to Branch model
  isActive: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
});

const branchSchema = new mongoose.Schema({
  name: String,
  address: {
    // Combine address fields into a nested object
    street: String,
    city: String,
    country: String,
  },
  mobileNumber: {
    type: String,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  }, // Require companyId
  cashAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "CashAccount" }], // Array of references to CashAccount model
  mobileMoneyAccounts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MobileMoneyAccount" },
  ], // Array of references to MobileMoneyAccount model
  branchManagerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Assuming branchManagerId refers to a User model
  isClosed: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
});

const employeeSchema = new mongoose.Schema({
  userId: String, // Assuming user_id refers to a separate user login system
  employeeId: { type: Number, required: true }, // Make employeeId unique
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: validateName,
      message:
        "First name should be 2-30 characters and contain only letters, hyphens, and spaces",
    },
    set: titleCase, // Apply title case transformation on assignment
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: validateName,
      message:
        "Last name should be 2-30 characters and contain only letters, hyphens, and spaces",
    },
    set: titleCase, // Apply title case transformation on assignment
  },
  gender: String,
  email: {
    type: String,
    required: true,
    validate: { validator: validateEmail, message: "Invalid email address" },
  },
  address: {
    // Combine address fields into a nested object
    street: String,
    city: String,
    country: String,
  },
  role: { type: String, default: "EMPLOYEE" },
  mobileNumber: {
    type: String,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  branchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  isBanned: { type: Boolean, default: false },
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const currencySchema = new mongoose.Schema({
  shortName: {
    type: String,
    required: true,
    maxlength: 3,
    validate: {
      validator: validateShortName,
      message: "Short name must be 3 characters long",
    },
  },
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    validate: {
      validator: validateFullName,
      message: "Full name must be at least 2 characters long",
    },
  },
  country: String,
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
});

const cashAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: validateName,
      message: "Name should be at least 2 characters long",
    },
    set: toUpper, // Apply uppercase transformation on assignment
  },
  accountNumber: { type: String, required: true, unique: true }, // Ensure unique account numbers
  accountBalance: {
    type: Number,
    required: true,
    default: 0,
    validate: {
      validator: validateBalance,
      message: "Amount cannot be less than 0",
    },
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  currency: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isActive: { type: Boolean, default: true },
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const mobileMoneyServiceProviderSchema = new mongoose.Schema({
  shortName: { type: String, required: true },
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    validate: {
      validator: validateName,
      message: "Name should be at least 2 characters long",
    },
    set: toUpper, // Apply uppercase transformation on assignment
  },
  countryOfOrigin: { type: String, maxlength: 50 },
  isClosed: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const mobileMoneyAccountSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50 },
  mobileMoneyServiceProvider: { type: String, required: true },
  accountNumber: {
    type: String,
    required: true,
    validate: {
      validator: validateAccountNumber,
      message: "Account number is required",
    },
  }, // Custom validation for required field
  accountBalance: {
    type: Number,
    required: true,
    default: 0,
    validate: {
      validator: validateBalance,
      message: "Amount cannot be less than 0",
    },
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  currency: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now }, // Use Date instead of DateTime
  lastModified: { type: Date, default: Date.now }, // Use Date instead of DateTime
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const cashTransactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  // Sending info
  senderName: {
    type: String,
    required: true,
    validate: { validator: validateName, message: "Invalid name" },
  },
  senderNumber: {
    type: String,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  amountSent: {
    type: Number,
    required: true,
    validate: {
      validator: validateAmount,
      message: "Amount cannot be less than 1",
    },
  },
  commissionRate: { type: Number },
  commission: { type: Number },
  sendingBranch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  currencySent: { type: String, required: true },
  dateSent: { type: Date, default: Date.now },
  sendingBranchOfficerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  sendingAccountNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CashAccount",
    required: true,
  },
  status: { type: String, default: "SENT" },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  // Receiving info
  receiverName: {
    type: String,
    required: true,
    validate: { validator: validateName, message: "Invalid name" },
  },
  receiverNumber: {
    type: String,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  receivingBranch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  amountPaidout: {
    type: Number,
    validate: {
      validator: validateAmount,
      message: "Amount cannot be negative",
    },
  },
  currencyPaidout: { type: String },
  datePaidout: { type: Date },
  receivingBranchOfficerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  receivingAccountNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CashAccount",
  },
  lastModified: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  isSynched: { type: Boolean, default: false },
});

const mobileMoneyTransactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  mobileMoneyServiceProvider: { type: String }, // Optional field
  mobileMoneyAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MobileMoneyAccount",
    required: true,
  },
  senderName: {
    type: String,
    validate: { validator: validateName, message: "Invalid name" },
  },
  receiverName: {
    type: String,
    required: true,
    validate: { validator: validateName, message: "Invalid name" },
  },
  receiverMobileMoneyNumber: {
    type: String,
    required: true,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  receiverLocation: { type: String }, // Optional field
  amountSent: {
    type: Number,
    required: true,
    validate: {
      validator: validateAmount,
      message: "Amount cannot be less than 1",
    },
  },
  commissionRate: { type: Number },
  commission: { type: Number, default: 0 },
  sendingBranchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  currencySent: { type: String },
  dateSent: { type: Date, default: Date.now },
  sendingBranchOfficerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  confirmationCode: {
    type: String,
    required: true,
    validate: {
      validator: validateCode,
      message: "Confirmation Code is Invalid",
    },
  },
  isDeleted: { type: Boolean, default: false },
  lastModified: { type: Date, nullable: true },
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const loanSchema = new mongoose.Schema({
  loanId: { type: Number, required: true }, // Assuming loan_id is auto-generated elsewhere
  surname: {
    type: String,
    required: true,
    validate: { validator: validateName, message: "Invalid name" },
  },
  firstName: {
    type: String,
    required: true,
    validate: { validator: validateName, message: "Invalid name" },
  },
  lastName: {
    type: String,
    validate: { validator: validateName, message: "Invalid name" },
  },
  gender: { type: String },
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: validateDateOfBirth,
      message: "Invalid date of birth or ineligible for loan",
    },
  },
  maritalStatus: { type: String },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: validateMobileNumber,
      message: "Mobile number must be at least 10 characters long",
    },
  },
  emailAddress: { type: String },
  educationLevel: { type: String },
  occupation: { type: String },
  annualSalary: {
    type: Number,
    required: true,
    validate: {
      validator: validateAmount,
      message: "Amount cannot be less than 1",
    },
  },
  addressStreet: { type: String },
  addressCity: { type: String },
  addressCountry: { type: String },
  loanType: { type: String },
  loanAmount: {
    type: Number,
    required: true,
    validate: {
      validator: validateAmount,
      message: "Amount cannot be less than 1",
    },
  },
  currency: { type: String },
  loanPeriod: { type: Number },
  paymentMethod: { type: String },
  loanInterest: { type: Number },
  loanStatus: { type: String },
  loanSecurity: { type: String },
  dateCreated: { type: Date, default: Date.now },
  lastModified: { type: Date, default: Date.now },
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const expenseSchema = new mongoose.Schema({
  expenseId: { type: Number }, // Assuming expense_id is auto-generated elsewhere
  dateCreated: { type: Date, default: Date.now },
  item: { type: String, required: true },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: validateQuantity,
      message: "Quantity cannot be negative",
    },
  },
  amount: {
    type: Number,
    required: true,
    validate: {
      validator: validateAmount,
      message: "Amount cannot be negative",
    },
  },
  currency: { type: String },
  accountType: { type: String },
  accountNumber: { type: Number },
  branchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  remarks: {
    type: String,
    required: true,
    validate: { validator: validateRemarks, message: "Remark cannot be empty" },
  },
  isDeleted: { type: Boolean, default: false },
  lastModified: { type: Date, default: Date.now },
  isSynched: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

const exchangeRateSchema = new mongoose.Schema({
  fromCurrency: {
    type: String,
    required: true,
    validate: {
      validator: validateCurrency,
      message: "Currency must be 3 characters long",
    },
  },
  toCurrency: {
    type: String,
    required: true,
    validate: {
      validator: validateCurrency,
      message: "Currency must be 3 characters long",
    },
  },
  rate: {
    type: Number,
    required: true,
    validate: { validator: validateRate, message: "Rate cannot be empty or 0" },
  },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  branchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  source: { type: String },
  dateCreated: { type: Date, default: Date.now },
  lastModified: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

function validateMobileNumber(mobileNumber) {
  if (!mobileNumber || mobileNumber.length < 10) {
    return false;
  }
  return true;
}

// Custom validation functions (outside the schema definition)
function validateCurrency(currency) {
  return currency && currency.length >= 2 && currency.length <= 3;
}

function validateRate(rate) {
  return rate !== undefined && rate !== 0;
}

// Custom validation functions (outside the schema definition)
function validateEmail(email) {
  if (!email || !email.includes("@")) {
    return false;
  }
  return true;
}

function validateName(name) {
  const pattern = /^[a-zA-Z\- ]+$/;
  return bool(pattern.match(name)) && name.length >= 2;
}

// Helper function for title casing (outside the schema definition)
function titleCase(name) {
  if (!name) return name;
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Custom validation functions (outside the schema definition)
function validateShortName(shortName) {
  if (!shortName || shortName.length !== 3) {
    return false;
  }
  return true;
}

function validateFullName(fullName) {
  if (!fullName || fullName.length < 2) {
    return false;
  }
  return true;
}

// Custom validation functions (outside the schema definition)
function validateQuantity(quantity) {
  return quantity && quantity >= 0;
}

function validateAmount(amount) {
  return amount && amount >= 0;
}

function validateRemarks(remark) {
  return remark && remark.length >= 1;
}

// Custom validation functions (outside the schema definition)
function validateName(name) {
  return name && name.length >= 2;
}

function validateBalance(balance) {
  return balance >= 0;
}

// Helper function for uppercase (outside the schema definition)
function toUpper(name) {
  return name.toUpperCase();
}

function validateCode(code) {
  return code && code.length >= 5;
}

function validateDateOfBirth(dateOfBirth) {
  if (!dateOfBirth) return false;
  const today = new Date();
  const age =
    today.getFullYear() -
    dateOfBirth.getFullYear() -
    ((today.getMonth(), today.getDate()) <
      (dateOfBirth.getMonth(), dateOfBirth.getDate()));
  return age >= 18;
}

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

export const ExchangeRate =
  mongoose.models.ExchangeRate ||
  mongoose.model("ExchangeRate", exchangeRateSchema);

export const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);

export const MobileMoneyTransaction =
  mongoose.models.MobileMoneyTransaction ||
  mongoose.model("MobileMoneyTransaction", mobileMoneyTransactionSchema);

export const CashTransaction =
  mongoose.models.CashTransaction ||
  mongoose.model("CashTransaction", cashTransactionSchema);

export const MobileMoneyAccount =
  mongoose.models.MobileMoneyAccount ||
  mongoose.model("MobileMoneyAccount", mobileMoneyAccountSchema);

export const MobileMoneyServiceProvider =
  mongoose.models.MobileMoneyServiceProvider ||
  mongoose.model(
    "MobileMoneyServiceProvider",
    mobileMoneyServiceProviderSchema
  );

export const CashAccount =
  mongoose.models.CashAccount ||
  mongoose.model("CashAccount", cashAccountSchema);

export const Currency =
  mongoose.models.Currency || mongoose.model("Currency", currencySchema);

export const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export const Branch =
  mongoose.models.Branch || mongoose.model("Branch", branchSchema);

export const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);

export const CompanyOwner =
  mongoose.models.CompanyOwner ||
  mongoose.model("CompanyOwner", companyOwnerSchema);
