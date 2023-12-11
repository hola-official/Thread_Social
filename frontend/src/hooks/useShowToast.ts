import { useToast } from "@chakra-ui/react";
import React, { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title, description, status, position) => {
      toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );
  return showToast;
};

export default useShowToast;
