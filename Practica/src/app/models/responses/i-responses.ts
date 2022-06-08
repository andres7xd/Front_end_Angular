
export interface IError {
    Code: number;
    Message: string;
  }
export interface BaseResponse {
    Result: boolean;
    ErrorInfo: IError;
  }

export interface IResponse <T> extends BaseResponse {
    Data: T;
  }