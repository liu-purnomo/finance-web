interface FormCreateBudget {
    id: string;
    description: string;
    categoryId: string;
    amount: number;
    periodStart: string;
    periodEnd: string;
}

interface Budget {
    id: string;
    description: string;
    amount: number;
    periodStart: Date;
    periodEnd: Date;
    categoryId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    Category: BudgetCategory;
}

interface BudgetCategory {
    id: string;
    name: string;
    icon: string;
    type: string;
}
