import { Component, Input, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { select } from 'd3-selection';
import { isPlatformServer } from '@angular/common';
import { id } from '../utils/id';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
export class LineComponent {
    constructor(element, platformId, sanitizer) {
        this.element = element;
        this.platformId = platformId;
        this.sanitizer = sanitizer;
        this.fill = 'none';
        this.animations = true;
        // @Output() select = new EventEmitter();
        this.initialized = false;
        this.markerId = '';
        this.markerRef = {};
        this.isSSR = false;
        this.markerId = `marker${id()}`;
        this.markerRef = this.sanitizer.bypassSecurityTrustStyle(`url(#${this.markerId})`);
    }
    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this.isSSR = true;
        }
    }
    ngOnChanges(changes) {
        if (!this.initialized) {
            this.initialized = true;
            this.initialPath = this.path;
        }
        else {
            this.updatePathEl();
        }
    }
    updatePathEl() {
        const node = select(this.element.nativeElement).select('.line');
        if (this.animations) {
            node.transition().duration(750).attr('d', this.path);
        }
        else {
            node.attr('d', this.path);
        }
    }
}
LineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LineComponent, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
LineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: LineComponent, selector: "g[ngx-charts-line]", inputs: { path: "path", stroke: "stroke", data: "data", fill: "fill", animations: "animations" }, usesOnChanges: true, ngImport: i0, template: `
    <svg:marker [attr.id]="markerId" markerWidth="8" markerHeight="8" refX="5" refY="5">
      <svg:circle cx="5" cy="5" r="3" [attr.fill]="stroke" style="stroke: none" />
    </svg:marker>
    <svg:g *ngIf="!isSSR">
      <svg:path
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        [attr.stroke]="stroke"
        stroke-width="1.5px"
      />
    </svg:g>
    <svg:g *ngIf="isSSR">
      <svg:path class="line" [attr.d]="initialPath" [attr.fill]="fill" [attr.stroke]="stroke" stroke-width="1.5px" />
    </svg:g>
  `, isInline: true, directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
        trigger('animationState', [
            transition(':enter', [
                style({
                    strokeDasharray: 2000,
                    strokeDashoffset: 2000
                }),
                animate(1000, style({
                    strokeDashoffset: 0
                }))
            ])
        ])
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g[ngx-charts-line]',
                    template: `
    <svg:marker [attr.id]="markerId" markerWidth="8" markerHeight="8" refX="5" refY="5">
      <svg:circle cx="5" cy="5" r="3" [attr.fill]="stroke" style="stroke: none" />
    </svg:marker>
    <svg:g *ngIf="!isSSR">
      <svg:path
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        [attr.stroke]="stroke"
        stroke-width="1.5px"
      />
    </svg:g>
    <svg:g *ngIf="isSSR">
      <svg:path class="line" [attr.d]="initialPath" [attr.fill]="fill" [attr.stroke]="stroke" stroke-width="1.5px" />
    </svg:g>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('animationState', [
                            transition(':enter', [
                                style({
                                    strokeDasharray: 2000,
                                    strokeDashoffset: 2000
                                }),
                                animate(1000, style({
                                    strokeDashoffset: 0
                                }))
                            ])
                        ])
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i1.DomSanitizer }]; }, propDecorators: { path: [{
                type: Input
            }], stroke: [{
                type: Input
            }], data: [{
                type: Input
            }], fill: [{
                type: Input
            }], animations: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbGluZS1jaGFydC9saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFLTCx1QkFBdUIsRUFFdkIsV0FBVyxFQUNYLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBeUNqQyxNQUFNLE9BQU8sYUFBYTtJQWdCeEIsWUFBb0IsT0FBbUIsRUFBK0IsVUFBZSxFQUFVLFNBQXVCO1FBQWxHLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFaN0csU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUN0QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRXBDLHlDQUF5QztRQUV6QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFFcEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUdaLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7OzBHQTVDVSxhQUFhLDRDQWdCeUIsV0FBVzs4RkFoQmpELGFBQWEsaUxBcENkOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVCw2SEFFVztRQUNWLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUNuQixLQUFLLENBQUM7b0JBQ0osZUFBZSxFQUFFLElBQUk7b0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7aUJBQ3ZCLENBQUM7Z0JBQ0YsT0FBTyxDQUNMLElBQUksRUFDSixLQUFLLENBQUM7b0JBQ0osZ0JBQWdCLEVBQUUsQ0FBQztpQkFDcEIsQ0FBQyxDQUNIO2FBQ0YsQ0FBQztTQUNILENBQUM7S0FDSDsyRkFFVSxhQUFhO2tCQXRDekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFOzRCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUM7b0NBQ0osZUFBZSxFQUFFLElBQUk7b0NBQ3JCLGdCQUFnQixFQUFFLElBQUk7aUNBQ3ZCLENBQUM7Z0NBQ0YsT0FBTyxDQUNMLElBQUksRUFDSixLQUFLLENBQUM7b0NBQ0osZ0JBQWdCLEVBQUUsQ0FBQztpQ0FDcEIsQ0FBQyxDQUNIOzZCQUNGLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtpQkFDRjs7MEJBaUIyQyxNQUFNOzJCQUFDLFdBQVc7dUVBZm5ELElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VyaWVzIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBpZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtbGluZV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6bWFya2VyIFthdHRyLmlkXT1cIm1hcmtlcklkXCIgbWFya2VyV2lkdGg9XCI4XCIgbWFya2VySGVpZ2h0PVwiOFwiIHJlZlg9XCI1XCIgcmVmWT1cIjVcIj5cbiAgICAgIDxzdmc6Y2lyY2xlIGN4PVwiNVwiIGN5PVwiNVwiIHI9XCIzXCIgW2F0dHIuZmlsbF09XCJzdHJva2VcIiBzdHlsZT1cInN0cm9rZTogbm9uZVwiIC8+XG4gICAgPC9zdmc6bWFya2VyPlxuICAgIDxzdmc6ZyAqbmdJZj1cIiFpc1NTUlwiPlxuICAgICAgPHN2ZzpwYXRoXG4gICAgICAgIFtAYW5pbWF0aW9uU3RhdGVdPVwiJ2FjdGl2ZSdcIlxuICAgICAgICBjbGFzcz1cImxpbmVcIlxuICAgICAgICBbYXR0ci5kXT1cImluaXRpYWxQYXRoXCJcbiAgICAgICAgW2F0dHIuZmlsbF09XCJmaWxsXCJcbiAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInN0cm9rZVwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNXB4XCJcbiAgICAgIC8+XG4gICAgPC9zdmc6Zz5cbiAgICA8c3ZnOmcgKm5nSWY9XCJpc1NTUlwiPlxuICAgICAgPHN2ZzpwYXRoIGNsYXNzPVwibGluZVwiIFthdHRyLmRdPVwiaW5pdGlhbFBhdGhcIiBbYXR0ci5maWxsXT1cImZpbGxcIiBbYXR0ci5zdHJva2VdPVwic3Ryb2tlXCIgc3Ryb2tlLXdpZHRoPVwiMS41cHhcIiAvPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYW5pbWF0aW9uU3RhdGUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IDIwMDAsXG4gICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogMjAwMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAxMDAwLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgcGF0aDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHJva2U6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogU2VyaWVzO1xuICBASW5wdXQoKSBmaWxsOiBzdHJpbmcgPSAnbm9uZSc7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaW5pdGlhbFBhdGg6IHN0cmluZztcbiAgbWFya2VySWQ6IHN0cmluZyA9ICcnO1xuICBtYXJrZXJSZWY6IGFueSA9IHt9O1xuXG4gIGlzU1NSID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIHRoaXMubWFya2VySWQgPSBgbWFya2VyJHtpZCgpfWA7XG4gICAgdGhpcy5tYXJrZXJSZWYgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgjJHt0aGlzLm1hcmtlcklkfSlgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuaXNTU1IgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbml0aWFsUGF0aCA9IHRoaXMucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVQYXRoRWwoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYXRoRWwoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHNlbGVjdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2VsZWN0KCcubGluZScpO1xuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgbm9kZS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5hdHRyKCdkJywgdGhpcy5wYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5hdHRyKCdkJywgdGhpcy5wYXRoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==