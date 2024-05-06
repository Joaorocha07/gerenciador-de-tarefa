import Swal from 'sweetalert2'

export const showError = (errorMessage: string): void => {
  void Swal.fire({
    customClass: {
      title: 'swal2-title-custom',
      confirmButton: 'swal2-custom-button',
      htmlContainer: 'swal2-text-custom'
    },
    title: 'Erro!',
    text: `${errorMessage}`,
    icon: 'error'
  })
}
