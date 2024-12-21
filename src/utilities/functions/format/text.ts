export class TextFormat {
    static capitalize = (str: string): string => {
        return str?.replace(/\b\w/g, (l) => l?.toUpperCase());
    };

    static capitalizeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        return value.replace(/\b\w/g, (l) => l.toUpperCase());
    };

    static uppercase = (str: string): string => {
        return str?.toUpperCase();
    };
}
