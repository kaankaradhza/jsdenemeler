let data = "Sell: Anasayfa » OYUN PARASI » Knight Online Gold Bar (GB) Fiyatları    Knight Online Gold Bar (GB) FiyatlarıTürkiye'nin en güvenilir en ucuz Knight Online Gold Bar (GB) ticaret, al-sat sitesi YeşilYurtGame! Knight Online'da GB ticaretinin en doğru adresindesiniz. En ucuz GB fiyatlarımızla yıllardır sizlere hizmet vermekten mutluluk duyuyoruz. Yeşil Yurt Game'in en ucuz GB fiyatlarıyla Türkiye'nin önde gelen Knight Online GB satıcısı olduğunu unutmayın.- Gold barlarınızı dilerseniz bize satabilir hemen ödemenizi alabilir,- Dilerseniz bizden satın alabilir hemen teslim seçeneğimizle GB'lerinize sahip olabilirsiniz.Unutmayın, Knight Online'da GB Alım-Satım işlemi YeşilYurtGame olmadan, yeterince güvenli değildir.Knight Online Resmi Sunucuları: Pandora, Agartha, Felis, Altar, Sirius, Vega, Destan, Rosetta, Olympia, Ares, Diez, Gordion, Cypher, Pathos'da alıp satabileceğiniz en ucuz GB'leri kaçırmayın.Görünüm: Liste / TabloGöster: 50255075100Sırala: VarsayılanA'dan - Z'yeZ'den - A'yaUcuzdan > PahalıyaPahalıdan > UcuzaÜrün Koduna Göre A - ZÜrün Koduna Göre Z - A Oturum AçSatış Fiyatı : 3.07 TLKnight Online Zero 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır! Teslimat Yeri : Zero 2 Maradon Sağ Banka NiaGB Alış Fiyatı : 2.85 TL    GB Sat Oturum AçSatış Fiyatı : 2.3 TLKnight Online Agartha 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır! Teslimat Yeri : Agartha 2 Maradon Sağ Banka NiaGB Alış Fiyatı : 2.14 TL    GB Sat Oturum AçSatış Fiyatı : 1.92 TLKnight Online Pandora 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır. Teslimat Yeri : Pandora 2 Sağ Banka NiaGB Alış Fiyatı : 1.78 TL    GB Sat Oturum AçSatış Fiyatı : 2.25 TLKnight Online Felis 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır! Teslimat Yeri : Felis 2 Maradon Sağ Banka NiaGB Alış Fiyatı : 2.1 TL    GB Sat Oturum AçSatış Fiyatı : 12.75 TLKnight Online Dryads 10 m     Teslimat Yeri D3 Sağ Banka NİA'dır !GB Alış Fiyatı : 11.2 TL    GB Sat Oturum AçSatış Fiyatı : 17.9 TLKnight Online Destan 10 m     Teslimat Yeri D3 Sağ Banka NİA'dır !GB Alış Fiyatı : 16 TL    GB Sat Oturum AçSatış Fiyatı : 15.9 TLKnight Online Minark 10 m     Teslimat Yeri M2 Sağ Banka NİA'dır !GB Alış Fiyatı : 15.2 TL    GB Sat Oturum AçSatış Fiyatı : 17.3 TLKnight Online Oreads 10 m     Teslimat Yeri Oreads 3 Sağ Banka NİA'dır !GB Alış Fiyatı : 16.5 TL    GB Sat Oturum AçSatış Fiyatı : 175 TLKnight Online Steam ZION 1GB     Teslimat Yeri : Z1 Sağ Banka Nia Trade İle TeslimatGB Alış Fiyatı : 150 TL    GB Sat1 ile 9 arası / Toplam 9 kayıt (1 Sayfa)";
let keyword = "Satış Fiyatı :";
let startIndex = -1;
let endIndex = -1;
let obje = [];

while (true) {
  startIndex = data.indexOf(keyword, endIndex);
  if (startIndex === -1) break;

  endIndex = data.indexOf(keyword, startIndex + 1);
  if (endIndex === -1) {
    endIndex = data.length;
  }

  let substr = data.substring(startIndex, endIndex);

  let sellPriceIndex = substr.indexOf("Satış Fiyatı :");
  let sellPriceEnd = substr.indexOf(" TL") + 3;
  let serverNameIndex = substr.indexOf("Knight Online");
  let serverNameEnd = substr.indexOf(" m ")+3;
if (serverNameEnd === 2 ) {
  serverNameEnd = substr.indexOf("GB ")+2;
}

  let buyPriceIndex = substr.indexOf("Alış Fiyatı :");
  let buyPriceEnd = substr.indexOf("GB Sat") - 1;

  let obj = {
    "serverName": substr.substring(serverNameIndex + "Knight Online".length, serverNameEnd).trim(),
    "sell": substr.substring(sellPriceIndex + "Satış Fiyatı :".length, sellPriceEnd).trim(),
    "buy": substr.substring(buyPriceIndex + "Alış Fiyatı :".length, buyPriceEnd).trim()
  };

  console.log(obj);
  obje.push(obj);
  startIndex = endIndex;
}

console.log(obje);
