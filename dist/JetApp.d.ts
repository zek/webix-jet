import { JetBase } from "./JetBase";
import { IJetApp, IJetConfig, IJetRouter, IJetURL, IJetURLChunk, IJetView, IViewConfig, IWebixFacade } from "./interfaces";
import "./patch";
export declare class JetApp extends JetBase implements IJetApp {
    config: IJetConfig;
    webix: IWebixFacade;
    callEvent: (name: string, parameters: any[]) => boolean;
    attachEvent: (name: string, handler: any) => void;
    private $router;
    private _view;
    private _services;
    constructor(config: any);
    getService(name: string): any;
    setService(name: string, handler: any): void;
    copyConfig(obj: any, target: any, config: IViewConfig): any;
    getRouter(): IJetRouter;
    clickHandler(e: Event): void;
    refresh(): void;
    loadView(url: any): Promise<any>;
    createFromURL(url: IJetURLChunk[], now?: IJetView): Promise<IJetView>;
    createView(ui: any, name?: string): any;
    show(name: string): Promise<any>;
    canNavigate(url: string, view?: IJetView): Promise<string>;
    destructor(): void;
    trigger(name: string, ...rest: any[]): void;
    apply(name: string, data: any[]): void;
    action(name: string): any;
    on(name: string, handler: any): void;
    use(plugin: any, config: any): void;
    error(name: string, er: any[]): void;
    protected _render(url: string | IJetURL): Promise<IJetView>;
    protected _render_stage(url: any): any;
    protected _urlChange(_$url: IJetURL): Promise<any>;
    private _first_start(url);
    private _loadError(url, err);
    private addSubView(obj, target, config);
}