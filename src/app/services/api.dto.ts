export enum KindList {
  VIDEO = 'youtube#video',
  LIST = 'youtube#videoListResponse',
}

export interface EntityDto {
  kind: KindList;
  etag: string;
}

export interface StatisticsDto {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ThumbnailDto {
  url: string;
  width: number;
  height: number;
}

export interface SnippetDto {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string | null;
  thumbnails: ThumbnailDto[];
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface VideoDto extends EntityDto {
  kind: KindList.VIDEO;
  id: string;
  snippet: SnippetDto;
  statistics: StatisticsDto;
}

export interface ItemListDto extends EntityDto {
  kind: KindList.LIST;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
