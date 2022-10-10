import { scaleLinear, scalePoint, scaleTime } from 'd3-scale';
import { ScaleType } from '../common/types/scale-type.enum';
export function getDomain(values, scaleType, autoScale, minVal, maxVal) {
    let domain = [];
    if (scaleType === ScaleType.Linear) {
        values = values.map(v => Number(v));
        if (!autoScale) {
            values.push(0);
        }
    }
    if (scaleType === ScaleType.Time || scaleType === ScaleType.Linear) {
        const min = minVal || minVal === 0 ? minVal : Math.min(...values);
        const max = maxVal ? maxVal : Math.max(...values);
        domain = [min, max];
    }
    else {
        domain = values;
    }
    return domain;
}
export function getScale(domain, range, scaleType, roundDomains) {
    switch (scaleType) {
        case ScaleType.Time:
            return scaleTime().range(range).domain(domain);
        case ScaleType.Linear: {
            const scale = scaleLinear().range(range).domain(domain);
            if (roundDomains) {
                return scale.nice();
            }
            return scale;
        }
        case ScaleType.Ordinal:
            return scalePoint()
                .range([range[0], range[1]])
                .domain(domain.map(r => r.toString()));
        default:
            return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFlLFdBQVcsRUFBYyxVQUFVLEVBQWEsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RCxNQUFNLFVBQVUsU0FBUyxDQUN2QixNQUFhLEVBQ2IsU0FBb0IsRUFDcEIsU0FBa0IsRUFDbEIsTUFBZSxFQUNmLE1BQWU7SUFFZixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDMUIsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUNsQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO0tBQ0Y7SUFFRCxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ2xFLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsRSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRWxELE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyQjtTQUFNO1FBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUNqQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUN0QixNQUFnQixFQUNoQixLQUFlLEVBQ2YsU0FBb0IsRUFDcEIsWUFBcUI7SUFFckIsUUFBUSxTQUFTLEVBQUU7UUFDakIsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNqQixPQUFPLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckIsTUFBTSxLQUFLLEdBQUcsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsS0FBSyxTQUFTLENBQUMsT0FBTztZQUNwQixPQUFPLFVBQVUsRUFBRTtpQkFDaEIsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0M7WUFDRSxPQUFPLFNBQVMsQ0FBQztLQUNwQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUxpbmVhciwgc2NhbGVMaW5lYXIsIFNjYWxlUG9pbnQsIHNjYWxlUG9pbnQsIFNjYWxlVGltZSwgc2NhbGVUaW1lIH0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHsgU2NhbGVUeXBlIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3NjYWxlLXR5cGUuZW51bSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW4oXG4gIHZhbHVlczogYW55W10sXG4gIHNjYWxlVHlwZTogU2NhbGVUeXBlLFxuICBhdXRvU2NhbGU6IGJvb2xlYW4sXG4gIG1pblZhbD86IG51bWJlcixcbiAgbWF4VmFsPzogbnVtYmVyXG4pOiBudW1iZXJbXSB7XG4gIGxldCBkb21haW46IG51bWJlcltdID0gW107XG4gIGlmIChzY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5MaW5lYXIpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4gTnVtYmVyKHYpKTtcbiAgICBpZiAoIWF1dG9TY2FsZSkge1xuICAgICAgdmFsdWVzLnB1c2goMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLlRpbWUgfHwgc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgY29uc3QgbWluID0gbWluVmFsIHx8IG1pblZhbCA9PT0gMCA/IG1pblZhbCA6IE1hdGgubWluKC4uLnZhbHVlcyk7XG4gICAgY29uc3QgbWF4ID0gbWF4VmFsID8gbWF4VmFsIDogTWF0aC5tYXgoLi4udmFsdWVzKTtcblxuICAgIGRvbWFpbiA9IFttaW4sIG1heF07XG4gIH0gZWxzZSB7XG4gICAgZG9tYWluID0gdmFsdWVzO1xuICB9XG5cbiAgcmV0dXJuIGRvbWFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxlKFxuICBkb21haW46IG51bWJlcltdLFxuICByYW5nZTogbnVtYmVyW10sXG4gIHNjYWxlVHlwZTogU2NhbGVUeXBlLFxuICByb3VuZERvbWFpbnM6IGJvb2xlYW5cbik6IFNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4gfCBTY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4gfCBTY2FsZVBvaW50PHN0cmluZz4ge1xuICBzd2l0Y2ggKHNjYWxlVHlwZSkge1xuICAgIGNhc2UgU2NhbGVUeXBlLlRpbWU6XG4gICAgICByZXR1cm4gc2NhbGVUaW1lKCkucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pO1xuICAgIGNhc2UgU2NhbGVUeXBlLkxpbmVhcjoge1xuICAgICAgY29uc3Qgc2NhbGUgPSBzY2FsZUxpbmVhcigpLnJhbmdlKHJhbmdlKS5kb21haW4oZG9tYWluKTtcbiAgICAgIGlmIChyb3VuZERvbWFpbnMpIHtcbiAgICAgICAgcmV0dXJuIHNjYWxlLm5pY2UoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9XG4gICAgY2FzZSBTY2FsZVR5cGUuT3JkaW5hbDpcbiAgICAgIHJldHVybiBzY2FsZVBvaW50KClcbiAgICAgICAgLnJhbmdlKFtyYW5nZVswXSwgcmFuZ2VbMV1dKVxuICAgICAgICAuZG9tYWluKGRvbWFpbi5tYXAociA9PiByLnRvU3RyaW5nKCkpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19