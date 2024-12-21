export class NumberFormat {
  static amount(input: number): string {
    return input.toLocaleString('id-ID', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }

  static qty(input: number, decimalScale = 0): string {
    return input.toLocaleString('id-ID', {
      maximumFractionDigits: decimalScale,
      minimumFractionDigits: decimalScale,
    });
  }
}
