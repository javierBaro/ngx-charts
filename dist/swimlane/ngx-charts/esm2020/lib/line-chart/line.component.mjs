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
LineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: LineComponent, selector: "g[ngx-charts-line]", inputs: { path: "path", stroke: "stroke", data: "data", fill: "fill", animations: "animations", showCircles: "showCircles" }, usesOnChanges: true, ngImport: i0, template: `
    <svg:marker *ngIf="showCircles" [attr.id]="markerId" markerWidth="8" markerHeight="8" refX="5" refY="5">
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
        [style.marker-start]="markerRef"
        [style.marker-mid]="markerRef"
        [style.marker-end]="markerRef"
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
      <svg:path
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbGluZS1jaGFydC9saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFLTCx1QkFBdUIsRUFFdkIsV0FBVyxFQUNYLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBNENqQyxNQUFNLE9BQU8sYUFBYTtJQWlCeEIsWUFBb0IsT0FBbUIsRUFBK0IsVUFBZSxFQUFVLFNBQXVCO1FBQWxHLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFiN0csU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUN0QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRXJDLHlDQUF5QztRQUV6QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFFcEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUdaLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7OzBHQTdDVSxhQUFhLDRDQWlCeUIsV0FBVzs4RkFqQmpELGFBQWEsNk1BdkNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVCw2SEFFVztRQUNWLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUNuQixLQUFLLENBQUM7b0JBQ0osZUFBZSxFQUFFLElBQUk7b0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7aUJBQ3ZCLENBQUM7Z0JBQ0YsT0FBTyxDQUNMLElBQUksRUFDSixLQUFLLENBQUM7b0JBQ0osZ0JBQWdCLEVBQUUsQ0FBQztpQkFDcEIsQ0FBQyxDQUNIO2FBQ0YsQ0FBQztTQUNILENBQUM7S0FDSDsyRkFFVSxhQUFhO2tCQXpDekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFOzRCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUM7b0NBQ0osZUFBZSxFQUFFLElBQUk7b0NBQ3JCLGdCQUFnQixFQUFFLElBQUk7aUNBQ3ZCLENBQUM7Z0NBQ0YsT0FBTyxDQUNMLElBQUksRUFDSixLQUFLLENBQUM7b0NBQ0osZ0JBQWdCLEVBQUUsQ0FBQztpQ0FDcEIsQ0FBQyxDQUNIOzZCQUNGLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtpQkFDRjs7MEJBa0IyQyxNQUFNOzJCQUFDLFdBQVc7dUVBaEJuRCxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VyaWVzIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBpZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtbGluZV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6bWFya2VyICpuZ0lmPVwic2hvd0NpcmNsZXNcIiBbYXR0ci5pZF09XCJtYXJrZXJJZFwiIG1hcmtlcldpZHRoPVwiOFwiIG1hcmtlckhlaWdodD1cIjhcIiByZWZYPVwiNVwiIHJlZlk9XCI1XCI+XG4gICAgICA8c3ZnOmNpcmNsZSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiM1wiIFthdHRyLmZpbGxdPVwic3Ryb2tlXCIgc3R5bGU9XCJzdHJva2U6IG5vbmVcIiAvPlxuICAgIDwvc3ZnOm1hcmtlcj5cbiAgICA8c3ZnOmcgKm5nSWY9XCIhaXNTU1JcIj5cbiAgICAgIDxzdmc6cGF0aFxuICAgICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgICAgY2xhc3M9XCJsaW5lXCJcbiAgICAgICAgW2F0dHIuZF09XCJpbml0aWFsUGF0aFwiXG4gICAgICAgIFthdHRyLmZpbGxdPVwiZmlsbFwiXG4gICAgICAgIFthdHRyLnN0cm9rZV09XCJzdHJva2VcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVweFwiXG4gICAgICAgIFtzdHlsZS5tYXJrZXItc3RhcnRdPVwibWFya2VyUmVmXCJcbiAgICAgICAgW3N0eWxlLm1hcmtlci1taWRdPVwibWFya2VyUmVmXCJcbiAgICAgICAgW3N0eWxlLm1hcmtlci1lbmRdPVwibWFya2VyUmVmXCJcbiAgICAgIC8+XG4gICAgPC9zdmc6Zz5cbiAgICA8c3ZnOmcgKm5nSWY9XCJpc1NTUlwiPlxuICAgICAgPHN2ZzpwYXRoIGNsYXNzPVwibGluZVwiIFthdHRyLmRdPVwiaW5pdGlhbFBhdGhcIiBbYXR0ci5maWxsXT1cImZpbGxcIiBbYXR0ci5zdHJva2VdPVwic3Ryb2tlXCIgc3Ryb2tlLXdpZHRoPVwiMS41cHhcIiAvPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYW5pbWF0aW9uU3RhdGUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IDIwMDAsXG4gICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogMjAwMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAxMDAwLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgcGF0aDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHJva2U6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogU2VyaWVzO1xuICBASW5wdXQoKSBmaWxsOiBzdHJpbmcgPSAnbm9uZSc7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93Q2lyY2xlczogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpbml0aWFsUGF0aDogc3RyaW5nO1xuICBtYXJrZXJJZDogc3RyaW5nID0gJyc7XG4gIG1hcmtlclJlZjogYW55ID0ge307XG5cbiAgaXNTU1IgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgdGhpcy5tYXJrZXJJZCA9IGBtYXJrZXIke2lkKCl9YDtcbiAgICB0aGlzLm1hcmtlclJlZiA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKCMke3RoaXMubWFya2VySWR9KWApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5pc1NTUiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmluaXRpYWxQYXRoID0gdGhpcy5wYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhFbCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhdGhFbCgpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gc2VsZWN0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zZWxlY3QoJy5saW5lJyk7XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBub2RlLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmF0dHIoJ2QnLCB0aGlzLnBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmF0dHIoJ2QnLCB0aGlzLnBhdGgpO1xuICAgIH1cbiAgfVxufVxuIl19