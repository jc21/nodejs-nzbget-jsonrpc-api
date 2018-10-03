import {HTTP} from '@nofrills/http';
import {URL} from 'url';
import {JSONRPCError} from './JSONRPCError';
import * as Models from './models';

export class Client extends HTTP {

    /**
     * Constructor
     */
    constructor(private readonly baseUrl: URL) {
        super();
    }

    /**
     * Name of the Class
     */
    protected get name(): string {
        return 'Client';
    }

    /**
     * Get Version
     *
     * @see https://nzbget.net/api/version
     */
    public async version(): Promise<string> {
        return this.call('version');
    }

    /**
     * Shutdown NzbGet
     *
     * @see https://nzbget.net/api/shutdown
     */
    public async shutdown(): Promise<boolean> {
        return this.call('shutdown');
    }

    /**
     * Reload NzbGet
     *
     * @see https://nzbget.net/api/reload
     */
    public async reload(): Promise<boolean> {
        return this.call('shutdown');
    }

    /**
     * Request for list of downloads (nzb-files). This method returns summary information for each group (nzb-file)
     *
     * @see https://nzbget.net/api/listgroups
     */
    public async listgroups(): Promise<Models.IGroup[]> {
        return this.call('listgroups');
    }

    /**
     * Request for file’s list of a group (nzb-file)
     *
     * @see https://nzbget.net/api/listfiles
     */
    public async listfiles(nzbId: number = 0): Promise<Models.IFile[]> {
        if (nzbId) {
            return this.call('listfiles', [0, 0, nzbId]);
        }

        return this.call('listfiles');
    }

    /**
     * Request for list of items in history-list
     *
     * @see https://nzbget.net/api/history
     */
    public async history(hidden: boolean = false): Promise<Models.IHistory[]> {
        return this.call('history', [hidden]);
    }

    /**
     * Add nzb-file or URL to download queue
     *
     * @see https://nzbget.net/api/append
     */
    public async append(nzbFilename: string, nzbContent: string, category: string = '', priority: number = 0,
                        addToTop: boolean = false, addPaused: boolean = false, dupeKey: string = '',
                        dupeScore: number = 0, dupeMode: string = '', ppParameters: any[] = []): Promise<number> {

        return this.call('append', [
            nzbFilename,
            nzbContent,
            category,
            priority,
            addToTop,
            addPaused,
            dupeKey,
            dupeScore,
            dupeMode,
            ppParameters
        ]);
    }

    /**
     * Edit items in download queue or in history.
     *
     * @see https://nzbget.net/api/editqueue
     */
    public async editqueue(command: string, param: string, ids: number[]): Promise<boolean> {
        return this.call('editqueue', [command, param, ids]);
    }

    /**
     * Request rescanning of incoming directory for nzb-files (option NzbDir).
     *
     * @see https://nzbget.net/api/scan
     */
    public async scan(): Promise<boolean> {
        return this.call('scan');
    }

    /**
     * Get Status
     *
     * @see https://nzbget.net/api/status
     */
    public async status(): Promise<Models.IStatus> {
        return this.call('status');
    }

    /**
     * This is named differently than the RPC name because of object inheritance with the HTTP client
     *
     * @see https://nzbget.net/api/log
     */
    public async getlog(idFrom: number = 0, numberOfEntries: number = 0): Promise<Models.ILog[]> {
        return this.call('log', [idFrom, numberOfEntries]);
    }

    /**
     * Append log-entry into server’s log-file and on-screen log-buffer
     *
     * @see https://nzbget.net/api/writelog
     */
    public async writelog(kind: string, text: string): Promise<boolean> {
        return this.call('writelog', [kind, text]);
    }

    /**
     * Loads from disk and returns nzb-log for a specific nzb-file
     *
     * @see https://nzbget.net/api/loadlog
     */
    public async loadlog(nzbId: number, idFrom: number = 0, numberOfEntries: number = 0): Promise<Models.ILog[]> {
        return this.call('loadlog', [nzbId, idFrom, numberOfEntries]);
    }

    /**
     * Returns download volume statistics per news-server.
     *
     * @see https://nzbget.net/api/servervolumes
     */
    public async servervolumes(nzbId: number, idFrom: number = 0, numberOfEntries: number = 0): Promise<Models.IServerVolume[]> {
        return this.call('servervolumes', [nzbId, idFrom, numberOfEntries]);
    }

    /**
     * Reset download volume statistics for a specified news-server.
     *
     * @see https://nzbget.net/api/resetservervolume
     */
    public async resetservervolume(serverId: number, sounter: string = ''): Promise<boolean> {
        return this.call('resetservervolume', [serverId, sounter]);
    }

    /**
     * Set download speed limit in KBytes/second. Value 0 disables speed throttling.
     *
     * @see https://nzbget.net/api/rate
     */
    public async rate(limit: number = 0): Promise<boolean> {
        return this.call('rate', [limit]);
    }

    /**
     * Pause download queue
     *
     * @see https://nzbget.net/api/pausedownload
     */
    public async pausedownload(): Promise<boolean> {
        return this.call('pausedownload');
    }

    /**
     * Resume (previously paused) download queue.
     *
     * @see https://nzbget.net/api/resumedownload
     */
    public async resumedownload(): Promise<boolean> {
        return this.call('resumedownload');
    }

    /**
     * Pause post-processing
     *
     * @see https://nzbget.net/api/pausepost
     */
    public async pausepost(): Promise<boolean> {
        return this.call('pausepost');
    }

    /**
     * Resume (previously paused) post-processing
     *
     * @see https://nzbget.net/api/resumepost
     */
    public async resumepost(): Promise<boolean> {
        return this.call('resumepost');
    }

    /**
     * Pause scanning of directory with incoming nzb-files (option NzbDir)
     *
     * @see https://nzbget.net/api/pausescan
     */
    public async pausescan(): Promise<boolean> {
        return this.call('pausescan');
    }

    /**
     * Resume (previously paused) scanning of directory with incoming nzb-files (option NzbDir)
     *
     * @see https://nzbget.net/api/resumescan
     */
    public async resumescan(): Promise<boolean> {
        return this.call('resumescan');
    }

    /**
     * Schedule resuming of all activities after expiring of wait interval
     *
     * @see https://nzbget.net/api/scheduleresume
     */
    public async scheduleresume(seconds: number = 0): Promise<boolean> {
        return this.call('scheduleresume', [seconds]);
    }

    /**
     * Returns current configuration loaded into program. Please note that the configuration file on disk may differ
     * from the loaded configuration. This may occur if the configuration file on disk was changed after the program
     * was launched or the program may get some options passed via command line.
     *
     * @see https://nzbget.net/api/config
     */
    public async config(): Promise<Models.IConfig[]> {
        return this.call('config');
    }

    /**
     * Reads configuration file from the disk
     *
     * @see https://nzbget.net/api/loadconfig
     */
    public async loadconfig(): Promise<Models.IConfig[]> {
        return this.call('loadconfig');
    }

    /**
     * Saves configuration file to the disk
     *
     * @see https://nzbget.net/api/saveconfig
     */
    public async saveconfig(options: Models.IConfig[]): Promise<boolean> {
        return this.call('saveconfig', [options]);
    }

    /**
     * Returns NZBGet configuration file template and also extracts configuration sections from all
     * post-processing files. This information is for example used by web-interface to build settings
     * page or page “Postprocess” in download details dialog.
     *
     * @see https://nzbget.net/api/configtemplates
     */
    public async configtemplates(loadFromDisk: boolean = false): Promise<Models.IConfigTemplate[]> {
        return this.call('configtemplates', [loadFromDisk]);
    }

    /**
     * Make a custom API Call
     */
    public async call(method: string, params: any[] = []): Promise<any> {
        const request = {
            id: 1,
            method,
            params,
        };

        return this.post<Models.IJSONRPCRequest, Models.IJSONRPCResult>(`${this.baseUrl.toString()}`, request)
            .then((result) => {
                if (typeof result.error !== 'undefined' && result.error) {
                    throw(new JSONRPCError(result.error.message, result.error.code));
                } else {
                    return result.result;
                }
            });
    }

    /**
     * HTTP Request
     */
    protected async request<TRequest>(body?: TRequest): Promise<RequestInit> {
        return {
            body: JSON.stringify(body),
            headers: {
                'accept': 'application/json,text/json',
                'content-type': 'application/json',
            },
        };
    }
}
