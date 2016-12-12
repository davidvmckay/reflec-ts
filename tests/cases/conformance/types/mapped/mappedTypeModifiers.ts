// @strictNullChecks: true

type T = { a: number, b: string };
type TP = { a?: number, b?: string };
type TR = { readonly a: number, readonly b: string };
type TPR = { readonly a?: number, readonly b?: string };

var v00: "a" | "b";
var v00: keyof T;
var v00: keyof TP;
var v00: keyof TR;
var v00: keyof TPR;

var v01: T;
var v01: { [P in keyof T]: T[P] };
var v01: Pick<T, keyof T>;
var v01: Pick<Pick<T, keyof T>, keyof T>;

var v02: TP;
var v02: { [P in keyof T]?: T[P] };
var v02: Partial<T>;
var v02: Pick<TP, keyof T>;

var v03: TR;
var v03: { readonly [P in keyof T]: T[P] };
var v03: Readonly<T>;
var v03: Pick<TR, keyof T>;

var v04: TPR;
var v04: { readonly [P in keyof T]?: T[P] };
var v04: Partial<TR>;
var v04: Readonly<TP>;
var v04: Partial<Readonly<T>>;
var v04: Readonly<Partial<T>>;
var v04: Pick<TPR, keyof T>;

type Boxified<T> = { [P in keyof T]: { x: T[P] } };

type B = { a: { x: number }, b: { x: string } };
type BP = { a?: { x: number }, b?: { x: string } };
type BR = { readonly a: { x: number }, readonly b: { x: string } };
type BPR = { readonly a?: { x: number }, readonly b?: { x: string } };

var b00: "a" | "b";
var b00: keyof B;
var b00: keyof BP;
var b00: keyof BR;
var b00: keyof BPR;

var b01: B;
var b01: { [P in keyof B]: B[P] };
var b01: Pick<B, keyof B>;
var b01: Pick<Pick<B, keyof B>, keyof B>;

var b02: BP;
var b02: { [P in keyof B]?: B[P] };
var b02: Partial<B>;
var b02: Pick<BP, keyof B>;

var b03: BR;
var b03: { readonly [P in keyof B]: B[P] };
var b03: Readonly<B>;
var b03: Pick<BR, keyof B>;

var b04: BPR;
var b04: { readonly [P in keyof B]?: B[P] };
var b04: Partial<BR>;
var b04: Readonly<BP>;
var b04: Partial<Readonly<B>>;
var b04: Readonly<Partial<B>>;
var b04: Pick<BPR, keyof B>;