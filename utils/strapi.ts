export interface ErrorResponse {
  error: string;
  messages: ErrorMessage[];
}

export type ErrorMessage = {
  messages: { id: string, message: string }[]
};

export const parseErrorResponse = (dataMessage: ErrorMessage[]) => {
  return dataMessage.map(i => i.messages.map(j => j.message)).join(" ");
};
