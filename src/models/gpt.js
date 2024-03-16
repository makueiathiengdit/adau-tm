import mongoose, { Schema } from "mongoose";

const CompanySchema = new Schema({
  name: { type: String },
  description: { type: String, maxlength: 100 },
  address_street: { type: String },
  address_city: { type: String },
  address_country: { type: String },
  mobile_number: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.length >= 10;
      },
      message: "Mobile number must be at least 10 characters long",
    },
  },
  logo: { type: String },
  owner_id: { type: Number, default: null },
  branches: [{ type: Schema.Types.ObjectId, ref: "Branch" }],
  is_active: { type: Boolean, default: true },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
});

const BranchSchema = new Schema({
  branch_id: { type: Number },
  name: { type: String },
  address_street: { type: String },
  address_city: { type: String },
  address_country: { type: String },
  mobile_number: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.length >= 10;
      },
      message: "Mobile number must be at least 10 characters long",
    },
  },
  company_id: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  cash_accounts: [{ type: Schema.Types.ObjectId, ref: "CashAccount" }],
  mobile_money_accounts: [
    { type: Schema.Types.ObjectId, ref: "MobileMoneyAccount" },
  ],
  branch_manager_id: { type: Number },
  is_closed: { type: Boolean, default: false },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
});

const EmployeeSchema = new Schema({
  user_id: { type: String },
  employee_id: { type: Number, required: true },
  first_name: {
    type: String,
    validate: {
      validator: function (value) {
        const pattern = /^[a-zA-Z\- ]+$/;
        return pattern.test(value) && value.length >= 2;
      },
      message:
        "First name should be 2-30 characters long and cannot contain numbers or other special symbols",
    },
  },
  last_name: {
    type: String,
    validate: {
      validator: function (value) {
        const pattern = /^[a-zA-Z\- ]+$/;
        return pattern.test(value) && value.length >= 2;
      },
      message:
        "Last name should be 2-30 characters long and cannot contain numbers or other special symbols",
    },
  },
  gender: { type: String },
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.includes("@");
      },
      message: "Invalid email address",
    },
  },
  address_street: { type: String },
  address_city: { type: String },
  address_country: { type: String },
  role: { type: String, default: "EMPLOYEE" },
  mobile_number: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.length >= 10;
      },
      message: "Mobile number must be at least 10 characters long",
    },
  },
  date_created: { type: Date, default: Date.now },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch", required: false },
  is_banned: { type: Boolean, default: false },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const CurrencySchema = new Schema({
  short_name: { type: String, maxlength: 3 },
  full_name: { type: String, minlength: 2 },
  country: { type: String, required: false },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
});

const CashAccountSchema = new Schema({
  account_id: { type: Number },
  name: { type: String, minlength: 2 },
  account_number: { type: String, default: generate_account_number },
  account_balance: {
    type: Number,
    default: 0.0,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "Amount cannot be less than 0",
    },
  },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch" },
  currency: { type: String },
  date_created: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: true },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const MobileMoneyProviderSchema = new Schema({
  msp_id: { type: Number },
  short_name: { type: String },
  full_name: { type: String, minlength: 2 },
  country_of_origin: { type: String, maxlength: 50 },
  is_closed: { type: Boolean, default: false },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const MobileMoneyAccountSchema = new Schema({
  account_id: { type: Number },
  name: { type: String, maxlength: 50 },
  mobile_money_provider: { type: String, required: true },
  account_number: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value && value.length >= 10;
      },
      message: "Mobile number must be at least 10 characters long",
    },
  },
  account_balance: {
    type: Number,
    default: 0.0,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "Amount cannot be less than 0",
    },
  },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
  currency: { type: String, required: true },
  is_active: { type: Boolean, default: true },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const TransactionStatus = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  SENT: "SENT",
};

const CashTransactionSchema = new Schema({
  transaction_id: { type: String, default: generate_id, maxlength: 15 },
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
  commission_rate: { type: Number },
  commission: { type: Number },
  sending_branch: { type: Schema.Types.ObjectId, ref: "Branch" },
  currency_sent: { type: String },
  date_sent: { type: Date, default: Date.now },
  sending_branch_officer_id: { type: Schema.Types.ObjectId, ref: "Employee" },
  sending_account_number: { type: Schema.Types.ObjectId, ref: "CashAccount" },
  status: {
    type: String,
    default: TransactionStatus.SENT,
    enum: Object.values(TransactionStatus),
  },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
  receiver_name: { type: String, required: true, minlength: 2, maxlength: 30 },
  receiver_number: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.length >= 10;
      },
      message: "Mobile number must be at least 10 characters long",
    },
  },
  receiving_branch: { type: Schema.Types.ObjectId, ref: "Branch" },
  amount_paidout: { type: Number, min: 0 },
  currency_paidout: { type: String },
  date_paidout: { type: Date },
  receiving_branch_officer_id: { type: Schema.Types.ObjectId, ref: "Employee" },
  receiving_account_number: { type: Schema.Types.ObjectId, ref: "CashAccount" },
  last_modified: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
  is_synched: { type: Boolean, default: false },
});

const MobileMoneyTransactionSchema = new Schema({
  transaction_id: { type: String, default: generate_id, maxlength: 15 },
  mobile_money_provider: { type: String },
  mobile_money_account: {
    type: Schema.Types.ObjectId,
    ref: "MobileMoneyAccount",
  },
  sender_name: { type: String, minlength: 2, maxlength: 30 },
  receiver_name: { type: String, required: true, minlength: 2, maxlength: 30 },
  receiver_mobile_money_number: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.length >= 10;
      },
      message: "Mobile number must be at least 10 characters long",
    },
  },
  receiver_location: { type: String, maxlength: 30 },
  amount_sent: { type: Number },
  commission_rate: { type: Number },
  commission: { type: Number, default: 0.0 },
  sending_branch_id: { type: Schema.Types.ObjectId, ref: "Branch" },
  currency_sent: { type: String },
  date_sent: { type: Date, default: Date.now },
  sending_branch_officer_id: { type: Schema.Types.ObjectId, ref: "Employee" },
  confirmation_code: {
    type: String,
    validate: {
      validator: function (value) {
        return value && value.length >= 5;
      },
      message: "Confirmation Code is Invalid",
    },
  },
  is_deleted: { type: Boolean, default: false },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const LoanSchema = new Schema({
  loan_id: { type: Number, required: true },
  surname: { type: String, minlength: 2, maxlength: 30 },
  first_name: { type: String, minlength: 2, maxlength: 30 },
  last_name: { type: String, minlength: 2, maxlength: 30 },
  gender: { type: String },
  date_of_birth: { type: Date },
  marital_status: { type: String },
  phone_number: {
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
  annual_salary: { type: Number, min: 1 },
  address_street: { type: String },
  address_city: { type: String },
  address_country: { type: String },
  loan_type: { type: String },
  loan_amount: { type: Number, min: 1 },
  currency: { type: String },
  loan_period: { type: Number },
  payment_mode: { type: String },
  loan_interest: { type: Number },
  loan_status: { type: String },
  loan_security: { type: String },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const ExpenseSchema = new Schema({
  expense_id: { type: Number },
  date_created: { type: Date, default: Date.now },
  item: { type: String },
  quantity: { type: Number },
  amount: { type: Number },
  currency: { type: String },
  account_type: { type: String },
  account_number: { type: Number },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch" },
  employee_id: { type: Schema.Types.ObjectId, ref: "Employee" },
  remarks: { type: String },
  is_deleted: { type: Boolean, default: false },
  last_modified: { type: Date, default: Date.now },
  is_synched: { type: Boolean, default: false },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
});

const ExchangeRateSchema = new Schema({
  from_currency: { type: String, maxlength: 3 },
  to_currency: { type: String, maxlength: 3 },
  rate: { type: Number },
  company_id: { type: Schema.Types.ObjectId, ref: "Company" },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch" },
  source: { type: String },
  date_created: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
});
