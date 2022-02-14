
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

class IHarvestGoods extends IProducible {
    constructor(name, krName, count, timeNeeded, outCount, materialArr) {
        super(name, krName, count, timeNeeded, outCount, materialArr);
    }
}
class IProcessedGoods extends IProducible {
    constructor(name, krName, count, timeNeeded, outCount, materialArr) {
        super(name, krName, count, timeNeeded, outCount, materialArr);
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

class RollCakeWood extends IHarvestGoods {
    constructor(count) {
        super("RollCakeWood", "롤케이크 나무조각", count, 30, 3, [new Coin(30)]);
    }
}

class JellyBean extends IHarvestGoods {
    constructor(count) {
        super("JellyBean", "젤리빈", count, 60, 3, [new Coin(50)]);
    }
}

class SugarCubePiece extends IHarvestGoods {
    constructor(count) {
        super("SugarCubePiece", "각설탕 조각", count, 90, 3, [new Coin(80)])
    }
}

class BiscuitPowder extends IHarvestGoods {
    constructor(count) {
        super("BiscuitPowder", "비스킷 가루", count, 10*60, 3, [new Coin(200)])
    }
}

class JellyBerry extends IHarvestGoods {
    constructor(count) {
        super("JellyBean", "젤리베리", count, 18*60, 2, [new Coin(500)])
    }
}

class MilkyMilk extends IHarvestGoods {
    constructor(count) {
        super("MilkyMilk", "밀키 우유", count, 28*60, 2, [new Coin(700)])
    }
}

class CottonCandyWool extends IHarvestGoods {
    constructor(count) {
        super("CottonCandyWool", "솜사탕 양털", count, 90*60, 1, [new Coin(1000)])
    }
}

/////////////  가공품  /////////////

class FirmAxe extends IProducible {
    constructor(count) {
        super("FirmAxe", "단단 도끼", count, 30, 1, [new RollCakeWood(2)]);
    }
}
class StrongPickaxe extends IProducible {
    constructor(count) {
        super("StrongPickaxe", "튼튼 곡괭이", count, 3*60, 1, [new RollCakeWood(3), new SugarCubePiece(3)]);
    }
}
class SawingSaw extends IProducible {
    constructor(count) {
        super("SawingSaw", "슥삭슥삭 톱", count, 7*60, 1, [new RollCakeWood(6), new SugarCubePiece(5)]);
    }
}
class ShovelingShovel extends IProducible {
    constructor(count) {
        super("ShovelingShovel", "푹푹 삽", count, 15*60, 1, [new RollCakeWood(10), new SugarCubePiece(10)]);
    }
}
class MysteriousPretzelStake extends IProducible {
    constructor(count) {
        super("MysteriousPretzelStake", "신비한 프레첼 말뚝", count, 60*60, 1, [new RollCakeWood(15), new SugarCubePiece(15)]);
    }
}
class BrightBlueCandyTongs extends IProducible {
    constructor(count) {
        super("BrightBlueCandyTongs", "영롱한 푸른사탕 집게", count, 3*60*60, 1, [new RollCakeWood(22), new SugarCubePiece(18)]);
    }
}
class UnchangingSugarCoatedHammer extends IProducible {
    constructor(count) {
        super("UnchangingSugarCoatedHammer", "불변의 슈가 코팅 망치", count, 6*60*60, 1, [new RollCakeWood(30), new SugarCubePiece(35)]);
    }
}




class JellyBeanJam extends IProducible {
    constructor(count) {
        super("JellyBeanJam", "젤리빈 잼", count, 90, 1, [new JellyBean(3)]);
    }
}
class SweetJellyJam extends IProducible {
    constructor(count) {
        super("SweetJellyJam", "스윗젤리 잼", count, 8*60, 1, [new JellyBean(6)]);
    }
}
class DalgonaJam extends IProducible {
    constructor(count) {
        super("DalgonaJam", "젤리빈 잼", count, 20*60, 1, [new JellyBean(6), new JellyBerry(1)]);
    }
}
class PomegranateJam extends IProducible {
    constructor(count) {
        super("PomegranateJam", "석류 잼", count, 2*60*60, 1, [new CottonCandyWool(1), new JellyBeanLatte(1)]);
    }
}
class TokTokBerryJam extends IProducible {
    constructor(count) {
        super("TokTokBerryJam", "톡톡베리 잼", count, 6*60*60, 1, [new JellyBean(20), new CottonCandyWool(3)]);
    }
}




class PineConeBirdDoll extends IProducible {
    constructor(count) {
        super("PineConeBirdDoll", "솔방울새 인형", count, 5*60, 1, [new RollCakeWood(6)]);
    }
}
class AcornLamp extends IProducible {
    constructor(count) {
        super("AcornLamp", "도토리 램프", count, 22*60, 1, [new RollCakeWood(12), new JellyBerry(3)]);
    }
}
class CuckooCuckooClock extends IProducible {
    constructor(count) {
        super("CuckooCuckooClock", "뻐꾹뻐꾹 시계", count, 2*60*60, 1, [new BiscuitPowder(8), new DalgonaJam(3)]);
    }
}
class SwanFeatherDreamcatcher extends IProducible {
    constructor(count) {
        super("SwanFeatherDreamcatcher", "백조깃털 드림캐처", count, 3.5*60*60, 1, [new RollCakeWood(6)]);
    }
}




class JellyBeanLatte extends IProducible {
    constructor(count) {
        super("JellyBeanLatte", "젤리빈 라떼", count, 60*60, 1, [new JellyBean(12), new MilkyMilk(2)]);
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
    "SugarCubePiece": SugarCubePiece,
    "BiscuitPowder": BiscuitPowder,
    "JellyBerry": JellyBerry,
    "MilkyMilk": MilkyMilk,
    "CottonCandyWool": CottonCandyWool,
}

const ProcessedGoods = {
    "FirmAxe": FirmAxe,
    "StrongPickaxe": StrongPickaxe,
    "SawingSaw": SawingSaw,
    "ShovelingShovel": ShovelingShovel,
    "MysteriousPretzelStake": MysteriousPretzelStake,
    "BrightBlueCandyTongs": BrightBlueCandyTongs,
    "UnchangingSugarCoatedHammer": UnchangingSugarCoatedHammer,

    "JellyBeanJam": JellyBeanJam,
    "SweetJellyJam": SweetJellyJam,
    "DalgonaJam": DalgonaJam,
    "PomegranateJam": PomegranateJam,
    "TokTokBerryJam": TokTokBerryJam,

    "PineConeBirdDoll": PineConeBirdDoll,
    "AcornLamp": AcornLamp,
    "CuckooCuckooClock": CuckooCuckooClock,
    "SwanFeatherDreamcatcher": SwanFeatherDreamcatcher,

    "JellyBeanLatte": JellyBeanLatte,
}

const ItemFactory = { 
    ...Currency,
    ...HarvestGoods,
    ...ProcessedGoods,
};

export { ItemFactory, ICountable, IProducible, IHarvestGoods, IProcessedGoods };