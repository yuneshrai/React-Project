/**
 * Mock data for the digital banking UI prototype.
 * No backend or real payments - for college project demonstration only.
 * Currency: NPR (Nepalese Rupee). Account names: Nepali names.
 */

// Demo login credentials and linked user profiles (by email)
export const MOCK_USERS = {
  "demo@bank.com": {
    id: "user1",
    name: "Roduhang Kulung",
    email: "demo@bank.com",
    phone: "+977 984-1234567",
    joinedDate: "January 2024",
  },
  "user@test.com": {
    id: "user2",
    name: "Shovit Sunar",
    email: "user@test.com",
    phone: "+977 981-2345678",
    joinedDate: "February 2024",
  },
  "admin@test.com": {
    id: "user3",
    name: "Sudarshan Katwal",
    email: "admin@test.com",
    phone: "+977 986-3456789",
    joinedDate: "March 2024",
  },
  "anjali@bank.com": {
    id: "user4",
    name: "Anjali Gurung",
    email: "anjali@bank.com",
    phone: "+977 985-4567890",
    joinedDate: "April 2024",
  },
  "bikash@bank.com": {
    id: "user5",
    name: "Bikash Thapa",
    email: "bikash@bank.com",
    phone: "+977 980-5678901",
    joinedDate: "May 2024",
  },
};

export const MOCK_CREDENTIALS = [
  { email: "demo@bank.com", password: "demo123" },
  { email: "user@test.com", password: "password" },
  { email: "admin@test.com", password: "password" },
  { email: "anjali@bank.com", password: "demo123" },
  { email: "bikash@bank.com", password: "demo123" },
];

// Fallback for any stored user (e.g. old session)
export const MOCK_USER = {
  id: "user1",
  name: "Roduhang Kulung",
  email: "demo@bank.com",
  phone: "+977 984-1234567",
  joinedDate: "January 2024",
};

// Dummy account details (NPR)
export const MOCK_ACCOUNT = {
  accountNumber: "**** **** **** 4521",
  fullAccountNumber: "12345678904521",
  accountType: "Savings",
  balance: 1245075.5,
  currency: "NPR",
  branch: "Kathmandu Main Branch",
  ifscCode: "BANK0001234",
};

// Recent transactions (NPR; descriptions use account names)
export const MOCK_TRANSACTIONS = [
  { id: "t1", date: "2024-02-03", description: "Salary Credit", amount: 35000, type: "credit" },
  { id: "t2", date: "2024-02-02", description: "Electric Bill", amount: -1200, type: "debit" },
  { id: "t3", date: "2024-02-01", description: "Transfer to Shovit Sunar", amount: -5000, type: "debit" },
  { id: "t4", date: "2024-01-30", description: "Transfer from Sudarshan Katwal", amount: 2500, type: "credit" },
  { id: "t5", date: "2024-01-28", description: "Grocery Store", amount: -8550, type: "debit" },
  { id: "t6", date: "2024-01-25", description: "Interest Credit", amount: 1224, type: "credit" },
  { id: "t7", date: "2024-01-22", description: "Water Bill", amount: -450, type: "debit" },
  { id: "t8", date: "2024-01-20", description: "Transfer from Anjali Gurung", amount: 5000, type: "credit" },
];

// Income vs expense summary (NPR, for chart)
export const MOCK_INCOME_EXPENSE = [
  { month: "Oct", income: 32000, expense: 18000 },
  { month: "Nov", income: 35000, expense: 21000 },
  { month: "Dec", income: 38000, expense: 22000 },
  { month: "Jan", income: 42500, expense: 19500 },
];

// Notifications / alerts (mock)
export const MOCK_NOTIFICATIONS = [
  { id: "n1", title: "Login successful", message: "You signed in from this device.", time: "Just now", read: false },
  { id: "n2", title: "Transfer completed", message: "Rs. 5,000 sent to Shovit Sunar.", time: "2 hours ago", read: false },
  { id: "n3", title: "Bill paid", message: "NEA electricity bill paid successfully.", time: "1 day ago", read: true },
  { id: "n4", title: "EMI reminder", message: "Your loan EMI of Rs. 12,500 is due on Feb 10.", time: "2 days ago", read: true },
];

// Debit/Card details (mock)
export const MOCK_CARDS = [
  { id: "c1", lastFour: "4521", type: "Debit", holderName: "Roduhang Kulung", expiry: "12/27", masked: "**** **** **** 4521" },
];

// Saved beneficiaries for transfer (mock)
export const MOCK_BENEFICIARIES = [
  { id: "b1", name: "Shovit Sunar", accountNumber: "****7890", bank: "Same Bank" },
  { id: "b2", name: "Sudarshan Katwal", accountNumber: "****2345", bank: "Same Bank" },
  { id: "b3", name: "Anjali Gurung", accountNumber: "****6789", bank: "Same Bank" },
  { id: "b4", name: "Bikash Thapa", accountNumber: "****1234", bank: "Same Bank" },
];

// Billers for bill payment (mock)
export const MOCK_BILLERS = [
  { id: "bill1", name: "NEA (Electricity)", code: "NEA", placeholder: "Meter number" },
  { id: "bill2", name: "KUKL (Water)", code: "KUKL", placeholder: "Customer ID" },
  { id: "bill3", name: "Nepal Telecom", code: "NT", placeholder: "Phone/Account number" },
  { id: "bill4", name: "Internet (WorldLink)", code: "WL", placeholder: "Account ID" },
];

// Loan / EMI summary (mock)
export const MOCK_LOAN = {
  hasLoan: true,
  productName: "Personal Loan",
  outstandingAmount: 125000,
  nextEmiAmount: 12500,
  nextEmiDate: "2024-02-10",
  tenureMonths: 12,
  currency: "NPR",
};
