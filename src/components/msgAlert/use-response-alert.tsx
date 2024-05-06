/* eslint-disable max-len */
import React, { useState } from 'react'

import { type IDefaultResponse } from '@/types/global'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface UseResponseAlertArgs {
  response: IDefaultResponse | null
  show: boolean
}

const MySwal = withReactContent(Swal)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useResponseAlert = ({ response, show }: UseResponseAlertArgs) => {
  const [alertClosed, setAlertClosed] = useState(false)
  const [confirmationResult, setConfirmationResult] = useState<boolean | null>(null)

  React.useEffect(() => {
    if ((response != null) && show) {
      void MySwal.fire({
        title: response.msgUser?.msg,
        customClass: {
          title: 'swal2-title-custom',
          confirmButton: 'swal2-custom-button',
          cancelButton: 'swal2-custom-button'
        },
        // html: (
        //   <Stack spacing={2}>
        //     {response.msgUser?.details.map((detail: any, index: any) => (
        //       <Alert
        //         key={index}
        //         severity={detail.type}
        //         style={{ fontFamily: theme.typography.fontFamily }}
        //       >
        //         {detail.msg}
        //       </Alert>
        //     ))}
        //   </Stack>
        // ),
        icon: response.msgUser?.type
      }).then(result => {
        setAlertClosed(true)
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setConfirmationResult(result.isConfirmed)
        }, 0)
      })
    }
  }, [response, show])

  return { alertClosed, confirmationResult }
}

export default useResponseAlert
