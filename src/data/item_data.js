import { ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage } from "./item_interface.js";



/////////////  화폐  /////////////

class Won extends ICurrency {
    constructor(count) {
        super("Won", "원화", count);
    }
}

class Coin extends ICurrency {
    constructor(count) {
        super("Coin", "코인", count);
    }
}

class Crystal extends ICurrency {
    constructor(count) {
        super("Crystal", "크리스탈", count);
    }
}


/////////////  수확물  /////////////

class RollCakeWood extends IHarvestGoods {
    constructor(count) {
        super("RollCakeWood", "롤케이크 나무조각", count, 1, 30, 3, new Array(new Coin(30)));
    }
}

class JellyBean extends IHarvestGoods {
    constructor(count) {
        super("JellyBean", "젤리빈", count, 2, 60, 3, new Array(new Coin(50)));
    }
}

class SugarCubePiece extends IHarvestGoods {
    constructor(count) {
        super("SugarCubePiece", "각설탕 조각", count, 3, 90, 3, new Array(new Coin(80)));
    }
}

class BiscuitPowder extends IHarvestGoods {
    constructor(count) {
        super("BiscuitPowder", "비스킷 가루", count, 21, 10 * 60, 3, new Array(new Coin(200)));
    }
}

class JellyBerry extends IHarvestGoods {
    constructor(count) {
        super("JellyBerry", "젤리베리", count, 58, 18 * 60, 2, new Array(new Coin(500)));
    }
}

class MilkyMilk extends IHarvestGoods {
    constructor(count) {
        super("MilkyMilk", "밀키 우유", count, 95, 28 * 60, 2, new Array(new Coin(700)));
    }
}

class CottonCandyWool extends IHarvestGoods {
    constructor(count) {
        super("CottonCandyWool", "솜사탕 양털", count, 633, 90 * 60, 1, new Array(new Coin(1000)));
    }
}


/////////////  도구  /////////////

// 뚝딱 대장간

class FirmAxe extends ITools {
    constructor(count) {
        super("FirmAxe", "단단 도끼", count, 5, 30, 1, new Array(new RollCakeWood(2)));
    }
}
class StrongPickaxe extends ITools {
    constructor(count) {
        super("StrongPickaxe", "튼튼 곡괭이", count, 31, 3 * 60, 1, new Array(new RollCakeWood(3), new SugarCubePiece(3)));
    }
}
class SawingSaw extends ITools {
    constructor(count) {
        super("SawingSaw", "슥삭슥삭 톱", count, 66, 7 * 60, 1, new Array(new RollCakeWood(6), new SugarCubePiece(5)));
    }
}
class ShovelingShovel extends ITools {
    constructor(count) {
        super("ShovelingShovel", "푹푹 삽", count, 138, 15 * 60, 1, new Array(new RollCakeWood(10), new SugarCubePiece(10)));
    }
}
class MysteriousPretzelStake extends ITools {
    constructor(count) {
        super("MysteriousPretzelStake", "신비한 프레첼 말뚝", count, 473, 60 * 60, 1, new Array(new RollCakeWood(15), new SugarCubePiece(15)));
    }
}
class BrightBlueCandyTongs extends ITools {
    constructor(count) {
        super("BrightBlueCandyTongs", "영롱한 푸른사탕 집게", count, 1382, 3 * 60 * 60, 1, new Array(new RollCakeWood(22), new SugarCubePiece(18)));
    }
}
class UnchangingSugarCoatedHammer extends ITools {
    constructor(count) {
        super("UnchangingSugarCoatedHammer", "불변의 슈가 코팅 망치", count, 2854, 6 * 60 * 60, 1, new Array(new RollCakeWood(30), new SugarCubePiece(35)));
    }
}



/////////////  가공품  /////////////

// 설탕몽땅 잼가게

class JellyBeanJam extends IProcessedGoods {
    constructor(count) {
        super("JellyBeanJam", "젤리빈 잼", count, 15, 90, 1, new Array(new JellyBean(3)));
    }
}
class SweetJellyJam extends IProcessedGoods {
    constructor(count) {
        super("SweetJellyJam", "스윗젤리 잼", count, 62, 8 * 60, 1, new Array(new JellyBean(6)));
    }
}
class DalgonaJam extends IProcessedGoods {
    constructor(count) {
        super("DalgonaJam", "달고나 잼", count, 205, 20 * 60, 1, new Array(new JellyBean(6), new JellyBerry(1)));
    }
}
class PomegranateJam extends IProcessedGoods {
    constructor(count) {
        super("PomegranateJam", "석류 잼", count, 2123, 2 * 60 * 60, 1, new Array(new CottonCandyWool(1), new JellyBeanLatte(1)));
    }
}
class TokTokBerryJam extends IProcessedGoods {
    constructor(count) {
        super("TokTokBerryJam", "톡톡베리 잼", count, 4750, 6 * 60 * 60, 1, new Array(new JellyBean(20), new CottonCandyWool(3)));
    }
}



// 롤케이크 공작소

class PineConeBirdDoll extends IProcessedGoods {
    constructor(count) {
        super("PineConeBirdDoll", "솔방울새 인형", count, 37, 5 * 60, 1, new Array(new RollCakeWood(6)));
    }
}
class AcornLamp extends IProcessedGoods {
    constructor(count) {
        super("AcornLamp", "도토리 램프", count, 338, 22 * 60, 1, new Array(new RollCakeWood(12), new JellyBerry(3)));
    }
}
class CuckooCuckooClock extends IProcessedGoods {
    constructor(count) {
        super("CuckooCuckooClock", "뻐꾹뻐꾹 시계", count, 1685, 2 * 60 * 60, 1, new Array(new BiscuitPowder(8), new DalgonaJam(3)));
    }
}
class SwanFeatherDreamcatcher extends IProcessedGoods {
    constructor(count) {
        super("SwanFeatherDreamcatcher", "백조깃털 드림캐처", count, 3986, 3.5 * 60 * 60, 1, new Array(new CottonCandyWool(6), new SoftOmurice(1)));
    }
}


// 갓 구운 빵집
class ReliableRyeBread extends IProcessedGoods {
    constructor(count) {
        super("ReliableRyeBread", "든든한 호밀빵", count, 135, 12 * 60, 1, new Array(new JellyBeanJam(1), new BiscuitPowder(2)));
    }
}
class SweetAndChewyJamPie extends IProcessedGoods {
    constructor(count) {
        super("SweetAndChewyJamPie", "달콤쫀득 잼파이", count, 208, 20 * 60, 1, new Array(new JellyBean(6), new BiscuitPowder(3)));
    }
}
class GinkgoPocachia extends IProcessedGoods {
    constructor(count) {
        super("GinkgoPocachia", "은행 포카치아", count, 682, 30 * 60, 1, new Array(new BiscuitPowder(6), new AcornLamp(1)));
    }
}
class SugarCoatedDonut extends IProcessedGoods {
    constructor(count) {
        super("SugarCoatedDonut", "슈가코팅 도넛", count, 951, 60 * 60, 1, new Array(new BiscuitPowder(5), new TwinklingGlassPlate(1)));
    }
}
class SoftCastella extends IProcessedGoods {
    constructor(count) {
        super("SoftCastella", "폭신 카스테라", count, 2166, 3 * 60 * 60, 1, new Array(new SugarCubePiece(20), new MilkyMilk(8)));
    }
}
class GoldrichCroissant extends IProcessedGoods {
    constructor(count) {
        super("GoldrichCroissant", "골드리치 크로와상", count, 5950, 6 * 60 * 60, 1, new Array(new MilkyMilk(15), new Butter(1)));
    }
}


// 잼파이 레스토랑
class HotJellyStew extends IProcessedGoods {
    constructor(count) {
        super("HotJellyStew", "따끈따끈 젤리스튜", count, 184, 18 * 60, 1, new Array(new JellyBean(4), new JellyBerry(1)));
    }
}
class GummyBearBurger extends IProcessedGoods {
    constructor(count) {
        super("GummyBearBurger", "곰젤리 버거", count, 380, 22 * 60, 1, new Array(new JellyBean(10), new SweetAndChewyJamPie(1)));
    }
}
class CandyCreamPasta extends IProcessedGoods {
    constructor(count) {
        super("CandyCreamPasta", "캔디크림 파스타", count,948, 50 * 60, 1, new Array(new BiscuitPowder(7), new Cream(1)));
    }
}
class SoftOmurice extends IProcessedGoods {
    constructor(count) {
        super("SoftOmurice", "폭신폭신 오므라이스", count,1689, 1.5 * 60 * 60, 1, new Array(new JellyBerry(6), new GinkgoPocachia(1)));
    }
}
class CombinationPizzaJelly extends IProcessedGoods {
    constructor(count) {
        super("CombinationPizzaJelly", "콤비네이션 피자젤리", count,4269, 3.5 * 60 * 60, 1, new Array(new JellyBerry(8), new CandyFlower(4)));
    }
}
class LuxuriousJellyBeanSetMenu extends IProcessedGoods {
    constructor(count) {
        super("LuxuriousJellyBeanSetMenu", "고급스러운 젤리빈 정식", count, 8270, 7 * 60 * 60, 1, new Array(new JellyBean(25), new LollipopFlowerBasket(3)));
    }
}

// 토닥토닥 도예공방
class BiscuitPlantPot extends IProcessedGoods {
    constructor(count) {
        super("BiscuitPlantPot", "비스킷 화분", count, 267, 15 * 60, 1, new Array(new PineConeBirdDoll(2), new BiscuitPowder(4)));
    }
}
class TwinklingGlassPlate extends IProcessedGoods {
    constructor(count) {
        super("TwinklingGlassPlate", "반짝반짝 유리판", count,414,  27 * 60, 1, new Array(new SugarCubePiece(12), new HotJellyStew(1)));
    }
}
class GlitteringSaekdongBeads extends IProcessedGoods {
    constructor(count) {
        super("GlitteringSaekdongBeads", "반짝이는 색동구슬", count, 1879, 2 * 60 * 60, 1, new Array(new GummyBearBurger(1), new CottonCandyWool(1)));
    }
}
class RainbowDessertBowl extends IProcessedGoods {
    constructor(count) {
        super("RainbowDessertBowl", "무지갯빛 디저트 보울", count, 6700, 5 * 60 * 60, 1, new Array(new SugarCubePiece(24), new PomegranateJam(2)));
    }
}


// 행복한 꽃가게
class CandyFlower extends IProcessedGoods {
    constructor(count) {
        super("CandyFlower", "캔디꽃", count, 519, 20 * 60, 1, new Array(new JellyBerry(2), new BiscuitPlantPot(1)));
    }
}
class HappyFlowerPot extends IProcessedGoods {
    constructor(count) {
        super("HappyFlowerPot", "행복한 꽃화분", count,528, 20 * 60, 1, new Array(new JellyBerry(4), new SugarCubePiece(10)));
    }
}
class CandyFlowerBouquet extends IProcessedGoods {
    constructor(count) {
        super("CandyFlowerBouquet", "캔디꽃다발", count,1553, 60 * 60, 1, new Array(new JellyBerry(5), new CandyCreamPasta(1)));
    }
}
class LollipopFlowerBasket extends IProcessedGoods {
    constructor(count) {
        super("LollipopFlowerBasket", "롤리팝 꽃바구니", count,1574, 2.5 * 60 * 60, 1, new Array(new JellyBean(18), new ReliableRyeBread(3)));
    }
}
class GlassFlowerBouquet extends IProcessedGoods {
    constructor(count) {
        super("GlassFlowerBouquet", "유리꽃 부케", count,5047, 4.5 * 60 * 60, 1, new Array(new JellyBean(20), new CloudCandyCushion(2)));
    }
}
class BrilliantYogurtWreath extends IProcessedGoods {
    constructor(count) {
        super("BrilliantYogurtWreath", "찬란한 요거트 화환", count,12561, 7.5 * 60 * 60, 1, new Array(new JellyBean(30), new CombinationPizzaJelly(2)));
    }
}



// 밀키 우유 가공소
class Cream extends IProcessedGoods {
    constructor(count) {
        super("Cream", "크림", count, 453, 29 * 60, 1, new Array(new SweetJellyJam(1), new MilkyMilk(2)));
    }
}
class Butter extends IProcessedGoods {
    constructor(count) {
        super("Butter", "버터", count, 1599, 2.5 * 60 * 60, 1, new Array(new SugarCubePiece(15), new MilkyMilk(5)));
    }
}
class HandmadeCheese extends IProcessedGoods {
    constructor(count) {
        super("HandmadeCheese", "수제 치즈", count, 4752, 4.5 * 60 * 60, 1, new Array(new MilkyMilk(10), new CuckooCuckooClock(1)));
    }
}

// 카페 라떼

class JellyBeanLatte extends IProcessedGoods {
    constructor(count) {
        super("JellyBeanLatte", "젤리빈 라떼", count,634, 60 * 60, 1, new Array(new JellyBean(12), new MilkyMilk(2)));
    }
}
class SoftAndFuzzyBubbleTea extends IProcessedGoods {
    constructor(count) {
        super("SoftAndFuzzyBubbleTea", "몽글몽글 버블티", count,2926, 3 * 60 * 60, 1, new Array(new CottonCandyWool(1), new SugarCoatedDonut(1)));
    }
}
class SweetBerryAde extends IProcessedGoods {
    constructor(count) {
        super("SweetBerryAde", "스윗베리 에이드", count, 7570, 6.5 * 60 * 60, 1, new Array(new JellyBerry(10), new GlitteringSaekdongBeads(2)));
    }
}



// 러블리 인형공방
class CloudCandyCushion extends IProcessedGoods {
    constructor(count) {
        super("CloudCandyCushion", "구름사탕 쿠션", count,1453, 1.5 * 60 * 60, 1, new Array(new BiscuitPowder(8), new CottonCandyWool(1)));
    }
}
class GummyBearCottonDoll extends IProcessedGoods {
    constructor(count) {
        super("GummyBearCottonDoll", "곰젤리 솜인형", count, 5958, 4 * 60 * 60, 1, new Array(new CandyFlowerBouquet(2), new CottonCandyWool(1)));
    }
}
class DragonFruitCottonDoll extends IProcessedGoods {
    constructor(count) {
        super("DragonFruitCottonDoll", "용과 드래곤 솜인형", count, 8436, 7 * 60 * 60, 1, new Array(new CottonCandyWool(2), new CreamRootBeer(2)));
    }
}

// 오크통 쉽터
class CreamRootBeer extends IProcessedGoods {
    constructor(count) {
        super("CreamRootBeer", "크림 루트비어", count, 1824, 2.5 * 60 * 60, 1, new Array(new BiscuitPowder(10), new HappyFlowerPot(1)));
    }
}
class RedBerryJuice extends IProcessedGoods {
    constructor(count) {
        super("RedBerryJuice", "레드베리 주스", count, 9499, 6.5 * 60 * 60, 1, new Array(new JellyBerry(12), new GummyBearCottonDoll(1)));
    }
}
class VintageWildBottle extends IProcessedGoods {
    constructor(count) {
        super("VintageWildBottle", "빈티지 와일드 보틀", count,9913, 8 * 60 * 60, 1, new Array(new RollCakeWood(50), new SpookyMuffin(2)));
    }
}

// 퐁 드 파티세리
class SpookyMuffin extends IProcessedGoods {
    constructor(count) {
        super("SpookyMuffin", "으스스 머핀", count, 2545,3.5 * 60 * 60, 1, new Array(new BiscuitPowder(12), new MilkyMilk(7)));
    }
}
class FreshStrawberryCake extends IProcessedGoods {
    constructor(count) {
        super("FreshStrawberryCake", "생딸기 케이크", count, 9121,6 * 60 * 60, 1, new Array(new BiscuitPowder(14), new SoftAndFuzzyBubbleTea(2)));
    }
}
class PartyPartyChiffonCake extends IProcessedGoods {
    constructor(count) {
        super("PartyPartyChiffonCake", "파티파티 쉬폰케이크", count,13996, 8 * 60 * 60, 1, new Array(new BiscuitPowder(18), new HandmadeCheese(2)));
    }
}

// 살롱 드 쥬얼리
class GlazedRing extends IProcessedGoods {
    constructor(count) {
        super("GlazedRing", "글레이즈드 링", count, 4789,5 * 60 * 60, 1, new Array(new BiscuitPowder(12), new SoftCastella(1)));
    }
}
class RubyBerryBrooch extends IProcessedGoods {
    constructor(count) {
        super("RubyBerryBrooch", "루비베리 브로치", count, 8667,7.5 * 60 * 60, 1, new Array(new JellyBerry(16), new SwanFeatherDreamcatcher(1)));
    }
}
class RoyalGummyBearCrown extends IProcessedGoods {
    constructor(count) {
        super("RoyalGummyBearCrown", "로얄 곰젤리 크라운", count,10985, 8 * 60 * 60, 1, new Array(new CottonCandyWool(3), new GlassFlowerBouquet(1)));
    }
}

// 캐시 상품

class CrystalMonthlyFee extends ICashPackage {
    constructor(count) {
        super("CrystalMonthlyFee", "크리스탈 월정액", count, [new Crystal(5900)], [new Won(5900)])
    }
}


/////////////  분류  /////////////

const Currency = {
    "Coin": Coin,
    "Crystal": Crystal,
    "Won": Won,
}

const Tools = {
    // 뚝딱 대장간
    "FirmAxe": FirmAxe,
    "StrongPickaxe": StrongPickaxe,
    "SawingSaw": SawingSaw,
    "ShovelingShovel": ShovelingShovel,
    "MysteriousPretzelStake": MysteriousPretzelStake,
    "BrightBlueCandyTongs": BrightBlueCandyTongs,
    "UnchangingSugarCoatedHammer": UnchangingSugarCoatedHammer,
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

const CashPackage = {
    "CrystalMonthlyFee": CrystalMonthlyFee,
}


const ItemFactory = {
    ...Currency,
    ...HarvestGoods,
    ...Tools,
    ...ProcessedGoods,
    ...CashPackage,
};


export { ItemFactory, ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage };