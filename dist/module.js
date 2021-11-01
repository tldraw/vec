class $34cd592413da99b6$export$e947a0f742cf021e {
    static clamp(n, min, max) {
        return Math.max(min, typeof max !== 'undefined' ? Math.min(n, max) : n);
    }
    static clampV(A, min, max) {
        return A.map((n)=>max ? $34cd592413da99b6$export$e947a0f742cf021e.clamp(n, min, max) : $34cd592413da99b6$export$e947a0f742cf021e.clamp(n, min)
        );
    }
    /**
   * Cross (for point in polygon)
   *
   */ static cross(x, y, z) {
        return (y[0] - x[0]) * (z[1] - x[1]) - (z[0] - x[0]) * (y[1] - x[1]);
    }
}
$34cd592413da99b6$export$e947a0f742cf021e.neg = (A)=>{
    return [
        -A[0],
        -A[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.add = (A, B)=>{
    return [
        A[0] + B[0],
        A[1] + B[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.addScalar = (A, n)=>{
    return [
        A[0] + n,
        A[1] + n
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.sub = (A, B)=>{
    return [
        A[0] - B[0],
        A[1] - B[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.subScalar = (A, n)=>{
    return [
        A[0] - n,
        A[1] - n
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.vec = (A, B)=>{
    // A, B as vectors get the vector from A to B
    return [
        B[0] - A[0],
        B[1] - A[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.mul = (A, n)=>{
    return [
        A[0] * n,
        A[1] * n
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.mulV = (A, B)=>{
    return [
        A[0] * B[0],
        A[1] * B[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.div = (A, n)=>{
    return [
        A[0] / n,
        A[1] / n
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.divV = (A, B)=>{
    return [
        A[0] / B[0],
        A[1] / B[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.per = (A)=>{
    return [
        A[1],
        -A[0]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.dpr = (A, B)=>{
    return A[0] * B[0] + A[1] * B[1];
};
$34cd592413da99b6$export$e947a0f742cf021e.cpr = (A, B)=>{
    return A[0] * B[1] - B[0] * A[1];
};
$34cd592413da99b6$export$e947a0f742cf021e.len2 = (A)=>{
    return A[0] * A[0] + A[1] * A[1];
};
$34cd592413da99b6$export$e947a0f742cf021e.len = (A)=>{
    return Math.hypot(A[0], A[1]);
};
$34cd592413da99b6$export$e947a0f742cf021e.pry = (A, B)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.dpr(A, B) / $34cd592413da99b6$export$e947a0f742cf021e.len(B);
};
$34cd592413da99b6$export$e947a0f742cf021e.uni = (A)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.div(A, $34cd592413da99b6$export$e947a0f742cf021e.len(A));
};
$34cd592413da99b6$export$e947a0f742cf021e.normalize = (A)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.uni(A);
};
$34cd592413da99b6$export$e947a0f742cf021e.tangent = (A, B)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.uni($34cd592413da99b6$export$e947a0f742cf021e.sub(A, B));
};
$34cd592413da99b6$export$e947a0f742cf021e.dist2 = (A, B)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.len2($34cd592413da99b6$export$e947a0f742cf021e.sub(A, B));
};
$34cd592413da99b6$export$e947a0f742cf021e.dist = (A, B)=>{
    return Math.hypot(A[1] - B[1], A[0] - B[0]);
};
$34cd592413da99b6$export$e947a0f742cf021e.fastDist = (A, B)=>{
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
$34cd592413da99b6$export$e947a0f742cf021e.ang = (A, B)=>{
    return Math.atan2($34cd592413da99b6$export$e947a0f742cf021e.cpr(A, B), $34cd592413da99b6$export$e947a0f742cf021e.dpr(A, B));
};
$34cd592413da99b6$export$e947a0f742cf021e.angle = (A, B)=>{
    return Math.atan2(B[1] - A[1], B[0] - A[0]);
};
$34cd592413da99b6$export$e947a0f742cf021e.med = (A, B)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.mul($34cd592413da99b6$export$e947a0f742cf021e.add(A, B), 0.5);
};
$34cd592413da99b6$export$e947a0f742cf021e.rot = (A, r = 0)=>{
    return [
        A[0] * Math.cos(r) - A[1] * Math.sin(r),
        A[0] * Math.sin(r) + A[1] * Math.cos(r)
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.rotWith = (A, C, r = 0)=>{
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
$34cd592413da99b6$export$e947a0f742cf021e.isEqual = (A, B)=>{
    return A[0] === B[0] && A[1] === B[1];
};
$34cd592413da99b6$export$e947a0f742cf021e.lrp = (A, B, t)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.add(A, $34cd592413da99b6$export$e947a0f742cf021e.mul($34cd592413da99b6$export$e947a0f742cf021e.sub(B, A), t));
};
$34cd592413da99b6$export$e947a0f742cf021e.int = (A, B, from, to, s = 1)=>{
    const t = ($34cd592413da99b6$export$e947a0f742cf021e.clamp(from, to) - from) / (to - from);
    return $34cd592413da99b6$export$e947a0f742cf021e.add($34cd592413da99b6$export$e947a0f742cf021e.mul(A, 1 - t), $34cd592413da99b6$export$e947a0f742cf021e.mul(B, s));
};
$34cd592413da99b6$export$e947a0f742cf021e.ang3 = (p1, pc, p2)=>{
    // this,
    const v1 = $34cd592413da99b6$export$e947a0f742cf021e.vec(pc, p1);
    const v2 = $34cd592413da99b6$export$e947a0f742cf021e.vec(pc, p2);
    return $34cd592413da99b6$export$e947a0f742cf021e.ang(v1, v2);
};
$34cd592413da99b6$export$e947a0f742cf021e.abs = (A)=>{
    return [
        Math.abs(A[0]),
        Math.abs(A[1])
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.rescale = (a, n)=>{
    const l = $34cd592413da99b6$export$e947a0f742cf021e.len(a);
    return [
        n * a[0] / l,
        n * a[1] / l
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.isLeft = (p1, pc, p2)=>{
    //  isLeft: >0 for counterclockwise
    //          =0 for none (degenerate)
    //          <0 for clockwise
    return (pc[0] - p1[0]) * (p2[1] - p1[1]) - (p2[0] - p1[0]) * (pc[1] - p1[1]);
};
$34cd592413da99b6$export$e947a0f742cf021e.clockwise = (p1, pc, p2)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.isLeft(p1, pc, p2) > 0;
};
$34cd592413da99b6$export$e947a0f742cf021e.round = (a, d = 2)=>{
    return a.map((v)=>+v.toFixed(d)
    );
};
$34cd592413da99b6$export$e947a0f742cf021e.nearestPointOnLineThroughPoint = (A, u, P)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.add(A, $34cd592413da99b6$export$e947a0f742cf021e.mul(u, $34cd592413da99b6$export$e947a0f742cf021e.pry($34cd592413da99b6$export$e947a0f742cf021e.sub(P, A), u)));
};
$34cd592413da99b6$export$e947a0f742cf021e.distanceToLineThroughPoint = (A, u, P)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.dist(P, $34cd592413da99b6$export$e947a0f742cf021e.nearestPointOnLineThroughPoint(A, u, P));
};
$34cd592413da99b6$export$e947a0f742cf021e.nearestPointOnLineSegment = (A, B, P, clamp = true)=>{
    const u = $34cd592413da99b6$export$e947a0f742cf021e.uni($34cd592413da99b6$export$e947a0f742cf021e.sub(B, A));
    const C = $34cd592413da99b6$export$e947a0f742cf021e.add(A, $34cd592413da99b6$export$e947a0f742cf021e.mul(u, $34cd592413da99b6$export$e947a0f742cf021e.pry($34cd592413da99b6$export$e947a0f742cf021e.sub(P, A), u)));
    if (clamp) {
        if (C[0] < Math.min(A[0], B[0])) return A[0] < B[0] ? A : B;
        if (C[0] > Math.max(A[0], B[0])) return A[0] > B[0] ? A : B;
        if (C[1] < Math.min(A[1], B[1])) return A[1] < B[1] ? A : B;
        if (C[1] > Math.max(A[1], B[1])) return A[1] > B[1] ? A : B;
    }
    return C;
};
$34cd592413da99b6$export$e947a0f742cf021e.distanceToLineSegment = (A, B, P, clamp = true)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.dist(P, $34cd592413da99b6$export$e947a0f742cf021e.nearestPointOnLineSegment(A, B, P, clamp));
};
$34cd592413da99b6$export$e947a0f742cf021e.nudge = (A, B, d)=>{
    return $34cd592413da99b6$export$e947a0f742cf021e.add(A, $34cd592413da99b6$export$e947a0f742cf021e.mul($34cd592413da99b6$export$e947a0f742cf021e.uni($34cd592413da99b6$export$e947a0f742cf021e.sub(B, A)), d));
};
$34cd592413da99b6$export$e947a0f742cf021e.nudgeAtAngle = (A, a, d)=>{
    return [
        Math.cos(a) * d + A[0],
        Math.sin(a) * d + A[1]
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.toPrecision = (a, n = 4)=>{
    return [
        +a[0].toPrecision(n),
        +a[1].toPrecision(n)
    ];
};
$34cd592413da99b6$export$e947a0f742cf021e.pointsBetween = (A, B, steps = 6)=>{
    return Array.from(Array(steps)).map((_, i)=>{
        const t = i / (steps - 1);
        const k = Math.min(1, 0.5 + Math.abs(0.5 - t));
        return [
            ...$34cd592413da99b6$export$e947a0f742cf021e.lrp(A, B, t),
            k
        ];
    });
};
var $34cd592413da99b6$export$2e2bcd8739ae039 = $34cd592413da99b6$export$e947a0f742cf021e;


export {$34cd592413da99b6$export$e947a0f742cf021e as Vec, $34cd592413da99b6$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
