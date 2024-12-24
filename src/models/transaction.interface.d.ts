interface FormCreateTransaction {
    walletId: string;
    amount: number;
    description: string;
    transactionDate: string;
    type: "INCOME" | "EXPENSE";
    category: string;
}
