export class Chart {
    id?: number;
    cols: Col[];
    rows: Row[];
}

export class Col {
    id?: number;
    type: string;
    label: string;
}

export class Row {
    id?: number;
    month: string;
    point1: number;
    point2: number;
    point3: number;
}