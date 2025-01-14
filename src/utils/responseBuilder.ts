interface SuccessResponse {
  success: true;
  message: string;
  data: any;
  errorCode?: never; // Not allowed when success is true
}

interface ErrorResponse {
  success: false;
  message: string;
  errorCode: string;
  data?: null; // Explicitly null or undefined
}

type ResponseBuilderProps = SuccessResponse | ErrorResponse;

export const responseBuilder = ({
  message,
  success,
  data,
  errorCode,
}: ResponseBuilderProps) => ({
  success,
  message,
  errorCode,
  data,
});
