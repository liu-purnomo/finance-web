interface FormCreateCategory {
    id: string;
    name: string;
    icon: string;
    type: string;
}

interface Category {
    id: string;
    name: string;
    icon: string;
    type: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
