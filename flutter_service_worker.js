'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "20e3c4699b6804f1ebe4c9e9faa46692",
".git/config": "665465ce326781a36693c0cf5eebf145",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f0f126ed6192d10221a76b9f8488ad42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f5276ec69686702b8bcf142e31e89a6",
".git/logs/refs/heads/main": "7a42286cc4c4263454b0190716e50a84",
".git/logs/refs/remotes/origin/main": "13426fb20643b6b8a2ea3298b3f747be",
".git/objects/02/bacdaaafa0ff207157fa27298115a3a9832f74": "3c9d097862c6edf3ffff6e16ae2e91f5",
".git/objects/04/54ef8a7068da6c126ceb6110b691c9349cc93e": "f510df741da8b6252a4498576cb93d8c",
".git/objects/06/b26a0e197200d556913db54c86a013e9f9dcce": "2b19e09c6019caf0830a253f35fedab0",
".git/objects/0a/902e5ef7083e586fa0156483538b29a820c6e0": "1cac63f5515f6878193da6fa5656e295",
".git/objects/0b/2b85a537ac3c7cfcee3933a5fed7855e1e5f66": "93c3c6545b7e97edd309a063aeac9182",
".git/objects/0d/f85cad17fc7d27e34992e2f1870a7e78e60da1": "659c4efd27ef46c1675030ae3bef4540",
".git/objects/0e/51349b9ee8c71132310aac46fa25033e20483a": "678007f3dc4cd174d534d685537f3b5f",
".git/objects/11/85b8985f3e0e67f79fb1e12e9d3c25fd0660cc": "2d024239db3d06e9b2ece0fa9046273c",
".git/objects/12/10f67da3105cc4922252c1385ab31937daab1f": "8353e086e4884483a2d5fc12c8d66e44",
".git/objects/14/5b98605137719ca2cb072357fe34bcb2c06c23": "7e5b3ce87f88e7ecf5f8b5fa520ef6ae",
".git/objects/16/93fe88db0cbc046ea02039b211c99e637e806c": "e6f765cfdf2b338ae773a347a26b182b",
".git/objects/19/bdf4d6162ee6dbb005992ae44c548324aa9a00": "7f2d591872da79b2fc2411d478614eb3",
".git/objects/1a/2734a08cda76fae85449a2c36a6cc8b979cf00": "3f32c6676b65ea442b715625dab502a1",
".git/objects/1d/621448e34f91ec327d140acd8310f2a1820fdd": "10e30f83242d2b9834595a602676699a",
".git/objects/1d/eac23d36b9c6d598113c9cfc2fe6007375d733": "bc1c89bc0e92654e07e2a52345859b91",
".git/objects/1f/89743179dfb66b68f76ccb9d10f87ac32cf7a2": "ff4700a84d9f4955965cc64d683e1b64",
".git/objects/22/f5640b44a62a8bead2dd6f7da1ac17a080c4f6": "0aa58101c4bf2f696ebc29d3033879b0",
".git/objects/2a/48d343e6110b50e5fbf1bc2fd59b3e624e79c9": "1aee3031da2d7c86a6429eada4f537f9",
".git/objects/2b/d6bdab57ef6b20a267f6f86a6fcb4243195841": "82d8ef6395248f3b71298431f86a6127",
".git/objects/2d/625788386351c9ddf27e6357fabdd926c059a9": "1c180aac7102e137d89c0a155c544974",
".git/objects/2d/7bfbf0fe9b7f2e95f6d5f8ea20b8cd0eb85c06": "1374e7300bcf73bc5c552e13b5cb7b52",
".git/objects/30/1f75337f92c34bf6abc06dfd18a5522f4b9e5b": "305ee6d690c0b54e07e4749f6d6d02e9",
".git/objects/36/71e4c57837b6e9557e0fe9da5a99517c7ddd18": "387c1769d59b198686bbba1cfe69fbc8",
".git/objects/37/a1156ef8194849cfa9942b560fcfce57ee1054": "4d51094bfe9d1f8c0d9aadeabf6acd49",
".git/objects/38/0133cb8f3623bbe5440ee08d831bcb3005719e": "29e8715cebef4ac21d9fdb4f40abb62b",
".git/objects/38/43727c54f9896f28efafe7e6d03dd4d62b0f4f": "ea6ee5d61722008291444036b8ca011a",
".git/objects/3a/225ceaf2d500334c95af569d3a483676994a05": "c7aabf009546b2d16df3f3b27b12b660",
".git/objects/3e/3c2ea8f6e39f600f56b844ef351b6143c626c8": "a842a114dedbb3e3fab8c21dfce84fc6",
".git/objects/3f/b2c92a59884a638093b578528a6cf5a43e2a81": "5864955423ac5e7ac116dc54c580cf20",
".git/objects/44/2a0c7c085dff9b6e5ba0d1e005bdc25aba3538": "b273ba7ab4a551ff619a698cf0d2e8a2",
".git/objects/47/3954f1286e1ee931c3187e87025f112de3db23": "ac39c3bd87a85b0a3dee5d1d267784fc",
".git/objects/49/5f4584f926eeab2f73994633aa2ae62c29bc76": "022c939bce57f77484f2494c813a267f",
".git/objects/49/e536892743a10e06b14401540e904909673177": "0393d0e7398598c20688d3781874db62",
".git/objects/4a/2141eea805991452f833ddc5f8d4da4e6f35be": "ee32e6f03fc3e7d90c64d86d4bedcabc",
".git/objects/4a/d09759e2446418626cd720aa8a22f199b6f103": "ef318f489c613fd2a648385c015dee89",
".git/objects/4b/59bb96f2a878e442408ad38826b5794af49b43": "ca5765c4d46e3c8a46ac8441f02042ec",
".git/objects/4b/d487b56bfb5dc1eded17c3e177a55f7eb79b20": "390cd47503862683bd79f88002794165",
".git/objects/4d/419190ca75c3da2882dc9714cba792b776022c": "314fa3361562fc827e73286a8ba69c35",
".git/objects/50/c890aadb871a7162ac40c516a9b0840410665b": "8a0f8d9a628a6ec06d3ac56375e6aae2",
".git/objects/52/6ba90cc1cb5180c9586117c4d8f5fd3977fa22": "aaf36d61500cf93ade93972e6fa1fb67",
".git/objects/54/8763e41a4e4ee4d45c52b61e15a6091df8fdbc": "530710e2e0d646a69d3e061b0ec5497f",
".git/objects/58/c8b68aaa3995b7de177648a74ade556b658354": "c813ee8f4b8b787b5aafce42eb8e9bde",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/5c/0fa34ee49b9d353b02c8cb36e5cebfe32e56d2": "bc272b09bcc8aed8797255feba30216f",
".git/objects/5e/2860ef00e80ffa15f895dd14e29358a3c38930": "bf29a534118ea62c32467ef50d135278",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/62/498c5d2707e11c89b8c46d0cfaa94e22abcc68": "dd97256586f5fc150a544ecc37a71c20",
".git/objects/64/a6411d2d2fc58e56b336d3dff500e91a11be33": "f4157323294a9ea4a9a642ca334bb2ef",
".git/objects/65/288427e103fbaa18f5b70514d7ab02779b43d6": "8b4910873d3cdc60cf0fe8ce44495ecf",
".git/objects/67/1d0105e0574d63ff5352e6d4f239e01713b34a": "c0b0385fb78f741afc427ca340badfac",
".git/objects/67/4b05e864fbebf07cec5c55c7435958d9fe2408": "7ab8a35aa71ba7f7da3cf2e8500eac11",
".git/objects/69/e59a4f3b5c4ce514dbaca8ccf7dd1a30688248": "c1f5f767343a9682ef88155e808ee554",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/735a4753576fc522734f6c50e26185799d3074": "e96ed51356752ca58f7de6b101d02541",
".git/objects/6c/dc079c5131dcd721198a4cc3bac3d3467a56fe": "fce77930fff063950c2111fcc32a4707",
".git/objects/71/687a1d215fc7e4f4dad663c3ad2c9632aa35b0": "722eb8a04be447f47521a5d3fff8fe6f",
".git/objects/72/569b6c1551c52fee87d08feeb709ee261994d8": "3828c88bae508ef981a5dcb246076a35",
".git/objects/73/a8dea833b69d6e5f5e4ddf5cb90560e6477ead": "551ddea4492a1ba09d6ec82e0fd5b59b",
".git/objects/75/6c3eb78d7c39d7bd71a16b245765a376bc4f93": "55ad230ad44ee9ecedd2fda2e690583f",
".git/objects/77/7902457103353f2c5821af79c01ae2b218c4ee": "45acc5c2b206c718689369d7a47e84da",
".git/objects/78/8415f316d70d918ae7daa0ca6aabdc0cf02077": "5b284e651aae0890d9870328c4e0c128",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/ee02bc887244943e7e9cc6fd56ce0c82d1d203": "6397c9dcad42c90460eb0572fc632089",
".git/objects/7f/9cbfff80f10102879dfe11a745797222f9097b": "5f30c16a767c50f4a427c845a4584939",
".git/objects/81/0b5f5445809e481b68388e450f1b23cae8d102": "9625a84c6bee0b705d6bc45057704c5a",
".git/objects/82/0c4acc026048fa7178930ffd8f98ccc020f849": "daf9ec53d8a9b40e1ed34251e778fcda",
".git/objects/83/d1742d7ce810bdaa3577db7c40850f3fd38505": "cb0880b1fe8e3ace80c428939d14b45e",
".git/objects/86/44e6764363f1222b53b0c6355a26699e0912bb": "425f766f55f356971a78592442e04cbb",
".git/objects/87/96faf2d5183e3d579285ebcb360408a90752cc": "06cb0b90395916847f6ed01293734aa5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ae45dd40e86dc8bffe3922d5c963ce67115157": "1445b2c9007432284161a332a0d9ff68",
".git/objects/8c/a99567bfc2529ed6d4a56fd502ca3d97be6480": "7ff771b35b1fd590ce8101ed51b2006c",
".git/objects/8d/1462f4e06cb214d438d615b45210307fb72926": "69bb71b5b9452e2be1a9d91cd247416e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/a8945e7f17f29216b81ed581d796f559424990": "8b915e0fdcab1b456ba2896ccce5296f",
".git/objects/9a/8960c12fe62e6487f6fbe529371973ddc51314": "e52eac2ef07c0708c221f2378b157e88",
".git/objects/9b/c4b4c4396b361e29700d6a693aed7d316314e6": "686715eeb2b3657f878a38060169026e",
".git/objects/9b/f79350e77f6da0e1055f6ab74f5fa8d54e0d5c": "2ca774cf3a7b9eb1c706e56eb6d00451",
".git/objects/9c/b8aa5e921285c13edc3730c12e46065664e3fa": "cac835614e462d673aeda6c2f5f02472",
".git/objects/a1/1d3e61305c1d18a4eb6a9447fd2f2d8b59e38d": "8ce33ed144b3cf8ec9269c095378d5e2",
".git/objects/a3/390f3bde009c457203699cb03886abd0993599": "e68efbade710bbdf86caf84a9611ecf4",
".git/objects/aa/de3e1f9fbf9787e21c3b3e2db4ae3b07dc0049": "056e4aeaade93fcf7aefb007075a385f",
".git/objects/aa/f5e754db5a5e3017aef82407baa41a143fca18": "3b54bb0715c419f0a50e836a44e15f42",
".git/objects/ac/a938fb9d6bbd81d0e9470670126e6af66567ed": "f694ecf9561a3cb8245708d463356a9a",
".git/objects/af/a2bcdbe4fcf4f751d5137cc641e7bf49710040": "e1c1873a7eaf14c511cb3414b0439a13",
".git/objects/b0/5cdb59efbe5597a05f32a5068bcc96e0af17d6": "3b7cc9c0b8981a3753aaea78f4a7d59a",
".git/objects/b0/5e9a796c380ee6cbae0b61f1cc6e09c9e0a607": "d0e940505d397e3fa4e09c939188ab0d",
".git/objects/b2/01b46d1442df29d5ac21c63a35a27d86f2e4d8": "f24c4a9abbb90c8cee0b161f9e0c2ff8",
".git/objects/b2/7a8600182136e3a85c584d185d21cb04154eb4": "77cc2033a4bf4d173c5b3a0d31787f0c",
".git/objects/b3/1fd1cb6e1fcb90760bb33dc9054aa82767f11f": "fcffe010373875e844b178ddfd356ce4",
".git/objects/b4/7404e1436c13b2da82fbd743e5af63925e0fa5": "f61c37150dfd0fe0249dcba289741644",
".git/objects/b5/2d5f82e08b5b9ffeb412fa063ab9893addc2fc": "8ad043406bae26864a8df613bdf72c1a",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/68d2125225496dbd728b8ad6afd4cb82568597": "a4fb6b50393484678fb640d679180f17",
".git/objects/b9/0a47ba612c69f3ae614fb9dced34c2e8f1afef": "76d7facefd98e639b065102b8d6c0a7a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/78bcf3cacb65109e8148a50cbd50ec6037a891": "a92ef55e380c7c615b898ff7381c1723",
".git/objects/c1/6aac0a6c77e05d0ea16feeafa66ab49bfe7699": "ef6092a60b53906e26df0ef555a0ee43",
".git/objects/c4/849e9afead55b5940e0f7e9957ac0cc25eb942": "2306fc0e0bda214f3c45eb99b93b1771",
".git/objects/c6/271b99aed031466e7a2ebcdb66633b1c6d9aee": "347f06595c1437069f4af365f23bf000",
".git/objects/c8/ae5bd6ab3695be651ecae28b0841695c2dd7db": "73b84533162917d3799f33f8e97be59c",
".git/objects/ca/02a8e72ef4e08aa30967f73423c9f12af62d4b": "aee642d65cdf1f89c22b6f2ef4145392",
".git/objects/cb/cca1046125fe76666e7feec27be490c72d86b2": "b9b6de797011b9383668ccaaf58b181f",
".git/objects/cc/5f208248c8ebeec5a3d6d49186c22fdd04a75b": "6c7443180e6d5e439923733f8576d7f0",
".git/objects/ce/d804f36777401b1d50a8b367abb781044e9f38": "3fb42bc36bb1031a7b577ab0fa51954c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/d1b4845640ad07483af7ef2781c04a34b8696a": "d4645e118e560114483606aa23b9b584",
".git/objects/d0/08dcb4e3858b917d0654f1a3c894b087eeb2e4": "5e14b5dfc75ad74765552c348e298da7",
".git/objects/d3/2b365e2cad5c3928d8d198f833845c41c69d4c": "399afeed89336ffb227d961612aa3d6a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/679adebeb8a565d0448ed739438816705ee117": "363883a206944e175b868730998815b6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/439a5c92cbabd24ff5b38d76c139fc3059e974": "2b33499d997aa035c4366e204696862d",
".git/objects/db/f7e03add2fcf4b4fee4cdc9e3e7074898a6afe": "39d3eef83732ac1193ae54a34a5cd08d",
".git/objects/e2/54db27389569f46d35b94b7c62ea8277eeb46c": "6811cf60ba1afef9889b6a3a6b25994b",
".git/objects/e2/bbf0b5b56efd7562a7e881a6aad8478a4efa7e": "2abced332ecf23c477f322e5a16acbac",
".git/objects/e4/0718833b29cdf23be13d55aa764f7a95e7640c": "b7e33d849ba52b1d1eafc43ca4ae0f5a",
".git/objects/e4/55545f90c67549ffe80eaeb9ed0b7ec44052e1": "743a2863dfa6d5064cc288fbd419ae47",
".git/objects/e5/edd34f8958589528502e7a993025c45c067499": "0fc6fb9cc202ebb2842ec8fd212090aa",
".git/objects/e6/6e056ac0c4cdba8746bee76a6717b982bb8537": "c6aa67e9e004c8a1c4e287dac3b94e7b",
".git/objects/e7/0fc9f41f74828e56e7bcd84e043d7bd31b1099": "eabe12fe1f3440a1650a9cb346e63896",
".git/objects/e7/852761c5509ac9a2e345f632d7f66060a8a272": "7a222bacc031296a3291c9f471dfb999",
".git/objects/e8/b1070d381236af4c544f346f96f4f28792dc55": "26c1a49025336803a3d809063d8b0cf3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/b8a39c17ab8bba89beb4c0ae85f0b7b8b1b713": "34c4241474131baf1e527e54a73ba3cb",
".git/objects/ea/5d8ceefcd8a9b75ad5614a9b622cae342e7832": "255abe7e9c9e6973e7dc6fdb61b28074",
".git/objects/eb/67c5777e8484e9ca44318c535377aec1a2c083": "16b6eae5bd6c5ee7165409fdbfe2a06d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/2b66f335d30d0e34d2126ab408a70685c823b9": "7974ebb71264a71edf64908f082ff745",
".git/objects/ef/771fc549a1a2c8410a03d1d38ee121a602d761": "9a1eeb0d1f3979be3c33a163b881539d",
".git/objects/ef/f994c652c2b6f3337117c1c3791b2c8730dc55": "0bf3612995e400f74d18f50ba5854ae3",
".git/objects/f0/000577f5408f61c04f90efdfd26a66c1f0d881": "7f4114f148867cfd4cae518c7a114c7d",
".git/objects/f4/42c75304f2238d3c50951e54f1bc456f4da5fd": "5dabaec3d6eea133e1cb053139b63767",
".git/objects/f4/709544189e7be9a65ac74eb4953b98df408243": "4f733bf50f65c433b443e1d028d963db",
".git/objects/f5/1cadf561465a41372eb994e4b0c9df02b9ec10": "1f35324251a0723a17f2e1830cd2e382",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/7b269ab213eb61e3c9f02c1e8ab89040db59db": "77fecbdb846ebdc278a04716f26d6874",
".git/objects/f7/bc842a601dbfabf389dc7379a73c907e000a3f": "b30da4630cbdd67e37046813667c87c4",
".git/objects/fe/1fa26c470c2af5e37f7cf2b574c73eac2a5a25": "5db4ad05d7ac7aac50d2a19a039023a5",
".git/refs/heads/main": "2c5249086f3bfdd97f87c52076b12891",
".git/refs/remotes/origin/main": "2c5249086f3bfdd97f87c52076b12891",
"assets/AssetManifest.bin": "2e3c3eba81375fe328c27157aa321450",
"assets/AssetManifest.bin.json": "e7c795f47b0b6c131eface6c4f756dbc",
"assets/assets/icons/abdominal.svg": "b184a4b3c0a09767e8a272a82684a210",
"assets/assets/icons/dental.svg": "821dc096c824f0291097418efcb540e0",
"assets/assets/icons/dermatology.svg": "2e0ce0a73d2e8554cd165d270d5d9c91",
"assets/assets/icons/ear.svg": "0333e34eb817097ce9598227766dea32",
"assets/assets/icons/emergency.svg": "da0db308787f6052e390ec5bfa96a38b",
"assets/assets/icons/extra%2520service@2x.png": "5dda22ee20ada1351b68ab4f4590eee9",
"assets/assets/icons/eye.svg": "aa8508a9de76ac512c72cd2aebe23d97",
"assets/assets/icons/facebook.svg": "5bd4b087589bbf1bc6557fca8e331dc4",
"assets/assets/icons/female.jpeg": "d15b7eec11dc2a13436e717656e476a7",
"assets/assets/icons/heart.svg": "a345c75f6570310e4158f8ee976dee27",
"assets/assets/icons/intoxication.svg": "3b4919f1599a8ef6fac026a7b8883864",
"assets/assets/icons/kidney.svg": "203420a379fe58adcb9e65908cde4bda",
"assets/assets/icons/male.jpeg": "32aac751d5252999f19e58800c30d75f",
"assets/assets/icons/neurology.svg": "ff863c6e20c27e79d28754b026e0b143",
"assets/assets/icons/nursing.svg": "0d6680b3b008fbe7c12fcbf36a75857c",
"assets/assets/icons/orthopedic.svg": "ef288a550505affdec14e31ef5b2e6ea",
"assets/assets/icons/pet.svg": "e6f536f80a525cc62711827e06a7b14d",
"assets/assets/icons/psychiatric.svg": "ff863c6e20c27e79d28754b026e0b143",
"assets/assets/images/20824307_6358740%25201.svg": "8100c24026b414b858e7bed6cc292712",
"assets/assets/images/8611174_3929710%25201.png": "df9f981b2375146aa7b92f74ece65276",
"assets/assets/images/8611174_3929710%25201.svg": "26aa51029c0f8a38a63f329d8b3bc734",
"assets/assets/images/9019197_4059668%25201.svg": "8e6559e48d2249813c37c54edb95ec1f",
"assets/assets/images/accident_and_emergency%25201.svg": "d098908d9efc3b8003bbb908d2f30b25",
"assets/assets/images/allergies%25201.svg": "94a5d6cfb9ae823c8ae35cd3e8746eea",
"assets/assets/images/amex-svgrepo-com%25201.svg": "b6a33ccd99bb1d24f6c9d9c315a4d42b",
"assets/assets/images/amex.png": "92d9c267c80167fb9d86a9e2bb33c156",
"assets/assets/images/animal.jpg": "6dc07a27b7f95ed3d840c5fc8f58b1a5",
"assets/assets/images/avatar.png": "dfed516a852f6eaef48db3a59deca7e3",
"assets/assets/images/clincs.jpg": "84ae60972493f003ff54cbb1f5ed8e25",
"assets/assets/images/colon%25201.svg": "623e295b871bcd6e473d8de220dfaa16",
"assets/assets/images/community_healthworker%25201.svg": "68d91c8f33991eb878379fbcfa125e84",
"assets/assets/images/coughing_alt%25201.svg": "4f3213ef35de1cf27f0c83449f020062",
"assets/assets/images/ear%25201.svg": "342d493f4250c5ea373360294895e3bb",
"assets/assets/images/eye%25201.svg": "395cdce857ea24b79260da850e7a54ed",
"assets/assets/images/female.jpeg": "d15b7eec11dc2a13436e717656e476a7",
"assets/assets/images/Frame-1.svg": "956c0343d447d883352c912c27fbfcfb",
"assets/assets/images/Frame-10.svg": "7eeb204d3d01e7e0ad174f805ec80e90",
"assets/assets/images/Frame-11.svg": "2ab6cafffabc95d3ac0d849150113767",
"assets/assets/images/Frame-12.svg": "8d6b3dcdef7dce0f7475d2690900954e",
"assets/assets/images/Frame-13.svg": "05e12c3e7a7e8fa6df84df954eefce2d",
"assets/assets/images/Frame-14.svg": "07a65638354eb258fb4364d8582fa5d2",
"assets/assets/images/Frame-15.svg": "5e83f0a571c9470f8cc63d0a0af5d8d6",
"assets/assets/images/Frame-16.svg": "72d589781b338d386734eaf1af1e5b0d",
"assets/assets/images/Frame-17.svg": "a26450c6840dfdd1abf490a99bf5c817",
"assets/assets/images/Frame-18.svg": "b422255911b3e0fb2d5130ac450581b9",
"assets/assets/images/Frame-19.svg": "9972dcdbd3ed5c2c3460cdce1f3e6090",
"assets/assets/images/Frame-2.svg": "b2ba823d7fbd6df9a1c447ad2d13e192",
"assets/assets/images/Frame-20.svg": "2b4677cac4ebaa55424172ebf4a1f37e",
"assets/assets/images/Frame-21.svg": "c0f4950ff74301ab78cd08d42a9b9423",
"assets/assets/images/Frame-3.svg": "2b4677cac4ebaa55424172ebf4a1f37e",
"assets/assets/images/Frame-4.svg": "e63e46f327323726264841c724438c51",
"assets/assets/images/Frame-5.svg": "ccebbf84239d0df22ce4d1ea6ec019e7",
"assets/assets/images/Frame-6.svg": "2d542011a67ec5bb3158eec252febc42",
"assets/assets/images/Frame-7.svg": "7835ad3968eb51ba9ac848dc75c6741e",
"assets/assets/images/Frame-8.svg": "fba38782f7f2cf19432ca49cfbd17897",
"assets/assets/images/Frame-9.svg": "930c46f1cf4d63e9420d73343871295c",
"assets/assets/images/Frame.svg": "32bf9d4b39b1b9ddab373e2580e9faaa",
"assets/assets/images/guide-dog%25201.svg": "38fd4414bde23d130a69f7686b1c4407",
"assets/assets/images/heart_organ%25201.svg": "b9be27493a16c66116f05414c38b960d",
"assets/assets/images/horizontal%2520color.png": "5394f489b975990565f614f0ba033277",
"assets/assets/images/idZc1RFBzO_logos%25201.svg": "30b116640fc4ccc8c04d4a1a0a269285",
"assets/assets/images/instaclinic-logo.json": "9de8a6a78236952c257f36654a71dabe",
"assets/assets/images/intravenous_drip%25201.svg": "544a354b70d68d55d17bb34f50ce61db",
"assets/assets/images/joints%25201.svg": "c7c71a244e37815fc514d200eea767dc",
"assets/assets/images/kidneys%25203.svg": "6a58babd60e2ec9a5eacddcfcf272e00",
"assets/assets/images/liver%25201.svg": "8b872ddeefbd6b0ba923b047286aee84",
"assets/assets/images/logo2.png": "105a2bc4a2e82ddcf53b435602434b74",
"assets/assets/images/male.jpeg": "32aac751d5252999f19e58800c30d75f",
"assets/assets/images/mastercard-svgrepo-com%25202.svg": "412c8ce379350c43ca11f07a79e8f6a4",
"assets/assets/images/mastercard.png": "c7034032071c31c852a811bd550ed9d5",
"assets/assets/images/mental_health%25201.svg": "41f8f087a15982c1bfea9708b97f8225",
"assets/assets/images/nerve%25201.svg": "7d2968dc60c1b5ffca919360c8dc301a",
"assets/assets/images/paymob.png": "5ea9f40adb99e78d24d772dd37f4181d",
"assets/assets/images/poison%25201.svg": "0c6507ccad660c4ebd17d2cfddb49379",
"assets/assets/images/profile%2520icon-1.svg": "d2d158c12fc931088de88a1d0501841a",
"assets/assets/images/profile%2520icon.svg": "e8e3906e53408d194dfe65d7a4155bf2",
"assets/assets/images/special.png": "477b2b33842c8555e57ccbfefe634511",
"assets/assets/images/tooth%25201.svg": "670dd5fb5158ede1548b3c68c0548a66",
"assets/assets/images/vertical%2520color-2.png": "b826d8b3cba96adf421f6aa5715b7d9d",
"assets/assets/images/visa-svgrepo-com%25201.svg": "557085c0899072ed76a679af9fde9c61",
"assets/assets/images/visa.png": "b6a0e958cdbd70663e9cb523ad3b9306",
"assets/assets/images/wave%2520BG@2x.png": "5b509b0ed6df5a495e0d6a1ae5b6344b",
"assets/assets/images/weaccept.png": "3835db4a04e3bb1f45aeec12b83d9538",
"assets/assets/images/whatsapp-white-icon%25201.svg": "5dcede46ac38876defcb695d6415950b",
"assets/config.env": "e76dd564b602d9fe1848374712e1fec0",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "251249155b03d232bb8ca75c0384176c",
"assets/NOTICES": "6db977b1e4ce3296f639cf39350bfa87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "950e358c056a65a3fe2c55fc6b76779a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "d27e66928fc257409c5b285ca140647d",
"canvaskit/canvaskit.wasm": "0601f94e5ba7422d7d0f15082f291f59",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "c21f552d607bfd35d6c2c65e7594e17b",
"canvaskit/chromium/canvaskit.wasm": "a3ac017bb86e93f8e7aa79afdb9a6a7a",
"canvaskit/skwasm.js": "95f1685cbe3a3e1d94cac24eb0148a02",
"canvaskit/skwasm.js.symbols": "1a5b8c8bd31b6b53fd8a420bfc634397",
"canvaskit/skwasm.wasm": "87c3f232cc3c98bc37a5857ce259dcb5",
"canvaskit/skwasm_heavy.js": "53b1d7d620269ae543e0dc5311a07f49",
"canvaskit/skwasm_heavy.js.symbols": "3b16e8e140eebd4a10c80852be7e9354",
"canvaskit/skwasm_heavy.wasm": "7d6fb8111343b68829a36dfba156fc57",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "35408b1be0f5de68cc5d1c5175d717ed",
"flutter_bootstrap.js": "4e2ca29e33c747cd9a5ac4c599516110",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94c6cf351b0dee65dfeacf9ff2f944ab",
"/": "94c6cf351b0dee65dfeacf9ff2f944ab",
"index_final.zip": "b03ee24c08af20a4e18de9c1a28aedad",
"main.dart.js": "dcb867d5f80b57029eaa988ff5a16723",
"manifest.json": "719d0ff6eae49b4fda883ba541443762",
"splash/img/dark-1x.png": "e8de9adfbd812a09ad0275fb539c0500",
"splash/img/dark-2x.png": "92392bbc9e6f9a822f51772513f779cd",
"splash/img/dark-3x.png": "6fc123680d97a4dbfdf85754f3e7b2dd",
"splash/img/dark-4x.png": "431c23b291b3e5e3e7e8897b0eb79a72",
"splash/img/light-1x.png": "e8de9adfbd812a09ad0275fb539c0500",
"splash/img/light-2x.png": "92392bbc9e6f9a822f51772513f779cd",
"splash/img/light-3x.png": "6fc123680d97a4dbfdf85754f3e7b2dd",
"splash/img/light-4x.png": "431c23b291b3e5e3e7e8897b0eb79a72",
"splash.zip": "abba60150b825c2f1226fc47b7755da8",
"version.json": "c1a8a419c257d95a5641c1b100628c55"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
