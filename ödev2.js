function extractDataRecursive(data, keyword, startIndex = 0, obje = []) {
    let sellPriceIndex = data.indexOf(keyword, startIndex);
    if (sellPriceIndex === -1) {
      return obje;
    }
  
    let endIndex = data.indexOf(keyword, sellPriceIndex + 1);
    if (endIndex === -1) {
      endIndex = data.length;
    }
  
    let sellPriceEnd = data.indexOf(" TL", sellPriceIndex);
    let serverNameIndex = data.lastIndexOf(" Knight Online", sellPriceIndex);
    let serverNameEnd = data.indexOf(" m ", serverNameIndex) + 3 || data.indexOf("GB ", serverNameIndex) + 2;
    let buyPriceIndex = data.indexOf("GB Alış Fiyatı :", sellPriceIndex);
    let buyPriceEnd = data.indexOf("GB Sat", buyPriceIndex) - 1;
  
    let obj = {
      "serverName": data.substring(serverNameIndex + "Knight Online".length, serverNameEnd).trim(),
      "sell": data.substring(sellPriceIndex + keyword.length, sellPriceEnd).trim(),
      "buy": data.substring(buyPriceIndex + "GB Alış Fiyatı :".length, buyPriceEnd).trim()
    };
  
    obje.push(obj);
  
    return extractDataRecursive(data, keyword, endIndex, obje);
  }
  
  let data = "Sell: Anasayfa » OYUN PARASI » Knight Online Gold Bar (GB) Fiyatları    Knight Online Gold Bar (GB) FiyatlarıTürkiye'nin en güvenilir en ucuz Knight Online Gold Bar (GB) ticaret, al-sat sitesi YeşilYurtGame! Knight Online'da GB ticaretinin en doğru adresindesiniz. En ucuz GB fiyatlarımızla yıllardır sizlere hizmet vermekten mutluluk duyuyoruz. Yeşil Yurt Game'in en ucuz GB fiyatlarıyla Türkiye'nin önde gelen Knight Online GB satıcısı olduğunu unutmayın.- Gold barlarınızı dilerseniz bize satabilir hemen ödemenizi alabilir,- Dilerseniz bizden satın alabilir hemen teslim seçeneğimizle GB'lerinize sahip olabilirsiniz.Unutmayın, Knight Online'da GB Alım-Satım işlemi YeşilYurtGame olmadan, yeterince güvenli değildir.Knight Online Resmi Sunucuları: Pandora, Agartha, Felis, Altar, Sirius, Vega, Destan, Rosetta, Olympia, Ares, Diez, Gordion, Cypher, Pathos'da alıp satabileceğiniz en ucuz GB'leri kaçırmayın.Görünüm: Liste / TabloGöster: 50255075100Sırala: VarsayılanA'dan - Z'yeZ'den - A'yaUcuzdan > PahalıyaPahalıdan > UcuzaÜrün Koduna Göre A - ZÜrün Koduna Göre Z - A Oturum AçSatış Fiyatı : 3.07 TLKnight Online Zero 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır! Teslimat Yeri : Zero 2 Maradon Sağ Banka NiaGB Alış Fiyatı : 2.85 TL    GB Sat Oturum AçSatış Fiyatı : 2.3 TLKnight Online Agartha 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır! Teslimat Yeri : Agartha 2 Maradon Sağ Banka NiaGB Alış Fiyatı : 2.14 TL    GB Sat Oturum AçSatış Fiyatı : 1.92 TLKnight Online Pandora 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır. Teslimat Yeri : Pandora 2 Sağ Banka NiaGB Alış Fiyatı : 1.78 TL    GB Sat Oturum AçSatış Fiyatı : 2.25 TLKnight Online Felis 1 m (Yeni Server)     Trade ile teslimat yapılmaktadır! Teslimat Yeri : Felis 2 Maradon Sağ Banka NiaGB Alış Fiyatı : 2.1 TL    GB Sat Oturum AçSatış Fiyatı : 12.75 TLKnight Online Dryads 10 m     Teslimat Yeri D3 Sağ Banka NİA'dır !GB Alış Fiyatı : 11.2 TL    GB Sat Oturum AçSatış Fiyatı : 17.9 TLKnight Online Destan 10 m     Teslimat Yeri D3 Sağ Banka NİA'dır !GB Alış Fiyatı : 16 TL    GB Sat Oturum AçSatış Fiyatı : 15.9 TLKnight Online Minark 10 m     Teslimat Yeri M2 Sağ Banka NİA'dır !GB Alış Fiyatı : 15.2 TL    GB Sat Oturum AçSatış Fiyatı : 17.3 TLKnight Online Oreads 10 m     Teslimat Yeri Oreads 3 Sağ Banka NİA'dır !GB Alış Fiyatı : 16.5 TL    GB Sat Oturum AçSatış Fiyatı : 175 TLKnight Online Steam ZION 1GB     Teslimat Yeri : Z1 Sağ Banka Nia Trade İle TeslimatGB Alış Fiyatı : 150 TL    GB Sat1 ile 9 arası / Toplam 9 kayıt (1 Sayfa)";
  let keyword = "Satış Fiyatı :";
  let extractedData = extractDataRecursive(data, keyword);
  console.log(extractedData);
  