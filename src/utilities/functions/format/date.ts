export class DateFormat {
  /**
   * Format date into dd/MM/yyyy format
   * @param input Date to be formatted (can be Date object or date string)
   * @returns Date in dd/MM/yyyy format
   * @example
   * DateFormat.dmY(new Date()) // Output: "13/03/2024"
   */
  static dmY(input: any = new Date()): string {
    const date = new Date(input);
    const formattedDate = date.toLocaleDateString('id-ID', {
      timeZone: 'Asia/Jakarta',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return formattedDate;
  }

  /**
   * Format date into dd month yyyy format (example: 13 March 2024)
   * @param input Date to be formatted (can be Date object or date string)
   * @returns Date in dd month yyyy format
   * @example
   * DateFormat.dMY(new Date()) // Output: "13 March 2024"
   */
  static dMY(input: any = new Date()): string {
    const date = new Date(input);
    const formattedDate = date.toLocaleDateString('id-ID', {
      timeZone: 'Asia/Jakarta',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    return formattedDate;
  }

  static my(input: any = new Date()): string {
    const date = new Date(input);
    const formattedDate = date.toLocaleDateString('id-ID', {
      timeZone: 'Asia/Jakarta',
      month: 'short',
      year: 'numeric',
    });

    return formattedDate;
  }

  /**
   * Format date into dd-mm-yyyy, hh:mm:ss format
   * @param input Date to be formatted (can be Date object or date string)
   * @returns Date in dd-mm-yyyy, hh:mm:ss format
   * @example
   * DateFormat.dmyhms(new Date()) // Output: "13-03-2024, 23:59:59"
   */

  static dmYhms(input: any = new Date()): string {
    const date = new Date(input);
    const formattedDate = date.toLocaleDateString('id-ID', {
      timeZone: 'Asia/Jakarta',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    return formattedDate;
  }

  /**
   * Get Year, Month and Day from date
   * @param input Date to be formatted (can be Date object or date string)
   * @returns object with year, month and day
   * @example
   * DateFormat.getYearMonthDay(new Date()) // Output: { year: 2024, month: 3, day: 13 }
   */

  static getYearMonthDay(input: any = new Date()): {
    year: number;
    month: number;
    day: number;
  } {
    const date = new Date(input);
    const year = Number(
      date.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
      })
    );
    const month = Number(
      date.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        month: 'numeric',
      })
    );
    const day = Number(
      date.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', day: 'numeric' })
    );
    return { year, month, day };
  }
}
