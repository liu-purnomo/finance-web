interface FormCreateTransaction {
    id: string;
    walletId: string;
    amount: number;
    description: string;
    transactionDate: string;
    category: string;
}

interface FromCreateTransfer {
    originWalletId: string;
    destinationWalletId: string;
    amount: number;
    transactionDate: string;
}

interface Transaction {
    category: string;
    icon: string;
    id: string;
    amount: string;
    description: string;
    transactionDate: string;
    categoryId: string;
    walletId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    Wallet: TransactionWallet;
    Category: TransactionCategory;
}
interface TransactionWallet {
    id: string;
    type: string;
    name: string;
    balance: string;
    currency: string;
    description: string;
}
interface TransactionCategory {
    id: string;
    name: string;
    icon: string;
    type: string;
}
