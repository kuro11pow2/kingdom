
class ICountable {
    constructor(name, krName, count) {
        this.name = name;
        this.krName = krName;
        this.count = count;
    }
    toString() {
        return "" + this.krName + " " + this.count + "개"
    }
}

class ICurrency extends ICountable {
    constructor(name, krName, count) {
        super(name, krName, count);
    }
}

/**
 *     1 : N
 * 
 * @param name 아이템 이름
 * @param count 보유 개수
 * @param timeRequired 생산 소요 시간
 * @param outCount 1회 생산량
 * @param materials 재료
 */
class IProducible extends ICountable {
    constructor(name, krName, count, deliveryScore, timeRequired, outCount, materials) {
        super(name, krName, count);
        this.deliveryScore = deliveryScore;
        this.timeRequired = timeRequired;
        this.outCount = outCount;
        this.materials = materials;
    }
    fullInfo() {
        return super.toString() + " (" + this.timeRequired + "초 " + this.outCount + "개 [재료: " + this.materials + "])";
    }
}
/**
 *     M : N
 * 
 * @param name 생산되는 집합 이름
 * @param krName 생산되는 집합 한글 이름
 * @param outputs 집합 원소
 * @param inputs 생산 재료
 */
 class IProducibleSet extends ICountable {
    constructor(name, krName, count, outputs, inputs) {
        super(name, krName, count);

        if (outputs[Symbol.iterator] === undefined)
            throw new Error("Outputs must be iterable");
        if (outputs.every((item => {item instanceof IProducible})))
            throw new Error("Outputs must be IProducible");
        if (inputs[Symbol.iterator] === undefined)
            throw new Error("inputs must be iterable");
        if (inputs.every((item => {item instanceof ICountable})))
            throw new Error("inputs must be ICountable");

        this.name = name;
        this.krName = krName;
        this.outputs = outputs;
        this.inputs = inputs;
    }
    fullInfo() {
        return super.toString() + " (" + this.inputs + " -> " + this.outputs + ")";
    }
}


/////////////  2차 분류  /////////////

class IHarvestGoods extends IProducible {
    constructor(name, krName, count, deliveryScore, timeRequired, outCount, materials) {
        super(name, krName, count, deliveryScore, timeRequired, outCount, materials);
    }
}

class ITools extends IProducible {
    constructor(name, krName, count, deliveryScore, timeRequired, outCount, materials) {
        super(name, krName, count, deliveryScore, timeRequired, outCount, materials);
    }
}

class IProcessedGoods extends IProducible {
    constructor(name, krName, count, deliveryScore, timeRequired, outCount, materials) {
        super(name, krName, count, deliveryScore, timeRequired, outCount, materials);
    }
}

class ICashPackage extends IProducibleSet {
    constructor(name, krName, count, outputs, inputs) {
        super(name, krName, count, outputs, inputs);
    }
}


export { ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage };