const { filterTransactions } = require("../lib/filterTransactions");

const transaction = {
  category_id: "123"
};
const transactionWithNullCategoryId = {
  category_id: null
};
const bannedTransaction = {
  category_id: "21001000"
};

test("filters out unwanted categories", () => {
  expect(filterTransactions([transaction, bannedTransaction])).toEqual([transaction]);
});

test("does not filter out null category_id", () => {
  expect(filterTransactions([transactionWithNullCategoryId])).toEqual([transactionWithNullCategoryId]);
});
