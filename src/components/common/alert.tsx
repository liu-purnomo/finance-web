import Swal, { SweetAlertIcon } from 'sweetalert2';

interface AlertConfirmationProps {
  icon?: SweetAlertIcon;
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  callback: () => void;
}

export class Alert {
  static async default(
    message: string = '',
    icon: SweetAlertIcon = 'success',
    title: string = 'Success'
  ) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      padding: '2em',
      customClass: {
        popup: 'sweet-alerts',
      },
    });
  }

  static async error(message = 'Something went wrong') {
    Swal.fire({
      icon: 'error',
      title: 'Oppss',
      text: message,
      padding: '2em',
      customClass: {
        popup: 'sweet-alerts',
      },
    });
  }

  static async success(message = 'Success') {
    const toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: 'success',
      title: message,
      padding: '10px 20px',
    });
  }

  static async confirm({
    icon = 'warning',
    title = 'Are you sure?',
    text = "You won't be able to revert this!",
    confirmButtonText = 'Continue',
    cancelButtonText = 'Cancel',
    callback,
  }: AlertConfirmationProps) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      padding: '2em',
      customClass: {
        popup: 'sweet-alerts',
      },
      cancelButtonText: cancelButtonText,
    }).then((result) => {
      if (result.value) {
        callback();
      }
    });
  }
}
