const unwantedCategoryIds = new Set([
  '21001000', '16001000',
  '21005000' // Credit card payments
]);

exports.filterTransactions = function(transactions) {
  return transactions.filter((transaction) => {
    return !unwantedCategoryIds.has(transaction.category_id);
  });
};
