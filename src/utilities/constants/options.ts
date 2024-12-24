const walletTypes = [
    "Cash",
    "Bank Account",
    "Credit Card",
    "Debit Card",
    "eWallet",
    "Cryptocurrency",
    "Loan",
    "Savings",
    "Investment",
    "Gift Card",
    "Prepaid",
];

const generateArrayToOptions = (array: string[]) => {
    return array.map((item) => ({
        label: item,
        value: item,
    }));
};

export const walletTypeOptions = () => {
    return generateArrayToOptions(walletTypes);
};

const walletNames = [
    "Main Wallet",
    "OVO",
    "Dana",
    "Aladin",
    "GoPay",
    "LinkAja",
    "ShopeePay",
    "PayPal",
    "GooglePay",
    "ApplePay",
    "SamsungPay",
    "BCA",
    "Mandiri",
    "BNI",
    "BRI",
    "CIMB",
    "Maybank",
    "Permata",
    "Panin",
    "Danamon",
    "OCBC",
    "Standard Chartered",
    "HSBC",
    "Citibank",
    "Bank Mega",
    "Bank Jatim",
    "Bank DKI",
    "Bank Jabar",
    "Bank BJB",
    "Bank BPD",
];

export const walletNameOptions = () => {
    return generateArrayToOptions(walletNames);
};

export const walletLogo = (name: string) => {
    switch (name) {
        case "Main Wallet":
            return "wallet.png";
        case "OVO":
            return "ovo.png";
        case "Dana":
            return "dana.png";
        case "GoPay":
            return "gopay.png";
        case "LinkAja":
            return "link-aja.png";
        case "ShopeePay":
            return "shopee.png";
        case "BCA":
            return "bca.png";
        case "Mandiri":
            return "mandiri.png";
        case "BNI":
            return "bni.png";
        case "BRI":
            return "bri.png";
        case "CIMB":
            return "cimb.png";
        case "Danamon":
            return "danamon.png";
        default:
            return "wallet.png";
    }
};
