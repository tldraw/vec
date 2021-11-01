function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "Vec", () => $db76811926de67c3$export$e947a0f742cf021e);
$parcel$export(module.exports, "default", () => $db76811926de67c3$export$2e2bcd8739ae039);
class $db76811926de67c3$export$e947a0f742cf021e {
    static clamp(n, min, max) {
        return Math.max(min, typeof max !== 'undefined' ? Math.min(n, max) : n);
    }
    static clampV(A, min, max) {
        return A.map((n)=>max ? $db76811926de67c3$export$e947a0f742cf021e.clamp(n, min, max) : $db76811926de67c3$export$e947a0f742cf021e.clamp(n, min)
        );
    }
    /**
   * Cross (for point in polygon)
   *
   */ static cross(x, y, z) {
        return (y[0] - x[0]) * (z[1] - x[1]) - (z[0] - x[0]) * (y[1] - x[1]);
    }
}
$db76811926de67c3$export$e947a0f742cf021e.neg = (A)=>{
    return [
        -A[0],
        -A[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.add = (A, B)=>{
    return [
        A[0] + B[0],
        A[1] + B[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.addScalar = (A, n)=>{
    return [
        A[0] + n,
        A[1] + n
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.sub = (A, B)=>{
    return [
        A[0] - B[0],
        A[1] - B[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.subScalar = (A, n)=>{
    return [
        A[0] - n,
        A[1] - n
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.vec = (A, B)=>{
    // A, B as vectors get the vector from A to B
    return [
        B[0] - A[0],
        B[1] - A[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.mul = (A, n)=>{
    return [
        A[0] * n,
        A[1] * n
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.mulV = (A, B)=>{
    return [
        A[0] * B[0],
        A[1] * B[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.div = (A, n)=>{
    return [
        A[0] / n,
        A[1] / n
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.divV = (A, B)=>{
    return [
        A[0] / B[0],
        A[1] / B[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.per = (A)=>{
    return [
        A[1],
        -A[0]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.dpr = (A, B)=>{
    return A[0] * B[0] + A[1] * B[1];
};
$db76811926de67c3$export$e947a0f742cf021e.cpr = (A, B)=>{
    return A[0] * B[1] - B[0] * A[1];
};
$db76811926de67c3$export$e947a0f742cf021e.len2 = (A)=>{
    return A[0] * A[0] + A[1] * A[1];
};
$db76811926de67c3$export$e947a0f742cf021e.len = (A)=>{
    return Math.hypot(A[0], A[1]);
};
$db76811926de67c3$export$e947a0f742cf021e.pry = (A, B)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.dpr(A, B) / $db76811926de67c3$export$e947a0f742cf021e.len(B);
};
$db76811926de67c3$export$e947a0f742cf021e.uni = (A)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.div(A, $db76811926de67c3$export$e947a0f742cf021e.len(A));
};
$db76811926de67c3$export$e947a0f742cf021e.normalize = (A)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.uni(A);
};
$db76811926de67c3$export$e947a0f742cf021e.tangent = (A, B)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.uni($db76811926de67c3$export$e947a0f742cf021e.sub(A, B));
};
$db76811926de67c3$export$e947a0f742cf021e.dist2 = (A, B)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.len2($db76811926de67c3$export$e947a0f742cf021e.sub(A, B));
};
$db76811926de67c3$export$e947a0f742cf021e.dist = (A, B)=>{
    return Math.hypot(A[1] - B[1], A[0] - B[0]);
};
$db76811926de67c3$export$e947a0f742cf021e.fastDist = (A, B)=>{
    const V = [
        B[0] - A[0],
        B[1] - A[1]
    ];
    const aV = [
        Math.abs(V[0]),
        Math.abs(V[1])
    ];
    let r = 1 / Math.max(aV[0], aV[1]);
    r = r * (1.29289 - (aV[0] + aV[1]) * r * 0.29289);
    return [
        V[0] * r,
        V[1] * r
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.ang = (A, B)=>{
    return Math.atan2($db76811926de67c3$export$e947a0f742cf021e.cpr(A, B), $db76811926de67c3$export$e947a0f742cf021e.dpr(A, B));
};
$db76811926de67c3$export$e947a0f742cf021e.angle = (A, B)=>{
    return Math.atan2(B[1] - A[1], B[0] - A[0]);
};
$db76811926de67c3$export$e947a0f742cf021e.med = (A, B)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.mul($db76811926de67c3$export$e947a0f742cf021e.add(A, B), 0.5);
};
$db76811926de67c3$export$e947a0f742cf021e.rot = (A, r = 0)=>{
    return [
        A[0] * Math.cos(r) - A[1] * Math.sin(r),
        A[0] * Math.sin(r) + A[1] * Math.cos(r)
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.rotWith = (A, C, r = 0)=>{
    if (r === 0) return A;
    const s = Math.sin(r);
    const c = Math.cos(r);
    const px = A[0] - C[0];
    const py = A[1] - C[1];
    const nx = px * c - py * s;
    const ny = px * s + py * c;
    return [
        nx + C[0],
        ny + C[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.isEqual = (A, B)=>{
    return A[0] === B[0] && A[1] === B[1];
};
$db76811926de67c3$export$e947a0f742cf021e.lrp = (A, B, t)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.add(A, $db76811926de67c3$export$e947a0f742cf021e.mul($db76811926de67c3$export$e947a0f742cf021e.sub(B, A), t));
};
$db76811926de67c3$export$e947a0f742cf021e.int = (A, B, from, to, s = 1)=>{
    const t = ($db76811926de67c3$export$e947a0f742cf021e.clamp(from, to) - from) / (to - from);
    return $db76811926de67c3$export$e947a0f742cf021e.add($db76811926de67c3$export$e947a0f742cf021e.mul(A, 1 - t), $db76811926de67c3$export$e947a0f742cf021e.mul(B, s));
};
$db76811926de67c3$export$e947a0f742cf021e.ang3 = (p1, pc, p2)=>{
    // this,
    const v1 = $db76811926de67c3$export$e947a0f742cf021e.vec(pc, p1);
    const v2 = $db76811926de67c3$export$e947a0f742cf021e.vec(pc, p2);
    return $db76811926de67c3$export$e947a0f742cf021e.ang(v1, v2);
};
$db76811926de67c3$export$e947a0f742cf021e.abs = (A)=>{
    return [
        Math.abs(A[0]),
        Math.abs(A[1])
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.rescale = (a, n)=>{
    const l = $db76811926de67c3$export$e947a0f742cf021e.len(a);
    return [
        n * a[0] / l,
        n * a[1] / l
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.isLeft = (p1, pc, p2)=>{
    //  isLeft: >0 for counterclockwise
    //          =0 for none (degenerate)
    //          <0 for clockwise
    return (pc[0] - p1[0]) * (p2[1] - p1[1]) - (p2[0] - p1[0]) * (pc[1] - p1[1]);
};
$db76811926de67c3$export$e947a0f742cf021e.clockwise = (p1, pc, p2)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.isLeft(p1, pc, p2) > 0;
};
$db76811926de67c3$export$e947a0f742cf021e.round = (a, d = 2)=>{
    return a.map((v)=>+v.toFixed(d)
    );
};
$db76811926de67c3$export$e947a0f742cf021e.nearestPointOnLineThroughPoint = (A, u, P)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.add(A, $db76811926de67c3$export$e947a0f742cf021e.mul(u, $db76811926de67c3$export$e947a0f742cf021e.pry($db76811926de67c3$export$e947a0f742cf021e.sub(P, A), u)));
};
$db76811926de67c3$export$e947a0f742cf021e.distanceToLineThroughPoint = (A, u, P)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.dist(P, $db76811926de67c3$export$e947a0f742cf021e.nearestPointOnLineThroughPoint(A, u, P));
};
$db76811926de67c3$export$e947a0f742cf021e.nearestPointOnLineSegment = (A, B, P, clamp = true)=>{
    const u = $db76811926de67c3$export$e947a0f742cf021e.uni($db76811926de67c3$export$e947a0f742cf021e.sub(B, A));
    const C = $db76811926de67c3$export$e947a0f742cf021e.add(A, $db76811926de67c3$export$e947a0f742cf021e.mul(u, $db76811926de67c3$export$e947a0f742cf021e.pry($db76811926de67c3$export$e947a0f742cf021e.sub(P, A), u)));
    if (clamp) {
        if (C[0] < Math.min(A[0], B[0])) return A[0] < B[0] ? A : B;
        if (C[0] > Math.max(A[0], B[0])) return A[0] > B[0] ? A : B;
        if (C[1] < Math.min(A[1], B[1])) return A[1] < B[1] ? A : B;
        if (C[1] > Math.max(A[1], B[1])) return A[1] > B[1] ? A : B;
    }
    return C;
};
$db76811926de67c3$export$e947a0f742cf021e.distanceToLineSegment = (A, B, P, clamp = true)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.dist(P, $db76811926de67c3$export$e947a0f742cf021e.nearestPointOnLineSegment(A, B, P, clamp));
};
$db76811926de67c3$export$e947a0f742cf021e.nudge = (A, B, d)=>{
    return $db76811926de67c3$export$e947a0f742cf021e.add(A, $db76811926de67c3$export$e947a0f742cf021e.mul($db76811926de67c3$export$e947a0f742cf021e.uni($db76811926de67c3$export$e947a0f742cf021e.sub(B, A)), d));
};
$db76811926de67c3$export$e947a0f742cf021e.nudgeAtAngle = (A, a, d)=>{
    return [
        Math.cos(a) * d + A[0],
        Math.sin(a) * d + A[1]
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.toPrecision = (a, n = 4)=>{
    return [
        +a[0].toPrecision(n),
        +a[1].toPrecision(n)
    ];
};
$db76811926de67c3$export$e947a0f742cf021e.pointsBetween = (A, B, steps = 6)=>{
    return Array.from(Array(steps)).map((_, i)=>{
        const t = i / (steps - 1);
        const k = Math.min(1, 0.5 + Math.abs(0.5 - t));
        return [
            ...$db76811926de67c3$export$e947a0f742cf021e.lrp(A, B, t),
            k
        ];
    });
};
var $db76811926de67c3$export$2e2bcd8739ae039 = $db76811926de67c3$export$e947a0f742cf021e;


//# sourceMappingURL=main.js.map
