import { OnChanges, ElementRef, SimpleChanges, OnInit } from '@angular/core';
import { Series } from '../models/chart-data.model';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class LineComponent implements OnChanges, OnInit {
    private element;
    private platformId;
    private sanitizer;
    path: string;
    stroke: string;
    data: Series;
    fill: string;
    animations: boolean;
    showCircles: boolean;
    initialized: boolean;
    initialPath: string;
    markerId: string;
    markerRef: any;
    isSSR: boolean;
    constructor(element: ElementRef, platformId: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updatePathEl(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LineComponent, "g[ngx-charts-line]", never, { "path": "path"; "stroke": "stroke"; "data": "data"; "fill": "fill"; "animations": "animations"; "showCircles": "showCircles"; }, {}, never, never>;
}
