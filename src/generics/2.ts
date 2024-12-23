type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

function compare<K1 extends keyof AllType, K2 extends keyof AllType>(
    top: Pick<AllType, K1>,
    bottom: Pick<AllType, K2>
): AllType {
    return {
        name: top.name as string,
        color: top.color as string,
        position: bottom.position as number,
        weight: bottom.weight as number,
    };
}