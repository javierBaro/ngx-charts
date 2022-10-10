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
        this.showCircles = true;
        this.oneItem = false;
        // @Output() select = new EventEmitter();
        this.initialized = false;
        this.markerId = '';
        this.markerRef = {};
        this.isSSR = false;
        this.markerId = `marker${id()}`;
        this.markerRef = this.sanitizer.bypassSecurityTrustStyle(`url(#${this.markerId})`);
        console.log(this.oneItem);
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
LineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: LineComponent, selector: "g[ngx-charts-line]", inputs: { path: "path", stroke: "stroke", data: "data", fill: "fill", animations: "animations", showCircles: "showCircles", oneItem: "oneItem" }, usesOnChanges: true, ngImport: i0, template: `
    <svg:marker *ngIf="showCircles" [attr.id]="markerId" markerWidth="8" markerHeight="8" refX="5" refY="5">
      <svg:circle cx="5" cy="5" r="3" [attr.fill]="stroke" style="stroke: none" />
    </svg:marker>
    <svg:g *ngIf="!isSSR">
      <svg:path *ngIf="!oneItem"
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        [attr.stroke]="stroke"
        stroke-width="1.5px"
        [style.marker-start]="markerRef"
        [style.marker-mid]="markerRef"
        [style.marker-end]="markerRef"
      />
      <svg:path *ngIf="oneItem"
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        stroke-width="1.5px"
        [style.marker-start]="markerRef"
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
    <svg:marker *ngIf="showCircles" [attr.id]="markerId" markerWidth="8" markerHeight="8" refX="5" refY="5">
      <svg:circle cx="5" cy="5" r="3" [attr.fill]="stroke" style="stroke: none" />
    </svg:marker>
    <svg:g *ngIf="!isSSR">
      <svg:path *ngIf="!oneItem"
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        [attr.stroke]="stroke"
        stroke-width="1.5px"
        [style.marker-start]="markerRef"
        [style.marker-mid]="markerRef"
        [style.marker-end]="markerRef"
      />
      <svg:path *ngIf="oneItem"
        [@animationState]="'active'"
        class="line"
        [attr.d]="initialPath"
        [attr.fill]="fill"
        stroke-width="1.5px"
        [style.marker-start]="markerRef"
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
            }], showCircles: [{
                type: Input
            }], oneItem: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbGluZS1jaGFydC9saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFLTCx1QkFBdUIsRUFFdkIsV0FBVyxFQUNYLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBb0RqQyxNQUFNLE9BQU8sYUFBYTtJQWtCeEIsWUFBb0IsT0FBbUIsRUFBK0IsVUFBZSxFQUFVLFNBQXVCO1FBQWxHLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFkN0csU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUN0QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFbEMseUNBQXlDO1FBRXpDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUVwQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR1osSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7MEdBL0NVLGFBQWEsNENBa0J5QixXQUFXOzhGQWxCakQsYUFBYSxpT0EvQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQsNkhBRVc7UUFDVixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsS0FBSyxDQUFDO29CQUNKLGVBQWUsRUFBRSxJQUFJO29CQUNyQixnQkFBZ0IsRUFBRSxJQUFJO2lCQUN2QixDQUFDO2dCQUNGLE9BQU8sQ0FDTCxJQUFJLEVBQ0osS0FBSyxDQUFDO29CQUNKLGdCQUFnQixFQUFFLENBQUM7aUJBQ3BCLENBQUMsQ0FDSDthQUNGLENBQUM7U0FDSCxDQUFDO0tBQ0g7MkZBRVUsYUFBYTtrQkFqRHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFOzRCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUM7b0NBQ0osZUFBZSxFQUFFLElBQUk7b0NBQ3JCLGdCQUFnQixFQUFFLElBQUk7aUNBQ3ZCLENBQUM7Z0NBQ0YsT0FBTyxDQUNMLElBQUksRUFDSixLQUFLLENBQUM7b0NBQ0osZ0JBQWdCLEVBQUUsQ0FBQztpQ0FDcEIsQ0FBQyxDQUNIOzZCQUNGLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtpQkFDRjs7MEJBbUIyQyxNQUFNOzJCQUFDLFdBQVc7dUVBakJuRCxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7IFNlcmllcyB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaWQgfSBmcm9tICcuLi91dGlscy9pZCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWxpbmVdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOm1hcmtlciAqbmdJZj1cInNob3dDaXJjbGVzXCIgW2F0dHIuaWRdPVwibWFya2VySWRcIiBtYXJrZXJXaWR0aD1cIjhcIiBtYXJrZXJIZWlnaHQ9XCI4XCIgcmVmWD1cIjVcIiByZWZZPVwiNVwiPlxuICAgICAgPHN2ZzpjaXJjbGUgY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjNcIiBbYXR0ci5maWxsXT1cInN0cm9rZVwiIHN0eWxlPVwic3Ryb2tlOiBub25lXCIgLz5cbiAgICA8L3N2ZzptYXJrZXI+XG4gICAgPHN2ZzpnICpuZ0lmPVwiIWlzU1NSXCI+XG4gICAgICA8c3ZnOnBhdGggKm5nSWY9XCIhb25lSXRlbVwiXG4gICAgICAgIFtAYW5pbWF0aW9uU3RhdGVdPVwiJ2FjdGl2ZSdcIlxuICAgICAgICBjbGFzcz1cImxpbmVcIlxuICAgICAgICBbYXR0ci5kXT1cImluaXRpYWxQYXRoXCJcbiAgICAgICAgW2F0dHIuZmlsbF09XCJmaWxsXCJcbiAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInN0cm9rZVwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNXB4XCJcbiAgICAgICAgW3N0eWxlLm1hcmtlci1zdGFydF09XCJtYXJrZXJSZWZcIlxuICAgICAgICBbc3R5bGUubWFya2VyLW1pZF09XCJtYXJrZXJSZWZcIlxuICAgICAgICBbc3R5bGUubWFya2VyLWVuZF09XCJtYXJrZXJSZWZcIlxuICAgICAgLz5cbiAgICAgIDxzdmc6cGF0aCAqbmdJZj1cIm9uZUl0ZW1cIlxuICAgICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgICAgY2xhc3M9XCJsaW5lXCJcbiAgICAgICAgW2F0dHIuZF09XCJpbml0aWFsUGF0aFwiXG4gICAgICAgIFthdHRyLmZpbGxdPVwiZmlsbFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNXB4XCJcbiAgICAgICAgW3N0eWxlLm1hcmtlci1zdGFydF09XCJtYXJrZXJSZWZcIlxuICAgICAgLz5cbiAgICA8L3N2ZzpnPlxuICAgIDxzdmc6ZyAqbmdJZj1cImlzU1NSXCI+XG4gICAgICA8c3ZnOnBhdGggY2xhc3M9XCJsaW5lXCIgW2F0dHIuZF09XCJpbml0aWFsUGF0aFwiIFthdHRyLmZpbGxdPVwiZmlsbFwiIFthdHRyLnN0cm9rZV09XCJzdHJva2VcIiBzdHJva2Utd2lkdGg9XCIxLjVweFwiIC8+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogMjAwMCxcbiAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAyMDAwXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgIDEwMDAsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogMFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBwYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0cm9rZTogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBTZXJpZXM7XG4gIEBJbnB1dCgpIGZpbGw6IHN0cmluZyA9ICdub25lJztcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dDaXJjbGVzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaW5pdGlhbFBhdGg6IHN0cmluZztcbiAgbWFya2VySWQ6IHN0cmluZyA9ICcnO1xuICBtYXJrZXJSZWY6IGFueSA9IHt9O1xuXG4gIGlzU1NSID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIHRoaXMubWFya2VySWQgPSBgbWFya2VyJHtpZCgpfWA7XG4gICAgdGhpcy5tYXJrZXJSZWYgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgjJHt0aGlzLm1hcmtlcklkfSlgKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9uZUl0ZW0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5pc1NTUiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmluaXRpYWxQYXRoID0gdGhpcy5wYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhFbCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhdGhFbCgpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gc2VsZWN0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zZWxlY3QoJy5saW5lJyk7XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBub2RlLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmF0dHIoJ2QnLCB0aGlzLnBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmF0dHIoJ2QnLCB0aGlzLnBhdGgpO1xuICAgIH1cbiAgfVxufVxuIl19