import {
    AiFillBank,
    AiOutlineAppstoreAdd,
    AiOutlinePercentage,
    AiTwotoneUsb,
} from "react-icons/ai";
import {
    BiCloudRain,
    BiDna,
    BiSolidChalkboard,
    BiSolidParking,
    BiSolidPrinter,
} from "react-icons/bi";
import {
    BsBackpack2Fill,
    BsBusFront,
    BsCurrencyDollar,
    BsFillGiftFill,
    BsFillHeartFill,
    BsFillSafeFill,
    BsFillUmbrellaFill,
    BsFuelPumpFill,
    BsPiggyBankFill,
} from "react-icons/bs";
import { CiBurger, CiPill } from "react-icons/ci";
import {
    FaAmbulance,
    FaBinoculars,
    FaBook,
    FaCamera,
    FaCameraRetro,
    FaCompass,
    FaFilm,
    FaFirstAid,
    FaGraduationCap,
    FaGuitar,
    FaHeadphones,
    FaHiking,
    FaLaptopCode,
    FaLeaf,
    FaMapMarkedAlt,
    FaMicrophone,
    FaMoon,
    FaMountain,
    FaPallet,
    FaPassport,
    FaPencilRuler,
    FaPumpSoap,
    FaRegCreditCard,
    FaSchool,
    FaSuitcaseRolling,
    FaUmbrellaBeach,
} from "react-icons/fa";
import {
    FaBasketShopping,
    FaCarRear,
    FaLightbulb,
    FaMotorcycle,
    FaPencil,
    FaPlugCircleBolt,
    FaStethoscope,
    FaTaxi,
    FaToolbox,
} from "react-icons/fa6";
import {
    GiBasket,
    GiBigDiamondRing,
    GiCampfire,
    GiChimney,
    GiClothes,
    GiComb,
    GiCupcake,
    GiFireFlower,
    GiFlowerEmblem,
    GiLipstick,
    GiMicroscope,
    GiMirrorMirror,
    GiShinyApple,
    GiShoppingBag,
    GiSyringe,
    GiToothbrush,
    GiTowel,
    GiWallet,
    GiWashingMachine,
    GiWaterBottle,
} from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import {
    IoMdBicycle,
    IoMdCalculator,
    IoMdCash,
    IoMdPricetags,
    IoMdTrain,
    IoMdWine,
} from "react-icons/io";
import {
    IoBandage,
    IoBarChart,
    IoBed,
    IoFish,
    IoMusicalNotesSharp,
    IoReceipt,
    IoStorefront,
    IoWater,
} from "react-icons/io5";
import { LuBitcoin, LuNotebook, LuShip, LuTentTree } from "react-icons/lu";
import {
    MdBloodtype,
    MdConnectedTv,
    MdSatelliteAlt,
    MdSignalWifiStatusbarConnectedNoInternet3,
} from "react-icons/md";
import {
    PiCoffeeDuotone,
    PiCouchFill,
    PiHospitalFill,
    PiPhoneCallFill,
    PiPopcornBold,
} from "react-icons/pi";
import { RiBeerFill, RiPaintBrushFill, RiScissors2Fill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { TbHomeFilled, TbPerfume, TbPizzaFilled } from "react-icons/tb";
import {
    TiDeviceTablet,
    TiPlane,
    TiShoppingCart,
    TiStopwatch,
    TiWeatherPartlySunny,
} from "react-icons/ti";

import { GrGamepad } from "react-icons/gr";
import { HiOutlineSpeakerphone, HiOutlineTicket } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";

import { FcClapperboard } from "react-icons/fc";

export const iconList = [
    // Food & Dining
    "fork-and-spoon",
    "burger",
    "pizza",
    "coffee",
    "ice-cream",
    "cake",
    "beer",
    "wine",
    "sushi",
    "apple",

    // Shopping
    "shopping-cart",
    "trolly",
    "bag",
    "gift",
    "basket",
    "tag",
    "percent",
    "receipt",
    "store",
    "barcode",

    // Transportation
    "car",
    "motorcycle",
    "bus",
    "train",
    "plane",
    "ship",
    "bicycle",
    "taxi",
    "fuel",
    "parking",

    // Home & Utilities
    "home",
    "light-bulb",
    "water-drop",
    "couch",
    "bed",
    "washing-machine",
    "toolbox",
    "paint-brush",
    "chimney",
    "plug",

    // Healthcare
    "heart",
    "hospital",
    "stethoscope",
    "pill",
    "syringe",
    "bandage",
    "first-aid-kit",
    "dna",
    "blood",
    "ambulance",

    // Technology
    "phone",
    "laptop",
    "tablet",
    "camera",
    "watch",
    "printer",
    "headphones",
    "usb",
    "wifi",
    "satellite",

    // Finance
    "calculator",
    "dollar",
    "coin",
    "wallet",
    "credit-card",
    "safe",
    "piggy-bank",
    "bank",
    "cash",
    "chart-line",

    // Entertainment
    "guitar",
    "microphone",
    "speaker",
    "gamepad",
    "ticket",
    "clapperboard",
    "popcorn",
    "tv",
    "film",
    "music-note",

    // Personal Care
    "ring",
    "lipstick",
    "perfume",
    "comb",
    "scissors",
    "mirror",
    "toothbrush",
    "shampoo",
    "towel",
    "soap",

    // Education
    "book",
    "pencil",
    "graduation-cap",
    "school",
    "chalkboard",
    "notebook",
    "ruler",
    "backpack",
    "microscope",
    "palette",

    // Others
    "graph",
    "clothes",
    "sun",
    "moon",
    "cloud",
    "umbrella",
    "mountain",
    "flower",
    "leaf",
    "fire",

    // Travel & Leisure
    "map",
    "camera-retro",
    "binoculars",
    "passport",
    "tent",
    "suitcase",
    "compass",
    "hiking",
    "beach",
    "campfire",
];

type IconName = (typeof iconList)[number];

export const CategoryIcon = ({ icon }: { icon: IconName }) => {
    switch (icon) {
        case "fork-and-spoon":
            return (
                <div className="bg-[red] text-white w-10 h-10 flex items-center justify-center rounded-full">
                    <ImSpoonKnife className="w-6 h-6" />
                </div>
            );

        case "burger":
            return (
                <div className="bg-[brown] text-[yellow] w-10 h-10 flex items-center justify-center rounded-full">
                    <CiBurger className="w-8 h-8" />
                </div>
            );

        case "pizza":
            return (
                <div className="bg-slate-300 text-[brown] w-10 h-10 flex items-center justify-center rounded-full">
                    <TbPizzaFilled className="w-6 h-6" />
                </div>
            );

        case "coffee":
            return (
                <div className="bg-[red] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <PiCoffeeDuotone className="w-6 h-6" />
                </div>
            );

        case "ice-cream":
            return (
                <div className="bg-[green] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <SiBuymeacoffee className="w-6 h-6" />
                </div>
            );

        case "cake":
            return (
                <div className="bg-[brown] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiCupcake className="w-6 h-6" />
                </div>
            );

        case "beer":
            return (
                <div className="bg-[#0A5EB0] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <RiBeerFill className="w-6 h-6" />
                </div>
            );

        case "wine":
            return (
                <div className="bg-[#D4EBF8] text-[red] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMdWine className="w-6 h-6" />
                </div>
            );

        case "sushi":
            return (
                <div className="bg-[#4335A7] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoFish className="w-6 h-6" />
                </div>
            );

        case "apple":
            return (
                <div className="bg-[green] text-[#C9E6F0] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiShinyApple className="w-6 h-6" />
                </div>
            );

        case "shopping-cart":
            return (
                <div className="bg-[#4335A7] text-[#FF7F3E] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaBasketShopping className="w-5 h-5" />
                </div>
            );

        case "trolly":
            return (
                <div className="bg-[#000B58] text-[#FFF4B7] w-10 h-10 flex items-center justify-center rounded-full">
                    <TiShoppingCart className="w-6 h-6" />
                </div>
            );

        case "bag":
            return (
                <div className="bg-[#740938] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiShoppingBag className="w-5 h-5" />
                </div>
            );

        case "gift":
            return (
                <div className="bg-[#0D92F4] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsFillGiftFill className="w-5 h-5" />
                </div>
            );

        case "basket":
            return (
                <div className="bg-[#B8001F] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiBasket className="w-6 h-6" />
                </div>
            );

        case "tag":
            return (
                <div className="bg-[#1230AE] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMdPricetags className="w-6 h-6" />
                </div>
            );

        case "percent":
            return (
                <div className="bg-[#343131] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <AiOutlinePercentage className="w-6 h-6" />
                </div>
            );

        case "receipt":
            return (
                <div className="bg-[#125B9A] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoReceipt className="w-5 h-5" />
                </div>
            );

        case "store":
            return (
                <div className="bg-[#1A4870] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoStorefront className="w-6 h-6" />
                </div>
            );

        case "barcode":
            return (
                <div className="bg-[#800000] text-[#F4F6FF] w-10 h-10 flex items-center justify-center rounded-full">
                    <AiOutlineAppstoreAdd className="w-6 h-6" />
                </div>
            );

        case "car":
            return (
                <div className="bg-[green] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaCarRear className="w-5 h-5" />
                </div>
            );

        case "motorcycle":
            return (
                <div className="bg-[#E74C3C] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaMotorcycle className="w-6 h-6" />
                </div>
            );

        case "bus":
            return (
                <div className="bg-[#36BA98] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsBusFront className="w-5 h-5" />
                </div>
            );

        case "train":
            return (
                <div className="bg-[#4535C1] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMdTrain className="w-6 h-6" />
                </div>
            );

        case "plane":
            return (
                <div className="bg-[#03346E] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <TiPlane className="w-6 h-6" />
                </div>
            );

        case "ship":
            return (
                <div className="bg-[#102C57] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <LuShip className="w-6 h-6" />
                </div>
            );

        case "bicycle":
            return (
                <div className="bg-[#365E32] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMdBicycle className="w-6 h-6" />
                </div>
            );

        case "taxi":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaTaxi className="w-6 h-6" />
                </div>
            );

        case "fuel":
            return (
                <div className="bg-[#D10363] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsFuelPumpFill className="w-6 h-6" />
                </div>
            );

        case "parking":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <BiSolidParking className="w-6 h-6" />
                </div>
            );

        case "home":
            return (
                <div className="bg-[#003285] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <TbHomeFilled className="w-6 h-6" />
                </div>
            );

        case "light-bulb":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaLightbulb className="w-5 h-5" />
                </div>
            );

        case "water-drop":
            return (
                <div className="bg-[#1E90FF] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoWater className="w-6 h-6" />
                </div>
            );

        case "couch":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <PiCouchFill className="w-6 h-6" />
                </div>
            );

        case "bed":
            return (
                <div className="bg-[#7469B6] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoBed className="w-6 h-6" />
                </div>
            );

        case "washing-machine":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiWashingMachine className="w-6 h-6" />
                </div>
            );

        case "toolbox":
            return (
                <div className="bg-[#A0DEFF] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaToolbox className="w-5 h-5" />
                </div>
            );

        case "paint-brush":
            return (
                <div className="bg-[#C5FF95] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <RiPaintBrushFill className="w-5 h-5" />
                </div>
            );

        case "chimney":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiChimney className="w-5 h-5" />
                </div>
            );

        case "plug":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPlugCircleBolt className="w-5 h-5" />
                </div>
            );

        case "heart":
            return (
                <div className="bg-[#003C43] text-[#FF0000] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsFillHeartFill className="w-6 h-6" />
                </div>
            );

        case "hospital":
            return (
                <div className="bg-[#7AA2E3] text-[#F8F6E3] w-10 h-10 flex items-center justify-center rounded-full">
                    <PiHospitalFill className="w-6 h-6" />
                </div>
            );

        case "stethoscope":
            return (
                <div className="bg-[#003C43] text-[#E4E0E1] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaStethoscope className="w-5 h-5" />
                </div>
            );

        case "pill":
            return (
                <div className="bg-[#024CAA] text-[#C9E9D2] w-10 h-10 flex items-center justify-center rounded-full">
                    <CiPill className="w-6 h-6" />
                </div>
            );

        case "syringe":
            return (
                <div className="bg-[#FFDB00] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiSyringe className="w-5 h-5" />
                </div>
            );

        case "bandage":
            return (
                <div className="bg-[#FF204E] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoBandage className="w-6 h-6" />
                </div>
            );

        case "first-aid-kit":
            return (
                <div className="bg-[#232D3F] text-[#FF004D] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaFirstAid className="w-6 h-6" />
                </div>
            );

        case "dna":
            return (
                <div className="bg-[#005B41] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <BiDna className="w-5 h-5" />
                </div>
            );

        case "blood":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <MdBloodtype className="w-5 h-5" />
                </div>
            );

        case "ambulance":
            return (
                <div className="bg-[#0E21A0] text-[#EEE2DE] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaAmbulance className="w-6 h-6" />
                </div>
            );

        case "phone":
            return (
                <div className="bg-[#E966A0] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <PiPhoneCallFill className="w-5 h-5" />
                </div>
            );

        case "laptop":
            return (
                <div className="bg-[#000000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaLaptopCode className="w-5 h-5" />
                </div>
            );

        case "tablet":
            return (
                <div className="bg-[#0E2954] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <TiDeviceTablet className="w-5 h-5" />
                </div>
            );

        case "camera":
            return (
                <div className="bg-[#17594A] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaCamera className="w-5 h-5" />
                </div>
            );

        case "watch":
            return (
                <div className="bg-[#D21312] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <TiStopwatch className="w-7 h-7" />
                </div>
            );

        case "printer":
            return (
                <div className="bg-[#0002A1] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <BiSolidPrinter className="w-5 h-5" />
                </div>
            );

        case "headphones":
            return (
                <div className="bg-[#00ABB3] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaHeadphones className="w-5 h-5" />
                </div>
            );

        case "usb":
            return (
                <div className="bg-[#CF0A0A] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <AiTwotoneUsb className="w-5 h-5" />
                </div>
            );

        case "wifi":
            return (
                <div className="bg-[#6F38C5] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <MdSignalWifiStatusbarConnectedNoInternet3 className="w-5 h-5" />
                </div>
            );

        case "satellite":
            return (
                <div className="bg-[#000000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <MdSatelliteAlt className="w-5 h-5" />
                </div>
            );

        case "calculator":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMdCalculator className="w-5 h-5" />
                </div>
            );

        case "dollar":
            return (
                <div className="bg-[#00A8CC] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsCurrencyDollar className="w-5 h-5" />
                </div>
            );

        case "coin":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <LuBitcoin className="w-5 h-5" />
                </div>
            );

        case "wallet":
            return (
                <div className="bg-[#31E1F7] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiWallet className="w-6 h-6" />
                </div>
            );

        case "credit-card":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaRegCreditCard className="w-5 h-5" />
                </div>
            );

        case "safe":
            return (
                <div className="bg-[#400D51] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsFillSafeFill className="w-5 h-5" />
                </div>
            );

        case "piggy-bank":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsPiggyBankFill className="w-6 h-6" />
                </div>
            );

        case "bank":
            return (
                <div className="bg-[#0E2954] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <AiFillBank className="w-5 h-5" />
                </div>
            );

        case "cash":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMdCash className="w-5 h-5" />
                </div>
            );

        case "chart-line":
            return (
                <div className="bg-[#F15412] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoBarChart className="w-5 h-5" />
                </div>
            );

        case "guitar":
            return (
                <div className="bg-[#17594A] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaGuitar className="w-5 h-5" />
                </div>
            );

        case "microphone":
            return (
                <div className="bg-[#001C30] text-[#64CCC5] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaMicrophone className="w-6 h-6" />
                </div>
            );

        case "speaker":
            return (
                <div className="bg-[#4942E4] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <HiOutlineSpeakerphone className="w-5 h-5" />
                </div>
            );

        case "gamepad":
            return (
                <div className="bg-[#000000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <GrGamepad className="w-5 h-5" />
                </div>
            );

        case "ticket":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <HiOutlineTicket className="w-5 h-5" />
                </div>
            );

        case "clapperboard":
            return (
                <div className="bg-[#EEE2DE] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FcClapperboard className="w-5 h-5" />
                </div>
            );

        case "popcorn":
            return (
                <div className="bg-[#FFD700] text-[#000000] w-10 h-10 flex items-center justify-center rounded-full">
                    <PiPopcornBold className="w-5 h-5" />
                </div>
            );

        case "tv":
            return (
                <div className="bg-[#000000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <MdConnectedTv className="w-5 h-5" />
                </div>
            );

        case "film":
            return (
                <div className="bg-[#E966A0] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaFilm className="w-5 h-5" />
                </div>
            );

        case "music-note":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <IoMusicalNotesSharp className="w-5 h-5" />
                </div>
            );

        case "ring":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiBigDiamondRing className="w-5 h-5" />
                </div>
            );

        case "lipstick":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiLipstick className="w-5 h-5" />
                </div>
            );

        case "perfume":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <TbPerfume className="w-5 h-5" />
                </div>
            );

        case "comb":
            return (
                <div className="bg-[#11009E] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiComb className="w-5 h-5" />
                </div>
            );

        case "scissors":
            return (
                <div className="bg-[#B31312] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <RiScissors2Fill className="w-5 h-5" />
                </div>
            );

        case "mirror":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiMirrorMirror className="w-5 h-5" />
                </div>
            );

        case "toothbrush":
            return (
                <div className="bg-[#0F0F0F] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiToothbrush className="w-5 h-5" />
                </div>
            );

        case "shampoo":
            return (
                <div className="bg-[#B931FC] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiWaterBottle className="w-5 h-5" />
                </div>
            );

        case "towel":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiTowel className="w-5 h-5" />
                </div>
            );

        case "soap":
            return (
                <div className="bg-[#5D12D2] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPumpSoap className="w-5 h-5" />
                </div>
            );

        case "book":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaBook className="w-5 h-5" />
                </div>
            );

        case "pencil":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPencil className="w-5 h-5" />
                </div>
            );

        case "graduation-cap":
            return (
                <div className="bg-[#000000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaGraduationCap className="w-5 h-5" />
                </div>
            );

        case "school":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaSchool className="w-5 h-5" />
                </div>
            );

        case "chalkboard":
            return (
                <div className="bg-[#000000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <BiSolidChalkboard className="w-5 h-5" />
                </div>
            );

        case "notebook":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <LuNotebook className="w-5 h-5" />
                </div>
            );

        case "ruler":
            return (
                <div className="bg-[#FF0000] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPencilRuler className="w-5 h-5" />
                </div>
            );

        case "backpack":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsBackpack2Fill className="w-5 h-5" />
                </div>
            );

        case "microscope":
            return (
                <div className="bg-[#0F0F0F] text-[#FFFFFF] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiMicroscope className="w-5 h-5" />
                </div>
            );

        case "palette":
            return (
                <div className="bg-[#D7BBF5] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPallet className="w-5 h-5" />
                </div>
            );

        case "graph":
            return (
                <div className="bg-[#A7D477] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <SlGraph className="w-5 h-5" />
                </div>
            );

        case "clothes":
            return (
                <div className="bg-[#FF885B] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiClothes className="w-5 h-5" />
                </div>
            );

        case "sun":
            return (
                <div className="bg-[#FFE31A] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <TiWeatherPartlySunny className="w-5 h-5" />
                </div>
            );

        case "moon":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaMoon className="w-5 h-5" />
                </div>
            );

        case "cloud":
            return (
                <div className="bg-[#A7D477] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <BiCloudRain className="w-5 h-5" />
                </div>
            );

        case "umbrella":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <BsFillUmbrellaFill className="w-5 h-5" />
                </div>
            );

        case "mountain":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaMountain className="w-5 h-5" />
                </div>
            );

        case "flower":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiFlowerEmblem className="w-5 h-5" />
                </div>
            );

        case "leaf":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaLeaf className="w-5 h-5" />
                </div>
            );

        case "fire":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiFireFlower className="w-5 h-5" />
                </div>
            );

        case "map":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaMapMarkedAlt className="w-5 h-5" />
                </div>
            );

        case "camera-retro":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaCameraRetro className="w-5 h-5" />
                </div>
            );

        case "binoculars":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaBinoculars className="w-5 h-5" />
                </div>
            );

        case "passport":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPassport className="w-5 h-5" />
                </div>
            );

        case "tent":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <LuTentTree className="w-5 h-5" />
                </div>
            );

        case "suitcase":
            return (
                <div className="bg-[#FFD700] text-[black] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaSuitcaseRolling className="w-5 h-5" />
                </div>
            );

        case "compass":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaCompass className="w-5 h-5" />
                </div>
            );

        case "hiking":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaHiking className="w-5 h-5" />
                </div>
            );

        case "beach":
            return (
                <div className="bg-[#00712D] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <FaUmbrellaBeach className="w-5 h-5" />
                </div>
            );

        case "campfire":
            return (
                <div className="bg-[#FF0000] text-[white] w-10 h-10 flex items-center justify-center rounded-full">
                    <GiCampfire className="w-5 h-5" />
                </div>
            );
    }
};
