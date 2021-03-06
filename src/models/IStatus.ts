export interface IStatus {
    RemainingSizeLo: number;
    RemainingSizeHi: number;
    RemainingSizeMB: number;
    ForcedSizeLo: number;
    ForcedSizeHi: number;
    ForcedSizeMB: number;
    DownloadedSizeLo: number;
    DownloadedSizeHi: number;
    DownloadedSizeMB: number;
    MonthSizeLo: number;
    MonthSizeHi: number;
    MonthSizeMB: number;
    DaySizeLo: number;
    DaySizeHi: number;
    DaySizeMB: number;
    ArticleCacheLo: number;
    ArticleCacheHi: number;
    ArticleCacheMB: number;
    DownloadRate: number;
    AverageDownloadRate: number;
    DownloadLimit: number;
    ThreadCount: number;
    ParJobCount: number;
    PostJobCount: number;
    UrlCount: number;
    UpTimeSec: number;
    DownloadTimeSec: number;
    ServerPaused: boolean;
    DownloadPaused: boolean;
    Download2Paused: boolean;
    ServerStandBy: boolean;
    PostPaused: boolean;
    ScanPaused: boolean;
    QuotaReached: boolean;
    FreeDiskSpaceLo: number;
    FreeDiskSpaceHi: number;
    FreeDiskSpaceMB: number;
    ServerTime: number;
    ResumeTime: number;
    FeedActive: boolean;
    QueueScriptCount: number;
    NewsServers: any[];
}
