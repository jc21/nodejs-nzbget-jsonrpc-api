export interface IServerVolume {
    ServerID: number;
    DataTime: number;
    TotalSizeLo: number;
    TotalSizeHi: number;
    TotalSizeMB: number;
    CustomSizeLo: number;
    CustomSizeHi: number;
    CustomSizeMB: number;
    CustomTime: number;
    BytesPerSeconds: any[];
    BytesPerMinutes: any[];
    BytesPerHours: any[];
    BytesPerDays: any[];
    SecSlot: number;
    MinSlot: number;
    HourSlot: number;
    DaySlot: number;
    FirstDay: number;
}
