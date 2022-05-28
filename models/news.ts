/**お知らせ一覧 */
export interface News {
  noticeList: {
    noticeTitle: string;
    noticeText: string;
    startDate: Date;
  }[];
}

export interface NewsRequest {
  targetPage: "0" | "1";
}

/**記事一覧 */
export interface Article {
  title: string;
  id?: string;
  type: "1" | "2";
  url?: string;
  categoryName: string;
  startDate: Date;
}

export interface FetchArticlesResponse {
  articles: Article[];
}

export interface Notification {
  id: string;
  text: string;
  detailPageTitle: string;
  url: string;
  importanceKbn: string;
  readDate: Date;
}

export interface FetchNotificationResponse {
  notificationList: Notification[];
}
