var config = { population: 10000,runtime: 120,duration: 120,timeUnit: 'days',infectionProbability: 0.1,ser1InitInfected: 200,ser2InitInfected: 200,ser1InitResistant: 500,ser2InitResistant: 500,};var results = [{"timeStep":0,"susceptible1":9300,"susceptible2":9300,"infected1":200,"infected2":200,"resistant1":500,"resistant2":500},{"timeStep":1,"susceptible1":9300,"susceptible2":9300,"infected1":200,"infected2":200,"resistant1":500,"resistant2":500},{"timeStep":2,"susceptible1":9300,"susceptible2":9300,"infected1":200,"infected2":200,"resistant1":500,"resistant2":500},{"timeStep":3,"susceptible1":9300,"susceptible2":9300,"infected1":200,"infected2":200,"resistant1":500,"resistant2":500},{"timeStep":4,"susceptible1":9300,"susceptible2":9300,"infected1":200,"infected2":200,"resistant1":500,"resistant2":500},{"timeStep":5,"susceptible1":9300,"susceptible2":9259,"infected1":200,"infected2":241,"resistant1":500,"resistant2":500},{"timeStep":6,"susceptible1":9300,"susceptible2":9219,"infected1":200,"infected2":281,"resistant1":500,"resistant2":500},{"timeStep":7,"susceptible1":9202,"susceptible2":9191,"infected1":298,"infected2":309,"resistant1":500,"resistant2":500},{"timeStep":8,"susceptible1":9120,"susceptible2":9168,"infected1":380,"infected2":332,"resistant1":500,"resistant2":500},{"timeStep":9,"susceptible1":9046,"susceptible2":9139,"infected1":454,"infected2":320,"resistant1":500,"resistant2":541},{"timeStep":10,"susceptible1":8982,"susceptible2":9107,"infected1":518,"infected2":312,"resistant1":500,"resistant2":581},{"timeStep":11,"susceptible1":8925,"susceptible2":9067,"infected1":477,"infected2":324,"resistant1":598,"resistant2":609},{"timeStep":12,"susceptible1":8864,"susceptible2":9030,"infected1":456,"infected2":338,"resistant1":680,"resistant2":632},{"timeStep":13,"susceptible1":8814,"susceptible2":8994,"infected1":432,"infected2":345,"resistant1":754,"resistant2":661},{"timeStep":14,"susceptible1":8780,"susceptible2":8962,"infected1":402,"infected2":345,"resistant1":818,"resistant2":693},{"timeStep":15,"susceptible1":8692,"susceptible2":8934,"infected1":433,"infected2":333,"resistant1":875,"resistant2":733},{"timeStep":16,"susceptible1":8598,"susceptible2":8905,"infected1":466,"infected2":325,"resistant1":936,"resistant2":770},{"timeStep":17,"susceptible1":8466,"susceptible2":8876,"infected1":548,"infected2":318,"resistant1":986,"resistant2":806},{"timeStep":18,"susceptible1":8341,"susceptible2":8832,"infected1":639,"infected2":330,"resistant1":1020,"resistant2":838},{"timeStep":19,"susceptible1":8210,"susceptible2":8798,"infected1":682,"infected2":336,"resistant1":1108,"resistant2":866},{"timeStep":20,"susceptible1":8107,"susceptible2":8765,"infected1":691,"infected2":340,"resistant1":1202,"resistant2":895},{"timeStep":21,"susceptible1":8010,"susceptible2":8726,"infected1":656,"infected2":350,"resistant1":1334,"resistant2":924},{"timeStep":22,"susceptible1":7927,"susceptible2":8696,"infected1":614,"infected2":336,"resistant1":1459,"resistant2":968},{"timeStep":23,"susceptible1":7832,"susceptible2":8669,"infected1":578,"infected2":329,"resistant1":1590,"resistant2":1002},{"timeStep":24,"susceptible1":7730,"susceptible2":8629,"infected1":577,"infected2":336,"resistant1":1693,"resistant2":1035},{"timeStep":25,"susceptible1":7592,"susceptible2":8592,"infected1":618,"infected2":334,"resistant1":1790,"resistant2":1074},{"timeStep":26,"susceptible1":7457,"susceptible2":8566,"infected1":670,"infected2":330,"resistant1":1873,"resistant2":1104},{"timeStep":27,"susceptible1":7287,"susceptible2":8519,"infected1":745,"infected2":350,"resistant1":1968,"resistant2":1131},{"timeStep":28,"susceptible1":7144,"susceptible2":8474,"infected1":786,"infected2":355,"resistant1":2070,"resistant2":1171},{"timeStep":29,"susceptible1":7020,"susceptible2":8433,"infected1":772,"infected2":359,"resistant1":2208,"resistant2":1208},{"timeStep":30,"susceptible1":6899,"susceptible2":8388,"infected1":758,"infected2":378,"resistant1":2343,"resistant2":1234},{"timeStep":31,"susceptible1":6785,"susceptible2":8344,"infected1":702,"infected2":375,"resistant1":2513,"resistant2":1281},{"timeStep":32,"susceptible1":6678,"susceptible2":8291,"infected1":666,"infected2":383,"resistant1":2656,"resistant2":1326},{"timeStep":33,"susceptible1":6560,"susceptible2":8240,"infected1":660,"infected2":393,"resistant1":2780,"resistant2":1367},{"timeStep":34,"susceptible1":6429,"susceptible2":8186,"infected1":670,"infected2":402,"resistant1":2901,"resistant2":1412},{"timeStep":35,"susceptible1":6302,"susceptible2":8143,"infected1":683,"infected2":401,"resistant1":3015,"resistant2":1456},{"timeStep":36,"susceptible1":6157,"susceptible2":8075,"infected1":721,"infected2":416,"resistant1":3122,"resistant2":1509},{"timeStep":37,"susceptible1":6026,"susceptible2":8013,"infected1":734,"infected2":427,"resistant1":3240,"resistant2":1560},{"timeStep":38,"susceptible1":5915,"susceptible2":7939,"infected1":714,"infected2":447,"resistant1":3371,"resistant2":1614},{"timeStep":39,"susceptible1":5797,"susceptible2":7869,"infected1":705,"infected2":474,"resistant1":3498,"resistant2":1657},{"timeStep":40,"susceptible1":5681,"susceptible2":7796,"infected1":676,"infected2":479,"resistant1":3643,"resistant2":1725},{"timeStep":41,"susceptible1":5570,"susceptible2":7731,"infected1":656,"infected2":482,"resistant1":3774,"resistant2":1787},{"timeStep":42,"susceptible1":5488,"susceptible2":7674,"infected1":627,"infected2":465,"resistant1":3885,"resistant2":1861},{"timeStep":43,"susceptible1":5386,"susceptible2":7615,"infected1":611,"infected2":454,"resistant1":4003,"resistant2":1931},{"timeStep":44,"susceptible1":5277,"susceptible2":7542,"infected1":604,"infected2":454,"resistant1":4119,"resistant2":2004},{"timeStep":45,"susceptible1":5180,"susceptible2":7463,"infected1":590,"infected2":468,"resistant1":4230,"resistant2":2069},{"timeStep":46,"susceptible1":5088,"susceptible2":7373,"infected1":600,"infected2":501,"resistant1":4312,"resistant2":2126},{"timeStep":47,"susceptible1":4975,"susceptible2":7294,"infected1":611,"infected2":521,"resistant1":4414,"resistant2":2185},{"timeStep":48,"susceptible1":4886,"susceptible2":7199,"infected1":591,"infected2":543,"resistant1":4523,"resistant2":2258},{"timeStep":49,"susceptible1":4798,"susceptible2":7111,"infected1":582,"infected2":552,"resistant1":4620,"resistant2":2337},{"timeStep":50,"susceptible1":4725,"susceptible2":7012,"infected1":563,"infected2":561,"resistant1":4712,"resistant2":2427},{"timeStep":51,"susceptible1":4648,"susceptible2":6925,"infected1":527,"infected2":569,"resistant1":4825,"resistant2":2506},{"timeStep":52,"susceptible1":4585,"susceptible2":6838,"infected1":501,"infected2":561,"resistant1":4914,"resistant2":2601},{"timeStep":53,"susceptible1":4508,"susceptible2":6743,"infected1":490,"infected2":568,"resistant1":5002,"resistant2":2689},{"timeStep":54,"susceptible1":4436,"susceptible2":6623,"infected1":489,"infected2":589,"resistant1":5075,"resistant2":2788},{"timeStep":55,"susceptible1":4370,"susceptible2":6525,"infected1":478,"infected2":600,"resistant1":5152,"resistant2":2875},{"timeStep":56,"susceptible1":4291,"susceptible2":6419,"infected1":494,"infected2":619,"resistant1":5215,"resistant2":2962},{"timeStep":57,"susceptible1":4220,"susceptible2":6319,"infected1":488,"infected2":624,"resistant1":5292,"resistant2":3057},{"timeStep":58,"susceptible1":4160,"susceptible2":6210,"infected1":476,"infected2":613,"resistant1":5364,"resistant2":3177},{"timeStep":59,"susceptible1":4097,"susceptible2":6099,"infected1":473,"infected2":626,"resistant1":5430,"resistant2":3275},{"timeStep":60,"susceptible1":4040,"susceptible2":5988,"infected1":451,"infected2":631,"resistant1":5509,"resistant2":3381},{"timeStep":61,"susceptible1":3989,"susceptible2":5876,"infected1":431,"infected2":643,"resistant1":5580,"resistant2":3481},{"timeStep":62,"susceptible1":3943,"susceptible2":5773,"infected1":417,"infected2":637,"resistant1":5640,"resistant2":3590},{"timeStep":63,"susceptible1":3907,"susceptible2":5672,"infected1":390,"infected2":627,"resistant1":5703,"resistant2":3701},{"timeStep":64,"susceptible1":3859,"susceptible2":5560,"infected1":381,"infected2":628,"resistant1":5760,"resistant2":3812},{"timeStep":65,"susceptible1":3815,"susceptible2":5451,"infected1":374,"infected2":625,"resistant1":5811,"resistant2":3924},{"timeStep":66,"susceptible1":3761,"susceptible2":5348,"infected1":382,"infected2":625,"resistant1":5857,"resistant2":4027},{"timeStep":67,"susceptible1":3717,"susceptible2":5232,"infected1":390,"infected2":640,"resistant1":5893,"resistant2":4128},{"timeStep":68,"susceptible1":3688,"susceptible2":5117,"infected1":371,"infected2":643,"resistant1":5941,"resistant2":4240},{"timeStep":69,"susceptible1":3656,"susceptible2":5015,"infected1":359,"infected2":636,"resistant1":5985,"resistant2":4349},{"timeStep":70,"susceptible1":3624,"susceptible2":4929,"infected1":337,"infected2":619,"resistant1":6039,"resistant2":4452},{"timeStep":71,"susceptible1":3601,"susceptible2":4816,"infected1":316,"infected2":616,"resistant1":6083,"resistant2":4568},{"timeStep":72,"susceptible1":3569,"susceptible2":4731,"infected1":319,"infected2":586,"resistant1":6112,"resistant2":4683},{"timeStep":73,"susceptible1":3542,"susceptible2":4638,"infected1":314,"infected2":577,"resistant1":6144,"resistant2":4785},{"timeStep":74,"susceptible1":3509,"susceptible2":4523,"infected1":315,"infected2":606,"resistant1":6176,"resistant2":4871},{"timeStep":75,"susceptible1":3480,"susceptible2":4442,"infected1":321,"infected2":574,"resistant1":6199,"resistant2":4984},{"timeStep":76,"susceptible1":3451,"susceptible2":4356,"infected1":318,"infected2":575,"resistant1":6231,"resistant2":5069},{"timeStep":77,"susceptible1":3417,"susceptible2":4281,"infected1":325,"infected2":557,"resistant1":6258,"resistant2":5162},{"timeStep":78,"susceptible1":3405,"susceptible2":4212,"infected1":304,"infected2":511,"resistant1":6291,"resistant2":5277},{"timeStep":79,"susceptible1":3387,"susceptible2":4127,"infected1":293,"infected2":515,"resistant1":6320,"resistant2":5358},{"timeStep":80,"susceptible1":3368,"susceptible2":4041,"infected1":283,"infected2":515,"resistant1":6349,"resistant2":5444},{"timeStep":81,"susceptible1":3341,"susceptible2":3976,"infected1":276,"infected2":505,"resistant1":6383,"resistant2":5519},{"timeStep":82,"susceptible1":3312,"susceptible2":3905,"infected1":293,"infected2":507,"resistant1":6395,"resistant2":5588},{"timeStep":83,"susceptible1":3282,"susceptible2":3838,"infected1":305,"infected2":489,"resistant1":6413,"resistant2":5673},{"timeStep":84,"susceptible1":3265,"susceptible2":3774,"infected1":303,"infected2":467,"resistant1":6432,"resistant2":5759},{"timeStep":85,"susceptible1":3235,"susceptible2":3703,"infected1":306,"infected2":473,"resistant1":6459,"resistant2":5824},{"timeStep":86,"susceptible1":3205,"susceptible2":3627,"infected1":307,"infected2":478,"resistant1":6488,"resistant2":5895},{"timeStep":87,"susceptible1":3191,"susceptible2":3582,"infected1":291,"infected2":456,"resistant1":6518,"resistant2":5962},{"timeStep":88,"susceptible1":3178,"susceptible2":3538,"infected1":287,"infected2":436,"resistant1":6535,"resistant2":6026},{"timeStep":89,"susceptible1":3158,"susceptible2":3487,"infected1":277,"infected2":416,"resistant1":6565,"resistant2":6097},{"timeStep":90,"susceptible1":3137,"susceptible2":3444,"infected1":268,"infected2":383,"resistant1":6595,"resistant2":6173},{"timeStep":91,"susceptible1":3119,"susceptible2":3408,"infected1":272,"infected2":374,"resistant1":6609,"resistant2":6218},{"timeStep":92,"susceptible1":3092,"susceptible2":3372,"infected1":286,"infected2":366,"resistant1":6622,"resistant2":6262},{"timeStep":93,"susceptible1":3065,"susceptible2":3336,"infected1":293,"infected2":351,"resistant1":6642,"resistant2":6313},{"timeStep":94,"susceptible1":3042,"susceptible2":3298,"infected1":295,"infected2":346,"resistant1":6663,"resistant2":6356},{"timeStep":95,"susceptible1":3017,"susceptible2":3267,"infected1":302,"infected2":341,"resistant1":6681,"resistant2":6392},{"timeStep":96,"susceptible1":3006,"susceptible2":3239,"infected1":286,"infected2":333,"resistant1":6708,"resistant2":6428},{"timeStep":97,"susceptible1":2984,"susceptible2":3218,"infected1":281,"infected2":318,"resistant1":6735,"resistant2":6464},{"timeStep":98,"susceptible1":2967,"susceptible2":3202,"infected1":275,"infected2":296,"resistant1":6758,"resistant2":6502},{"timeStep":99,"susceptible1":2948,"susceptible2":3174,"infected1":269,"infected2":293,"resistant1":6783,"resistant2":6533},{"timeStep":100,"susceptible1":2939,"susceptible2":3155,"infected1":267,"infected2":284,"resistant1":6794,"resistant2":6561},{"timeStep":101,"susceptible1":2926,"susceptible2":3126,"infected1":258,"infected2":292,"resistant1":6816,"resistant2":6582},{"timeStep":102,"susceptible1":2914,"susceptible2":3110,"infected1":253,"infected2":292,"resistant1":6833,"resistant2":6598},{"timeStep":103,"susceptible1":2896,"susceptible2":3092,"infected1":252,"infected2":282,"resistant1":6852,"resistant2":6626},{"timeStep":104,"susceptible1":2885,"susceptible2":3083,"infected1":254,"infected2":272,"resistant1":6861,"resistant2":6645},{"timeStep":105,"susceptible1":2868,"susceptible2":3072,"infected1":258,"infected2":254,"resistant1":6874,"resistant2":6674},{"timeStep":106,"susceptible1":2859,"susceptible2":3061,"infected1":255,"infected2":249,"resistant1":6886,"resistant2":6690},{"timeStep":107,"susceptible1":2843,"susceptible2":3044,"infected1":253,"infected2":248,"resistant1":6904,"resistant2":6708},{"timeStep":108,"susceptible1":2838,"susceptible2":3031,"infected1":247,"infected2":252,"resistant1":6915,"resistant2":6717},{"timeStep":109,"susceptible1":2823,"susceptible2":3018,"infected1":245,"infected2":254,"resistant1":6932,"resistant2":6728},{"timeStep":110,"susceptible1":2810,"susceptible2":3007,"infected1":249,"infected2":254,"resistant1":6941,"resistant2":6739},{"timeStep":111,"susceptible1":2794,"susceptible2":2993,"infected1":249,"infected2":251,"resistant1":6957,"resistant2":6756},{"timeStep":112,"susceptible1":2778,"susceptible2":2986,"infected1":260,"infected2":245,"resistant1":6962,"resistant2":6769},{"timeStep":113,"susceptible1":2773,"susceptible2":2976,"infected1":250,"infected2":242,"resistant1":6977,"resistant2":6782},{"timeStep":114,"susceptible1":2762,"susceptible2":2967,"infected1":248,"infected2":240,"resistant1":6990,"resistant2":6793},{"timeStep":115,"susceptible1":2753,"susceptible2":2955,"infected1":241,"infected2":238,"resistant1":7006,"resistant2":6807},{"timeStep":116,"susceptible1":2748,"susceptible2":2949,"infected1":230,"infected2":237,"resistant1":7022,"resistant2":6814},{"timeStep":117,"susceptible1":2738,"susceptible2":2937,"infected1":235,"infected2":239,"resistant1":7027,"resistant2":6824},{"timeStep":118,"susceptible1":2730,"susceptible2":2932,"infected1":232,"infected2":235,"resistant1":7038,"resistant2":6833},{"timeStep":119,"susceptible1":2713,"susceptible2":2924,"infected1":240,"infected2":231,"resistant1":7047,"resistant2":6845}];