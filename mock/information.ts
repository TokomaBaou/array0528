import {
  News,
  Article,
  FetchNotificationResponse,
  Notification
} from "../models";

/**公開開始日のパターン */
const startDatePatterns = [
  new Date(2021, 0, 1),
  new Date(2021, 1, 1),
  new Date(2021, 2, 1),
  new Date(2021, 3, 1),
  new Date(2021, 4, 1),
  new Date(2021, 5, 1),
  new Date(2021, 6, 1),
  new Date(2021, 7, 1),
  new Date(2021, 8, 1),
  new Date(2022, 0, 1),
  new Date(2022, 1, 1),
  new Date(2022, 2, 1),
  new Date(2022, 3, 1),
  new Date(2022, 4, 1),
  new Date(2022, 5, 1),
  new Date(2022, 6, 1),
  new Date(2022, 7, 1),
  new Date(2022, 8, 1),
  new Date(2022, 9, 1),
  new Date(2022, 10, 1),
  new Date(2022, 11, 1),
  new Date(2022, 11, 1)
];

/**記事種別のパターン */
const articleTypes: Record<number, string> = {
  2022: "https://topics.smt.docomo.ne.jp/article/nishinippon_nsp/sports/nishinippon_nsp-2000888330?utm_source=dmenu_sports&utm_medium=owned&utm_campaign=dna",
  2021: "https://topics.smt.docomo.ne.jp/article/nishinippon_nsp/sports/nishinippon_nsp-2000888330?utm_source=dmenu_sports&utm_medium=owned&utm_campaign=dna"
};

export const generateMockedNews = (): News => {
  return {
    noticeList: startDatePatterns.map((v) => ({
      noticeTitle: "タイトルです。",
      noticeText: "本文が入ります。",
      startDate: v
    }))
  };
};

export const generateMockedArticles = (): Article[] =>
  startDatePatterns.map((v, i) => {
    const type: Article["type"] = articleTypes[v.getFullYear()];
    return {
      type,
      title: `タイトル${i + 1}`,
      url: ``,
      categoryName: "ニュース",
      startDate: v
    };
  });

export const generateMockedNotifications = (): Notification[] => [
  {
    id: "N00001",
    text:
      "テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1",
    detailPageTitle: "タイトル1",
    url:
      "https://topics.smt.docomo.ne.jp/article/nishinippon_nsp/sports/nishinippon_nsp-2000888330?utm_source=dmenu_sports&utm_medium=owned&utm_campaign=dna",
    importanceKbn: "1",
    receiptDate: new Date(2022, 2, 2, 2, 2, 2),
    readDate: new Date(2022, 2, 2, 2, 2, 2)
  },
  {
    id: "N00002",
    text: "テキスト2テキスト2テキスト2テキスト2",
    detailPageTitle: "タイトル2",
    url: "https",
    importanceKbn: "0",
    receiptDate: new Date(2022, 2, 2, 2, 2, 2),
    readDate: new Date(2022, 2, 2, 2, 2, 2)
  },
  {
    id: "N00003",
    text: "テキスト3テキスト3テキスト3テキスト3",
    detailPageTitle: "タイトル3",
    url: "https",
    importanceKbn: "0",
    receiptDate: new Date(2022, 2, 2, 2, 2, 2),
    readDate: new Date(2022, 2, 2, 2, 2, 2)
  },
  {
    id: "N00004",
    text: "テキスト4テキスト4テキスト4テキスト4",
    detailPageTitle: "タイトル4",
    url: "https",
    importanceKbn: "0",
    receiptDate: new Date(2022, 2, 2, 2, 2, 2),
    readDate: new Date(2022, 2, 2, 2, 2, 2)
  }
];
