export interface ErrorResponse {
  error: string;
  messages: ErrorMessage[];
}

export type ErrorMessage = {
  messages: { id: string, message: string }[]
};

function isString(value: ErrorMessage[] | string): value is string {
  return (value as ErrorMessage[]).map === undefined;
}

export const parseErrorResponse = (dataMessage: ErrorMessage[] | string) => {
  if (isString(dataMessage)) {
    return dataMessage;
  }
  return dataMessage.map(i => i.messages.map(j => j.message)).join(" ");
};
