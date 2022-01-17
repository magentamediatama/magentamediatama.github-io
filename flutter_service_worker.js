'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1b4fbf1e92ca2f7a99fb0701c8da95c7",
"index.html": "03bb9c0644a815816e972504008ebae6",
"/": "03bb9c0644a815816e972504008ebae6",
"main.dart.js": "433221e3910ca78caf0e87551fa589cb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "acd8d03db460d881898236c87f7c8d76",
".git/config": "cbefcff62e47524986cd754a7ed6414f",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/95/6b9dda8e6fca348d162120c1dfb1dd51becf06": "5c3f8d05c44efba86e99dc731101651d",
".git/objects/95/eae8b11cc0df701f224f3acbfd2bcf37a4a0aa": "73b7f4c2aad4550c7cff0f77b23ed6e5",
".git/objects/95/af461be9e18375f1d2322a07aed6b553c07bbc": "2c5c8102713ca362865f15c0c67f221a",
".git/objects/92/0f25a9fe5c068dc111f2c7bd06f9d51ad67ba8": "ce47990a7b4996f340af2f8d755cd148",
".git/objects/0c/3c5c41b2d1589bfd9d8db4a01b1167b6734cfc": "a32511fee2f3ef8d824f977d4bdb6684",
".git/objects/66/c9d5a861adf09bafb0b58d6a508b4a3ca4f372": "382a4d09fca9f2e09e2e839b825fe649",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/68/1ed4e5251f11f58736c0d5689132609f9b12de": "c8d5a7c0a129a289eac77d098af0a67c",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "9c7ac2161ab4d41eb72995f10abe8780",
".git/objects/57/d524182681d0f6793d4908310d5824127d5a5d": "e2e575bec6188e664ad83a455a5883f5",
".git/objects/57/df1ac7b1b155b5d5373ba6418d1eb83cb3a0b2": "8363eb2570bf08d9014ee1bcc2670b37",
".git/objects/3b/cd4928a61f3e10eeca4ceeade66175d7b5a2cc": "b0ed336419104fb4957cdeb4f180b796",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "5b5c9018f1dfdb38059bfcce4201101e",
".git/objects/04/4484cb0b80b7c33198a2d541fa8d417ddebe05": "b18cdbb65b7d820bb8ce414f8a4c5b2f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "352867978a346c506bb3faab4ed092f0",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "e2a5d81b824d6091d76bb5ecb8bf8a01",
".git/objects/3c/710032c9722a430af93b5ef0a73869ac7ba687": "ee55ca43068bcab00bdf35d7438ed1de",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "dddca3f1373f3dc9a3da1c1e3b0991bc",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "084552050b88db0ff0ae360d079fda47",
".git/objects/58/1b0feabaf11c207235fdd9852769633136721a": "26c9462630afad0c4ac182bb588ca077",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "5cdc58f38828d85faf60d344448cff42",
".git/objects/0b/b3b61cd7c934389567cf998fd1595054685554": "c5a34b99386aee3221ac1b6db5c57610",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "c55944bf24a6795a30f3c6aacdba9f96",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "66248eba29ca49c80c20042653b5c7ab",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "0f19ae5f7d21b347fea6f70dc942a7c1",
".git/objects/5a/a64a0ff929919c886abeb92937181a1e67d816": "e007b40da48230676ea0e0397b0596c9",
".git/objects/5a/59caab71f0ed98472ba9f212c3860ce2553131": "e9ddfe257d4764e135484612e7fe824e",
".git/objects/5a/be1f3720115130480d97d8364481f7a7d30f50": "691daffe16b9150de16f5b4b7f50b872",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "322d3378d5c61d470e3cddea51613ea6",
".git/objects/5f/e46cbc8f2f119136dc61c123ca68c4e49b4309": "6e7e71e7a677807b4f9decb95dcbf293",
".git/objects/05/cb5ed19199dd50d7e47808bae558b8764c201e": "9938ff7e5d34acd90d1247fce94677c8",
".git/objects/05/2f5d5f07b5209f9b546cccee156c41ececc29a": "7dcb182b750a0498c1955d8ede4205da",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "d916aa57365e51a09961834873e08f50",
".git/objects/a3/8d8fdf025d959eeb47f4c5b3b6f193f5aee3fa": "db059e85afb37133055136d6ea72c4fd",
".git/objects/d9/c02cf6dab22d836827b891afddfeaff7c5e8f3": "9bb71df6d4271bcee8519ed84b006644",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "8743e406ba04f7d2151b690cfec2c95f",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "cfe3b583f7e38cb1e1908e784b194d08",
".git/objects/bb/9bbf9724ebf0c555bc84b166930adffddeee97": "cc7a4be56f13783f89c52d0d0081e014",
".git/objects/be/d5b2b7c7a88ff8590cb229b8814f1dbf575544": "a396dc987e644c69b80fef574ae22103",
".git/objects/da/3e5e50da2112826e165996c08753290bf45ba8": "37f5c6794b5990e3937c0410526da5ff",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/6b49bb54f33bd777a6c9760f830b16ea64614c": "89f823940d96523ea589210eda38def6",
".git/objects/b4/b5d938b7ef8de229bd9e288bd06e449576350d": "a108cadd0cb602214543e5cef6a20fe0",
".git/objects/a2/ddefe5635223768cf33c0cf288d98437cb54c1": "92b03e80885d3219d34fc954ea5af7f2",
".git/objects/a5/c0db2252f10574335295942117df63e2c8715d": "ec3872f68df92c4412418b07aa5ba011",
".git/objects/bd/c7d301fb8c6e97526f652af222d81f0d41bb4c": "70f5a2253f1871d1f55ff2dd4439f612",
".git/objects/d1/4ecc509a21494086c8e58b557ace594cfc0dcd": "69d80d375f7043418baa3d573928fb6c",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "e34b4caa5ea51515c4c71c9d665fe2ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/e86e951899d69d602ee99ab1fc2d2ae5f6ced9": "663ec2451a7736fea1613c8b7f8940f5",
".git/objects/ae/5facb851378c73fea592bc5404033524a76df1": "b6fdc67a8916b02071e321371987fece",
".git/objects/ab/141c0fc52a6e3c2d13d18260c8295e011adda2": "938257cd2f860965eee363a99d1d639f",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "f8f12c5200a0b4fb7338a3d0c2ffc8d2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e2/d51301a9e0044d0f85d859d08a78d2aeb9d6d7": "e4efa8e382c6d49d7c5714c7c4147c6f",
".git/objects/e2/8db1ecfa9d4a34aec6f15f4978474c5acc0c41": "b01056a8d9375240331dba7cac27a56a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c0/174a6e6c772a83afb3642ee0ba471d92b97541": "2dca6abaf104dce049e1b39b514fef47",
".git/objects/c9/0d5321a7cabc632ac6ac0c590399707d246dc5": "9c29c9305501c5d9c54fe9a2eb3686ed",
".git/objects/c9/d9bbdc27105169170af5f8359b35fe61a51234": "ffe8028fb1fec9e28272bca6de3e6e2a",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "273e5ca6396c51487ce55f7c6a2a9e63",
".git/objects/fd/320b5f2f356ecac218f4d47f07f893b2f54283": "84b245ff03ff49f97adb5f1cd99bb27a",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "f6fabc869eee80019d28bbabaae80f90",
".git/objects/cf/3c7fbbc573d0d4aaae3d231f704868e25ce29e": "67230b79845ff4dfc2c957cd55c77765",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "37cff1f68cb5f0ab3e9ab2ce84cd3494",
".git/objects/ca/3ba70b8527ca8c018ad7a0f0c136838b2a9f45": "95ad5f7e21e89afd50114c37fefa9b9d",
".git/objects/ca/979f873066bcd4fb8b6bf33ffe5baa0f7a84c3": "729ed2c1357d6a414b7b278efe910b7b",
".git/objects/ca/818eca5c4c9b20b2f6e1254ee17eecaff226b3": "fa28b44c019cb9fa3ad7344e33581458",
".git/objects/e4/2d07cc1e7251af8bd13d5cc9ece8f3bace29ae": "ae81590afec3a926386ff3e95ef1c0ec",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "3c4126b3f3755a668f137ee0f09f5974",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "280987912854696948ef86e19e684130",
".git/objects/fb/041f312bf3165d6e62bac517cbc311be7e1bc6": "ed5fa07fe032cccda5497248006a1280",
".git/objects/fb/083b44501483fae84203d2c080089a84738a98": "9346f5d3f264e91dca0af059aecf6dd7",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/c1/bc25ad08b4b0112aba366f2549b310339b8522": "b1b97bc2cdf791a665d743778bf0bd72",
".git/objects/4e/5c6bcce5d20fef7ea4b4ecda88d75c51c2a2cd": "929184bcf2bd3abb27a897b5f75d76c5",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "fd8c1ed5260733b7ff124eef6c2acf24",
".git/objects/20/29d7ffceafb39f0c8220bb344c98b4b211cc26": "48d4c69074c30ce7a745546e7f40b8bd",
".git/objects/18/91b35d6b3b127f35a7741295cf6621b34943d2": "44927d1739279f6c4ec78ea7a4dff5cc",
".git/objects/27/2d28c16ca5d3a48ce3dd9eecf5556342a921c9": "869e7b654926b88d773068a780a60786",
".git/objects/4b/9e33b9d6b67eac8dc202e108ccd1100c28c513": "fa520c9edf1041c30e6ea6b8b99af6ee",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "b3781133604d26e4cdb145dcc68d0ac2",
".git/objects/7d/fdba1b6b62b4850e708d2893353b80867075f8": "8c2a14cd2aa3ddf222bc26a8207bc8ac",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "240a65a7c7f05cc9fdb72e6674bf6ec1",
".git/objects/7c/00e57b677fbc3979b91522ca35016d29ddd5f7": "8f2f6efdb004853ab040b8ce29e99fb4",
".git/objects/16/d65ab38c9dcf5630c92cbcd94fc3779c43d391": "0d3ed2b33611592cdd3025ab7e117f69",
".git/objects/1f/3d2c1b6e944b158b5285044db4ac843a6eaebb": "a6803703fce8ed8a5ceabb33adf553b1",
".git/objects/80/35d0ebefbdca213b716d44b8352634b5a48a1d": "4b5f9dd170e86565c2db87674a9cf496",
".git/objects/28/b1b86ce5c7a96b068f88dd5191465475465091": "54a26e78cc300e3ac60158cecb7daec1",
".git/objects/8a/dca5afc3e4e243127408045059fdedd92f06cf": "f13f6a084194bd0fa40d7a113a9050f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "87a2ff7f600b6daec33558e039bc32c8",
".git/objects/4c/b987701d37df71e746e336fe20ffe349ea3241": "2be34d7d536a98c9c25b6bfe77db0a77",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "f445a8d7f5b6b7254fecf559a1bff7fb",
".git/objects/26/fde28fc8352bd5a8b8511bdb4422fbfc7f91c0": "b07cd624922f4d18e4ab7e184c814170",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "c935fae1897001c51853fb7f4a30bd5f",
".git/objects/81/59646c8b0cc1e1de94fe4c56d1e34a81e656df": "3295bb1c6ba3edb8f74e4df622ab2746",
".git/objects/2a/8006e5170a6a109a0f53df520e5164aa68f049": "5897ed81482b7331e64732f1b1631356",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "8cd7e9ca99016151fd67939031fb3bfd",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "a27e17eede6aa4c7d8e68508f569a2f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/1c6d82f6c79bd5bf9304fe8c1e66cbb5172ee0": "eab56d1623088c542d20c9e444c48595",
".git/objects/00/30159129244443460c454d71387b2061845eaf": "cbd0c0721995cd2f8ea8ef2e864fd2ed",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "5e80c82718faee206224e26e47316cd8",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "4e247acdfb8d336f54e321bf520ac916",
".git/objects/36/4cd57b7085148b9e3bc416ba5f6a60b6556e0e": "f8d60c2d8284de4e1eafe35dfd047e95",
".git/objects/09/1a667182122295fad92be6a937d5f0dd82cb57": "919276b2c47845e99543979cde4c19b0",
".git/objects/5d/0a7f8ec8d04d7a387fdbabbc6b259400c401cb": "0b93d810e14c0aadf9f5969bfba9bf46",
".git/objects/31/c111c1c3401496303b83e293198735089ee85f": "3d8a20c54334546619897093314053d3",
".git/objects/96/2af7507034ef3a871775b104934c795821bc73": "b5735b116f174a2c156a52b7636e2d04",
".git/objects/3a/5aaaca41ebc69cc5940aaa224ba6471f986d00": "372974426ccca5b63d94e03d5c5e74e4",
".git/objects/3a/f9ace7e288f60bf94698001f994d646bda9e4c": "948aa10ea58266d0de808a3c8fd8d5c3",
".git/objects/3f/3bf8284f2253083ee4a627b9f1e8fac7292c22": "95ff4aaace8f19dff8b3792dea83ab39",
".git/objects/3f/2a8fbca0418d3f9f154044ae75d2be9ffbbaae": "c1ef24fa5757ebe0a3b9f95764aec223",
".git/objects/30/96b551121de9e9dba098fb25cea49c34e86762": "7361d7fd04b7af1a60ba0931faa99474",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "abd32dd8b9270de927a303a5c1721d98",
".git/objects/5b/6b4be7b74c3baaaf7e0aa18d6dcbc3e7ca4dce": "22fb40d637519e81cdb0987b48a4263a",
".git/objects/08/af4508637da4c0aa1796976d4831e908560aa8": "3dcd2d2418b0bd0496648657473319ae",
".git/objects/08/ffe1a4932db8896a3c577e0d017ac2890200ae": "06afe4972eda61294b3362edfdbc8360",
".git/objects/6d/b7083e82b6e3068e036c659c82c09bb33dcfc0": "515bbcdee78fc25d163765aa1a3d169e",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "510e1327b3e01098af74560b38416c5d",
".git/objects/39/81f23e600d93338349e9ee57986c641aa54527": "8a09a7fd3e5c892e6c1029bad43774f2",
".git/objects/39/b10c79a5eaa067c53d592c7bb3d1b2afefe0d2": "1f4e25b3fb254aaef35d9e0c60450246",
".git/objects/99/db174a0fda65528fabdebc51c031f06ff52c04": "fc3fdd5152a640bd05b4542abad56bda",
".git/objects/99/4c43d7a732c8aa8a67ad120a47c5de321231e7": "8cd33b8a72f0ab43f93178c828a69a67",
".git/objects/52/a99dee41461962a9f1bcd37ec3dd05b56a9b01": "b3d1927e0193860c6bcae6d1ef88a1b6",
".git/objects/55/91431e8872fd63f10ba2a4956137415ea7aeb7": "baed1164f46c5faad9ae25ce0e6fb56b",
".git/objects/97/de3634d6cfcb816399f2154e2b111a75170c3d": "ebcef3ae99810a191fd1c0ccfb0caefa",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "393bd20ca4479f63d811873c30d6025c",
".git/objects/64/976ad1238455d29dd115aaf014275d35d19999": "df074b9f578beee83f48dd9327a3d2cf",
".git/objects/90/e0f36addf7711a95734030f70259a794ceacd0": "62ac38e4956be56ce654a216f877a613",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "69b895d049398297602c9bae31067cc4",
".git/objects/d3/2c994fc82a8b50522eace47fce08d9d4d869c0": "c3ac4198233bbd88ddb9496f9390e60e",
".git/objects/d3/f9f918031626a7769f7998a457606b3e3b0bc2": "fd7ebd3b8dae64448583d1e515c30ee7",
".git/objects/d4/7f4e1f79544928dc4f654a3fae49177afab615": "16086b721f51518aea217b2b90c1627a",
".git/objects/a0/2f248358211e203151a4b34254781d961cf2c7": "a06ff89ebb635a40cfcc366c0cd7dd68",
".git/objects/a7/a6f977f316a855eba954d8f50eb19b6ddc47bf": "29f941276d4d70f9d9a8bcfe38185678",
".git/objects/b8/a85d4a96945f5cb7c267c7ad6f8634fddd0bdb": "78802cba81d3f482ba0acb8bea2ef06e",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "8829ae4d79e43afb9cf0054d13788889",
".git/objects/dd/05b4d9e175c337cf5e75a1e254457de76013cb": "6a74da7836eaa33cc7c239a29441fa04",
".git/objects/dc/41fc4614b0ddc9e06ab430269fe6a197efa424": "f1213e5be1b351b8429c2171dab104d3",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "94421b83efae6762e073b129f771d561",
".git/objects/b6/bfecf352aa39c7b812ff859928c5ce1650dfec": "8ee139fd714fc95de10a01c7ff3dc144",
".git/objects/af/c68ef90543f04d1e9a0edfbb21fc982350b596": "924085ac41a5f4f827e244cd48dae073",
".git/objects/af/a92d72722f18d28856cc0e0f726618cd19f703": "be1183452523083a4fdb23980318558b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b0/ff0d26968c9a90f09ed6a9bbed97a1ae35c83f": "05d6254ef2ddc1408ea18abb71750a11",
".git/objects/b0/add1521b87bb353df651a248b5b41537992291": "98cf211da01e9a3dfa517d380f56669e",
".git/objects/b0/867e19834681a56931a7c6673d1ca9f6a1f166": "70f35d275038326049cb51c2420f2136",
".git/objects/a6/99b0813d4ff73e1a82ff6f942f56c7ec8f75b1": "af171f73787ec29e3adfed5bece31c71",
".git/objects/a6/c03d98622e649cb5e9a9beece3b923d9ec8a30": "cff525a5eb457a5f208e202f3811a440",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/c70d2775c1a431f9262062c5900717aed4922a": "b7a9bb8242fb245c2a1e575afbf0ceb5",
".git/objects/a1/302220819034727ddf529b684902989249d6e5": "109ed0f1009115e30529af72c231aad1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/c3/9525f01a5362b9514711855de82c13214f48c7": "a078e2b54b892b48cdf3f0cd91b5ae9c",
".git/objects/c3/5f20968bea08c64f0b5c44d4aa294b85311014": "55a6b5223e6fb889913afb1445c266f8",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/e6/52767699710661cb5f7523ca8b01deb3f84c08": "3f7bdf576364e70cc61da6633386ba8b",
".git/objects/f0/267b6072cd21e0c305d23e498d71f24ec129ac": "ee3441c43e30ce12205045a75e9f42cd",
".git/objects/e8/92d8f8460fca0e305cf7bb1064e612b249798b": "7ae7a13a390473ca65befb5d9e142000",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "bd7eb44096e752b9c9068f5fbfed869a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "c5cf48f2c852d46c87eb6e4e16bb8ec7",
".git/objects/c2/4b4567b6673e87e9398369c8064ffcb5a7fc7d": "cad164fc9087dd9642995b270b8c1b8d",
".git/objects/f6/fcdef9f40a0f43a533e968be30d0b9c49fbd69": "b80c414acbe99f70a93ce78492794470",
".git/objects/e9/382d514d651792125b9f675fd0214721090a30": "ea7dfc737f4e7f1fbc4f4adae54f6675",
".git/objects/f8/b2a711a5f710c2a423a170897b80d3c305a4d7": "6f955981cf3e59b3652774f8475683b9",
".git/objects/ce/fcf0a25423fa45250fabe4bd8dcdfa2d5c0e64": "a4341e6702a06ced8e79f228e89596db",
".git/objects/e0/51c2b156af209d4cb50291497f45979605768f": "a48c8d0f3074ff7add32e4de6fde1016",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2d/10a31898fa08265226e2d3bb5632f120f6f8db": "4e67d8a391e63cbb00716df0bf43561e",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/48/7952ff7275efd091302968e340f83a69845eec": "b9efe1c24f68724efb0be3cb2872b9c7",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "d08abc64adcad35209ccf7f4a231ffba",
".git/objects/1e/af12122cfed52b5cccbb08191aff700025a2cc": "498bc29a0a12289e7ec1e3eb8ad8f9cd",
".git/objects/23/603b04475f08676b3a84d21500ae061b1ba23e": "475650c14bc3bab834d6b79a911b1ba0",
".git/objects/8c/e0ab11336ea86aad80d207f65e45e0c83bf4ae": "a64cdbb1bc8537d0d0de145e586cfe04",
".git/objects/85/a02263282f9992d21790df85b55d76c934ad41": "302a3a04b0091664b27c0d01fc89aa89",
".git/objects/1d/b85a2d94cc29a4d6bfb7accb574daa6be3cde2": "17975abe264161a57f35899e0cd998c2",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "5b89f3cb7c594655e488320fc77990ee",
".git/objects/82/2e9a3f6448816a591d7300537bd890ad695fab": "b3c5bf277471c801a1555f40fbd9d985",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "108184923108792e9c49be2b8a7ef1d9",
".git/objects/2b/d5a21bde8778bcbfbdcba63bca0f768adb80d1": "111544132b050951f4dfcc9f5f4eba64",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/8b/1a483ccaf7002fd34554ba2d3d09f798b38459": "a86c550cd7b1ad5c8a6df07dd275799e",
".git/objects/7f/e32c7c436100cd85e34613c84bd31cf3a2f86e": "3b74f8f4d264b1f8219ecde6b49f5f03",
".git/objects/8e/0a81fe4ea3ae000175c5c9c8629722836ef76c": "89bab336fe89576dcc1ebe98ffe61a29",
".git/objects/25/fe8d99720911fb50c674eac382e99519bfa395": "209415ce58d6fb6a7e49b7e34416da4f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "7da9ca2b95da71f90c00c735b84a3350",
".git/logs/refs/heads/main": "8132f23c3e0476aeb06fb8909771d44f",
".git/logs/refs/remotes/origin/main": "db57eac16085a84dc0dbfa97e50ba8f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "655089ed10342e97d5be5e7bd0a3efe5",
".git/refs/remotes/origin/main": "655089ed10342e97d5be5e7bd0a3efe5",
".git/index": "624f5ced8ac1bb270b60f7ed133c400b",
".git/COMMIT_EDITMSG": "51714da9bf9e620288dc9af8ccc94172",
"assets/AssetManifest.json": "71b919341d6998744f7c012c4af8a430",
"assets/NOTICES": "e2c26c1560fea24c7b88ac6bcf699ab8",
"assets/FontManifest.json": "ad363d4f7b60ef141a0a28a8bf8672b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/SF-UI-Display-Regular.ttf": "08397c215a9e579b48e778a2fe9b6214",
"assets/fonts/SF-UI-Display-Ultralight.otf": "564c75345b4e8a09a13b3b872e5ba43a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SF-UI-Display-Black.otf": "63f9e85acd5f75ff050441bf589fd2d5",
"assets/assets/task.svg": "ef76b127f51edb16e1c8f5f3a80a1afc",
"assets/assets/receipt.svg": "3cc085dff24ba32e442f2d91cfaa07dd",
"assets/assets/checkout.svg": "80b7b709efea36b9466cacb5b7692eb0",
"assets/assets/wellcome.svg": "e5c4ba08c1a82ef1dc0c72885b61ca05",
"assets/assets/no_data_project.svg": "6a4fef67b26aeca77d6e52ce4144bdf6",
"assets/assets/nopayslip.svg": "37eaaeb7227c7b8a335751559cda64d0",
"assets/assets/google-maps.svg": "de310801d79a6ee81ecf8b45bc54780c",
"assets/assets/pyslip.svg": "469cc0a2cb882ec2d3c3fa6bab1683ce",
"assets/assets/gallery.svg": "b37dc6ca9d33acf9581da8990d0e124b",
"assets/assets/emplyee_maps.png": "58ee0c6fc5b2f35327b4f33ebe0516ac",
"assets/assets/login.svg": "7cfd4e21416983efa66da91cb44b9c29",
"assets/assets/home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/check-in.svg": "0e1dd41a54b97c9ace71ea166ec4c101",
"assets/assets/employees.svg": "2afdf4d814bd0d42af0a62cbf2537aff",
"assets/assets/splass.jpg": "d69a58d59a340396ac6f06e4712fee75",
"assets/assets/photo.png": "66550a11aab753ec42bc745948627b77",
"assets/assets/leave.svg": "93b2b4ad948aa8baefb1383f91df489c",
"assets/assets/fingerprint.png": "4cc5df29c5647ea5e02cb9faf4c05f78",
"assets/assets/nobudget.svg": "abe63c21e9b88f90f51398f042db87a2",
"assets/assets/absent.svg": "ae02fcf0b92f6d28f1f31d7e81a6b9c7",
"assets/assets/absen.jpeg": "fef98f155a07c2070d7b0b6d6c28ab4f",
"assets/assets/permission.svg": "00f23bfee716d2e2a357e129cbfc2ff8",
"assets/assets/notification.svg": "8790c2b00fab925eeac90f83d7cbdbe4",
"assets/assets/budget.svg": "c79b36def6a2a61d933f748f042b076d",
"assets/assets/budgetin.png": "bce14ba9e4c841f6f68a1c0b1941d9e4",
"assets/assets/office.png": "0ca93b57f7cda69450015d796fd6b791",
"assets/assets/camera.svg": "92e346e618611922fce3097119aa76f0",
"assets/assets/map_style.json": "543cb673019b1afbec50e79c7ea426eb",
"assets/assets/sick.svg": "36f7c934a4ae3382a301cd6eef8cef09",
"assets/assets/splassscreen.svg": "2157eed573e5549570c0cd78846ebc2b",
"assets/assets/checkin.png": "640ca97917fe3798fb5c52076c63c186",
"assets/assets/employee_profile.svg": "6a3966fb7a834f454712c4596dd67d99",
"assets/assets/announcement.jpg": "f351709365d4b1ebb70a21130c0c51c4",
"assets/assets/loan.svg": "a795cca3e856e60342066de18afe890a",
"assets/assets/announcement.svg": "f1e5a05df7d29acec02433a3605a9c0a",
"assets/assets/offwork.svg": "437f6ffcbd0978f2a79bb4a4ec2abb09",
"assets/assets/office.svg": "f71699f511216ebd4acf502e111019a3",
"assets/assets/overtimein.png": "f545fa08f3d475e47dc49094948acfb2",
"assets/assets/map.json": "4400a6e5921eda55ece914989e1598d2",
"assets/assets/budgetout.png": "dc5c69a357b9c9f81b428eea71143d88",
"assets/assets/overtimeout.png": "aa40337d7a64bff2529a9dd863a0324c",
"assets/assets/project.svg": "4627670cb8d332eb72b0e5e15e44a973",
"assets/assets/male_avatar.svg": "0c675689f904736df9b4408c1e33da49",
"assets/assets/female_avatar.svg": "31721699225819c35515bc3a7f91f795",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
