import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import { AxiosResponse } from "axios";

type ApiFunction<ResultType, ArgType> = (
  arg: ArgType,
) => Promise<AxiosResponse<ResultType, any>>;

export const useMutate = <ResultType, ArgType>(
  api: ApiFunction<ResultType, ArgType>,
  {
    onSuccessFunction = (data) => {},
    onErrorFunction = (error: Error) => {},
    onLoadingFunction = () => {},
    successMessage = "Successfully updated",
    loadingMessage = "Updating...",
    errorMessage = "Failed to update",
    showToast = true,
  }: {
    onSuccessFunction?: (data: AxiosResponse<ResultType>) => void;
    onErrorFunction?: (error: Error) => void;
    onLoadingFunction?: (args?: ArgType) => void;
    successMessage?: string;
    loadingMessage?: string;
    errorMessage?: string;
    showToast?: boolean;
  },
) => {
  const toastId = useRef<string | undefined>(undefined);
  return useMutation(api, {
    onSuccess: (data) => {
      if (showToast)
        toast.success(successMessage, {
          id: toastId?.current ? toastId?.current : undefined,
        });
      onSuccessFunction(data);
    },
    onError: (error: any) => {
      console.log(error);
      if (showToast)
        toast.error(
          errorMessage +
            (error?.response?.data
              ? ": " +
                (error?.response?.data?.message
                  ? error.response?.data?.message
                  : error?.response?.data?.data[0])
              : ""),
          {
            id: toastId?.current ? toastId?.current : undefined,
          },
        );
      console.log(JSON.stringify(error));
      onErrorFunction(error);
    },

    onMutate: () => {
      if (showToast && loadingMessage.length > 0)
        toastId.current = toast.loading(loadingMessage, {});

      onLoadingFunction();
    },
  });
};
