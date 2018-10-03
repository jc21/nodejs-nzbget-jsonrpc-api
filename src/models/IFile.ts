export interface IFile {
    ID: number;
    FileSizeLo: number;
    FileSizeHi: number;
    RemainingSizeLo: number;
    RemainingSizeHi: number;
    PostTime: number;
    FilenameConfirmed: boolean;
    Paused: false;
    NZBID: number;
    NZBName: string;
    NZBFilename: string;
    Subject: string;
    Filename: string;
    DestDir: string;
    Category: string;
    ActiveDownloads: number;
    Progress: number;

    /**
     * @deprecated
     */
    NZBNicename?: string;

    /**
     * @deprecated
     */
    Priority?: number;
}
