const artworks = [
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/5047371/4117193-QAFZGPJT-6.jpg" data-sku="P1-U189576-A4441066" alt="Saatchi Art Artist Hyeran Lee; Painting, “51st Correlation” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/5047371/4117193-QAFZGPJT-6.jpg',
    title: '51st Correlation',
    title_url:
      'https://www.saatchiart.com/art/Painting-51st-Correlation/189576/4441066/view',
    typeDimensions: 'Painting, 30 H x 40 W x 0.8 in',
    dimensions: '30 H x 40 W x 0.8 in',
    type: 'Painting',
    depth: 0.8,
    width: 40,
    height: 30,
    price: '$2,160',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/5019787/4089609-VCWJDXZZ-6.jpg" data-sku="P1-U189576-A4427283" alt="Saatchi Art Artist Hyeran Lee; Painting, “50th Correlation” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/5019787/4089609-VCWJDXZZ-6.jpg',
    title: '50th Correlation',
    title_url:
      'https://www.saatchiart.com/art/Painting-50th-Correlation/189576/4427283/view',
    typeDimensions: 'Painting, 16 H x 16 W x 1.5 in',
    dimensions: '16 H x 16 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 16,
    height: 16,
    price: '$605',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4993559/4063381-MZVSLNYQ-6.jpg" data-sku="P1-U189576-A4414175" alt="Saatchi Art Artist Hyeran Lee; Painting, “Into Comfort’s Cradle” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4993559/4063381-MZVSLNYQ-6.jpg',
    title: "Into Comfort's Cradle",
    title_url:
      'https://www.saatchiart.com/art/Painting-Into-Comfort-s-Cradle/189576/4414175/view',
    typeDimensions: 'Painting, 24 H x 18 W x 0.8 in',
    dimensions: '24 H x 18 W x 0.8 in',
    type: 'Painting',
    depth: 0.8,
    width: 18,
    height: 24,
    price: '$820',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4993421/4063243-ZFYFMGJM-6.jpg" data-sku="P1-U189576-A4414106" alt="Saatchi Art Artist Hyeran Lee; Painting, “Life is” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4993421/4063243-ZFYFMGJM-6.jpg',
    title: 'Life is',
    title_url:
      'https://www.saatchiart.com/art/Painting-Life-is/189576/4414106/view',
    typeDimensions: 'Painting, 30 H x 40 W x 1.5 in',
    dimensions: '30 H x 40 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 40,
    height: 30,
    price: '$2,160',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4964545/4034369-AGKVNYMV-6.jpg" data-sku="P1-U189576-A4399679" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 16-I” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4964545/4034369-AGKVNYMV-6.jpg',
    title: 'Coexistence 16-I',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-16-I/189576/4399679/view',
    typeDimensions: 'Painting, 40 H x 30 W x 1.4 in',
    dimensions: '40 H x 30 W x 1.4 in',
    type: 'Painting',
    depth: 1.4,
    width: 30,
    height: 40,
    price: '$2,460',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4943121/4012945-WHRJHWAD-6.jpg" data-sku="P1-U189576-A4388975" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 16-II” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4943121/4012945-WHRJHWAD-6.jpg',
    title: 'Coexistence 16-II',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-16-II/189576/4388975/view',
    typeDimensions: 'Painting, 40 H x 30 W x 1.4 in',
    dimensions: '40 H x 30 W x 1.4 in',
    type: 'Painting',
    depth: 1.4,
    width: 30,
    height: 40,
    price: '$2,460',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4917697/3987521-IDJEIDZL-6.jpg" data-sku="P1-U189576-A4376268" alt="Saatchi Art Artist Hyeran Lee; Painting, “49th Correlation” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4917697/3987521-IDJEIDZL-6.jpg',
    title: '49th Correlation',
    title_url:
      'https://www.saatchiart.com/art/Painting-49th-Correlation/189576/4376268/view',
    typeDimensions: 'Painting, 30 H x 30 W x 1.5 in',
    dimensions: '30 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 30,
    price: '$2,160',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4893175/3963001-BCVHJRAK-6.jpg" data-sku="P1-U189576-A4364016" alt="Saatchi Art Artist Hyeran Lee; Painting, “48th Correlation” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4893175/3963001-BCVHJRAK-6.jpg',
    title: '48th Correlation',
    title_url:
      'https://www.saatchiart.com/art/Painting-48th-Correlation/189576/4364016/view',
    typeDimensions: 'Painting, 30 H x 40 W x 1.5 in',
    dimensions: '30 H x 40 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 40,
    height: 30,
    price: '$2,460',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4882277/3952105-DKKGABUM-6.jpg" data-sku="P1-U189576-A4358570" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 15” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4882277/3952105-DKKGABUM-6.jpg',
    title: 'Coexistence 15',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-15/189576/4358570/view',
    typeDimensions: 'Painting, 47.8 H x 24 W x 1.5 in',
    dimensions: '47.8 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 48,
    price: '$2,710',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4866665/3936493-CYPZETCG-6.jpg" data-sku="P1-U189576-A4350766" alt="Saatchi Art Artist Hyeran Lee; Painting, “Better Together” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4866665/3936493-CYPZETCG-6.jpg',
    title: 'Better Together',
    title_url:
      'https://www.saatchiart.com/art/Painting-Better-Together/189576/4350766/view',
    typeDimensions: 'Painting, 40 H x 30 W x 1.5 in',
    dimensions: '40 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 40,
    price: '$2,810',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4866507/3936335-LXWRWWOS-6.jpg" data-sku="P1-U189576-A4350687" alt="Saatchi Art Artist Hyeran Lee; Painting, “Let things flow naturally” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4866507/3936335-LXWRWWOS-6.jpg',
    title: 'Let things flow naturally',
    title_url:
      'https://www.saatchiart.com/art/Painting-Let-things-flow-naturally/189576/4350687/view',
    typeDimensions: 'Painting, 20 H x 28 W x 0.8 in',
    dimensions: '20 H x 28 W x 0.8 in',
    type: 'Painting',
    depth: 0.8,
    width: 28,
    height: 20,
    price: '$970',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4846093/3915921-VDQFEOKK-6.jpg" data-sku="P1-U189576-A4340488" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 14” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4846093/3915921-VDQFEOKK-6.jpg',
    title: 'Coexistence 14',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-14/189576/4340488/view',
    typeDimensions: 'Painting, 30 H x 30 W x 1.5 in',
    dimensions: '30 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 30,
    price: '$1,960',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4845999/3915827-JPTSINPF-6.jpg" data-sku="P1-U189576-A4340441" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 13-III” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4845999/3915827-JPTSINPF-6.jpg',
    title: 'Coexistence 13-III',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-13-III/189576/4340441/view',
    typeDimensions: 'Painting, 24 H x 12 W x 1.5 in',
    dimensions: '24 H x 12 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 12,
    height: 24,
    price: '$770',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4815753/3885581-BLLVAKRM-6.jpg" data-sku="P1-U189576-A4325326" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 13, Triptych” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4815753/3885581-BLLVAKRM-6.jpg',
    title: 'Coexistence 13, Triptych',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-13-Triptych/189576/4325326/view',
    typeDimensions: 'Painting, 24 H x 36 W x 1.5 in',
    dimensions: '24 H x 36 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 36,
    height: 24
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4806615/3876443-SDJANFXZ-6.jpg" data-sku="P1-U189576-A4320759" alt="Saatchi Art Artist Hyeran Lee; Painting, “Toward a New Life” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4806615/3876443-SDJANFXZ-6.jpg',
    title: 'Toward a New Life',
    title_url:
      'https://www.saatchiart.com/art/Painting-Toward-a-New-Life/189576/4320759/view',
    typeDimensions: 'Painting, 30 H x 40 W x 0.8 in',
    dimensions: '30 H x 40 W x 0.8 in',
    type: 'Painting',
    depth: 0.8,
    width: 40,
    height: 30,
    price: '$2,360',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4797003/3866831-MHVUEPDX-6.jpg" data-sku="P1-U189576-A4315957" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 12” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4797003/3866831-MHVUEPDX-6.jpg',
    title: 'Coexistence 12',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-12/189576/4315957/view',
    typeDimensions: 'Painting, 30 H x 30 W x 1.5 in',
    dimensions: '30 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 30,
    price: '$1,800',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4764343/3834173-PBMIZCWC-6.jpg" data-sku="P1-U189576-A4299646" alt="Saatchi Art Artist Hyeran Lee; Painting, “47th Correlation” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4764343/3834173-PBMIZCWC-6.jpg',
    title: '47th Correlation',
    title_url:
      'https://www.saatchiart.com/art/Painting-47th-Correlation/189576/4299646/view',
    typeDimensions: 'Painting, 24 H x 48 W x 1.5 in',
    dimensions: '24 H x 48 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 48,
    height: 24,
    price: '$3,210',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4738771/3808603-IHRVJYTF-6.jpg" data-sku="P1-U189576-A4286866" alt="Saatchi Art Artist Hyeran Lee; Painting, “46th Correlation” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4738771/3808603-IHRVJYTF-6.jpg',
    title: '46th Correlation',
    title_url:
      'https://www.saatchiart.com/art/Painting-46th-Correlation/189576/4286866/view',
    typeDimensions: 'Painting, 24 H x 48 W x 1.5 in',
    dimensions: '24 H x 48 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 48,
    height: 24,
    price: '$3,210',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4714933/3784765-KBLPYLNU-6.jpg" data-sku="P1-U189576-A4274950" alt="Saatchi Art Artist Hyeran Lee; Painting, “Running Before You Can Walk” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4714933/3784765-KBLPYLNU-6.jpg',
    title: 'Running Before You Can Walk',
    title_url:
      'https://www.saatchiart.com/art/Painting-Running-Before-You-Can-Walk/189576/4274950/view',
    typeDimensions: 'Painting, 40 H x 30 W x 1.5 in',
    dimensions: '40 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 40,
    price: '$2,260',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4679021/3748857-FZQWQVAJ-6.jpg" data-sku="P1-U189576-A4257000" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 11-I” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4679021/3748857-FZQWQVAJ-6.jpg',
    title: 'Coexistence 11-I',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-11-I/189576/4257000/view',
    typeDimensions: 'Painting, 24 H x 24 W x 1.5 in',
    dimensions: '24 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 24,
    price: '$1,300',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4678973/3748809-GNNHWUPJ-6.jpg" data-sku="P1-U189576-A4256976" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 11-II” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4678973/3748809-GNNHWUPJ-6.jpg',
    title: 'Coexistence 11-II',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-11-II/189576/4256976/view',
    typeDimensions: 'Painting, 24 H x 24 W x 1.5 in',
    dimensions: '24 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 24,
    price: '$1,300',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4646531/3716367-WSFNJMTD-6.jpg" data-sku="P1-U189576-A4240761" alt="Saatchi Art Artist Hyeran Lee; Painting, “Relieve Yourself of the Past” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4646531/3716367-WSFNJMTD-6.jpg',
    title: 'Relieve Yourself of the Past',
    title_url:
      'https://www.saatchiart.com/art/Painting-Relieve-Yourself-of-the-Past/189576/4240761/view',
    typeDimensions: 'Painting, 36 H x 24 W x 1.5 in',
    dimensions: '36 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 36,
    price: '$1,700',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4642577/3712413-PKSXFSRQ-6.jpg" data-sku="P1-U189576-A4238786" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 11, Diptych” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4642577/3712413-PKSXFSRQ-6.jpg',
    title: 'Coexistence 11, Diptych',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-11-Diptych/189576/4238786/view',
    typeDimensions: 'Painting, 24 H x 48 W x 1.5 in',
    dimensions: '24 H x 48 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 48,
    height: 24
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4623883/3693719-EXLYDCMW-6.jpg" data-sku="P1-U189576-A4229445" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 10, Triptych” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4623883/3693719-EXLYDCMW-6.jpg',
    title: 'Coexistence 10, Triptych',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-10-Triptych/189576/4229445/view',
    typeDimensions: 'Painting, 12 H x 36 W x 1.5 in',
    dimensions: '12 H x 36 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 36,
    height: 12,
    price: '$1,150',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4583679/3653517-LCBFWFKC-6.jpg" data-sku="P1-U189576-A4209359" alt="Saatchi Art Artist Hyeran Lee; Painting, “One Step at a Time” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4583679/3653517-LCBFWFKC-6.jpg',
    title: 'One Step at a Time',
    title_url:
      'https://www.saatchiart.com/art/Painting-One-Step-at-a-Time/189576/4209359/view',
    typeDimensions: 'Painting, 30 H x 24 W x 1.5 in',
    dimensions: '30 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 30,
    price: '$1,960',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4574399/3644237-TPXDFSIE-6.jpg" data-sku="P1-U189576-A4204721" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 9” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4574399/3644237-TPXDFSIE-6.jpg',
    title: 'Coexistence 9',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-9/189576/4204721/view',
    typeDimensions: 'Painting, 30 H x 30 W x 1.5 in',
    dimensions: '30 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 30,
    price: '$1,800',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4502109/3571949-GINUQFCM-6.jpg" data-sku="P1-U189576-A4168600" alt="Saatchi Art Artist Hyeran Lee; Painting, “April” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4502109/3571949-GINUQFCM-6.jpg',
    title: 'Let it flow',
    title_url:
      'https://www.saatchiart.com/art/Painting-April/189576/4168600/view',
    typeDimensions: 'Painting, 24 H x 18 W x 0.8 in',
    dimensions: '24 H x 18 W x 0.8 in',
    type: 'Painting',
    depth: 0.8,
    width: 18,
    height: 24,
    price: '$1,200',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4476307/3546147-PCHREABQ-6.jpg" data-sku="P1-U189576-A4155705" alt="Saatchi Art Artist Hyeran Lee; Painting, “Symphony 2” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4476307/3546147-PCHREABQ-6.jpg',
    title: 'Symphony 2',
    title_url:
      'https://www.saatchiart.com/art/Painting-Symphony-2/189576/4155705/view',
    typeDimensions: 'Painting, 30 H x 30 W x 1.5 in',
    dimensions: '30 H x 30 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 30,
    height: 30,
    price: '$1,500',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4462331/3532171-WBIJZCAN-6.jpg" data-sku="P1-U189576-A4148726" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 8” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4462331/3532171-WBIJZCAN-6.jpg',
    title: 'Coexistence 8',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-8/189576/4148726/view',
    typeDimensions: 'Painting, 12 H x 12 W x 1.5 in',
    dimensions: '12 H x 12 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 12,
    height: 12
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4462287/3532127-ABSZQHOZ-6.jpg" data-sku="P1-U189576-A4148704" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 7” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4462287/3532127-ABSZQHOZ-6.jpg',
    title: 'Coexistence 7',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-7/189576/4148704/view',
    typeDimensions: 'Painting, 10 H x 10 W x 1.5 in',
    dimensions: '10 H x 10 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 10,
    height: 10,
    price: '$340',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4445917/3515757-VAJOAPSF-6.jpg" data-sku="P1-U189576-A4140527" alt="Saatchi Art Artist Hyeran Lee; Painting, “Symphony 1” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4445917/3515757-VAJOAPSF-6.jpg',
    title: 'Symphony 1',
    title_url:
      'https://www.saatchiart.com/art/Painting-Symphony-1/189576/4140527/view',
    typeDimensions: 'Painting, 30 H x 40 W x 1.5 in',
    dimensions: '30 H x 40 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 40,
    height: 30,
    price: '$1,860',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4442937/3512777-EPDNNQCB-6.jpg" data-sku="P1-U189576-A4139039" alt="Saatchi Art Artist Hyeran Lee; Painting, “Flash in Between” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4442937/3512777-EPDNNQCB-6.jpg',
    title: 'Flash in Between',
    title_url:
      'https://www.saatchiart.com/art/Painting-Flash-in-Between/189576/4139039/view',
    typeDimensions: 'Painting, 16 H x 16 W x 1.5 in',
    dimensions: '16 H x 16 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 16,
    height: 16,
    price: '$755',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4431805/3501645-VSLSGOJI-6.jpg" data-sku="P1-U189576-A4133478" alt="Saatchi Art Artist Hyeran Lee; Painting, “This Too Shall Pass” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4431805/3501645-VSLSGOJI-6.jpg',
    title: 'This Too Shall Pass',
    title_url:
      'https://www.saatchiart.com/art/Painting-This-Too-Shall-Pass/189576/4133478/view',
    typeDimensions: 'Painting, 24 H x 18 W x 0.8 in',
    dimensions: '24 H x 18 W x 0.8 in',
    type: 'Painting',
    depth: 0.8,
    width: 18,
    height: 24,
    price: '$755',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4411465/3481305-ACQYYJXL-6.jpg" data-sku="P1-U189576-A4123314" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 6, Triptych” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4411465/3481305-ACQYYJXL-6.jpg',
    title: 'Coexistence 6, Triptych',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-6-Triptych/189576/4123314/view',
    typeDimensions: 'Painting, 30 H x 72 W x 1.5 in',
    dimensions: '30 H x 72 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 72,
    height: 30,
    price: 'Prints from $40',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4398183/3468023-FBGVHIAF-6.jpg" data-sku="P1-U189576-A4116685" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 6-I” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4398183/3468023-FBGVHIAF-6.jpg',
    title: 'Coexistence 6-I',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-6-I/189576/4116685/view',
    typeDimensions: 'Painting, 30 H x 24 W x 1.5 in',
    dimensions: '30 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 30,
    price: '$1,600',
    size: 3,
    quantity: 1
  },
  {
    innerHTML:
      '\n                <img src="//assets.saatchiart.com/saatchi/189576/art/4395377/3465217-QNCFTQVJ-6.jpg" data-sku="P1-U189576-A4115283" alt="Saatchi Art Artist Hyeran Lee; Painting, “Coexistence 6-II” #art" itemprop="contentURL">\n            ',
    image:
      'https://assets.saatchiart.com/saatchi/189576/art/4395377/3465217-QNCFTQVJ-6.jpg',
    title: 'Coexistence 6-II',
    title_url:
      'https://www.saatchiart.com/art/Painting-Coexistence-6-II/189576/4115283/view',
    typeDimensions: 'Painting, 30 H x 24 W x 1.5 in',
    dimensions: '30 H x 24 W x 1.5 in',
    type: 'Painting',
    depth: 1.5,
    width: 24,
    height: 30,
    price: '$1,600',
    size: 3,
    quantity: 1
  }
];
export default artworks;
