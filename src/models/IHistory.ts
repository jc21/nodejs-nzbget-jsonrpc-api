export interface IHistory {
    Name: string;
    RemainingFileCount: number;
    RetryData: false;
    HistoryTime: number;
    Status: string;
    NZBID: number;
    NZBName: string;
    Kind: string;
    URL: string;
    NZBFilename: string;
    DestDir: string;
    FinalDir: string;
    Category: string;
    ParStatus: string;
    ExParStatus: string;
    UnpackStatus: string;
    MoveStatus: string;
    ScriptStatus: string;
    DeleteStatus: string;
    MarkStatus: string;
    UrlStatus: string;
    FileSizeLo: number;
    FileSizeHi: number;
    FileSizeMB: number;
    FileCount: number;
    MinPostTime: number;
    MaxPostTime: number;
    TotalArticles: number;
    SuccessArticles: number;
    FailedArticles: number;
    Health: number;
    CriticalHealth: number;
    DupeKey: string;
    DupeScore: number;
    DupeMode: string;
    Deleted: boolean;
    DownloadedSizeLo: number;
    DownloadedSizeHi: number;
    DownloadedSizeMB: number;
    DownloadTimeSec: number;
    PostTotalTimeSec: number;
    ParTimeSec: number;
    RepairTimeSec: number;
    UnpackTimeSec: number;
    MessageCount: number;
    ExtraParBlocks: number;
    Parameters: any[];
    ScriptStatuses: any[];
    ServerStats: any[];

    /**
     * @deprecated
     */
    ID?: number;

    /**
     * @deprecated
     */
    NZBNicename?: string;

    /**
     * @deprecated
     */
    Log?: any[];
}
