const products = [
  {
    _id: "639821e1b5b762dcac2dea8b",
    model: "Intel 10th Gen Core i3-10100 Gaming PC",
    image: "https://live.staticflickr.com/65535/52521844202_dd853335c9_o.jpg",
    status: true,
    brand: "intel",
    keyFeature: [
      "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      "Intel i3-10100 10th Gen Processor",
      "8GB 2666MHz DDR4 RAM +1TB HDD",
      "GIGABYTE GT 730 2GB DDR3 PCI EXPRESS Graphics Card",
    ],
    price: 41800,
    rating: 4,
    spec: [
      {
        processor: "Intel Core i3-10100 10th Gen Processor",
      },
      {
        motherboard:
          "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      },
      {
        ram: "TEAM ELITE PLUS RED 8GB 2666MHz DDR4 RAM",
      },
      {
        graphics: "GIGABYTE GeForce GT 730 2GB DDR3 PCI EXPRESS Graphics Card",
      },
      {
        storage: "Toshiba P300 1TB Desktop PC Internal Hard Drive",
      },
      {
        casing: "Revenger A1 Mid Tower RGB ATX Gaming Case",
      },
      {
        psu: "Antec Atom V450 Non-Modular IN SMPS Gaming Power Supply",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea8a",
    model: "AMD Ryzen 5 5600X Gaming PC",
    image: "https://live.staticflickr.com/65535/52522584794_4a9898a992_o.jpg",
    status: true,
    brand: "amd",
    keyFeature: [
      "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
      "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
      "AMD RYZEN 5 5600X PROCESSOR",
      "16GB 3200MHz DDR4 RAM+ 128GB M.2 PCIe SSD",
    ],
    price: 128200,
    rating: 3,
    spec: [
      {
        processor: "AMD RYZEN 5 5600X PROCESSOR",
      },
      {
        motherboard: "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
      },
      {
        ram: "Corsair Vengeance LPX 16GB DDR4 DRAM 3200MHz RAM",
      },
      {
        graphics:
          "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
      },
      {
        storage:
          "Team MP33 128GB M.2 PCIe SSD Toshiba P300 1TB Desktop PC Internal Hard Drive",
      },
      {
        casing: "Antec NX420 Mid Tower ARGB Gaming Case",
      },
      {
        psu: "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply",
      },
      {
        cooler: "Gamdias Boreas M1-610 ARGB CPU Cooler",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea8e",
    model: "Intel 10th Gen Core i7-10700 Gaming PC",
    image: "https://live.staticflickr.com/65535/52522308736_8453894269_o.jpg",
    status: false,
    brand: "intel",
    rating: 5,
    keyFeature: [
      "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard",
      "Intel 10th Gen Core i7-10700 Processor",
      "16GB RAM + 1TB HDD + 256GB SSD",
      "GeForce GTX 1660 Super NB 6GB-V2 Graphics Card",
    ],
    price: 102200,
    spec: [
      {
        processor: "Intel 10th Gen Core i7-10700 Processor",
      },
      {
        motherboard:
          "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard",
      },
      {
        ram: "TEAM T-Force DELTA TUF Gaming RGB 16GB 3200MHz DDR4 CL16 RAM",
      },
      {
        graphics: "Colorful GeForce GTX 1660 Super NB 6GB-V2 Graphics Card",
      },
      {
        storage:
          "Seagate Internal 1TB SATA Barracuda HDD Team MP33 256GB M.2 PCIe SSD",
      },
      {
        casing: "Corsair CARBIDE SPEC-DELTA RGB ATX Gaming Case",
      },
      {
        psu: "Antec CUPRUM STRIKE CSK 550W 80 Plus Bronze Power Supply",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea8f",
    model: "Intel Core i5-11400 11th Gen Gaming PC",
    image: "https://live.staticflickr.com/65535/52522308721_4f2de69503_o.jpg",
    status: true,
    brand: "intel",
    keyFeature: [
      "Intel 11th Gen Core i5-11400 Rocket Lake Processor",
      "MSI B560M-A PRO Intel 11th Gen mATX Motherboard",
      "16GB RAM + 1TB HDD + 256GB M.2 PCIe SSD",
      "ZOTAC GAMING GTX 1660 SUPER 6GB Graphics Card",
    ],
    price: 86200,
    rating: 2,
    spec: [
      {
        processor: "Intel 11th Gen Core i5-11400 Rocket Lake Processor",
      },
      {
        motherboard:
          "TEAM T-Force DELTA TUF Gaming RGB 16GB 3200MHz DDR4 CL16 RAM",
      },
      {
        ram: "Team T-Force VULCAN Z Red 8GB DDR4 3200MHz Desktop Gaming RAM- 2 unit",
      },
      {
        graphics:
          "ZOTAC GAMING GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan Graphics Card",
      },
      {
        storage:
          "Toshiba P300 1TB Desktop PC Internal Hard Drive Team MP33 256GB M.2 PCIe SSD",
      },
      {
        casing: "Montech X2 MESH Black Mid-Tower ATX Gaming Case",
      },
      {
        psu: "DeepCool PK650D 650 Watt 80 PLUS Bronze Power Supply",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea8c",
    model: "AMD Ryzen 5 3600 Gaming PC",
    image: "https://live.staticflickr.com/65535/52522855818_98bdd4c07a_o.jpg",
    status: false,
    brand: "amd",
    keyFeature: [
      "MSI B450 TOMAHAWK MAX AM4 AMD ATX Motherboard (China)",
      "128GB SSD + 16GB 3200MHz RAM + 1TB HDD",
      "AMD Ryzen 5 3600 Processor",
      "ZOTAC GAMING GTX 1660 SUPER 6GB Twin Fan Graphics Card",
    ],
    price: 84400,
    rating: 5,
    spec: [
      {
        processor: "AMD Ryzen 5 3600 Processor",
      },
      {
        motherboard: "MSI B450 TOMAHAWK MAX AM4 AMD ATX Motherboard (China)",
      },
      {
        ram: "Team T-Force VULCAN Z Red 8GB DDR4 3200MHz Desktop Gaming RAM- 2 unit",
      },
      {
        graphics:
          "ZOTAC GAMING GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan Graphics Card",
      },
      {
        storage:
          "Team MP33 128GB M.2 PCIe SSD Western Digital 1TB Blue Desktop HDD",
      },
      {
        casing: "Xtreme XJOGOS 200-22 RGB Mid Tower Black ATX Gaming Casing",
      },
      {
        psu: "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea8d",
    model: "Gaming PC 10th Gen Core i5-10400f",
    image: "https://live.staticflickr.com/65535/52522584684_9fa14a3332_o.jpg",
    status: false,
    brand: "intel",
    keyFeature: [
      "MSI B560M-A PRO Intel 11th Gen mATX Motherboard",
      "Intel 10th Gen i5-10400F Processor",
      "8GB RAM +1TB HDD + 128GB SSD",
      "ASUS GeForce GT 1030 2GB GDDR5 Low Profile Graphics Card",
    ],
    price: 56700,
    rating: 3,
    spec: [
      {
        processor: "Intel 10th Gen Core i5-10400F Processor",
      },
      {
        motherboard: "MSI B560M-A PRO Intel 11th Gen mATX Motherboard",
      },
      {
        ram: "Team T-Force VULCAN Z Red 8GB DDR4 3200MHz Desktop Gaming RAM",
      },
      {
        graphics: "ASUS GeForce GT 1030 2GB GDDR5 Low Profile Graphics Card",
      },
      {
        storage:
          "Toshiba P300 1TB Desktop PC Internal Hard Drive Team MP33 128GB M.2 PCIe SSD",
      },
      {
        casing: "Antec NX270 RGB TG Mid Tower Gaming Case",
      },
      {
        psu: "Antec VP450P PLUS 450W Continuous Power Supply",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea91",
    model: "AMD Ryzen 7 5800X3D Gaming PC",
    image: "https://live.staticflickr.com/65535/52521844332_5f738162d8_o.jpg",
    status: true,
    brand: "amd",
    keyFeature: [
      "AMD Ryzen 7 5800X3D Processor",
      "ASROCK B550 STEEL LEGEND AMD B550 Chipset Motherboard",
      "32GB DDR4 RAM + 500GB PCIe 3.0 NVMe SSD",
      "Colorful GeForce RTX 4090 NB EX-V 24GB GDDR6X Graphics Card",
    ],
    price: 399999,
    rating: 3,
    spec: [
      {
        processor: "AMD Ryzen 7 5800X3D Processor",
      },
      {
        motherboard: "ASRock B550 Steel Legend DDR4 AMD AM4 ATX Motherboard",
      },
      {
        ram: "Team T-Force Night Hawk RGB 8GB (KIT) 3200MHz DDR4 RAM (4 UNIT)",
      },
      {
        graphics: "Colorful GeForce RTX 4090 NB EX-V 24GB GDDR6X Graphics Card",
      },
      {
        storage: "Samsung 980 Pro 500GB PCIe 4.0 M.2 NVMe SSD",
      },
      {
        casing: "Antec TORQUE Black + Red Aluminum ATX Mid Tower Gaming Casing",
      },
      {
        psu: "Antec HCG-750 Gold Series 750W Full Modular Power Supply",
      },
      {
        cooler: "Antec Prizm X 120 ARGB 3+C Cooling Fan",
      },
    ],
  },
  {
    _id: "639821e1b5b762dcac2dea90",
    model: "Intel 11th Gen Core i5-11400f Gaming PC",
    image: "https://live.staticflickr.com/65535/52522855818_98bdd4c07a_o.jpg",
    status: true,
    brand: "intel",
    keyFeature: [
      "Intel 11th Gen Core i5-11400F Rocket Lake Processor",
      "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard",
      "Team 16GB DDR4 3200MHz RAM + 128GB M.2 PCIe SSD + Seagate 1TB HDD",
      "Asus Phoenix GeForce GTX 1050Ti 4GB GDDR5 Graphics Card",
    ],
    price: 84000,
    rating: 5,
    spec: [
      {
        processor:
          "Intel 11th Gen Core i5-11400F Rocket Lake Processor (3 Years Warranty)",
      },
      {
        motherboard:
          "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard (3 Years Warranty)",
      },
      {
        ram: "Team T-Force VULCAN Z Red 16GB DDR4 3200MHz Desktop Gaming RAM (Lifetime Warranty)",
      },
      {
        graphics:
          "Asus Phoenix GeForce GTX 1050Ti 4GB GDDR5 Graphics Card (2 Years Warranty)",
      },
      {
        storage:
          "Team MP33 128GB M.2 PCIe SSD (5 Years Warranty) Seagate Internal 1TB SATA Barracuda HDD (2 Years Warranty)",
      },
      {
        casing: "Antec NX410 Mid Tower ARGB Black Gaming Case",
      },
      {
        psu: "Antec CUPRUM STRIKE CSK 550W 80 Plus Bronze Power Supply (3 Years Warranty)",
      },
      {
        cooler: "Gamdias CHIONE M2-240 Lite RGB CPU Cooler (02-Year Warranty)",
      },
    ],
  },
];


const query = ["Intel","CPU"]


const result = products.filter(product => product.model.includes(query))
console.log(result)
