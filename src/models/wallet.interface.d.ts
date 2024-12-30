interface FormCreateWallet {
    id: string;
    type: string;
    name: string;
    currency: string; // e.g., 'USD', 'IDR', etc.
    balance?: number; // Optional, initial balance
    description?: string; // Optional, additional details
}
