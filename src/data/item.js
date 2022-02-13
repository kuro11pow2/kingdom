
class ICountable {
    constructor(name, krName, count) {
        this.name = name;
        this.krName = krName;
        this.count = count;
    }
    toString() {
        return "" + this.name + " " + this.count + "개"
    }
}


/**
 * @param name 아이템 이름
 * @param count 보유 개수
 * @param timeNeeded 생산 소요 시간
 * @param outCount 1회 생산량
 * @param materialArr 재료
 */
class IProducible extends ICountable {
    constructor(name, krName, count, timeNeeded, outCount, materialArr) {
        super(name, krName, count);
        this.timeNeeded = timeNeeded;
        this.outCount = outCount;
        this.materialArr = materialArr;
    }
    fullInfo() {
        return super.toString() + " (" + this.timeNeeded + "초 " + this.outCount + "개 [재료: " + this.materialArr + "])";
    }
}

/////////////  화폐  /////////////

class Coin extends ICountable {
    constructor(count) {
        super("Coin", "코인", count);
    }
}

class Crystal extends ICountable {
    constructor(count) {
        super("Crystal", "크리스탈", count);
    }
}


/////////////  수확물  /////////////

class RollCakeWood extends IProducible {
    constructor(count) {
        super("RollCakeWood", "롤케이크 나무조각", count, 30, 3, [new Coin(30)]);
    }
}

class JellyBean extends IProducible {
    constructor(count) {
        super("JellyBean", "젤리빈", count, 60, 3, [new Coin(50)]);
    }
}


/////////////  가공품  /////////////

class FirmAxe extends IProducible {
    constructor(count) {
        super("FirmAxe", "단단 도끼", count, 30, 1, [new RollCakeWood(2)]);
    }
}


/////////////  분류  /////////////

const Currency = {
    "Coin": Coin, 
    "Crystal": Crystal, 
}

const HarvestGoods = {
    "RollCakeWood": RollCakeWood ,
    "JellyBean": JellyBean,
    // "SugarCube": SugarCube,
    // "BiscuitPowder": BiscuitPowder,
    // "JellyBerry": JellyBerry,
    // "MilkyMilk": MilkyMilk,
    // "CottonCandyWool": CottonCandyWool,
}

const ProcessedGoods = {
    "FirmAxe": FirmAxe,
    // "SawingSaw": SawingSaw,
    // "ShovelingShovel": ShovelingShovel,
    // "MysteriousPretzelStake": MysteriousPretzelStake,
    // "BrightBlueCandyTongs": BrightBlueCandyTongs,
    // "UnchangingSugarCoatedHammer": UnchangingSugarCoatedHammer,
}

const ItemFactory = { 
    ...Currency,
    ...HarvestGoods,
    ...ProcessedGoods,
};

export { ItemFactory, ICountable, IProducible };