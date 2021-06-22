import { FormInstance } from 'antd/lib/form';
import { useRef, useEffect } from 'react';

export const useResetFormOnCloseModal = ({
  form,
  visible,
}: {
  form: FormInstance;
  visible: boolean;
}) => {
  const prevVisibleRef = useRef(false);
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};
