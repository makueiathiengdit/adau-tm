import mongoose, { Schema } from "mongoose";

const CompanyOwnerSchema = new Schema(
  {
    // personal info
    first_name: {
      type: String,
      minLength: 2,
      maxLength: 30,
      required: true,
      validate: {
        validator: validateName,
        message: "Name should be 2-30 characters long",
      },
    },
    last_name: {
      type: String,
      minLength: 2,
      maxLength: 30,
      required: true,
      validate: {
        validator: validateName,
        message: "Name should be 2-30 characters long",
      },
    },

    // contact
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
    },
    nationality: { type: String },

    // address details
    address_street: { type: String },
    address_city: { type: String },
    address_state: { type: String },
    address_country: { type: String, required: true },
  },
  { timestamps: true }
);
const ADMIN_ROLE = {
  ADMIN: "ADMIN",
  CEO: "CEO",
};
const CompanyOwnerUserAccountSchema = new Schema({
  username: {
    type: String,
    ungique: true,
    required: true,
    minLength: 6,
    maxLength: 25,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: ADMIN_ROLE.ADMIN,
    enum: Object.values(ADMIN_ROLE),
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "CompanyOwner",
    required: true,
  },
});

const CompanySchema = new Schema(
  {
    name: { type: String },
    description: { type: String, maxLength: 100 },
    address_street: { type: String },
    address_city: { type: String },
    address_state: { type: String },
    address_country: { type: String, required: true },
    mobile_number: {
      type: String,
      validate: {
        validator: validateMobileNumber,
        message: "Mobile number must be at least 10 characters long",
      },
    },
    logo: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "CompanyOwner" },
    branches: [{ type: Schema.Types.ObjectId, ref: "Branch" }],
    is_active: { type: Boolean, default: true },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const BranchSchema = new Schema(
  {
    branch_id: { type: Number },
    name: { type: String },
    address_street: { type: String },
    address_city: { type: String },
    address_country: { type: String },
    mobile_number: {
      type: String,
      validate: {
        validator: validateMobileNumber,
        message: "Mobile number must be at least 10 characters long",
      },
    },
    company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    cash_accounts: [{ type: Schema.Types.ObjectId, ref: "CashAccount" }],
    mobile_money_accounts: [
      { type: Schema.Types.ObjectId, ref: "MobileMoneyAccount" },
    ],
    branch_manager: { type: Schema.Types.ObjectId, ref: "Employee" },
    is_closed: { type: Boolean, default: false },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const EMPLOYEE_ROLE = {
  EMPLOYEE: "EMPLOYEE",
  BRANCH_MANAGER: "BRANCH_MANAAGER",
  DEPUTY_MANAGER: "DEPUTY_MANAGER",
};

const EmployeeSchema = new Schema(
  {
    employee_id: { type: Number, required: true },
    first_name: {
      type: String,
      validate: {
        validator: validateName,
        message:
          "First name should be 2-30 characters long and cannot contain numbers or other special symbols",
      },
    },
    last_name: {
      type: String,
      validate: {
        validator: validateName,
        message:
          "Last name should be 2-30 characters long and cannot contain numbers or other special symbols",
      },
    },
    gender: { type: String },
    email: {
      type: String,
      validate: {
        validator: validateEmail,
        message: "Invalid email address",
      },
    },
    nationality: { type: String },
    address_street: { type: String },
    address_city: { type: String },
    address_state: { type: String },
    address_country: { type: String },
    role: {
      type: String,
      default: EMPLOYEE_ROLE.EMPLOYEE,
      enum: Object.values(EMPLOYEE_ROLE),
    },
    mobile_number: {
      type: String,
      validate: {
        validator: validateMobileNumber,
        message: "Mobile number must be at least 10 characters long",
      },
    },
    date_created: { type: Date, default: Date.now },
    branch: { type: Schema.Types.ObjectId, ref: "Branch", required: false },
    is_banned: { type: Boolean, default: false },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const UserSchema = Schema(
  {
    username: {
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
    security_question_answer: {
      type: String,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
    role: {
      type: String,
      default: EMPLOYEE_ROLE.EMPLOYEE,
      enum: Object.values(EMPLOYEE_ROLE),
    },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    company: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const CurrencySchema = new Schema(
  {
    short_name: { type: String, maxLength: 3 },
    full_name: { type: String, minLength: 3 },
    country: { type: String, required: false },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const CashAccountSchema = new Schema(
  {
    account_id: { type: Number },
    account_name: { type: String, minLength: 2, maxLength: 50 },
    description: { type: String },
    account_number: { type: String, default: generate_account_number },

    account_balance: {
      type: Number,
      default: 0.0,
      validate: {
        validator: validateBalance,
        message: "Amount cannot be less than 0",
      },
    },
    branch: { type: Schema.Types.ObjectId, ref: "Branch" },
    currency: { type: String },
    date_created: { type: Date, default: Date.now },
    is_active: { type: Boolean, default: true },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const mobileMoneyServiceProviderSchema = new Schema(
  {
    msp_id: { type: Number },
    short_name: { type: String },
    full_name: { type: String, minLength: 2 },
    country_of_origin: { type: String, maxLength: 50 },
    is_active: { type: Boolean, default: true },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const MobileMoneyAccountSchema = new Schema(
  {
    msp: { type: Schema.Types.ObjectId, ref: "MobileMoneyServiceProvider" },
    account_name: { type: String, maxLength: 50 },
    account_number: {
      // should be actual mobile money number
      type: String,
      required: true,
      validate: {
        validator: validateMobileNumber,
        message: "Mobile number must be at least 10 characters long",
      },
    },
    account_balance: {
      type: Number,
      default: 0.0,
      min: 0,
      validate: {
        validator: validateBalance,
        message: "Amount cannot be less than 0",
      },
    },
    branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
    currency: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const TRANSACTION_STATUS = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  SENT: "SENT",
};

const CashTransactionSchema = new Schema(
  {
    transaction_id: {
      type: String,
      default: generate_transaction_id,
      maxlength: 15,
    },
    sender_name: { type: String, required: true, minlength: 2, maxlength: 30 },
    sender_number: {
      type: String,
      validate: {
        validator: function (value) {
          return value && value.length >= 10;
        },
        message: "Mobile number must be at least 10 characters long",
      },
    },
    amount_sent: { type: Number, required: true, min: 1 },
    commission_rate: { type: Number, min: 0 },
    commission: { type: Number, min: 0 },
    sending_branch: { type: Schema.Types.ObjectId, ref: "Branch" },
    currency_sent: { type: String },
    date_created: { type: Date, default: Date.now },
    sending_officer: { type: Schema.Types.ObjectId, ref: "Employee" },
    sending_account: { type: Schema.Types.ObjectId, ref: "CashAccount" },
    status: {
      type: String,
      default: TRANSACTION_STATUS.SENT,
      enum: Object.values(TRANSACTION_STATUS),
    },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    receiver_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    receiver_number: {
      type: String,
      validate: {
        validator: validateMobileNumber,
        message: "Mobile number must be at least 10 characters long",
      },
    },
    receiving_branch: { type: Schema.Types.ObjectId, ref: "Branch" },
    payout_amount: { type: Number, min: 0 },
    payou_currency: { type: String },
    payout_date: { type: Date },
    payout_officer: { type: Schema.Types.ObjectId, ref: "Employee" },
    payout_account: { type: Schema.Types.ObjectId, ref: "CashAccount" },
    last_modified: { type: Date, default: Date.now },
    is_deleted: { type: Boolean, default: false },
    is_synched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const MobileMoneyTransactionSchema = new Schema(
  {
    transaction_id: {
      type: String,
      default: generate_transaction_id,
      maxLength: 15,
    },
    msp: { type: String }, // mobile money service provider
    mobile_money_account: {
      type: Schema.Types.ObjectId,
      ref: "MobileMoneyAccount",
    },
    sender_name: { type: String, minLength: 2, maxLength: 30 },
    receiver_name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    receiver_number: {
      type: String,
      validate: {
        validator: validateMobileNumber,
        message: "Mobile number must be at least 10 characters long",
      },
    },
    receiver_location: { type: String, maxLength: 30 },
    amount_sent: { type: Number, min: 0 },
    commission_rate: { type: Number, min: 0 },
    commission: { type: Number, default: 0.0, min: 0 }, //calculate from amount and rate
    sending_branch: { type: Schema.Types.ObjectId, ref: "Branch" },
    currency_sent: { type: String },
    date_created: { type: Date, default: Date.now },
    sending_officer: { type: Schema.Types.ObjectId, ref: "Employee" },
    confirmation_code: {
      type: String,
      validate: {
        validator: function (value) {
          return value && value.length >= 5;
        },
        message: "Confirmation Code is Invalid",
      },
    },
    transaction_status: { type: String, default: "SENT" },
    is_deleted: { type: Boolean, default: false },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const MobileMoneyRechargeSchema = new Schema(
  {
    msp: {
      type: Schema.Types.ObjectId,
      ref: "MobileMoneyServiceProvider",
    },
    recharge_amount: {
      type: Number,
      min: 0,
    },
    recharge_cost: {
      type: Number,
      min: 0,
    },
    cost_currency: {
      type: String,
    },
    sending_account: {
      type: String,
    },
    receiving_account: {
      type: String,
    },
    officer: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
    branch: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    date_created: {
      type: Date,
      default: Date.now,
    },
    last_modified: {
      type: Date,
      default: Date.now,
    },
    is_synched: {
      type: Boolean,
      default: false,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const CashAccountRechargeSchema = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: "CashAccount",
  },
  recharge_amount: {
    type: Number,
    min: 0,
    required: true,
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  last_modified: {
    type: Date,
    default: Date.now,
  },
});

const LOAN_STATUS = {
  PENDING_APPROVAL: "PENDING_APPROVAL",
  APPROVED: "APPROVED",
  PAYBACK_PENDING: "PAYBACK_PENDING",
  PAYBACK_COMPLETE: "PAYBACK_COMPLETED",
};

const LOAN_TERM = {
  SHORT_TERM: "SHORT_TERM",
  LONG_TERM: "LONG_TERM",
};

const LoanSchema = new Schema(
  {
    loan_id: { type: String, default: generate_account_number, required: true },
    surname: { type: String, minLength: 2, maxLength: 30 },
    first_name: { type: String, minLength: 2, maxLength: 30 },
    last_name: { type: String, minLength: 2, maxLength: 30 },
    gender: { type: String },
    date_of_birth: {
      type: Date,
      validate: {
        validator: validateDateOfBirth,
        message: "To be eligible for loan one must be 18 years and above",
      },
    },
    marital_status: { type: String },
    mobile_number: {
      type: String,
      validate: {
        validator: function (value) {
          return value && value.length >= 10;
        },
        message: "Mobile number must be at least 10 characters long",
      },
    },
    email_address: { type: String },
    education_level: { type: String },
    occupation: { type: String },
    annual_salary: { type: Number, min: 0 },
    address_street: { type: String },
    address_city: { type: String },
    address_country: { type: String },
    loan_type: { type: String },
    loan_term: {
      // can be short term or long term
      type: String,
    },
    loan_amount: { type: Number, min: 0 },
    currency: { type: String },

    loan_period: { type: Number, min: 0 },
    payment_mode: { type: String },
    loan_interest: { type: Number, min: 0 },
    loan_status: {
      type: String,
      default: LOAN_STATUS.PAYBACK_PENDING,
      enum: Object.values(LOAN_STATUS),
    },
    loan_security: { type: String },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    branch: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
    },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const ExpenseSchema = new Schema(
  {
    expense_id: { type: Number },
    date_created: { type: Date, default: Date.now },
    item: { type: String },
    quantity: { type: Number, min: 0 },
    amount: { type: Number, min: 0 },
    currency: { type: String },
    account_type: { type: String },
    account_number: { type: String },
    branch: { type: Schema.Types.ObjectId, ref: "Branch" },
    employee: { type: Schema.Types.ObjectId, ref: "Employee" },
    remarks: { type: String },
    is_deleted: { type: Boolean, default: false },
    last_modified: { type: Date, default: Date.now },
    is_synched: { type: Boolean, default: false },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

const ExchangeRateSchema = new Schema(
  {
    from_currency: { type: String, maxLength: 3 },
    to_currency: { type: String, maxLength: 3 },
    rate: {
      type: Number,
      validate: {
        validator: validateRate,
      },
    },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    branch: { type: Schema.Types.ObjectId, ref: "Branch" },
    source: { type: String },
    date_created: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

function generate_account_number(length = 10) {
  let year = new Date().getFullYear().toString().slice(2);
  let account_number = "" + year;
  for (let i = 0; i < length; i++) {
    account_number += Math.floor(Math.random() * 10);
  }
  return account_number;
}

function generate_transaction_id(length = 13) {
  let year = new Date().getFullYear().toString().slice(2);
  let id = "" + year;
  for (let i = 0; i < length; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}
function validateMobileNumber(mobileNumber) {
  if (!mobileNumber || mobileNumber.length < 10) {
    return false;
  }
  return true;
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

function validateBalance(balance) {
  return balance >= 0;
}

// for loan, only 18+ are eligible
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

export const CompanyOwner =
  mongoose.models.CompanyOwner ||
  mongoose.model("CompanyOwner", CompanyOwnerSchema);

export const CompanyOwnerUserAccount =
  mongoose.models.CompanyOwnerUserAccount ||
  mongoose.model("CompanyOwnerUserAccount", CompanyOwnerUserAccountSchema);
export const Company =
  mongoose.models.Company || mongoose.model("Company", CompanySchema);

export const Branch =
  mongoose.models.Branch || mongoose.model("Branch", BranchSchema);

export const Employee =
  mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema);

export const Currency =
  mongoose.models.Currency || mongoose.model("Currency", CurrencySchema);

export const CashAccount =
  mongoose.models.CashAccount ||
  mongoose.model("CashAccount", CashAccountSchema);
export const CashTransaction =
  mongoose.models.CashTransaction ||
  mongoose.model("CashTransaction", CashTransactionSchema);
export const MobileMoneyServiceProvider =
  mongoose.models.MobileMoneyServiceProvider ||
  mongoose.model(
    "MobileMoneyServiceProvider",
    mobileMoneyServiceProviderSchema
  );
export const MobileMoneyAccount =
  mongoose.models.MobileMoneyAccount ||
  mongoose.model("MobileMoneyAccount", MobileMoneyAccountSchema);
export const MobileMoneyTransaction =
  mongoose.models.MobileMoneyTransaction ||
  mongoose.model("MobileMoneyTransaction", MobileMoneyTransactionSchema);

export const ExchangeRate =
  mongoose.models.ExchangeRate ||
  mongoose.model("ExchangeRate", ExchangeRateSchema);

export const MobileMoneyRecharge =
  mongoose.models.MobileMoneyRecharge ||
  mongoose.model("MobileMoneyRecharge", MobileMoneyRechargeSchema);

export const CahsAccountRecharge =
  mongoose.models.CahsAccountRecharge ||
  mongoose.model("CahsAccountRecharge", CashAccountRechargeSchema);

export const Expense =
  mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);

export const Loan = mongoose.models.Loan || mongoose.model("Loan", LoanSchema);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
