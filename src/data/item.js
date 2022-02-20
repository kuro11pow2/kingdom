
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
 * @param timeRequired 생산 소요 시간
 * @param outCount 1회 생산량
 * @param materials 재료
 */
class IProducible extends ICountable {
    constructor(name, krName, count, timeRequired, outCount, materials) {
        super(name, krName, count);
        this.timeRequired = timeRequired;
        this.outCount = outCount;
        this.materials = materials;
    }
    fullInfo() {
        return super.toString() + " (" + this.timeRequired + "초 " + this.outCount + "개 [재료: " + this.materials + "])";
    }
}

class IHarvestGoods extends IProducible {
    constructor(name, krName, count, timeRequired, outCount, materials) {
        super(name, krName, count, timeRequired, outCount, materials);
    }
}
class IProcessedGoods extends IProducible {
    constructor(name, krName, count, timeRequired, outCount, materials) {
        super(name, krName, count, timeRequired, outCount, materials);
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
        super("RollCakeWood", "롤케이크 나무조각", count, 30, 3, new Array(new Coin(30)));
    }
}

class JellyBean extends IHarvestGoods {
    constructor(count) {
        super("JellyBean", "젤리빈", count, 60, 3, new Array(new Coin(50)));
    }
}

class SugarCubePiece extends IHarvestGoods {
    constructor(count) {
        super("SugarCubePiece", "각설탕 조각", count, 90, 3, new Array(new Coin(80)));
    }
}

class BiscuitPowder extends IHarvestGoods {
    constructor(count) {
        super("BiscuitPowder", "비스킷 가루", count, 10 * 60, 3, new Array(new Coin(200)));
    }
}

class JellyBerry extends IHarvestGoods {
    constructor(count) {
        super("JellyBerry", "젤리베리", count, 18 * 60, 2, new Array(new Coin(500)));
    }
}

class MilkyMilk extends IHarvestGoods {
    constructor(count) {
        super("MilkyMilk", "밀키 우유", count, 28 * 60, 2, new Array(new Coin(700)));
    }
}

class CottonCandyWool extends IHarvestGoods {
    constructor(count) {
        super("CottonCandyWool", "솜사탕 양털", count, 90 * 60, 1, new Array(new Coin(1000)));
    }
}


/////////////  가공품  /////////////

// 뚝딱 대장간

class FirmAxe extends IProducible {
    constructor(count) {
        super("FirmAxe", "단단 도끼", count, 30, 1, new Array(new RollCakeWood(2)));
    }
}
class StrongPickaxe extends IProducible {
    constructor(count) {
        super("StrongPickaxe", "튼튼 곡괭이", count, 3 * 60, 1, new Array(new RollCakeWood(3), new SugarCubePiece(3)));
    }
}
class SawingSaw extends IProducible {
    constructor(count) {
        super("SawingSaw", "슥삭슥삭 톱", count, 7 * 60, 1, new Array(new RollCakeWood(6), new SugarCubePiece(5)));
    }
}
class ShovelingShovel extends IProducible {
    constructor(count) {
        super("ShovelingShovel", "푹푹 삽", count, 15 * 60, 1, new Array(new RollCakeWood(10), new SugarCubePiece(10)));
    }
}
class MysteriousPretzelStake extends IProducible {
    constructor(count) {
        super("MysteriousPretzelStake", "신비한 프레첼 말뚝", count, 60 * 60, 1, new Array(new RollCakeWood(15), new SugarCubePiece(15)));
    }
}
class BrightBlueCandyTongs extends IProducible {
    constructor(count) {
        super("BrightBlueCandyTongs", "영롱한 푸른사탕 집게", count, 3 * 60 * 60, 1, new Array(new RollCakeWood(22), new SugarCubePiece(18)));
    }
}
class UnchangingSugarCoatedHammer extends IProducible {
    constructor(count) {
        super("UnchangingSugarCoatedHammer", "불변의 슈가 코팅 망치", count, 6 * 60 * 60, 1, new Array(new RollCakeWood(30), new SugarCubePiece(35)));
    }
}


// 설탕몽땅 잼가게

class JellyBeanJam extends IProducible {
    constructor(count) {
        super("JellyBeanJam", "젤리빈 잼", count, 90, 1, new Array(new JellyBean(3)));
    }
}
class SweetJellyJam extends IProducible {
    constructor(count) {
        super("SweetJellyJam", "스윗젤리 잼", count, 8 * 60, 1, new Array(new JellyBean(6)));
    }
}
class DalgonaJam extends IProducible {
    constructor(count) {
        super("DalgonaJam", "달고나 잼", count, 20 * 60, 1, new Array(new JellyBean(6), new JellyBerry(1)));
    }
}
class PomegranateJam extends IProducible {
    constructor(count) {
        super("PomegranateJam", "석류 잼", count, 2 * 60 * 60, 1, new Array(new CottonCandyWool(1), new JellyBeanLatte(1)));
    }
}
class TokTokBerryJam extends IProducible {
    constructor(count) {
        super("TokTokBerryJam", "톡톡베리 잼", count, 6 * 60 * 60, 1, new Array(new JellyBean(20), new CottonCandyWool(3)));
    }
}



// 롤케이크 공작소

class PineConeBirdDoll extends IProducible {
    constructor(count) {
        super("PineConeBirdDoll", "솔방울새 인형", count, 5 * 60, 1, new Array(new RollCakeWood(6)));
    }
}
class AcornLamp extends IProducible {
    constructor(count) {
        super("AcornLamp", "도토리 램프", count, 22 * 60, 1, new Array(new RollCakeWood(12), new JellyBerry(3)));
    }
}
class CuckooCuckooClock extends IProducible {
    constructor(count) {
        super("CuckooCuckooClock", "뻐꾹뻐꾹 시계", count, 2 * 60 * 60, 1, new Array(new BiscuitPowder(8), new DalgonaJam(3)));
    }
}
class SwanFeatherDreamcatcher extends IProducible {
    constructor(count) {
        super("SwanFeatherDreamcatcher", "백조깃털 드림캐처", count, 3.5 * 60 * 60, 1, new Array(new CottonCandyWool(6), new SoftOmurice(1)));
    }
}


// 갓 구운 빵집
class ReliableRyeBread extends IProducible {
    constructor(count) {
        super("ReliableRyeBread", "든든한 호밀빵", count, 12 * 60, 1, new Array(new JellyBeanJam(1), new BiscuitPowder(2)));
    }
}
class SweetAndChewyJamPie extends IProducible {
    constructor(count) {
        super("SweetAndChewyJamPie", "달콤쫀득 잼파이", count, 20 * 60, 1, new Array(new JellyBean(6), new BiscuitPowder(3)));
    }
}
class GinkgoPocachia extends IProducible {
    constructor(count) {
        super("GinkgoPocachia", "은행 포카치아", count, 30 * 60, 1, new Array(new BiscuitPowder(6), new AcornLamp(1)));
    }
}
class SugarCoatedDonut extends IProducible {
    constructor(count) {
        super("SugarCoatedDonut", "슈가코팅 도넛", count, 60 * 60, 1, new Array(new BiscuitPowder(5), new TwinklingGlassPlate(1)));
    }
}
class SoftCastella extends IProducible {
    constructor(count) {
        super("SoftCastella", "폭신 카스테라", count, 3 * 60 * 60, 1, new Array(new SugarCubePiece(20), new MilkyMilk(8)));
    }
}
class GoldrichCroissant extends IProducible {
    constructor(count) {
        super("GoldrichCroissant", "골드리치 크로와상", count, 6 * 60 * 60, 1, new Array(new MilkyMilk(15), new Butter(1)));
    }
}


// 잼파이 레스토랑
class HotJellyStew extends IProducible {
    constructor(count) {
        super("HotJellyStew", "따끈따끈 젤리스튜", count, 18 * 60, 1, new Array(new JellyBean(4), new JellyBerry(1)));
    }
}
class GummyBearBurger extends IProducible {
    constructor(count) {
        super("GummyBearBurger", "곰젤리 버거", count, 22 * 60, 1, new Array(new JellyBean(10), new SweetAndChewyJamPie(1)));
    }
}
class CandyCreamPasta extends IProducible {
    constructor(count) {
        super("CandyCreamPasta", "캔디크림 파스타", count, 50 * 60, 1, new Array(new BiscuitPowder(7), new Cream(1)));
    }
}
class SoftOmurice extends IProducible {
    constructor(count) {
        super("SoftOmurice", "폭신폭신 오므라이스", count, 1.5 * 60 * 60, 1, new Array(new JellyBerry(6), new GinkgoPocachia(1)));
    }
}
class CombinationPizzaJelly extends IProducible {
    constructor(count) {
        super("CombinationPizzaJelly", "콤비네이션 피자젤리", count, 3.5 * 60 * 60, 1, new Array(new JellyBerry(8), new CandyFlower(4)));
    }
}
class LuxuriousJellyBeanSetMenu extends IProducible {
    constructor(count) {
        super("LuxuriousJellyBeanSetMenu", "고급스러운 젤리빈 정식", count, 7 * 60 * 60, 1, new Array(new JellyBean(25), new LollipopFlowerBasket(3)));
    }
}

// 토닥토닥 도예공방
class BiscuitPlantPot extends IProducible {
    constructor(count) {
        super("BiscuitPlantPot", "비스킷 화분", count, 15 * 60, 1, new Array(new PineConeBirdDoll(2), new BiscuitPowder(4)));
    }
}
class TwinklingGlassPlate extends IProducible {
    constructor(count) {
        super("TwinklingGlassPlate", "반짝반짝 유리판", count, 27 * 60, 1, new Array(new SugarCubePiece(12), new HotJellyStew(1)));
    }
}
class GlitteringSaekdongBeads extends IProducible {
    constructor(count) {
        super("GlitteringSaekdongBeads", "반짝이는 색동구슬", count, 2 * 60 * 60, 1, new Array(new GummyBearBurger(1), new CottonCandyWool(1)));
    }
}
class RainbowDessertBowl extends IProducible {
    constructor(count) {
        super("RainbowDessertBowl", "무지갯빛 디저트 보울", count, 5 * 60 * 60, 1, new Array(new SugarCubePiece(24), new PomegranateJam(2)));
    }
}


// 행복한 꽃가게
class CandyFlower extends IProducible {
    constructor(count) {
        super("CandyFlower", "캔디꽃", count, 20 * 60, 1, new Array(new JellyBerry(2), new BiscuitPlantPot(1)));
    }
}
class HappyFlowerPot extends IProducible {
    constructor(count) {
        super("HappyFlowerPot", "행복한 꽃화분", count, 20 * 60, 1, new Array(new JellyBerry(4), new SugarCubePiece(10)));
    }
}
class CandyFlowerBouquet extends IProducible {
    constructor(count) {
        super("CandyFlowerBouquet", "캔디꽃다발", count, 60 * 60, 1, new Array(new JellyBerry(5), new CandyCreamPasta(1)));
    }
}
class LollipopFlowerBasket extends IProducible {
    constructor(count) {
        super("LollipopFlowerBasket", "롤리팝 꽃바구니", count, 2.5 * 60 * 60, 1, new Array(new JellyBean(18), new ReliableRyeBread(3)));
    }
}
class GlassFlowerBouquet extends IProducible {
    constructor(count) {
        super("GlassFlowerBouquet", "유리꽃 부케", count, 4.5 * 60 * 60, 1, new Array(new JellyBean(20), new CloudCandyCushion(2)));
    }
}
class BrilliantYogurtWreath extends IProducible {
    constructor(count) {
        super("BrilliantYogurtWreath", "찬란한 요거트 화환", count, 7.5 * 60 * 60, 1, new Array(new JellyBean(30), new CombinationPizzaJelly(2)));
    }
}



// 밀키 우유 가공소
class Cream extends IProducible {
    constructor(count) {
        super("Cream", "크림", count, 29 * 60, 1, new Array(new SweetJellyJam(1), new MilkyMilk(2)));
    }
}
class Butter extends IProducible {
    constructor(count) {
        super("Butter", "버터", count, 2.5 * 60 * 60, 1, new Array(new SugarCubePiece(15), new MilkyMilk(5)));
    }
}
class HandmadeCheese extends IProducible {
    constructor(count) {
        super("HandmadeCheese", "수제 치즈", count, 4.5 * 60 * 60, 1, new Array(new MilkyMilk(10), new CuckooCuckooClock(1)));
    }
}

// 카페 라떼

class JellyBeanLatte extends IProducible {
    constructor(count) {
        super("JellyBeanLatte", "젤리빈 라떼", count, 60 * 60, 1, new Array(new JellyBean(12), new MilkyMilk(2)));
    }
}
class SoftAndFuzzyBubbleTea extends IProducible {
    constructor(count) {
        super("SoftAndFuzzyBubbleTea", "몽글몽글 버블티", count, 3 * 60 * 60, 1, new Array(new CottonCandyWool(1), new SugarCoatedDonut(1)));
    }
}
class SweetBerryAde extends IProducible {
    constructor(count) {
        super("SweetBerryAde", "스윗베리 에이드", count, 6.5 * 60 * 60, 1, new Array(new JellyBerry(10), new GlitteringSaekdongBeads(2)));
    }
}



// 러블리 인형공방
class CloudCandyCushion extends IProducible {
    constructor(count) {
        super("CloudCandyCushion", "구름사탕 쿠션", count, 1.5 * 60 * 60, 1, new Array(new BiscuitPowder(8), new CottonCandyWool(1)));
    }
}
class GummyBearCottonDoll extends IProducible {
    constructor(count) {
        super("GummyBearCottonDoll", "곰젤리 솜인형", count, 4 * 60 * 60, 1, new Array(new CandyFlowerBouquet(2), new CottonCandyWool(1)));
    }
}
class DragonFruitCottonDoll extends IProducible {
    constructor(count) {
        super("DragonFruitCottonDoll", "용과 드래곤 솜인형", count, 7 * 60 * 60, 1, new Array(new CottonCandyWool(2), new CreamRootBeer(2)));
    }
}

// 오크통 쉽터
class CreamRootBeer extends IProducible {
    constructor(count) {
        super("CreamRootBeer", "크림 루트비어", count, 2.5 * 60 * 60, 1, new Array(new BiscuitPowder(10), new HappyFlowerPot(1)));
    }
}
class RedBerryJuice extends IProducible {
    constructor(count) {
        super("RedBerryJuice", "레드베리 주스", count, 6.5 * 60 * 60, 1, new Array(new JellyBerry(12), new GummyBearCottonDoll(1)));
    }
}
class VintageWildBottle extends IProducible {
    constructor(count) {
        super("VintageWildBottle", "빈티지 와일드 보틀", count, 8 * 60 * 60, 1, new Array(new RollCakeWood(50), new SpookyMuffin(2)));
    }
}

// 퐁 드 파티세리
class SpookyMuffin extends IProducible {
    constructor(count) {
        super("SpookyMuffin", "으스스 머핀", count, 3.5 * 60 * 60, 1, new Array(new BiscuitPowder(12), new MilkyMilk(7)));
    }
}
class FreshStrawberryCake extends IProducible {
    constructor(count) {
        super("FreshStrawberryCake", "생딸기 케이크", count, 6 * 60 * 60, 1, new Array(new BiscuitPowder(14), new SoftAndFuzzyBubbleTea(2)));
    }
}
class PartyPartyChiffonCake extends IProducible {
    constructor(count) {
        super("PartyPartyChiffonCake", "파티파티 쉬폰케이크", count, 8 * 60 * 60, 1, new Array(new BiscuitPowder(18), new HandmadeCheese(2)));
    }
}

// 살롱 드 쥬얼리
class GlazedRing extends IProducible {
    constructor(count) {
        super("GlazedRing", "글레이즈드 링", count, 5 * 60 * 60, 1, new Array(new BiscuitPowder(12), new SoftCastella(1)));
    }
}
class RubyBerryBrooch extends IProducible {
    constructor(count) {
        super("RubyBerryBrooch", "루비베리 브로치", count, 7.5 * 60 * 60, 1, new Array(new JellyBerry(16), new SwanFeatherDreamcatcher(1)));
    }
}
class RoyalGummyBearCrown extends IProducible {
    constructor(count) {
        super("RoyalGummyBearCrown", "로얄 곰젤리 크라운", count, 8 * 60 * 60, 1, new Array(new CottonCandyWool(3), new GlassFlowerBouquet(1)));
    }
}

/////////////  분류  /////////////

const Currency = {
    "Coin": Coin,
    "Crystal": Crystal,
}

const HarvestGoods = {
    "RollCakeWood": RollCakeWood,
    "JellyBean": JellyBean,
    "SugarCubePiece": SugarCubePiece,
    "BiscuitPowder": BiscuitPowder,
    "JellyBerry": JellyBerry,
    "MilkyMilk": MilkyMilk,
    "CottonCandyWool": CottonCandyWool,
}

const ProcessedGoods = {
    // 뚝딱 대장간
    "FirmAxe": FirmAxe,
    "StrongPickaxe": StrongPickaxe,
    "SawingSaw": SawingSaw,
    "ShovelingShovel": ShovelingShovel,
    "MysteriousPretzelStake": MysteriousPretzelStake,
    "BrightBlueCandyTongs": BrightBlueCandyTongs,
    "UnchangingSugarCoatedHammer": UnchangingSugarCoatedHammer,

    // 설탕몽땅 잼가게
    "JellyBeanJam": JellyBeanJam,
    "SweetJellyJam": SweetJellyJam,
    "DalgonaJam": DalgonaJam,
    "PomegranateJam": PomegranateJam,
    "TokTokBerryJam": TokTokBerryJam,

    // 롤케이크 공작소
    "PineConeBirdDoll": PineConeBirdDoll,
    "AcornLamp": AcornLamp,
    "CuckooCuckooClock": CuckooCuckooClock,
    "SwanFeatherDreamcatcher": SwanFeatherDreamcatcher,

    // 갓 구운 빵집
    "ReliableRyeBread": ReliableRyeBread,
    "SweetAndChewyJamPie": SweetAndChewyJamPie,
    "GinkgoPocachia": GinkgoPocachia,
    "SugarCoatedDonut": SugarCoatedDonut,
    "SoftCastella": SoftCastella,
    "GoldrichCroissant": GoldrichCroissant,

    // 잼파이 레스토랑
    "HotJellyStew": HotJellyStew,
    "GummyBearBurger": GummyBearBurger,
    "CandyCreamPasta": CandyCreamPasta,
    "SoftOmurice": SoftOmurice,
    "CombinationPizzaJelly": CombinationPizzaJelly,
    "LuxuriousJellyBeanSetMenu": LuxuriousJellyBeanSetMenu,

    // 토닥토닥 도예공방
    "BiscuitPlantPot": BiscuitPlantPot,
    "TwinklingGlassPlate": TwinklingGlassPlate,
    "GlitteringSaekdongBeads": GlitteringSaekdongBeads,
    "RainbowDessertBowl": RainbowDessertBowl,

    // 행복한 꽃가게
    "CandyFlower": CandyFlower,
    "HappyFlowerPot": HappyFlowerPot,
    "CandyFlowerBouquet": CandyFlowerBouquet,
    "LollipopFlowerBasket": LollipopFlowerBasket,
    "GlassFlowerBouquet": GlassFlowerBouquet,
    "BrilliantYogurtWreath": BrilliantYogurtWreath,

    // 밀키 우유 가공소
    "Cream": Cream,
    "Butter": Butter,
    "HandmadeCheese": HandmadeCheese,

    // 카페 라떼
    "JellyBeanLatte": JellyBeanLatte,
    "SoftAndFuzzyBubbleTea": SoftAndFuzzyBubbleTea,
    "SweetBerryAde": SweetBerryAde,

    // 러블리 인형공방
    "CloudCandyCushion": CloudCandyCushion,
    "GummyBearCottonDoll": GummyBearCottonDoll,
    "DragonFruitCottonDoll": DragonFruitCottonDoll,

    // 오크통 쉽터
    "CreamRootBeer": CreamRootBeer,
    "RedBerryJuice": RedBerryJuice,
    "VintageWildBottle": VintageWildBottle,

    // 퐁 드 파티세리
    "SpookyMuffin": SpookyMuffin,
    "FreshStrawberryCake": FreshStrawberryCake,
    "PartyPartyChiffonCake": PartyPartyChiffonCake,

    // 살롱 드 쥬얼리
    "GlazedRing": GlazedRing,
    "RubyBerryBrooch": RubyBerryBrooch,
    "RoyalGummyBearCrown": RoyalGummyBearCrown,
}

const ItemFactory = {
    ...Currency,
    ...HarvestGoods,
    ...ProcessedGoods,
};

(function SetProducibles() {
    let tree = new Map();
    let items = Object.values(ItemFactory).map((cls) => new cls(0));
    for (let item of items.values()) {
        if (item instanceof IProducible == false) {
            continue;
        }
        for (let material of item.materials) {

            if (!tree.has(material.name)) {
                tree.set(material.name, new Set());
            }
            
            tree.set(material.name, tree.get(material.name).add(item.name));
        }
    }
    tree.forEach((v, k, m) => {
        ItemFactory[k].prototype.producibles = v;
    })
})();

(function SetOrder() {
    let order = new Map();
    
    function dfs(node, depth) {
        if (order.has(node)) {
            depth = Math.max(depth, order.get(node));
        }
        order.set(node, depth);
        if (ItemFactory[node].prototype.producibles == undefined) {
            return;
        }
        for (let child of ItemFactory[node].prototype.producibles) {
            dfs(child, depth+1);
        }
    }
    dfs("Coin", 0);
    dfs("Crystal", 0);

    order.forEach((v, k, m) => {
        ItemFactory[k].prototype.order = v;
    })
})();

export { ItemFactory, ICountable, IProducible, IHarvestGoods, IProcessedGoods };