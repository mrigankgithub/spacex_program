export interface ApiResponse<T> {
    statusCode: number;
    message?: string;
    data: T;
}

export interface ApiConfig {
    showLoader?:boolean,
    skipErrorPopup?:boolean
}

export interface PageConfig {
    total: number;
    currentPage: number;
    pageSize?: number;
    isNext?: boolean;
  }
  